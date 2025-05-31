function SocialIcon ({bgColor, icon, href}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-9 h-9 rounded-full ${bgColor} flex items-center justify-center text-[#1b1202]/80 dark:text-white/50 hover:text-[#1b1202] dark:hover:text-white hover:bg-[#ffa700]/20 dark:hover:bg-[#ffffff12] transition-all duration-300 hover:scale-110`}
        >
            {icon}
        </a>
    )
}

export default SocialIcon;