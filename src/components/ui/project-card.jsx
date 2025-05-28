import { useTranslation } from 'react-i18next';

function ProjectCard ({card}) {
    const {t, i18n} = useTranslation();

    return (
        <div className='relative overflow-hidden rounded-xl border border-white/5 bg-[#111111] transition-all duration-300 hover:shadow-[0_0_25px_rgba(128,0,255,0.09)] hover:border-[#8000ff20]'>
            <div className='aspect-[16/9] w-full overflow-hidden'>
                <img src={card.preview} className='w-full h-full object-cover transition-transform duration-500' alt={card.alt} />
            </div>
            <div className='p-4 sm:p-6'>
                <ul className='flex flex-wrap gap-1.5 sm:gap-2 mb-3'>
                    {card.tech.map((item, idx) => 
                        <li key={idx} className='px-2 py-0.5 sm:py-1 text-[0.6rem] border border-[#2e2e2e] text-[#bababa] bg-[#bdbdbd]/5 rounded-full'>
                            <span>{item}</span>
                        </li>
                    )}
                </ul>
                <h3 className='text-white text-lg sm:text-xl md:text-2xl font-medium mb-1.5 sm:mb-2 line-clamp-1'>{t(`projects.${card.translate}.title`)}</h3>
                <p className='text-white/60 text-xs mb-3 sm:mb-4 line-clamp-2'>{t(`projects.${card.translate}.description`)}</p>
                <a 
                    href={card.href}
                    target="_blank"
                    className='px-3 sm:px-4 py-1 sm:py-1.5 border-2 border-[#00eeff]/30 text-[#00eeff]/80 bg-[#00eeff]/5 rounded-xl hover:bg-[#00eeff16] transition-all ease-out hover:scale-[1.028] duration-300 text-[0.7rem] sm:text-[0.8rem] tracking-wider whitespace-nowrap'
                >
                    {t('global.showProject')}
                </a>
            </div>
            {card.inProgress && 
                <div className='absolute top-0 bg-amber-200 -rotate-45 p-3.5 w-80 flex justify-center -translate-x-22 translate-y-10'>
                    <span>{t(`projects.${card.translate}.inProgress`)}</span>
                </div>
            }
        </div>
    )
}

export default ProjectCard;