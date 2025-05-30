import { useTranslation } from 'react-i18next';
import { projects } from "../../data/projects";
import SectionTitle from "../ui/section-title";
import ProjectCard from '../ui/project-card';
import CustomToaster from "../ui/custom-toaster";
import { useFont } from '../../hooks/hooks';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import { GoArrowRight } from "react-icons/go";

function Projects () {
    const {t, i18n} = useTranslation();
    const font = useFont();

    const notifyUnavailable = () => {
        toast.custom((tst) => <CustomToaster tst={tst} text={t("global.notifyUnavailable")} />)
    };

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
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        notifyUnavailable();
                    }}
                    className="flex sm:justify-end items-center group mt-8 sm:mt-10"
                >
                    <span className="mr-1.5 text-xs sm:text-sm lg:text-base font-medium text-[#311409]/80 group-hover:text-[#311409] dark:text-[#959595] dark:group-hover:text-[#f5f5f5] transition-colors duration-300">
                        {t("global.showAll")}
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                        <GoArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#311409]/80 group-hover:text-[#311409] dark:text-[#959595] dark:group-hover:text-[#f5f5f5] transition-colors duration-300" />
                    </span>
                </a>
                <Toaster
                    position="bottom-right"
                    reverseOrder={true}
                />
        </section>
    )
}

export default Projects;