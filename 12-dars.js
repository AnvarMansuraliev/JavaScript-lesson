// const hello = function(a){
//     console.log("hello", a);
//     return a
// }
// hello("Anvar")
// console.log(hello("Jesus"))




// const welcome = (name,d) =>{
//     console.log(name,d);
// }
// welcome("name","men"









//                                // OBJECT

// let obj = {
//     name: "Anvarjon",
//     fio: "Mansuraliev",
//     "full name": "Anvar Mamsuraliev",
// }
// let obj1 = obj
// console.log(obj.name);
// console.log(obj.fio);
// console.log(obj['fio']);
// console.log(obj['name']);
// console.log(obj['full name']);
// console.log(obj = obj1)


// const obj = {
//     name:"Anvarjon",
//     fio:"Mansuraliev",
// }
// obj.name = "Jesus"
// obj.fio="Megamind"
// obj.age=23
// delete obj.name
// console.log(obj);




// function name(a) {
//   console.log('hello',a);  
// }
// name('Ali')

// function name(a) {
//    if (a%2!==0) {
//     console.log('odd')}
//    else if (a%2!==0) {
//         console.log('even')}
// }
// name(24)


// function name(a,b) {
// let result = a+b
// console.log(result);
// }
// name(23,45)


// function name(a) {
//     let son = 1
//      for (i = 1; i<=a; i++){
//         son*=i
//      }
// console.log(son);
// }
// name(6)


function name(a) {
    for (let i = 1; i <= a; i++) {
      if (i % 3 ==0 & i % 5 == 0 ) console.log('FizzBuzz' , i )
       else if (i % 3 == 0) console.log('fizz',i)
        else if (i % 5 == 0) console.log('buzz',i)
    }
}
name(30)