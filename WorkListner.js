import readline from 'readline';
import chalk from 'chalk';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const showMenu = () => {
   
    console.log(chalk.green("1.") + " Add Task");
    console.log(chalk.green("2.") + " View Task");
    console.log(chalk.green.bold("3.") + chalk.red.bold(" Exit"));
    rl.question(chalk.yellow("Choose an option: "), handleInput);
};

const todos = [];

const handleInput = (option) => {
    if(option === "1"){
        rl.question(chalk.cyan("Enter your task: "), (task) => {
            todos.push(task);
            console.log(chalk.greenBright("Your task added:"), chalk.white(task));
            showMenu(); 
        });
    }
    else if(option === "2"){
        console.log(chalk.magentaBright("Your tasks:"));
        if (todos.length === 0) {
            console.log(chalk.gray("No tasks yet."));
        } else {
            todos.forEach((task, index) => {
                console.log(chalk.yellow(`${index + 1}.`) + ` ${task}`);
            });
        }
        showMenu();
    }
    else if(option === "3"){
        console.log(chalk.redBright("Bye Bye."));
        rl.close();
    }
    else{
        console.log(chalk.red("Invalid option."));
        showMenu();
    }
};

showMenu();
