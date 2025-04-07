const obj = {
    name: "Anvar",
    fio: "Mansuraliev",
    age: 15,
    "full name": "Anvar Mansuraliev"
};
console.log(obj.name);
console.log(obj.age);
console.log(obj.fio);
console.log(obj["full name"]);
obj.job = "developer"
obj.age = 1234
obj.job = "Talaba"
delete obj.name
console.log(obj);