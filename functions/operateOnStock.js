import stockMarket from "../data/db.js";
import { input, intInput } from "../utils/input.js";
import searchStock from "./searchStock.js";




export function OperateOnStock(operation, identifier) {
    if (!identifier) {
        identifier = input("please enter name or id: ")
    }
    let stock = searchStock(identifier)

    if (operation != "buy" && operation != "sell" && !operation) {
        operation = input("please enter 'buy' or sell: ")
    }
    let units = intInput(`how many unit you want to ${operation}? `)
    updateCount(units, operation, stock)
    updatePriceSelectedStock(operation, stock)
    updatePriceAllStocks(stock, operation)
}








function updateCount(units, operation, stock) {

    if (operation == "buy") {
        stock[0].availableStocks -= units
    }
    else if (operation == "sell") {
        stock[0].availableStocks += units
    }

}

function updatePriceSelectedStock(operation, stock) {
    if (operation == "buy") {
        stock[0].previousPrices.push(currentPrice)
        stock[0].currentPrice *= 1.05
    }
    if (operation == "sell") {
        stock[0].previousPrices.push(currentPrice)
        stock[0].currentPrice *= 0.95
    }
}

function updatePriceAllStocks(stock, operation) {
    if (operation == "buy") {
        for (let item of stockMarket.stocks) {
            if (item.category == stock.category) {
                item.previousPrices.push(currentPrice)
                item.previousPrices.currentPrice *= 1.05
            }
            else { continue }

        }

    } else if (operation == "sell") {
        if (item.category == stock.category) {
            stock[0].previousPrices.push(currentPrice)
            stock[0].currentPrice *= 0.95
        }


    }
}



