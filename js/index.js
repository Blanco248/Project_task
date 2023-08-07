const msgs = ["Giet ManwManw", "Tabarnac", "Carlisle", "Dog Water", "Fish", "LMNOP"]


function getRandomMessage(arr) {
    let output = arr[Math.floor(Math.random() * arr.length)];
    return output
}

console.log(getRandomMessage(msgs));



