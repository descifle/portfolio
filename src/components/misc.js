import site1 from '../images/site1.png';
import site2 from '../images/site2.png';
import site3 from '../images/site3.png';
import site4 from '../images/site4.png';
import site5 from '../images/site5.png';
import site6 from '../images/site6.png';
import site7 from '../images/site7.png';
import mytube from '../images/mytube.png';
import foodPlanner from '../images/site9.png'

let realCards = [
    {
        projectName :'Hangman Game',
        website :'https://descifle.github.io/hangman-game/',
        projectType :'js',
        projectSkill : 'Js, Css, html',
        filter : 'apps',
        image : site6
    },
    {
        projectName :'Email Invoice',
        website :'https://cashslap.netlify.app/',
        projectType :'html5',
        projectSkill : 'FFE, Html, Css',
        filter  : 'emails',
        image : site5
    },
    {
        projectName : 'Notes App',
        website : 'https://descifle.github.io/notes-app/index.html',
        projectType : 'js',
        projectSkill :  'Css, Js',
        filter  :  'apps',
        image : site7
    },
    {  
        projectName : 'Email Newsletter',
        website : 'https://newsletteremailxx.netlify.app/',
        projectType : 'html5',
        projectSkill :  'FFE, Html, Css',
        filter  :  'emails',
        image : site4
    },
    {
        projectName: 'Uhost',
        website: 'https://descifle.github.io/Uhost/index.html',
        projectType: 'Html5',
        projectSkill:  'Css, Html, Js',
        filter :  'websites',
        image: site3

    },
    {
        projectName : 'Mcdowell',
        website : 'https://mcdowellschimney.com/',
        projectType : 'js',
        projectSkill :  'Css, Html, Js',
        filter  :  'websites',
        image : site1
    },
    {
        projectName : 'Sttimtennis',
        website : 'http://sttimtennisclub.com',
        projectType : 'php',
        projectSkill :  'Php, Mysql, Js, Css',
        filter  :  'websites apps',
        image : site2
    },
    {
        projectName : 'MyTube',
        website : 'https://mytubemern.herokuapp.com/',
        projectType : 'react',
        projectSkill : 'React, MERN, Js',
        filter : 'websites apps',
        image : mytube
    },
    {
        projectName : 'Food Planner',
        website : 'https://food-planner-elite.herokuapp.com/',
        projectType : 'react',
        projectSkill : 'React, MERN, Js, Redux',
        filter : 'websites apps',
        image : foodPlanner
    }
]

const cards = realCards.reverse()


export {
   cards
}