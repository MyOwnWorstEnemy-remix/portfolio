import { useTranslation } from 'react-i18next';

function ExperienceCard ({index, bgColor, borderColor}) {
    const {t, i18n} = useTranslation();

    return (
        <div key={index} className="relative pl-8 sm:pl-10 group mb-8 last:mb-0 md:mb-0">
            <div className={`absolute left-0 top-[10px] w-[16px] h-[16px] rounded-full bg-[#f9f3ed] dark:bg-[#111111] border-2 ${borderColor} group-hover:scale-125 transition-all duration-300 z-9`}>
                <div className="absolute inset-0 rounded-full animate-ping opacity-30 bg-transparent"></div>
            </div>

            <div className={`opacity-0 group-hover:opacity-100 absolute -left-2 top-[10px] w-6 h-6 ${bgColor} rounded-full blur-xl transition-all duration-500`}></div>

            <div className="bg-gradient-to-br from-[#f8e4cf] to-[#faecde] dark:from-[#111111] dark:to-[#131313] rounded-xl p-5 sm:p-6 border border-white/5 transform group-hover:translate-x-[6px] transition-all duration-300 hover:border-[#ff000020]  hover:shadow-[0_5px_15px_rgba(255,0,0,0.1)] dark:hover:shadow-[0_0_25px_rgba(0,0,0,0.2)] dark:hover:border-white/10">
                <div className="flex items-start justify-between">
                    <h4 className="text-[#311409] dark:text-white font-medium text-sm sm:text-base">
                        {t(`workExperience.name_${index}`)}
                    </h4>
                    <span className="text-[#ff0000bf] dark:text-[#00eeffb6] md:text-xs text-[0.6rem] font-medium bg-[#ff0000]/5 dark:bg-[#00eeff]/5 px-2 py-1 rounded-full">
                        {t(`workExperience.time_${index}`)}
                    </span>
                </div>
                <p className="text-[#3114098f] dark:text-[#ffffff8f] text-xs sm:text-sm mb-2.5 font-medium">
                    {t(`workExperience.company_${index}`)}
                </p>
                <p className="text-[#311409]/70 dark:text-white/70 text-xs leading-relaxed md:w-[80%]">
                    {t(`workExperience.description_${index}`)}
                </p>
            </div>
        </div>
    );
}

export default ExperienceCard;