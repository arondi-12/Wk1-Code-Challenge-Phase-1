function payeeRates(amount) {
    let tax = 0;
    if (amount <= 24000){
        tax = amount * 0.1;
    } else if (amount <= 32333){
        tax = 24000 * 0.1 + (amount - 24000) * 0.25;
    } else if (amount <= 500000){
        tax = 24000 * 0.1 + (amount - 24000) * 0.25 + (amount - 32333) * 0.3;
    }  else if (amount <= 800000){
        tax = 24000 * 0.1 + (amount - 24000) * 0.25 + (amount - 32333) * 0.3 + (amount - 500000) * 0.325;
    } else if (amount > 800000){
        tax = 24000 * 0.1 + (amount - 24000) * 0.25 + (amount - 32333) * 0.3 + (amount - 500000) * 0.325 + (amount - 800000) * 0.35;
    }
    return tax;
}
function main(){
    const readLine = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })
    readLine.question('What is your gross salary:', (answer)=>{
   console.log( payeeRates (answer));
    readLine.close()
    })
}

main()
