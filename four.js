function megafriend(frindsName) {
    if (Array.isArray(frindsName) == false) {
        return "pls provide an Array";
    }
    let mega = frindsName[0];
    for (const friend of frindsName) {
        if (friend.length > frindsName.length) {
            mega = friend;
        }
    }
    return mega;
}
// console.log(mega)
const frindsName = ['rasel', 'roman', 'rajo', 'romjam', 'rashfole']
// console.log(megafriend(frindsName));
if (frindsName.indexOf('rasel') != -1) {
    console.log("rasel is in");
}
if (frindsName.includes('roman')) {
    console.log('roman in')

}
// const task = "Practice Makes a person perfect";
// const index = task.toLowerCase().indexOf("M");
// console.log(index)
// const str1 = 'Bangladesh is a beautiful country.';
// console.log(str1.endsWith("."));
// for (let i== 0; i < 10; i++) { }
// const array = ["121", "12", "1", "112", "111"];

// console.log(array.sort());