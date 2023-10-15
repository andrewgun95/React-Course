import {
  addObjectToArray,
  deleteObjectFromArray,
  updateObjectInArray,
} from "./immutable.js";

let employees = [
  {
    id: 1,
    name: "Jacob",
    role: "Manager",
  },
  {
    id: 2,
    name: "Steve",
    role: "Trainer",
  },
  {
    id: 3,
    name: "Andre",
    role: "Staff",
  },
];

console.log(employees);

console.log(addObjectToArray(employees, { id: 4, name: "Martha", role: "HR" }));

console.log(deleteObjectFromArray(employees, 1));

console.log(
  updateObjectInArray(employees, 2, {
    name: "Steve Jobs",
    email: "steve@yopmail.com",
    phone: "123456789",
  })
);
