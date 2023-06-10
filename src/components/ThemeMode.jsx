import { useState } from 'react'
import DarkModeIcon from '../components/svgs/DarkModeIcon.jsx'
import LightModeIcon from '../components/svgs/LightModeIcon.jsx'

export default function ThemeMode () {
  const [theme, setTheme] = useState(false)
  const root = document.documentElement
  
  // Modo light/dark
  const handleClick = () => {
    root.classList.toggle('dark')
    setTheme(!theme)
  }

  return (
    <div className="bg-slate-600 dark:bg-slate-200 p-2 rounded duration-200 cursor-pointer" onClick={handleClick}>
      <div className="rotate-90 dark:rotate-0 duration-200 text-slate-200 dark:text-slate-800"> 
      {
        theme ? <DarkModeIcon width="20" height="20" /> : <LightModeIcon width="20" height="20" />
      }
      </div>
    </div>
  )
}