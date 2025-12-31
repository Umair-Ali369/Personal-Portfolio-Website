import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../../assets/image.png'

const Styles = {
    section : "min-h-[80vh] flex flex-col md:flex-row items-center justify-between gap-10 py-20",
    badge : "text-blue-600 font-medium mb-3",
    main_heading : "text-4xl md:text-6xl font-bold leading-tight mb-6",
    subtext : "text-gray-600 text-lg md:w-3/4 mb-8",
    btnDiv : "flex items-center gap-4",
    btn_primary : "px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",
    btn_secondary : "px-6 py-3 border border-gray-400 rounded-lg hover:border-blue-600 hover:text-blue-600 transition",
    skillTagDiv : "flex items-center gap-3 flex-wrap mt-8 text-gray-700",
    tag : "px-4 py-2 bg-gray-200 rounded-lg",
    Image_div : "hidden md:block w-72 h-72 md:w-96 md:h-96 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-3xl shadow-lg flex justify-center items-center"

}

const HeroSection = () => {
  return (
   <section className={Styles.section}>

    {/* Left Side Information */}
    <div className='flex-1'>
        <p className={Styles.badge}>Hi, I'm Ali - Frontend Deleoper</p>
        <h1 className={Styles.main_heading}>Building Modern, Beautiful & Funtional <span className='text-blue-600'>Web Experience</span></h1>
        <p className={Styles.subtext}>I craft clean interface, meaningful interactions, and responsive digital products using React, TailwindCSS, and modern UI/UX principles</p>
        <div className={Styles.btnDiv}>
            <Link to='/projects' className={Styles.btn_primary}>
            View My Work
            </Link>
            <Link to='/contact' className={Styles.btn_secondary}>
            Contact Me
            </Link>
        </div>

        {/* Skill Tags */}
        <div className={Styles.skillTagDiv}>
            {
            ["React", "TailwindCSS", "Framer Motion", "Javascript", "UI/Ux"]
            .map((tag, index) => (
                <span key={index} className={Styles.tag}> {tag} </span>
            )) 
             }
        </div>
    </div>

    {/* right Side */}
    <div className={Styles.Image_div}>
        <img src={Image} alt="Ali FA Code" className='w-72 md:w-96 mt-10' />
    </div>
   </section>
  )
}

export default HeroSection