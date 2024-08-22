// which floor does he land on
// ( santa goes up 1 floor
// ) santa goes down 1 floor
const fs = require('fs');
const questOne = () => {
    fs.readFile("santa.txt", (err, data) => {
        console.time("time")
        const direction = data.toString();
        const directionArray = direction.split("");
        const answ = directionArray.reduce((acc, currentValue) => {
            if(currentValue === "("){
                return acc += 1 
            } else if (currentValue === ")"){
               return acc -= 1 
            }
        }, 0)
        console.log(answ);
        console.timeEnd("time")
    })
}

questOne();

// when does santa enter the basement

const questTwo = () => {
    fs.readFile("santa.txt", (err, data) => {
        console.time("time")
        const direction = data.toString();
        const directionArray = direction.split("");
        let acc = 0;
        let counter = 0;
        const answ = directionArray.some((currentValue) => {
            if(currentValue === "("){
                acc += 1 
            } else if (currentValue === ")"){
                acc -= 1 
            }
            counter++;
            return acc < 0;
        })
        console.log(counter);
        console.timeEnd("time");
    })
}
questTwo();