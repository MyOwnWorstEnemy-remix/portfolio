import { useFont } from '../../hooks/hooks';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import SectionTitle from '../ui/section-title';
import ExperienceCard from '../ui/experience-card';
import Stack from './stack';
import { experiense } from '../../data/experience';

function About () {
    const {t, i18n} = useTranslation();
    const font = useFont();

    return (
        <section className='py-16 md:py-20 lg:py-24 font-montserrat' id="about">
            <SectionTitle text={t("about.title")} font={font} bgColor={"bg-[#f75151] dark:bg-[#ee00ff]/50"} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[400px] sm:gap-10 md:gap-16 mb-16 md:mb-24">
                <div className="bg-gradient-to-br from-[#f8e4cf] to-[#faecde] dark:from-[#0f0f0f] dark:to-[#131313] rounded-xl p-6 sm:p-7 md:p-8 border border-white/5 transition-all duration-500 ease-out h-full flex flex-col relative overflow-hidden group hover:shadow-[0_0_25px_rgba(255,0,0,0.1)] dark:hover:shadow-[0_0_25px_rgba(238,0,255,0.09)] hover:border-[#ff000020] dark:hover:border-[#ee00ff20]">
                    <h3 className="text-[#311409] dark:text-white text-xl sm:text-xl md:text-2xl unselectable font-medium ml-3 mb-5">
                        {t("about.subTitle")}
                    </h3>
                    <div className="space-y-4 sm:space-y-5 flex-grow relative z-9 text-[#311409]/80 dark:text-white/80 text-xs sm:text-sm ">
                        <p className="leading-relaxed border-l-2 border-[#ff0000]/40 dark:border-[#ee00ff]/30 pl-3 py-1">
                            {t("about.descriptionParagraph_1")}
                        </p>

                        <p className="leading-relaxed border-l-2 border-[#ff7b00]/40 dark:border-[#8000ff]/30 pl-3 py-1">
                            {t("about.descriptionParagraph_2")}
                        </p>

                        <p className="leading-relaxed border-l-2 border-[#f7fb1e]/50 dark:border-[#00eeff]/30 pl-3 py-1">
                            {t("about.descriptionParagraph_3")}
                        </p>
                    </div>
                </div>

                <div className="relative mt-2 md:mt-0 h-full flex flex-col">
                    <div className="relative h-full flex flex-col">
                        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#ff0000]/40 via-[#ff7b00]/40 to-[#f7fb1e]/50 dark:from-[#ee00ff]/40 dark:via-[#8000ff]/40 dark:to-[#00eeff]/40 ml-[7px] rounded-full"></div>

                        <div className="flex flex-col gap-5 h-full">
                            {experiense.map((item) => 
                                <ExperienceCard data={item} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Stack font={font} />
        </section>
    )
}

export default About;