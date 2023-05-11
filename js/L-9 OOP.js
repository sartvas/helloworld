"use strict"

const employee = {
    cofee : 3,
    chair : 1,
    table : 1,
    monitor : 1,
    sayHi: function () {
        return 'Halo, epta!';
    }
};

const employeeIvan = {
    monitor: 3,
    dept: "IT",
    cofee: 13
}

Object.setPrototypeOf(employeeIvan, employee);

const emplValera = Object.create(employee)

console.log(`employeeIvan орёт: ${employeeIvan.sayHi()}`);
console.log(`emplValera орёт: ${emplValera.sayHi()}`);