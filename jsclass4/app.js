let person = {
    name: "Student",
    age: 22,
    gender: "female",
    height: 5,
    works: false,
    courses: {
        compulsary: ["English", "urdu", "scince"],
        optional: "Math",
        total: 2,
        completed: false
    }

}

//multi object
console.log(person.courses.compulsary[1])

/*
person.works = true
console.log(person)
console.log(typeof person)
console.log(person["name"])
console.log(person.age)
console.log(person.works)
//we have to make the change first then display it in console
//js goes secquentially
/* multi line comment */
let addresses = [{
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
},
{
    street: "1st West avenue",
    number: "5",
    zipcode: "75001",
    city: "Addison",
    state: "Texas"
}];
console.log(addresses[0])
addresses.push({ street: "2nd avenue", number: "15", zipcode: "7564", state: "Chicago" }),
    addresses.push("address")
console.log(addresses)
//push is to add not change
//if else
// let rain= true;
// if (rain){
//   console.log("it will rain today")
// }
//  else{
//    console.log("it will not rain")
//  }
//let age= 19;
//let name ="abc"
//if (age<15 && name !="")  {

//onsole.log("you are allowed")
//}
//else{
//   console.log("you are under age")
//}
//age < 18 ? console.log("denied") : console.log("allowed");

let day = "Mon";
let msg = "";
switch (day) {
    case "Sun":
        msg = "holiday"
        break
    case "Mon":
        msg = "work"
        break
    case "Tue":
        msg = "new work"
        break
    case "Sat":
        msg = "weekend"
        break
    default:
        msg = "i dont know"

}
console.log("sjhgakjhwlsa", msg);


// let day = "Sat";
// let msg = "";
// switch (day) {
//     case "Mon":
//         msg = "work"
//         break
//     case "Tue":
//         msg = "new work"
//         break
//     case "Sat":
//         msg = "weekend"
//         break
//     case "Sun":
//         msg = "holiday"
//         break
//     default:
//         msg = "default"
// }
// console.log(msg);