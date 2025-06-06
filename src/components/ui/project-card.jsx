import { useTranslation } from 'react-i18next';

function ProjectCard ({card}) {
    const {t, i18n} = useTranslation();

    return (
        <div className='relative overflow-hidden h-full rounded-xl border border-[#f1decc] dark:border-white/5 bg-[#f0d9c3c7] dark:bg-[#111111] transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,0,0,0.1)] dark:hover:shadow-[0_0_25px_rgba(128,0,255,0.1)] hover:border-[#ff000020] dark:hover:border-[#8000ff20]'>
            <div className='aspect-[16/9] w-full overflow-hidden'>
                {card.previewLight && <img src={card.previewLight} className='w-full h-full object-cover transition-transform duration-500 block dark:hidden' alt={card.alt} />}
                {card.previewDark && <img src={card.previewDark} className='w-full h-full object-cover transition-transform duration-500 hidden dark:block' alt={card.alt} />}
                {!card.previewLight && !card.previewDark && <img src={card.preview} className='w-full h-full object-cover transition-transform duration-500' alt={card.alt} />}
            </div>
            <div className='p-4 sm:p-6'>
                <ul className='flex flex-wrap gap-1.5 sm:gap-2 mb-3'>
                    {card.tech.map((item, idx) => 
                        <li key={idx} className='px-2 py-0.5 sm:py-1 text-[0.6rem] border border-[#612a14] dark:border-[#2e2e2e] text-[#7b3b22] dark:text-[#bababa] bg-[#7b3b22]/5 dark:bg-[#bdbdbd]/5 rounded-full'>
                            <span>{item}</span>
                        </li>
                    )}
                </ul>
                <h3 className='text-[#311409] dark:text-white text-lg sm:text-xl md:text-2xl font-medium mb-1.5 sm:mb-2 line-clamp-1'>{t(`projects.${card.translate}.title`)}</h3>
                <p className='text-[#311409]/60 dark:text-white/60 text-xs mb-3 sm:mb-4 line-clamp-2'>{t(`projects.${card.translate}.description`)}</p>
                <a 
                    href={card.href}
                    target="_blank"
                    className='px-3 sm:px-4 py-1 sm:py-1.5 border-2 border-[#ff0000]/15 dark:border-[#00eeff]/30 text-[#ff0000bf] dark:text-[#00eeff]/80 bg-[#ff0000]/5 dark:bg-[#00eeff]/5 rounded-xl hover:bg-[#ff000016] dark:hover:bg-[#00eeff16] transition-all ease-out hover:scale-[1.028] duration-300 text-[0.7rem] sm:text-[0.8rem] tracking-wider whitespace-nowrap'
                >
                    {t('global.showProject')}
                </a>
            </div>
            {card.inProgress && 
                <div className='absolute top-0 bg-amber-200 -rotate-45 p-3.5 w-52 lg:w-80 flex justify-center -translate-x-15 translate-y-6 lg:-translate-x-22 lg:translate-y-10'>
                    <span className='text-xs lg:text-base'>{t(`projects.${card.translate}.inProgress`)}</span>
                </div>
            }
        </div>
    )
}

export default ProjectCard;