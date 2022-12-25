
const students = {
    name : 'Alek',
    age : 40,
    isStudent : true,
    address : {
        streetTitle : "Some Street",
        city : {
            title : "Podgoritza",
            countryTitle : "Montenegro"
        }
    }
}

console.log(students.address.city.countryTitle)