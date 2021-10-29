const Telegraf = require('telegraf').Telegraf
const bot = new Telegraf('1987739698:AAHakqMQ2OwJaVNt9LF89smkP4K9VpbRW6g');
bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Привет, используй комманды, что бы начать.')
})

bot.command('menu', ctx => {
    console.log(ctx.from)
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, 'Вы в меню', {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Начать', callback_data: 'start' },
                ],
                [
                    { text: 'Предыстория', callback_data: 'prehistory' },
                ]
            ]
        }
    })
})

bot.command('help', ctx => {
    console.log(ctx.from)
    let helpMessage = 'help';
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, helpMessage, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'start', callback_data: 'start' },
                ],
                [
                    { text: 'prehistory', callback_data: 'prehistory' },
                ],
                [
                    { text: 'help', callback_data: 'help' },
                ]
            ]
        }
    })
})

bot.action('prehistory', (ctx, next) => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, ' ');
    /* bot.telegram.sendMessage(ctx.chat.id, ' '); */
})



// -----------НАЧАЛО КВЕСТА!-----------

bot.action('start', (ctx, next) => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Сандро шел по лесу, его ноги плелись за ним, а его глаза были пустыми - безжизненное тело, только так можно было его описать. Как тут ногой зацепился за корень дерева и в момент падения его сознание вернулось.', {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "- Куло, моя нога...", callback_data: 'page0_1' },
                    { text: "- Где это я?", callback_data: 'page0_1' }
                ],
            ]
        }
    })
})

bot.action('page0_1', (ctx, next) => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Сандро поднялся на ноги, оглиделся и понял, что он ничего не помнит. Он помнит это странное ощущение когда щел прямо, буд-то во сне, но сейчас, все стало слишком реалестичным. Он чувствует свои руки, ноги и даже эту влагу навещую в воздухе. Он думал осмотрется, как тут на дереве обьявился странный мужчина, одетый в старые тряпки.', {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "- Кто ты!?", callback_data: 'page0_2',},
                    { text: "- Где я?!", callback_data: 'page0_2' }
                ],
            ]
        }
    })
})

bot.action('page0_2', (ctx, next) => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, '- Не задавай мне много вопросы! Я не люблю говорить с только прибывшими. Я Фернандо и я говорю, а ты запоминаешь, ты грешник и утебя есть номер: 500713602 твое имя Сандро, тебе 32 года и ты живешь на окраине города Палермо, женат и имеешь 3 детей. Я это все тебе повторяю, так как тебя сильно ударили по голове, мало ли уже забыл. Грустная у тебя судьба, но пойми бюракратия загробного мира не чуть не лучше человеческого, так что ты тут оказался не просто так. Теперь перейдем к главному: ты должен выбрать свой путь. Ты грешил в своей жизни, но можешь заслужить прощение Бога, но для этого ты пойдешь прямо, там встретишь смерть и там ты узнаешь все подробности, как вернуть лояльность Отца всевышнего, но всегда дан выбор, ты можешь вернуться, но тогда ты разгневаешь Богов.Инструктаж закончен, прощай, надеюсь не навсегда.', {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Кто это был…", callback_data: 'page0_3' },
                    { text: "5, 0, 0, 7....", callback_data: 'page0_3' }
                ],
            ]
        }
    })
})

bot.launch();

