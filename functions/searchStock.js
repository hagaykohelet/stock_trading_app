import stockMarket from "../data/db.js";


export default function searchStock(identifier) {
    let foundStock = stockMarket.stocks.filter(stock => stock.id == identifier ||stock.id == identifier )
    if (foundStock.length == 0) {
        console.log("this stock id not found! ");
    }
    return foundStock
}




