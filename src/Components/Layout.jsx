import React from 'react'
import NavBar from './NavBar'

const Styles = {
    Dev : "min-h-screen flex flex-col bg-white text-gray-900",
    main : "flex-1 px-4 md:px-8 lg:16 pt-10"
}

const Layout = ({children}) => {
  return (
    <div className={Styles.Dev}>
        <NavBar/>

        <main className={Styles.main}>
            {children}
        </main>

    </div>
  )
}

export default Layout