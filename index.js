// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);



const names = ["Tabatha", "Dakota", "Nathalie"];
const occurrence = ["birthday"];
function writeCards(names, occurrence) {
    const pokemon = []
    for (let me = 0; me < names.length; me++) {
        console.log(`Thank you, ${names[me]}, for the wonderful ${occurrence} gift!`)
       pokemon.push(`Thank you, ${names[me]}, for the wonderful ${occurrence} gift!`); 
    }    console.log(pokemon);
        return pokemon;
}
writeCards(names, occurrence);


function countDown(number) {
  while (number >= 0) {
  console.log(number--);
   }
return number;
}