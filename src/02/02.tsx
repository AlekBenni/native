
type LocalCityType = {
    title: string
    countryTitle: string
}

type AdressType = {
    streetTitle: string
    city: LocalCityType
}

type TechnologiesType = {
    id: number
    title: string
}

type  StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AdressType
    technologies: Array<TechnologiesType>
}

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

console.log(students.address.city.countryTitle)
console.log(students.technologies[3].title)


