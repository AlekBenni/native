import { StudentType } from "../02/02";
import { addSkill } from "./03";

let student:StudentType;
beforeEach(() => {
    student = {
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
})

test("new tech skill should be added to student", () => {
    expect(student.technologies.length).toBe(4)

    addSkill(student, "Django")

    expect(student.technologies.length).toBe(5)
    expect(student.technologies[4].title).toBe("Django")
})