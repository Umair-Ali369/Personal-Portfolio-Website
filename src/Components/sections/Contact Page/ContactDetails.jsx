import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa6";
import  { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


const Styles = {
  section : "flex flex-col md:flex-row justify-between py-10 px-5 gap-4 w-full",
  boxes : "px-4 py-2 shadow-md rounded-xl flex flex-col gap-3 border   w-full ",
  heading : "text-2xl md:text-3xl text-center font-bold text-blue-500 ",
  fields_box : "w-full p-2 text-gray-900 ",
  icon : "text-gray-800 pb-3",
  label : "text-2xl font-semibold text-gray-800 pb-2",
  link : "'text-2xl md:text-xl text-gray-700 underline tracking-wider",

  form : "flex flex-col justify-center gap-2 p-2  rounded-xl",
  form_label : "text-xl font-semibold text-gray-800",
  input : "w-full px-1 py-2 border rounded-md border-gray-500 text-gray-700 bg-gray-100",
  btn : "mx-auto mt-3 bg-blue-600 text-white font-medium px-8 py-3 rounded-md hover:scale-105 transition-transform duration-300 "

}
const ContactDetails = () => {
  return (
    <section className={Styles.section}>
      <motion.div 
      initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      className={Styles.boxes}>
        <h2 className={Styles.heading}>Quick Contact</h2>
        <div className={Styles.fields_box} >
          <div className={Styles.icon}><HiOutlineMail size={40}/></div>
          <label className={Styles.label}> Email : </label>
          {/* LInk */}
          <Link className={Styles.link}>alitechcode@gmail.com</Link>
        </div>
        <div className={Styles.fields_box} >
           <div className={Styles.icon}><FaGithub size={40}/></div>
          <label className={Styles.label}> GitHub : </label>
          {/* link */}
          <Link to='https://github.com/Umair-Ali369' className={Styles.link}>Go To GitHub </Link>
        </div>
        <div className={Styles.fields_box} >
          <label className={Styles.icon}>
            {" "}
            <FaWhatsapp size={40} />{" "}
          </label>
          <p className={Styles.link}>Go To Whatsapp - </p>
        </div>
      </motion.div>

      <motion.div 
       initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      className={Styles.boxes}>
        <h2 className={Styles.heading}>Send Me A Message</h2>
        <form className={Styles.form}>
            <div className={Styles.fields_box}>
               <label className={Styles.form_label}> Name :  </label>
               <input type="text" placeholder="Enter full name.."  className={Styles.input}  />
            </div>
            <div className={Styles.fields_box}>
                <label className={Styles.form_label}> Email :  </label>
                <input type="email" placeholder="Enter your email...."   className={Styles.input} />
            </div>
            <div className={Styles.fields_box + "flex flex-col"}>
                <labe className={Styles.form_label}> What's your project about? </labe>
                <select name="projects"  className={Styles.input} >
                    <option value=""> Select The about </option>
                    <option value="web-development">Web Development</option>
                    <option value="full-stact-project">Full Stact Project</option>
                    <option value="consulation">Consulation</option>
                    <option value="small-fix-bug">Samll Fix / Bug</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className={Styles.fields_box}>
                <label className={Styles.form_label}>Message : </label>
                <textarea rows={5} className={Styles.input} >

                </textarea>
            </div>
            <button className={Styles.btn}>Send Message</button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactDetails;
