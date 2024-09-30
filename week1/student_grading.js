function gradingSystem(grade) {
    if (grade > 79 && grade <= 100) {
      console.log('A');
    } else if (grade >= 60 && grade <= 79) {
        console.log('B')
    } else if (grade >= 49 && grade < 60) {
        console.log('C');
    } else if (grade >= 40 && grade < 49) {
        console.log('D');
    } else if (grade < 40) {
        console.log('E')
    }
}

function main () {
const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
 readLine.question('Enter student marks:', (answer) =>{
    gradingSystem(answer);
    readLine.close()
})
} 

main()