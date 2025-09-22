import ateneo from "./assets/ateneo.png";
import gabay from "./assets/gabay.png";
import gdsc from "./assets/gdsc.png";
import mdsf from "./assets/mdsf.png";
import facebook from "./assets/facebook.png";
import github from "./assets/github.png";
import gmail from "./assets/gmail.png";
import linkedin from "./assets/linkedin.png";
import google from "./assets/google.png"
import html from "./assets/html.png"
import java from "./assets/java.png"
import python from "./assets/python.jpg"
import react from "./assets/react.png"
import tableau from "./assets/tableau.png"
import canva from "./assets/canva.png"
import css from "./assets/css.png"
import tailwind from "./assets/tailwind.png"
import django from "./assets/django.png"
import figma from "./assets/figma.png"
export const organization = [
    {
        name: "Ateneo Gabay",
        activities: [
            {
                role: "Deputy for Website Management",
                description: "As Deputy for Website Management, I was responsible for designing and maintaining websites aligned with the organization’s goals. Alongside other web managers, I completed a website overhaul to enhance functionality and user experience, using modern technologies such as Django. Additionally, I collaborated closely with fellow website managers, ensuring smooth workflows and consistent updates across the platform.",
                year: 2025,
            },
            {
                role: "Salubong 2025 Core Team",
                description: "As part of the core creative team, I contributed to the development of promotional materials that reflected the organization’s brand identity. I worked alongside other creatives to establish a cohesive visual identity, ensuring that all materials—from digital campaigns to print—were consistent, engaging, and aligned with the organization’s vision.",
                year: 2025,
            },
        ],
        url: gabay
        
    },
    {
        name: "Google Developer Students Club-Loyola",
        activities: [
            {
                role: "Financial Officer",
                description: "I manage the organization’s finances, including budgeting, tracking expenses, and preparing reports to support informed decision-making. I work closely with team members to optimize resources and ensure compliance, helping the organization maintain financial health and achieve its goals efficiently.",
                year: 2025,
            },
        ],
        url: gdsc
        
    },
    
]
export const education = [
    {
        name: "Ateneo De Manila University",
        program: "Bachelor of Computer Science with Specialization in Data Science and Analytics",
        year: "2023-2027",
        description: "",
        url: ateneo
    },
    {
        name: "Montessori De Sagrada Familia",
        program: "Science Technology and Mathematics Strand",
        year: "2017-2023",
        description: "",
        url: mdsf
    },
]

export const skills = {
  frontend: [
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "Tailwind", icon: tailwind },
    { name: "React JS", icon: react },
  ],
  backend: [
    { name: "Python", icon: python },
    { name: "Django", icon: django },
    { name: "Java", icon: java },
  ],
  data: [
    { name: "Tableau", icon: tableau },
    { name: "Google Workspace", icon: google },
  ],
  design: [
    { name: "Canva", icon: canva },
    { name: "Figma", icon: figma },
  ]
};


