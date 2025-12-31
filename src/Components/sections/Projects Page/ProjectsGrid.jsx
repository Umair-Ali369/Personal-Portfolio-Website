import React from 'react'

const Styles = {
    section : "flex flex-col items-center justify-center gap-3 px-6 w-full py-10",
    categoryDiv : "flex flex-wrap items-center justify-center gap-4",
      cat : "px-4 py-3 bg-gray-200 hover:bg-blue-600 hover:text-white font-semibold rounded-md transition"
}
const ProjectsGrid = () => {
  return (
   <section>

     <div className={Styles.categoryDiv}>
        {["All", "Frontend", "Backend", "Full Stact", "Mini Projects", "Business Projects", "Others"].map((c)=> (
            <button key={c} className={Styles.cat}> {c} </button>
        ))}
      </div>

   </section>
  )
}

export default ProjectsGrid