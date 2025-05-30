import project_0_dark from "../assets/projects-preview/project-0-dark.jpg";
import project_0_light from "../assets/projects-preview/project-0-light.jpg";
import project_1 from "../assets/projects-preview/project-1.png";
import project_2 from "../assets/projects-preview/project-2.png";
import project_3 from "../assets/projects-preview/project-3.png";
import project_4 from "../assets/projects-preview/project-4.png";

export const projects = [
    {
        translate: "project_0",
        href: "https://portfolio-git-main-myownworstenemy-remixs-projects.vercel.app/",
        previewLight: project_0_dark,
        previewDark: project_0_light,
        alt: "Portfolio - Web development project featuring React, Tailwind, Vite",
        tech: ["React", "Vite", "Tailwind", "MUI", "i18next"],
    },
    {
        translate: "project_4",
        href: "https://coolnews.vercel.app/",
        preview: project_4,
        alt: "CoolNews - Web development project featuring React, TS, Vite, styled-components",
        tech: ["React", "Vite", "TS", "MUI", "styled-components"],
        inProgress: true,
    },
    {
        translate: "project_1",
        href: "https://internship-alpha-ten.vercel.app/",
        preview: project_1,
        alt: "Intership - Web development project featuring React, Node.js, SASS, Figma",
        tech: ["HTML", "JS", "SASS", "Vite", "Figma"],
    },
    // {
    //     translate: "project_2",
    //     href: "https://life-tour.vercel.app/",
    //     preview: project_2,
    //     alt: "LifeTour - Web development project featuring React, Node.js, SASS, Figma",
    //     tech: ["React", "Node.js", "SASS", "Figma"],
    // },
    {
        translate: "project_3",
        href: "https://super-gym.vercel.app/",
        preview: project_3,
        alt: "SuperGym - Web development project featuring HTML, JS, SASS, Figma",
        tech: ["HTML", "JS", "SASS", "Vite", "Figma"],
    },
];