import { useState } from "react";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";

function ThemeToggle () {
    const [darkMode, setDarkMode] = useState(false);

    const onToggleClick = () => {
        document.querySelector('html').classList.toggle('dark');
        setDarkMode(m => !m);
    }

    return (
        <button onClick={onToggleClick} className="block bg-transparent text-[#b95503] dark:text-gray-300  p-2 border-2 border-transparent rounded-full hover:border-current focus:border-current focus:outline-none focus-visible:outline-none cursor-pointer">
            {/* <span className="text-amber-200 dark:text-gray-300"> */}
                {darkMode ? <BsMoonStarsFill /> : <BsFillSunFill />}
            {/* </span> */}
        </button>
    )
}

export default ThemeToggle;