function getMathResult(firstArg, secondArg) {

    let result = "";

    if (typeof(secondArg) != "number"|| secondArg == 0 || secondArg < 0){

        result = firstArg;

    }  else {

        for (let i = 1; i <= secondArg; i++){

            result += `${firstArg*i}---`;
        }

        result = result.slice(0, -3);
    }

    return result;

}

console.log(getMathResult(5,10));