//1.
const name = "Jan";
const age = 22;
const isOpen = true;
const stringBoolean = "true";
const stringNumber = "100";
//2.
//a)
const result = 10 % 4;
console.log(result);
//b)
const age2 = 33;
const name2 = "Tomasz";
const result2 = `${name2} ma ${age2} lata`;
console.log(result2);
//c)
const firstName = "Jan";
const lastName = "Kowalski";
console.log(firstName + " " + lastName);
console.log(`${firstName} ${lastName}`);
//3.
let number = "result: ";
number += 2 + 3;
console.log(number);
//4.
//a)
const arrA = [1, 2, 3];
//b)
const arrB = ["Volvo", "Jaguar", "BMW"];
//c)
const arrC = [true, false, true];
//d)
const arrD = [];
//e)
const arrE = [32, "Land Rover", true, 42, "Aga"];
//f)
console.log(arrE[1]);
//g)
const arrG = ["FFS", 5, 10];
console.log(arrG.length);
//h)
const arrH = [];
arrH.push(Math.floor(Math.random() * 10));
console.log(arrH);
//i)
const arrI = [
  {
    name: "Aga",
    surname: "Holda",
    age: 31,
  },
  {
    name: "Jan",
    surname: "Kowalski",
    age: 44,
  },
  {
    name: "Kunegunda",
    surname: "Drzymala",
    age: 26,
  },
];
console.log(arrI[1].name);
//j)
const valueJ = 2;
const arrJ = [];
arrJ.push(valueJ);
console.log(arrJ);

//5
//a)
const emptyObject = {};
//b)
const person = {
  name: "Iza",
};
//c)
const personDetails = {
  name: "Vincent",
  lastName: "MacDonald",
  age: 55,
  drivingLicense: true,
};
//d)
console.log(personDetails.age);
//e)
console.log(personDetails);
//f)
const car = {
  model: "Mini",
  color: "red",
  productionYear: 1998,
  sellYears: [2001, 2005, 2009],
};
//6.
//a)
//zmienna prosta - wartosciowa, przekazywanie watosci odbywa sie poprzez wartosc
const someNumber = 20;
//zmienna zlozona - przekazywanie wartosci odbywa sie poprzez referencje
const somePerson = {
  name: "Kate",
  profession: "Engineer",
};
//b)
const person2 = {
  name: "Aga",
  lastName: "Holda",
  age: 31,
  drivingLicense: true,
  drunk: false,
};

if (
  person2.age >= 18 &&
  person2.drivingLicense == true &&
  person2.drunk == false
) {
  console.log(`${person2.name} can drive a car`);
} else {
  console.log(`${person2.name} cannot drive a car`);
}
//c)
const car6 = {
  name6: "mustang",
  productionYear: 2020,
  color: "red",
};

const { name6, productionYear, color } = car6;

const result6 = `Moje auto to ${name6} i zostalo wyprodukowane w roku ${productionYear}.`;
console.log(result6);
//d)
//first method
const isAdult = true;
isAdult
  ? "Mozesz kupic alkohol"
  : "Nie mozesz kupic alkoholu, jestes nieletni!";
//second method
if (isAdult) {
  console.log("Mozesz kupic alkohol");
} else {
  console.log("Nie mozesz kupic alkoholu");
}