export const projects = [
    {
        name: "Hobbysite",
        description: "A Django-based web platform where users can create buyer or seller accounts, manage posts, threads, and merchandise, and track orders with quantity and cost details directly on their profiles.",
        img:"https://garden.spoonflower.com/c/5439145/p/f/m/R8RWIFy4JLa-w7-0qGiHV5HyNOloRHtYiGsZjRFa2gI0957w9KMAVhld/5439145-summer-doodle-geometric-triangle-deer-unicorn-rainbow-cactus-flamingo-pineapple-on-grey-by-caja_design.jpg",
        skills: [
            {
            language: 'HTML',
            color: 'bg-[#dc2626] hover:bg-[#991b1b] text-white font-medium',
            },
            {
            language: 'CSS',
            color: 'bg-[#1e40af] hover:bg-[#1e3a8a] text-white font-medium',
            },
            {
                language: 'Figma',
                color: 'bg-[#7c3aed] hover:bg-[#5b21b6] text-white font-medium',
            },
            {
            language: 'Django',
            color: 'bg-[#14532d] hover:bg-[#052e16] text-white font-medium',
            },
        ],
        link: "",
    },
    {
        name: "OSG Hub",
        description: "A project management information website for the organization, built with HTML and CSS and deployed on Vercel, providing easy access to internal procedures.",
        img:"https://garden.spoonflower.com/c/5439145/p/f/m/R8RWIFy4JLa-w7-0qGiHV5HyNOloRHtYiGsZjRFa2gI0957w9KMAVhld/5439145-summer-doodle-geometric-triangle-deer-unicorn-rainbow-cactus-flamingo-pineapple-on-grey-by-caja_design.jpg",
        skills: [
            {
            language: 'HTML',
            color: 'bg-[#dc2626] hover:bg-[#991b1b] text-white font-medium',
            },
            {
            language: 'CSS',
            color: 'bg-[#1e40af] hover:bg-[#1e3a8a] text-white font-medium',
            },
        ],
        link: "",
    },
    {
        name: "Spotify Home",
        description: "A replica of Spotify’s homepage created using raw HTML and CSS, showcasing frontend design and layout skills.",
        img:"https://garden.spoonflower.com/c/5439145/p/f/m/R8RWIFy4JLa-w7-0qGiHV5HyNOloRHtYiGsZjRFa2gI0957w9KMAVhld/5439145-summer-doodle-geometric-triangle-deer-unicorn-rainbow-cactus-flamingo-pineapple-on-grey-by-caja_design.jpg",
        skills: [
            {
            language: 'HTML',
            color: 'bg-[#dc2626] hover:bg-[#991b1b] text-white font-medium',
            },
            {
            language: 'CSS',
            color: 'bg-[#1e40af] hover:bg-[#1e3a8a] text-white font-medium',
            },
        ],
        link: "",
    },
    {
        name: "Grow A Garden: A Data Story",
        description: "A data-driven story using data from the Grow A Garden Wiki, preprocessed in Tableau Prep, visualized in Tableau, and designed to present insights in a cohesive and engaging narrative.",
        img:"https://garden.spoonflower.com/c/5439145/p/f/m/R8RWIFy4JLa-w7-0qGiHV5HyNOloRHtYiGsZjRFa2gI0957w9KMAVhld/5439145-summer-doodle-geometric-triangle-deer-unicorn-rainbow-cactus-flamingo-pineapple-on-grey-by-caja_design.jpg",
        skills: [
            {
            language: 'Google Sheets',
            color: 'bg-[#15803d] hover:bg-[#166534] text-white font-medium',
            },
            {
            language: 'Tableau',
            color: 'bg-[#e25822] hover:bg-[#b23c17] text-white font-medium',
            },
            {
            language: 'Canva',
            color: 'bg-[#0d9488] hover:bg-[#115e59] text-white font-medium',
            },
        ],
        link: "",
    },
    {
        name: "Nike 2021 Sales Dashboard",
        description: "A Tableau dashboard built from an online dataset, preprocessed in Tableau Prep, with graphs and visualizations designed to clearly represent Nike’s 2021 sales performance.",
        img:"https://garden.spoonflower.com/c/5439145/p/f/m/R8RWIFy4JLa-w7-0qGiHV5HyNOloRHtYiGsZjRFa2gI0957w9KMAVhld/5439145-summer-doodle-geometric-triangle-deer-unicorn-rainbow-cactus-flamingo-pineapple-on-grey-by-caja_design.jpg",
        skills: [
            {
            language: 'Kaggle',
            color: 'bg-[#0284c7] hover:bg-[#0369a1] text-white font-medium',
            },
            {
            language: 'Tableau Prep',
            color: 'bg-[#be123c] hover:bg-[#881337] text-white font-medium',
            },
            {
            language: 'Tableau',
            color: 'bg-[#e25822] hover:bg-[#b23c17] text-white font-medium',
            },
            
        ],
        link: "",
    },
    {
        name: "Either Java or New Project",
        description: "A Tableau dashboard built from an online dataset, preprocessed in Tableau Prep, with graphs and visualizations designed to clearly represent Nike’s 2021 sales performance.",
        img:"https://garden.spoonflower.com/c/5439145/p/f/m/R8RWIFy4JLa-w7-0qGiHV5HyNOloRHtYiGsZjRFa2gI0957w9KMAVhld/5439145-summer-doodle-geometric-triangle-deer-unicorn-rainbow-cactus-flamingo-pineapple-on-grey-by-caja_design.jpg",
        skills: [
            {
            language: 'Kaggle',
            color: 'bg-[#0284c7] hover:bg-[#0369a1] text-white font-medium',
            },
            {
            language: 'Tableau Prep',
            color: 'bg-[#be123c] hover:bg-[#881337] text-white font-medium',
            },
            {
            language: 'Tableau',
            color: 'bg-[#e25822] hover:bg-[#b23c17] text-white font-medium',
            },
            
        ],
        link: "",
    },
]
export const socials = [
    {
        social: "gironprincessmayb@gmail.com",
        link: "https://mail.google.com/mail/?view=cm&fs=1&to=gironprincessmayb@gmail.com&su=Portfolio%20Inquiry&body=Hello%20Princess,%0A%0AI%20came%20across%20your%20portfolio%20and...",
        icon: gmail,
    },
    {
        social: "youth-of-may",
        link: "https://github.com/youth-of-may",
        icon: github,
    },
    {
        social: "Princess May Giron",
        link: "https://www.linkedin.com/in/princess-may-giron-46197b279/",
        icon: linkedin,
    },
    {
        social: "Princess May Giron",
        link: "https://www.facebook.com/princessmaygiron",
        icon: facebook,
    }
]