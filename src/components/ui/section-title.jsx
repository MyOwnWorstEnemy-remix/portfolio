function SectionTitle ({text, font, bgColor}) {
    return (
        <div className="flex flex-col items-center justify-center pb-8 sm:pb-16">
            <div className={`w-[30px] h-[3px] ${bgColor} rounded-full mb-4`}></div>
             <h2 className={`${font} text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center`}>
                {text}
            </h2>
        </div>
    )
}

export default SectionTitle;