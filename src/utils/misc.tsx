import { languages, programmingExtras} from "../utils/constants"
import { GridProps } from '@mui/material'

export const jobInfo = [
    {
        position: "FULLSTACK DEVELOPER @ ORRICK, HERRINGTON & SUTCLIFFE",
        timePeriod: "09/27/2021 - 07/01/2023",
        info: "Build and develop applications/websites/cloud web services using many programming languages",
        status: "Current",
        scrollName: "orrick",
        company: "Orrick, Herrington & Sutcliffe",
        programmingLanguages: [languages.CSHARP, languages.JAVASCRIPT, languages.SQL],
        programmingExtras: [programmingExtras.DOTNET, programmingExtras.DOTNETCORE, programmingExtras.MSSQL, programmingExtras.REACT, programmingExtras.ASP] 
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
        info: "Develop LAMP stack applications and websites.",
        status: "Past",
        scrollName: "swift",
        company: "Swift Staffing"
    },
    {
        position: "FULLSTACK DEVELOPER @ DESCIFLE CONSULTANCY",
        timePeriod: "2018 - current",
        info: "Develop MERN stack applications and websites.",
        status: "Current",
        scrollName: "descifle",
        company: "Descifle Consult."
    }
]

export interface JobProps {
    position: string,
    timePeriod: string,
    info: string,
    status: string,
    scrollName: string,
    company: string
}

export interface CustomGridProps extends GridProps  {
    name?: string
}

export type WebCardProps = {
    image: string,
    projectName: string,
    website: string,
    projectSkill: string,
    projectType: string
}