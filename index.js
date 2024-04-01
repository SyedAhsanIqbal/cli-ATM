import inquirer from "inquirer";
let currentbal = 10000;
let pincode = 4040;
console.log(`Your current balance is ${currentbal}`);
let answer = await inquirer.prompt([
    { message: "Enter your passcode", type: "number", name: "passcode" },
]);
if (answer.passcode == pincode) {
    console.log("Correct passcode");
    let answer1 = await inquirer.prompt([
        {
            message: "what you want do",
            type: "list",
            name: "selection",
            choices: ["check balance", "withdraw"],
        },
    ]);
    if (answer1.selection == "check balance") {
        console.log(`Your balance is ${currentbal}`);
    }
    else {
        let answer2 = await inquirer.prompt([
            { message: "Enter the amount", type: "number", name: "amount" },
        ]);
        if (answer2.amount > currentbal) {
            console.log(`Invalid amount`);
        }
        else {
            console.log(`Your reamining balance is ${currentbal - answer2.amount}`);
        }
    }
}
else {
    console.log("Invalid passcode");
}
