import React from 'react'
import { Link } from 'react-router-dom'

function Main() {
  return (
    <div>
      <div className='h-screen w-full bg-black flex flex-col justify-center items-center gap-9'>
      
      
      <div>
        <h1 className='text-teal-400 font-bold text-8xl'>QUIZIZZ APP</h1>
      </div>
       <div className='w-96'>

        <p className='text-white text-justify'>You can take 15 second to solve one questtioon After 15 second next qustion will dispaly on the screen Please click the button to start</p>
        </div>
        <div>
            <Link to={'/playpage'}><button className='h-[100px] w-[500px] bg-teal-500 rounded-3xl animate-bounce hover:bg-teal-600 '>START GAME</button></Link>
        </div>

       
      </div>
    </div>
  )
}

export default Main
