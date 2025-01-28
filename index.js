// *******************    TG BOT   ***********************

const ReceivingDataMoney = require('./Receiving data - money')
const botTG = require('node-telegram-bot-api')
require('dotenv').config()
const fs = require('fs');



const bot = new botTG(process.env.BOT_TOKEN, {polling: true})

bot.setMyCommands([
    {command: '/options', description: 'Параметры для вывода данных'},
])

bot.on('message', msg => {
    process.env.NTBA_FIX_350 = true;
    const txt = msg.text
    const chatId = msg.chat.id
    if (txt === '/start') {
        bot.sendMessage(chatId, 'Бот запущен')
        ReceivingDataMoney()
        setInterval(() => {
            rectCoin(bot, chatId)
        }, 3.8 * 60000);
    }
    if (txt === '/options') {
        bot.sendMessage(chatId, 'Введите данные для настройки бота\n\nФормат:\nКапитал\nСпред\nКол-во пар\nвремя (мин)')
    }
})

const rectCoin = (bot, chatId) => {
    try {
        var oneF = './5 minutes result coin/5 minute results bybit -> binance.txt'
        var teoF = './5 minutes result coin/5 minute results binance -> bybit.txt'
        var now = new Date();
        // bot.sendMessage(chatId, `Время: ${now.getHours()}:${now.getMinutes()}`)
        bot.sendDocument(chatId, oneF)
        bot.sendDocument(chatId, teoF)

    } catch (error) {
        console.log(error);
    }
}







  