import { useState } from 'react'
import DarkModeIcon from './icons/DarkMode.jsx'
import LightModeIcon from './icons/LightModel.jsx'

export default function ThemeMode () {
  const [theme, setTheme] = useState(false)
  const root = document.documentElement
  
  // Modo light/dark
  const handleClick = () => {
    root.classList.toggle('dark')
    setTheme(!theme)
  }

  return (
    <div className="w-9 h-9 bg-gray-300 hover:text-slate-200 rounded-full transition-all duration-150 grid place-content-center hover:border hover:border-white hover:scale-125 cursor-pointer" onClick={handleClick}>
      <div className="rotate-90 dark:rotate-0 duration-200 text-slate-200 dark:text-slate-800"> 
      {
        theme ? <DarkModeIcon width="20" height="20" /> : <LightModeIcon width="20" height="20" />
      }
      </div>
    </div>
  )
}