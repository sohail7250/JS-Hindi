// const tinderUser = new Object()     // singleton object

const tinderUser = {}         // non- singleton object

tinderUser.id = "123abc"
tinderUser.name = "rocky"

tinderUser.isLoggedIn = true

// console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
          userfullname: {
            firstname: "sohail",
            lastname: "akhtar"
          }
    }
}
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);

// console.log(regularUser.fullname?.userfullname.firstname);    // ? 
// console.log(regularUser.fullname.userfullname.firstname);    // ? 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}


// const obj3 = {obj1 , obj2}
//  const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2,...obj4}

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "sohail@mail.com"
    },
    {},
    {},
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));    // intresting

// console.log(Object.values(tinderUser));   
// console.log(Object.entries(tinderUser));  
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "sohail"
}

//  ***********  Object Destructuring  *****************


// console.log(course.courseInstructor)


const {courseInstructor } = course
 const {courseInstructor: instructor } = course


// console.log(courseInstructor);
// console.log(instructor);


// const navbar = ({company}) => {    //   for React

// }
 
// navbar(company = "sohail")



