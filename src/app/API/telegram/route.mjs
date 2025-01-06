import TelegramBot from "node-telegram-bot-api";

const token = '8158782146:AAFAbhVHbQ_Ot3n-zgOd_jgcJ_vlliEZ_FY';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    console.log(msg);
    bot.sendMessage(chatId, `Благодарю вас за сообщение ${msg.chat.first_name}! \ Скоро наш менеджер вам ответит!`);
})
