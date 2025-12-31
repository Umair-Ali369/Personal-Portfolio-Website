import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin,  } from 'react-icons/fa'
import { MdEmail } from "react-icons/md";

const Styles = {
    section : 'text-center lg:px-20 md:px-10 px-5 flex flex-col justify-center bg-gray-50',
    mainDiv1 : 'grid grid-cols-1 sm:grid-cols-3 py-10 px-6 gap-10 text-gray-800',


    branding : "flex flex-col justify-center text-xl text-start font-bold opacity-90 border-r border-gray-800",
    navigation : 'flex flex-col space-y-2 text-xl justify-center items-center border-r border-gray-800',
    socialIcons : "flex items-center justify-center space-x-4 text-xl ",
    bottomLine : "text-sm opacity-60 py-4 border-t border-white/10"
}

const Footer = () => {
  return (
    <section className={Styles.section}>
        <div className={Styles.mainDiv1}>
            <div className={Styles.branding}>
               <h3 className='text-blue-700'>Ali Code</h3>
               <span> Frontend Developer </span>
            </div>
            <div className={Styles.navigation}>
                {[{page :' Home', link : "/"},
                    {page : 'About', link : '/about'},
                    { page :' Projects', link : "/projects"},
                    {page : 'Contact', link : '/contact'}
                ]
                .map((link, index)=> (
                    <Link key={index} to={link.link} className=' opacity-70 hover:opacity-100'>

                        {link.page}
                       
                    </Link>
                ))}
            </div>
            <div className={Styles.socialIcons}>
                {[<FaGithub size={50}/>, <FaLinkedin size={50}/>, <MdEmail size={50}/>]
                .map((social, index)=> (
                    <button className='opacity-70 hover:opacity-100' key={index}>
                       {social}
                    </button>
                ))
                }
            </div>
        </div>
        <div className={Styles.bottomLine}>

            <p> &copy; Ali Khan  { new Date().getFullYear() }. All rights reserved </p>

        </div>
    </section>
  )
}

export default Footer