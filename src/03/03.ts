import { StudentType } from "../02/02";

const students:StudentType = {
    id : 1,
    name : 'Alek',
    age : 40,
    isActive : true,
    address : {
        streetTitle : "Some Street",
        city : {
            title : "Podgoritza",
            countryTitle : "Montenegro"
        }
    },
    technologies : [
        {
            id : 1,
            title : 'html'
        },
        {
            id : 2,
            title : 'css'
        },
        {
            id : 3,
            title : 'Java Script'
        },
        {
            id : 4,
            title : 'python'
        },
    ]
}

export const addSkill = (students:StudentType, skill:string) => {
    students.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function getStudent(){
    return students.name
}