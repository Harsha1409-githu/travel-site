import { useState, useEffect } from "react"

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark")
      document.body.style.backgroundColor = "#000"
      document.body.style.color = "#fff"
    } else {
      document.documentElement.classList.remove("dark")
      document.body.style.backgroundColor = "#fff"
      document.body.style.color = "#000"
    }
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      className="bg-gray-800 text-white px-4 py-2 rounded-xl"
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  )
}