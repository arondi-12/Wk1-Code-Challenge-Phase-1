function calculatePayee(basicSalary) {
    let tax = 0;
    if (basicSalary <= 24000){
        tax = basicSalary * 0.1;
    } else if (basicSalary >2400 && basicSalary <= 32333){
        tax = 2400 + 0.1 + (basicSalary - 24000) *0.25;
    } else if (basicSalary > 3233 && basicSalary <= 500000){
        tax = 4800 + (basicSalary - 32333) * 0.3;
    }  else if (basicSalary > 500000 && basicSalary <= 800000){
        tax = 6800 + (basicSalary - 500000) * 0.325;
    } else if (basicSalary > 800000){
        tax = 11325 + (basicSalary - 800000) * 0.35;
    }
    return tax;
}
// function main(){
//     const readLine = require('readline').createInterface({
//         input: process.stdin,
//         output: process.stdout
//     })
//     readLine.question('What is your gross salary:', (answer)=>{
//    console.log( payeeRates (answer));
//     readLine.close()
//     })
// }

// main()

function calculateNHIF(basicSalary) {
    if (basicSalary <= 5999) {
        return 150;
    } else if (basicSalary >= 6000 && basicSalary <= 7999) {
        return 300;
    } else if (basicSalary >= 8000 && basicSalary <= 11999) {
        return 400;
    } else if (basicSalary >= 12000 && basicSalary <= 14999) {
        return 500;
    } else if (basicSalary >= 15000 && basicSalary <= 19999) {
        return 600;
    } else if (basicSalary >= 20000 && basicSalary <= 24999) {
        return 750;
    } else if (basicSalary >= 25000 && basicSalary <= 29999) {
        return 850;
    } else if (basicSalary >= 30000 && basicSalary  <= 34999) {
        return 900;
    } else if (basicSalary >= 35000 && basicSalary <= 39999){
        return 950;
    } else if (basicSalary >= 40000 && basicSalary <= 44999) {
        return 1000;
    } else if (basicSalary >= 45000 && basicSalary <= 49999) {
        return 1100;
    } else if (basicSalary >= 50000 && basicSalary <= 59999) {
        return 1200;
    } else if (basicSalary >= 60000 && basicSalary <= 69999) {
        return 1300;
    } else if (basicSalary >= 70000 && basicSalary <= 79999) {
        return 1400;
    } else if (basicSalary >= 80000 && basicSalary <= 89999) {
        return 1500;
    } else if (basicSalary >= 90000 && basicSalary <= 99999) {
        return 1600;
    } else if (basicSalary >= 100000) {
        return 1700;
    }
}

function calculateNSSF(amount){
    let nssfContribution = 0;
    if (amount <= 7000){
        nssfContribution = amount * 0.06
    } else if (amount >= 7001 && amount <= 36000){
        nssfContribution = 420
    } else {
        nssfContribution = 420 + (amount - 7000) * 0.06
    }
    return nssfContribution;
}

function calculateHousingLevy(basicSalary) {
    return basicSalary * 0.015; // 1.5% housing levy
}
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const payee = calculatePayee(basicSalary);
    const nhif = calculateNHIF(basicSalary);
    const nssf = calculateNSSF(basicSalary);
    const housingLevy = calculateHousingLevy(basicSalary);
    
    const totalDeductions = payee + nhif + nssf + housingLevy;
    const netSalary = grossSalary - totalDeductions;
    
    return {
        grossSalary,
        payee,
        nhif,
        nssf,
        housingLevy,
        netSalary
    };
}
function main(){
    const readLine = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })
    readLine.question('Enter basic salary:', (answer)=>{
   const basicSalary = parseFloat (answer)
   readLine.question('enter the benefits:' , (answer)=> {
    const benefits = parseFloat (answer)
  
   const { grossSalary, payee, nhif, nssf, housingLevy, netSalary } = calculateNetSalary(basicSalary, benefits);
   // Display the results
   console.log("\n--- Salary Summary ---");
   console.log(`Gross Salary: KES ${grossSalary}`);
   console.log(`PAYE Tax: KES ${payee}`);
   console.log(`NHIF Deductions: KES ${nhif}`);
   console.log(`NSSF Deductions: KES ${nssf}`);
   console.log(`Housing Levy: KES ${housingLevy}`);
   console.log(`Net Salary: KES ${netSalary}`);
    readLine.close()
})
    })
}
main()


