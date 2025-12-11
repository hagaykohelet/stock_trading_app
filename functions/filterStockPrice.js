import stockMarket from "../data/db.js";


export  default function filterStockByPrice(price, above) {
    let stockPrice = []
        if (above == "true"){
            stockPrice = stockMarket.stocks.filter(stock => stock.currentPrice >= price)
        }   
        else if(above == "false"){
            stockPrice = stockMarket.stocks.filter(stock => stock.currentPrice <= price)
        }
    if (stockPrice.length == 0){
        console.log("not found stocks do you want to filter about price! ");
    }
    return stockPrice

}



