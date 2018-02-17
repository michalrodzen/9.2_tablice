var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);
var newName = 'Marin';
if (allNames.indexOf(newName) === -1) {
    var allNames1 = allNames.push(newName);
}
console.log (allNames);