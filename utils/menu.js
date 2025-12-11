import { input, intInput } from "./input.js";
import searchStock from "../functions/searchStock.js";
import filterStockByPrice from "../functions/filterStockPrice.js"
import {OperateOnStock} from "../functions/operateOnStock.js" 

export function menu() {
    console.log(
        `
    =====welcome to stock market system=====
    1. search for stock by price or name
    2. show all stocks above or below a given price
    3. buy or sell a stock
    4. exit \n`
    )
}

let flag = true
while (flag) {
    menu()
    let choice = input("please enter your choice from menu: ")
    switch (choice) {
        case "1":
            let identifier = input(`\nwhich name or id do you want to search: `)
            let search = searchStock(identifier)
            console.log(search);

            break

        case "2":
            let price = intInput("\nplease enter a price do you want to search: ")
            let filter = input("enter a true if you want above or false for below: ")
            let found = filterStockByPrice(price, filter)
            console.log(found)
            break


        case "3":
            let operation = input("please enter buy or sell: ")
            let choice = input ("please enter name or id of stock")
            OperateOnStock(operation, choice)
            break

        case "4":
            flag = false
            break

        default:
            console.log("\ninvalid input!");

    }
}


