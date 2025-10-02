const accountid = "2837423847";
const accountname = "Yashmit account";
// console.log(accountid);

var age = "21";
// console.log(age);

let name = "yashmit";
// console.log(name);

// console.table([name, age, accountid, accountname]);/

/* it is showing in tabe formate
and it is easy to read */

/*and if you want to show in object formate then you can do like this
directely write in console.table({})*/

/*and if you want to print seprately then you cand wirte one by one like 
console.log
(NAME)
console.log
(AGE)*/


console.table({
  name: name,
  age: age,
  accountid: accountid,
  accountname: accountname
});