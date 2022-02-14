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