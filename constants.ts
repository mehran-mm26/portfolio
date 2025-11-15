import { INavigationItem, IProject, ISkillSet, WorkExperience } from "./types"

export const navigationItems: INavigationItem[] = [
    {
        href: "about",
        title: "About",
    },
    {
        href: "projects",
        title: "Projects",
    },
    {
        href: "contact",
        title: "Contact",
    },
]

export const workExperiences: WorkExperience[] = [
    {
        date: {
            startDate: new Date("2025-03-01"),
            endDate: "Present",
        },
        companyName: "K2Systems",
        location: "Germany, Stuttgart",
        position: "Frontend Developer",
    },
    {
        date: {
            startDate: new Date("2024-04-01"),
            endDate: new Date("2024-09-01"),
        },
        companyName: "TradingFinder",
        location: "UAE, Abu Dhabi (Remote)",
        position: "Frontend Developer",
    },
    {
        date: {
            startDate: new Date("2021-03-01"),
            endDate: new Date("2024-01-01"),
        },
        companyName: "IDmelon",
        location: "Canada, Vancouver (Remote)",
        position: "Full Stack Developer",
    },
    {
        date: {
            startDate: new Date("2020-06-01"),
            endDate: new Date("2020-12-01"),
        },
        companyName: "30Nama",
        location: "Iran, Tehran",
        position: "Android Developer",
    },
    {
        date: {
            startDate: new Date("2018-08-01"),
            endDate: new Date("2020-05-01"),
        },
        companyName: "Nobka",
        location: "Iran, Tehran",
        position: "Android Developer",
    },
    {
        date: {
            startDate: new Date("2017-04-01"),
            endDate: new Date("2018-08-01"),
        },
        companyName: "FreeLancer",
        location: "Iran, Tehran",
        position: "Android Developer",
    },
]

export const skillSets: ISkillSet[] = [
    {
        title: "Frontend",
        description: "I strive for pixel-perfect finalized design implementation.",
        icons: [
            {
                src: "/react.svg",
                alt: "react",
            },
            {
                src: "/nextjs.svg",
                alt: "next",
            },
            {
                src: "/webflow.svg",
                alt: "css",
            },
            {
                src: "/typescript.svg",
                alt: "typescript",
            },
        ],
    },
    {
        title: "Backend",
        description: "I design scalable and maintainable backend architectures.",
        icons: [
            {
                src: "/nodejs.svg",
                alt: "nodejs",
            },
            {
                src: "/mongodb.svg",
                alt: "mongodb",
            },
            {
                src: "/redis.svg",
                alt: "redis",
            },
            {
                src: "/aws.svg",
                alt: "aws",
            },
        ],
    },
    {
        title: "Android",
        description: "I build user-focused Android apps with clean, efficient code.",
        icons: [
            {
                src: "android.svg",
                alt: "android",
            },
            {
                src: "/java.svg",
                alt: "java",
            },
            {
                src: "/kotlin.svg",
                alt: "kotlin",
            },
        ],
    },
]

export const projects: IProject[] = [
    {
        title: "KAI",
        description: "KAI is an AI-powered personal assistant application designed to help users understand solar panel modules. ",
        link: "https://kai.k2-systems.com/",
        img: { src: "/kai.png", alt: "Kai application image" },
    },
    {
        title: "TradingFinder Website",
        description: "A scientific and practical entity in financial markets, specializing in trading tools, Forex and cryptocurrencies.",
        link: "https://tradingfinder.com/",
        img: { src: "/trading-finder.png", alt: "Trading finder website image" },
    },
    {
        title: "IDmelon Website",
        description: "Official website of IDmelon, a company that provides identity verification solutions using FIDO technology.",
        link: "https://idmelon.com/",
        img: { src: "/idmelon-website.png", alt: "IDmelon Website" },
    },
    {
        title: "IDmelon Admin panel",
        description: "Demo application for managing IDmelon identity verification solutions.",
        link: "https://demo.idmelon.com/",
        img: { src: "/idmelon-admin-panel.png", alt: "IDmelon Admin panel demo application" },
    },
]
