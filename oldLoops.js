// This script is for the excersie of old style loops;

const colors = ["yellow", "blues", "red", "orange"];

let i = 0;
console.log('Inhoud Array met while loop: ')
while (colors[i]) {
    console.log(colors[i]);
    i++;
}

let arrLength = colors.length; 
console.log('Inhoud Array met for loop: ')

for (i=0; i < arrLength; i++) {
    console.log(colors[i]);
}
