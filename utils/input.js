import readline from "readline-sync"


export function input(print = "") {
    let input = readline.question(print)
    return input
}



export function intInput(print = "") {
    let input = readline.questionInt(print)
    return input
}



