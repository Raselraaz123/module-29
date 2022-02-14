const products = [
    'Dell hardcore i29 200GB laptop Phone ',
    'iphone 1TB camara flashlight phone',
    'yellow laptop with black camera',
    'Dell 1x59 Lenovo commercial yoga laptop',
    'LG supernova laptop Dell',
    'HTC low 1TB price phone',
    'Dell purple color phone with laptop'
];
const searching = '1TB';
const output = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        // output.push(product);
    }


}
// console.log(output);
for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        // output.push(product);
    }
}
// console.log(output);
for (const product of products) {
    if (product.toUpperCase().startsWith(searching.toUpperCase())) {
        // output.push(product);
    }
}
// console.log(output);
for (const product of products) {
    if (product.toLowerCase().endsWith(searching.toLowerCase())) {
        // output.push(product);
    }
}
// console.log(output);

for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);