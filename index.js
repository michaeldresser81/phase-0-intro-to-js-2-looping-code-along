function writeCards(names, event) {
    const cardList = [];
    for (let i = 0; i < names.length; i++) {
        cardList.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return cardList;
}

function countDown(number) {
    let i = number;
    while (i >= 0) {
        console.log(i);
        i -= 1;
    }
}

