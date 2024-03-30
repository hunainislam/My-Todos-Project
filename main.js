#! /usr/bin/env node
import inquirer from "inquirer";
let totalBalance = 10000;
const pinNumber = 12345;
console.log("Welcome To Islamic Bank");
console.log("Welcome! Malik Hunain");
console.log("Here Is Your Account Balance: 10000");
let pinEntered = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter Your Pin Number",
    }
]);
// console.log(pinEntered.pin)
if (pinEntered.pin === pinNumber) {
    let atmQuestions = await inquirer.prompt([
        {
            name: "accountType",
            type: "list",
            message: "Select Your Account Type",
            choices: ["Current Account", "Savings Account"],
        },
        {
            name: "transMethod",
            type: "list",
            message: "Select Your Transaction Method",
            choices: ["Cash Withdrawal", "Fast Cash"],
        }
    ]);
    if (atmQuestions.transMethod === "Cash Withdrawal") {
        let cashwithdrawAmount = await inquirer.prompt([
            {
                name: "withdrawal",
                type: "number",
                message: "Enter The Amount You Want Yo Withdraw",
            }
        ]);
        // Greater than or equals to operator
        if (totalBalance >= cashwithdrawAmount.withdrawal) {
            totalBalance -= cashwithdrawAmount.withdrawal; // totalBalance = totalBalance - cashwithdrawAmount
            console.log(`Your Total Balance is : ${totalBalance}`);
        }
        else {
            console.log(`Insufficient Balance`);
        }
    }
    else {
        let fastCashAmount = await inquirer.prompt([
            {
                name: "fastCash",
                type: "list",
                message: "Select The Amount You Want To Withdraw",
                choices: ["1000", "3000", "5000"],
            }
        ]);
        if (totalBalance >= fastCashAmount.fastCash) {
            totalBalance -= fastCashAmount.fastCash; // totalBalance = totalBalance - cashwithdrawamount
            console.log(`You Total Balance Is :${totalBalance}`);
        }
        else {
            console.log(`Insufficient Balance`);
        }
    }
}
