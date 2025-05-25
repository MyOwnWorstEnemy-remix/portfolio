import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

function About () {
    const {t, i18n} = useTranslation();
    const [font, setFont] = useState('font-playpen');

    useEffect(() => {
        if(i18n.language === 'ru') {
            setFont('font-playpen');
        } else {
            setFont('font-gluten');
        }
    }, [i18n.language])

    return (
        <section className='py-16 md:py-20 lg:py-24'>
            <div className="flex flex-col items-center justify-center pb-8 sm:pb-16">
                <div className="w-[30px] h-[3px] bg-[#ee00ff]/50 rounded-full mb-4"></div>
                <h2 className={`${font} text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center`}>
                    {t("about.title")}
                </h2>
            </div>
        </section>
    )
}

export default About;