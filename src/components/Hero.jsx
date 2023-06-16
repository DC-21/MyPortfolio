import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';


const Hero = () => {
  return (
    <div className='flex px-4 md:px-8  flex-wrap w-full h-screen pt-8'>
      <div className='md:w-1/2 w-full'>
        <div>
          <h1>Chola Kuboko</h1>
          <h1>Web Developer for Hire</h1>
        </div>
        <div></div>
      </div>
      <div className='md:w-1/2 w-full'>
        <div>
          <Player
            autoplay
            loop
            src='https://assets3.lottiefiles.com/packages/lf20_Pr3rKjXraf.json'
            style={{ width: '100%', height:'auto' }}
          />
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Hero
