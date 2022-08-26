import site1 from '../../assets/images/site1.png';
import site2 from '../../assets/images/site2.png';
import site3 from '../../assets/images/site3.png';
import site4 from '../../assets/images/site4.png';
import site5 from '../../assets/images/site5.png';
import site6 from '../../assets/images/site6.png';
import site7 from '../../assets/images/site7.png';
import mytube from '../../assets/images/mytube.png';
import foodPlanner from '../../assets/images/site9.png';
import acupuncture from '../../assets/images/acupuncture.png';

const cards = [
    {
        projectName : 'Food Planner',
        website : 'https://food-planner-elite.herokuapp.com/',
        projectType : 'react',
        projectSkill : 'React, MERN, Js, Redux',
        filter : 'websites apps',
        image : foodPlanner,
        synopsis: "Track your caloric intake"
    },
    {
        projectName : 'MyTube',
        website : 'https://mytubemern.herokuapp.com/',
        projectType : 'react',
        projectSkill : 'React, MERN, Js',
        filter : 'websites apps',
        image : mytube,
        synopsis: "View and save youtube videos"
    },
    {
        projectName : 'Sttimtennis',
        website : 'http://sttimtennisclub.com',
        projectType : 'php',
        projectSkill :  'Php, Mysql, Js, Css',
        filter  :  'websites apps',
        image : site2,
        synopsis: "Create tennis appointments and set up plays"
    },
    {
        projectName : 'Mcdowell',
        website : 'https://mcdowellschimney.com/',
        projectType : 'js',
        projectSkill :  'Css, Html, Js',
        filter  :  'websites',
        image : site1,
        synopsis: "Chimney cleaning services"
    },
    {
        projectName: 'Uhost',
        website: 'https://descifle.github.io/Uhost/index.html',
        projectType: 'Html5',
        projectSkill:  'Css, Html, Js',
        filter :  'websites',
        image: site3,
        synopsis: "Host everything from websites, apps, SPA's"

    },
    {  
        projectName : 'Email Newsletter',
        website : 'https://newsletteremailxx.netlify.app/',
        projectType : 'html5',
        projectSkill :  'FFE, Html, Css',
        filter  :  'emails',
        image : site4,
        synopsis: "Replicate a famous Newsletter"
    },
    {
        projectName : 'Notes App',
        website : 'https://descifle.github.io/notes-app/index.html',
        projectType : 'js',
        projectSkill :  'Css, Js',
        filter  :  'apps',
        image : site7,
        synopsis: "Take notes and forget about them"
    },
    {
        projectName :'Email Invoice',
        website :'https://cashslap.netlify.app/',
        projectType :'html5',
        projectSkill : 'FFE, Html, Css',
        filter  : 'emails',
        image : site5,
        synopsis: "Invoice email template"
    },
    {
        projectName :'Hangman Game',
        website :'https://descifle.github.io/hangman-game',
        projectType :'js',
        projectSkill : 'Js, Css, html',
        filter : 'apps',
        image : site6,
        synopsis: "Play Hangman!"
    },
    {
        projectName :'Acupuncture Website',
        website :'https://www.startingpointacupuncture.net',
        projectType :'html5',
        projectSkill : 'Js, Css, html',
        filter : 'websites',
        image : acupuncture,
        synopsis: "Maryland Acupuncturist"
    }
]

const jobInfo = [
    {
        position: "FULLSTACK DEVELOPER @ ORRICK, HERRINGTON & SUTCLIFFE",
        timePeriod: "09/27/2021 - current",
        info: "Built and developed applications/websites/cloud web services using many programming languages",
        status: "Current",
        scrollName: "orrick",
        company: "Orrick, Herrington & Sutcliffe"
    },
    {
        position: "BACK END ENGINEER @ SMART SOLUTIONS GROUP",
        timePeriod: "12/12/2020 - 09/27/2021",
        info: "Work with automated medical application.",
        status: "Past",
        scrollName: "smart",
        company: "Smart Solution"
    },
    {
        position: "FULL STACK DEVELOPER @ SWIFT STAFFING",
        timePeriod: "01/01/2020 - 2/01/2021",
        info: "Developed LAMP stack applications and websites.",
        status: "Past",
        scrollName: "swift",
        company: "Swift Staffing"
    },
    {
        position: "FULLSTACK DEVELOPER @ DESCIFLE CONSULTANCY",
        timePeriod: "2019 - current",
        info: "Developed MERN stack applications and websites.",
        status: "Current",
        scrollName: "descifle",
        company: "Descifle Consult."
    }
]

interface JobProps {
    position: string,
    timePeriod: string,
    info: string,
    status: string,
    scrollName: string,
    company: string
}

export {
   cards,
   jobInfo,
   JobProps
}