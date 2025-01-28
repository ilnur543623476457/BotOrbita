// *******************    Receiving data - percent  ***********************
const priceBinanceCoin = require('./priceBinanceCoin');
const priceBybitCoin = require('./priceBybitCoin');
const processingCoinsBySpread = require('./processingCoinsBySpread')
const coinPercentageFiles = require('./coinPercentageFiles')
const deletingFilesWithInterest = require('./deletingFilesWithInterest')
const fs = require('fs');


module.exports = (chatId, bot) => {
    setInterval(() => {
        priceBinanceCoin() // Получение цен пар монет с бинанса
        priceBybitCoin() // Получение цен пар монет с Байбита
    }, 60000);
    setInterval(() => {
        processingCoinsBySpread()
    }, 70000);
    setInterval(() => {
        coinPercentageFiles() // получение и запись пар монет (прибыль) каждые 5 мин
    }, 3.7 * 60000)
    setInterval(() => {
        deletingFilesWithInterest() // удаление файлов процента прибыли по формуле 
    }, 3.75 * 60000)
}



