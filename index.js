// Code your solutions in this file
const array = ["Guadalupe", "Ollie", "Aki"];

function writeCards(array, gift) {
    const emptyArray =[];
    for (let i = 0; i < array.length; i++) {
        emptyArray.push(`Thank you, ${array[i]}, for the wonderful ${gift} gift!`)
    }
    return emptyArray;
}
writeCards(array, "surprise");


function countDown() {
    let number = 10;
    while(number >= 0) {
    console.log(number--);
    }
    return number;
}
countDown();