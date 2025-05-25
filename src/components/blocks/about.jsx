import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import SectionTitle from '../ui/section-title';
import ExperienceCard from '../ui/experience-card';

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
        <section className='py-16 md:py-20 lg:py-24 font-montserrat' id="about">
            <SectionTitle text={t("about.title")} font={font} bgColor={"bg-[#ee00ff]/50"} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[400px] sm:gap-10 md:gap-16">
                <div className="bg-gradient-to-br from-[#0f0f0f] to-[#131313] rounded-xl p-6 sm:p-7 md:p-8 border border-white/5 transition-all duration-500 ease-out h-full flex flex-col relative overflow-hidden group hover:shadow-[0_0_25px_rgba(238,0,255,0.09)] hover:border-[#ee00ff20]">
                    <h3 className="text-white text-xl sm:text-xl md:text-2xl unselectable font-medium ml-3 mb-5">
                        {t("about.subTitle")}
                    </h3>

                    <div className="space-y-4 sm:space-y-5 flex-grow relative z-9 text-white/80 text-xs sm:text-sm ">
                        <p className="leading-relaxed border-l-2 border-[#ee00ff]/30 pl-3 py-1">
                            {t("about.descriptionParagraph_1")}
                        </p>

                        <p className="leading-relaxed border-l-2 border-[#8000ff]/30 pl-3 py-1">
                            {t("about.descriptionParagraph_2")}
                        </p>

                        <p className="leading-relaxed border-l-2 border-[#00eeff]/30 pl-3 py-1">
                            {t("about.descriptionParagraph_3")}
                        </p>
                    </div>
                </div>

                <div className="relative mt-2 md:mt-0 h-full flex flex-col">
                    <div className="relative h-full flex flex-col">
                        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#ee00ff]/40 via-[#8000ff]/40 to-[#00eeff]/40 ml-[7px] rounded-full"></div>

                        <div className="flex flex-col gap-5 h-full">
                            <ExperienceCard index={1} bgColor={"bg-[#ee00ff]/20"} borderColor={"border-[#ee00ff]/50"} />
                            <ExperienceCard index={2} bgColor={"bg-[#8000ff]/20"} borderColor={"border-[#8000ff]/50"} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;