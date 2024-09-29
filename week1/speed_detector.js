function speedDetector (speed) {
    if (speed < 70) {
        console.log ('Ok')
    } else{
        let points = (speed - 70) / 5;
if (points > 12) {
    console.log('Points:', points)
    console.log('License suspended');
} else if (points < 12) {
    console.log('Points:', points)
    console.log ('License is still valid')
}  

    }

    
}
function main() {
    const readLine = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })
    readLine.question('What is the vehicle speed:', (answer)=>{
    speedDetector (answer);
    readLine.close()
    })
}
main()