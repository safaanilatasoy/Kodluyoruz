
const arguments = process.argv.slice(2);

function showPrimeNumbers(lowNum, highNum){
    for(let i=lowNum; i<=highNum; i++ ){
        let isPrime = true;
        for(let j=2; j<i; j++){
            if(i%j===0 && j !==i){
                isPrime = false;
                break;
            }
        }

        if(isPrime){
            console.log(i);
        }
    }
}

showPrimeNumbers(arguments[0]*1,arguments[1]*1);

// console.log(process.argv.slice(2));