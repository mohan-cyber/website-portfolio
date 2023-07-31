import React from 'react'
import { FaGithub , FaLinkedin } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Socialinks = () => {

    const links = [
       {
           id: 1,
           child: (
               <>
               Linkedin <FaLinkedin size={30} />
               </>
           ),
           href: 'https://in.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F',
           style: 'rounder-tr-md' 
       },
       {
        id: 2,
        child: (
            <>
            Github <FaGithub size={30} />
            </>
        ),
        href: 'https://github.com/',
        style: 'rounder-tr-md' 
    } ,
    {
        id: 3,
        child: (
            <>
            Resume <BsFillPersonLinesFill size={30} />
            </>
        ),
        href: '/resume.pdf',
        style: 'rounder-tr-md',
        download: true, 
    }, 
    ];
  return (
    <div className='  flex flex-col lg:top-[35%] top-[70%]  left-0 fixed '>
        <ul>
            {links.map(({ id, child, href, style, download }) => (
                    <li key={id} className={`flex justify-center items-between opacity-70 lg:opacity-100 lg: w-40  h-14 px-4 -ml-[100px] hover:rounded-md duration-300 hover:ml-[-10px] bg-gray-500  ${style}`}>
                    <a href={href} className='flex justify-between  items-center w-full text-white '
                    download={download}
                    >
                       {child}
    
                    </a>
                </li>

                ))}
           
        </ul>
    </div>
  )
}

export default Socialinks