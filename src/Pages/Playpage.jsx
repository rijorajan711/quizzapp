import React from "react";
import { dataArray } from "../Helpers/dataarray";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Playpage() {
  const [dataFromArray, setdataFromArray] = useState(dataArray);

  const [count, setCount] = useState(0);

  const [timee, setTimee] = useState(0);
  const [score, setScore] = useState(0);
  const [completeMessage, setCompleteMessage] = useState(false);

  useEffect(() => {
    const questionTimeOut = setInterval(() => {
      if (timee > 4) {
        clearInterval(questionTimeOut);
        setTimee(0);
      } else {
        if (count > 3) {
          clearInterval(questionTimeOut);
        } else {
          setTimee(timee + 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(questionTimeOut);
    };
  }, [timee]);

  useEffect(() => {
    console.log("count",count)
    console.log("time",timee)

    if (count === 4 && timee === 0) {
     setCompleteMessage(true);
    }
  }, [timee, count]);

  useEffect(() => {
    const varsha = setInterval(() => {
      if (count > 3) {
        clearInterval(varsha);
      } else {
        setCount(count + 1);
      }
    }, 6000);

    return () => {
      clearInterval(varsha);
    };
  }, [count]);

  const handleCorrectAnswer = (option, correctAnswer) => {
    setTimee(0);
    setCount(count+1)
    option === correctAnswer && setScore(score + 5);
  };

  return (
    <>
      {completeMessage? (
        <div className="h-screen gap-12 flex flex-col items-center justify-center  bg-black ">
      <h1 className="text-teal-600 font-extrabold text-[4rem]">Your Total Score is <span className="text-stone-50 font-extrabold text-8xl">{score}</span> Out of <span className="text-stone-50 font-extrabold text-8xl">20</span></h1>
      <Link to={"/"}><button className='h-[100px] w-[500px] bg-teal-500 rounded-3xl animate-bounce hover:bg-teal-600 '>BACK TO HOME</button></Link>

        </div>
      ):(
      <div className="grid grid-cols-6">
        <div className="col-span-2 h-screen w-full bg-black flex flex-col gap-28 justify-center items-center">
          <h1 className="text-teal-400 font-bold text-5xl">YOUR SCORE</h1>
          <h1 className="text-white text-9xl ">{score}</h1>
        </div>
        <div className="col-span-4">
          <div className="h-screen w-full bg-black flex flex-col justify-center items-center gap-14 ">
          <h1 className="text-teal-400 font-medium text-4xl">
              Question : {count+1}
            </h1>
            <h1 className="text-teal-400 font-medium text-4xl">
              Timer : {timee}
            </h1>
            <h1 className="text-white">{dataFromArray[count]?.question}</h1>
            <button
              className="text-white w-96 h-14 bg-teal-600 rounded-xl hover:scale-[1.1]"
              onClick={() =>
                handleCorrectAnswer(
                  dataFromArray[count]?.option1,
                  dataFromArray[count]?.ans
                )
              }
            >
              {dataFromArray[count]?.option1}
            </button>
            <button
              className="text-white w-96 h-14 bg-teal-600 rounded-xl hover:scale-[1.1]"
              onClick={() =>
                handleCorrectAnswer(
                  dataFromArray[count]?.option2,
                  dataFromArray[count]?.ans
                )
              }
            >
              {dataFromArray[count]?.option2}
            </button>
            <button
              className="text-white w-96 h-14 bg-teal-600 rounded-xl hover:scale-[1.1]"
              onClick={() =>
                handleCorrectAnswer(
                  dataFromArray[count]?.option3,
                  dataFromArray[count]?.ans
                )
              }
            >
              {dataFromArray[count]?.option3}
            </button>
          </div>
        </div>
      </div>)
}
    </>
  );
}

export default Playpage;
