import { useTranslation } from 'react-i18next';
import foto from "../../../assets/foto-dark-mode-filtered.png"
import { useEffect, useState } from 'react';

function Hero () {
    const {t, i18n} = useTranslation();
    const [font, setFont] = useState('font-playpen');

    const downloadResume = () => {
        window.open("/Litvinenko.pdf", "_blank");
    };

    useEffect(() => {
        if(i18n.language === 'ru') {
            setFont('font-playpen');
        } else {
            setFont('font-gluten');
        }
    }, [i18n.language])

    return (
        <section className='pt-10 md:pt-24 flex flex-col-reverse md:flex-row items-start'>
            <div className='w-full md:w-1/2 text-center md:text-left font-montserrat text-white my-auto'>
                {/* gradient text: "bg-gradient-to-r from-[#ee00ff] via-[#8000ff] to-[#00eeff] text-transparent bg-clip-text" */}
                <h1 className={`${font} text-3xl md:text-5xl lg:text-[65px]/[75px] font-semibold mb-3 md:mb-8`}>
                    {t("hero.intro")}&nbsp;
                    <span>{t("hero.name")}</span>,
                </h1>
                <p className='text-sm md:text-base lg:text-lg w-full md:w-3/4 max-w-lg mx-auto md:mx-0 mb-10 font-light'>{t("hero.tagline")}</p>
                <button
                  onClick={downloadResume}
                  className="font-montserrat bg-[#ffffff08] font-medium text-white/70 text-sm border border-white/10 px-3.5 py-2 rounded-full hover:bg-[#ffffff12] transition-all ease-out duration-300 hover:scale-[1.025] cursor-pointer"
                >
                    {t("global.resume")}
                </button>
            </div>
            <img className="h-auto max-w-2/6 md:w-4/10 md:max-w-80 lg:max-w-lg mb-10 md:mb-0 mx-auto" src={foto} alt="My foto"/>
        </section>
    )
}

export default Hero;