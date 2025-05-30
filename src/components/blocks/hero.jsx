import { useTranslation } from 'react-i18next';
import darkThemedFoto from "../../assets/foto-dark-mode-filtered.png"
import lightThemedFoto from "../../assets/foto-light-mode-filtered.png"
import { useFont } from '../../hooks/hooks';

function Hero () {
    const {t, i18n} = useTranslation();
    const font = useFont();

    const downloadResume = () => {
        window.open("/Litvinenko.pdf", "_blank");
    };

    return (
        <section className='py-10 md:py-24 lg:py-20 flex flex-col-reverse md:flex-row items-start'>
            <div className='w-full md:w-1/2 text-center md:text-left font-montserrat text-[#311409] dark:text-white my-auto'>
                {/* gradient text: "bg-gradient-to-r from-[#ee00ff] via-[#8000ff] to-[#00eeff] text-transparent bg-clip-text" */}
                <h1 className={`${font} text-3xl md:text-5xl lg:text-[65px]/[75px] font-semibold mb-3 md:mb-8`}>
                    {t("hero.intro")}&nbsp;
                    <span>{t("hero.name")}</span>,
                </h1>
                <p className='text-sm md:text-base lg:text-lg w-full md:w-3/4 max-w-lg mx-auto md:mx-0 mb-10 font-light'>{t("hero.tagline")}</p>
                <button
                  onClick={downloadResume}
                  className="font-montserrat bg-[#f0d0b3]/80 text-[#351e12]/70 dark:bg-[#ffffff08] font-medium dark:text-white/70 text-sm border dark:border-white/10 px-3.5 py-2 rounded-full dark:hover:bg-[#ffffff12] transition-all ease-out duration-300 hover:scale-[1.025] cursor-pointer"
                >
                    {t("global.resume")}
                </button>
            </div>
            <img className="h-auto max-w-2/6 md:w-4/10 md:max-w-80 lg:max-w-lg mb-10 md:mb-0 mx-auto hidden dark:block" src={darkThemedFoto} alt="My foto"/>
            <img className="h-auto max-w-2/6 md:w-4/10 md:max-w-80 lg:max-w-lg mb-10 md:mb-0 mx-auto block dark:hidden" src={lightThemedFoto} alt="My foto"/>
        </section>
    )
}

export default Hero;