// Code your solutions in this file



let messages = []

function writeCards(names, occassion) {
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${occassion} gift!`);
    }

    return messages;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number = number - 1;
    }
}