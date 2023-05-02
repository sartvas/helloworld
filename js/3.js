function findMaxNumber(a, b, c, d){
    if (arguments.length < 4){
        return 0;
    }

    for(let i = 0; i < 4; i++){
        if (typeof(arguments[i]) != "number") {
            return 0;
        }
    }
    
    return Math.max(a, b, c, d);
}

console.log(findMaxNumber(2,12,345,2));
