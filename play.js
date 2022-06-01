const person = {
    name : 'Juhan',
    age : 28,
    greet() {
        console.log('Hello, My name is' + this.name);
    }
};

const hobbies = ['Baseball', 'Basketball', 'football'];
// for(let hobby of hobbies) {
//     console.log(hobby);
// }

// console.log(hobbies.map(hobby=>'My hobby is ' + hobby));
// console.log(hobbies);


// 스프레드 
const copiesArray = [...hobbies];
const copiesArray1 = [hobbies,...hobbies];
console.log(copiesArray1);
// 레스트 
const toArray = (...arg) => {
    return arg;
};

console.log(toArray(1,2,3));