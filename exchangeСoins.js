const fs = require('fs');
const recCoinPrice = require('./Receiving data - percent')

module.exports = function (chatId, bot) {
    setTimeout(() => {
        fs.readFile('binance.txt', 'utf8', (err, databin) => {
            fs.readFile('bybit.txt', 'utf8', (err, databyb) => {
                var binCoin = databin.split('\r\n')
                var bybCoin = databyb.split('\r\n')
                const result = [];
                for (let i = 0; i < binCoin.length; i++) {
                    for (let j = 0; j < bybCoin.length; j++) {
                        if (binCoin[i] === bybCoin[j]) {
                            result.push(binCoin[i])
                        }
                    }
                }
                console.log('монеты отсортированны');
                const sortUSDT = [];
                for (let i = 0; i < result.length; i++) {
                    const element = result[i];
                    if (element.indexOf('USDT') !== -1) {
                        sortUSDT.push(element)
                    }
                }
                fs.writeFileSync('exchange coins.txt', sortUSDT.join('\r\n'), 'utf-8', 'w');
                fs.readFile('exchange coins.txt', 'utf8', (err, expr) => {
                    var exprCoin = expr.split('\r\n')
                    var exitcc = exprCoin.filter((number) => number !== 'DASHUSDT');
                    var exitcc0 = exitcc.filter((number) => number !== 'NEIROUSDT');
                    var exitcc1 = exitcc0.filter((number) => number !== 'ZECUSDT');
                    var exitcc2 = exitcc1.filter((number) => number !== 'BEAMUSDT');
                    var exitcc3 = exitcc2.filter((number) => number !== 'DAIUSDT');
                    var exitcc4 = exitcc3.filter((number) => number !== 'OMGUSDT');
                    var exitcc5 = exitcc4.filter((number) => number !== 'HNTUSDT');
                    var exitcc6 = exitcc5.filter((number) => number !== 'BTTUSDT');
                    var exitcc7 = exitcc6.filter((number) => number !== 'WAVESUSDT');
                    var exitcc8 = exitcc7.filter((number) => number !== 'RENUSDT');
                    var exitcc9 = exitcc8.filter((number) => number !== 'XEMUSDT');

                    // console.log(exitcc1);
                    fs.writeFileSync('exchange coins.txt', exitcc9.join('\r\n'), 'utf-8', 'w');

                })
            });
        });
        recCoinPrice()
    }, 500);
}
