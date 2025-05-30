import { useTranslation } from 'react-i18next';
import { projects } from "../../data/projects";
import SectionTitle from "../ui/section-title";
import ProjectCard from '../ui/project-card';
import { useFont } from '../../hooks/hooks';

function Projects () {
    const {t, i18n} = useTranslation();
    const font = useFont();

    return (
        <section className='py-16 md:py-20 lg:py-24 font-montserrat' id="projects">
            <SectionTitle text={t("projects.title")} font={font} bgColor={"bg-[#ff7b00]/60 dark:bg-[#8000ff]/50"} />
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