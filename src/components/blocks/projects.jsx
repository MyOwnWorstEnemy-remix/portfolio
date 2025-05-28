import { useTranslation } from 'react-i18next';
import { useState, useEffect } from "react";
import { projects } from "../../data/projects";
import SectionTitle from "../ui/section-title";
import ProjectCard from '../ui/project-card';

function Projects () {
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
        <section className='py-16 md:py-20 lg:py-24 font-montserrat' id="projects">
            <SectionTitle text={t("projects.title")} font={font} bgColor={"bg-[#ee00ff]/50"} />
            <ul className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8'>
                {projects.map(item => 
                    <li key={item.translate}>
                        <ProjectCard card={item} />
                    </li>
                )}
            </ul>
        </section>
    )
}

export default Projects;