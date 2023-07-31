import React from 'react'
import Docker from '../assets/images/docker.png'
import Sso from '../assets/images/django-sso.png'
import Stripe from '../assets/images/stripe.jpeg'


const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: Docker
        },
        {
            id: 1,
            src: Sso
        },
        {
            id: 1,
            src: Stripe
        }
    ]
  return (
    <div id="portfolio" className=' bg-gradient-to-b from-black to-gray-800 w-full text-white lg:h-screen pt-[50px] pb-[50px] lg:pt-0 lg:pb-0 '>
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
           <div className='pb-8'>
           <p className=' text-4xl font-bold inline border-b-4 border-gray-500 '>
                Portfolio
            </p>
            <p className='py-6'> Check out some of my works here </p>

           </div>
           <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
           {
               portfolios.map(({ id, src}) => (

            
        
        
            <div  key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="" className=' rounder-md duration-200 hover:scale-105 w-full' />
                <div className=' flex justify-center items-center'>
                    <button className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                        Demo

                    </button>
                    <button className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                        Code

                    </button>
                </div>

            </div>
      
           ))
        }
          </div>
    </div>
    </div>
  )
}

export default Portfolio