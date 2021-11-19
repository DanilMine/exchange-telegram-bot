const Telegraf = require('telegraf').Telegraf
const bot = new Telegraf('1987739698:AAHakqMQ2OwJaVNt9LF89smkP4K9VpbRW6g');

//Концовки

let dead1 = '*НЕДОСТУПНО*\n\n';
let dead2 = '*НЕДОСТУПНО*\n\n';
let dead3 = '*НЕДОСТУПНО*\n\n';
let dead4 = '*НЕДОСТУПНО*\n\n';
let dead5 = '*НЕДОСТУПНО*\n\n';
let dead6 = '*НЕДОСТУПНО*\n\n';
let dead7 = '*НЕДОСТУПНО*\n\n';
let dead8 = '*НЕДОСТУПНО*';

let end1 = '*ХОРОШАЯ КОНЦОВКА*';
let end2 = '*СРЕДНЯЯ КОНЦОВКА*';
let end3 = '*ПЛОХАЯ КОНЦОВКА*';

let death = 0;
let result = 0;
let message = '...';
let message2 = '...';
function showMessage() {
if(result >= 2) {
    message = 'Твой вердикт... Ты прощен, Сын мой. Так и быть я подарю тебе второй шанс и твоя душа будет очищенна от зла. Может ты и совершишь много ошибок далее, но все же в тебе есть то добро, ради которого ты имеешь право быть под моей защитой.';
    message2 = 'Сандро вернулся домой. В тот же вечер, когда на него напали. Он все помнил, что с ним было, но ему запретили, чтолибо рассказывать дургим об этом вечере, так что он хранил молчание. Он взял свой мечь и прошел вниз дома, сказав жене, что скоро вернёться. Он ждал около минут 20 и вот - он объявились. Та самая тройка. Он быстрыми движениями оглушил двух и быстро догнал третего, чтобы тот больше не сделал глупостей. Таким образом Сандро получил благословене Божье. И теперь он может спать спокойно.\n\nФинал Игры №1: "Спасён и Сохранён" ';
    end1 = 'Финал Игры №1: "Спасён и Сохранён"';
} else if(result = 0, 1) {
    message = 'Твой вердикт... Не однозначен. Ты вроде как прошел и не плохо. Но все же, это не тот результат за который я могу тебя похвалить. Я сотру твою память и ты будешь вынужден пройти эти испытания вновь. Все, что было тут ты забудешь. Пусть твоя душа подскажет тебе, как ты мог поступить иначе. Тогда может все поменяется... Удачи.';
    message2 = 'Бог направил свет на Сандро. Его разум погас, а все, что было с ним последнее время он забыл. Его отправили назад в тёмный лес, что бы решить вновь его судьбу...\n\nФинал Игры №2: "Цикл повторяется вновь..."';
    end2 = 'Финал Игры №2: "Цикл повторяется вновь..."';
} else {
    message = 'Твой вердикт... Жаль тебя Сандро, но ты не смог меня порадовать. То как ты прошел испытание... Это ужасно. Жаль, но я не могу тебя простить, так что я возвращаю тебя на землю. Ты забудешь меня и больше не вспомнишь. Прощай!'; 
    message2 = 'Сандро проснулся в своей кровати дома. Он забыл все, что с ним было... Но его это не волновало, так как случилось ужасное... Жена Сандро погибла. Она не смогла выжить в тот самый день. Она погибла защитив своих детей.\n\nФинал Игры №3: "Жизнь - не сахар"';
    end3 = 'Финал Игры №3: "Жизнь - не сахар"';
}
}

let deadGlobal = '\n\nПосле этого кошмара Сандро проснулся в своей кровати дома. Он так и не понял, к чему это было, где он был, и что с ним произошло... Он так и не сможет заслужить доверие Господа, а значит все случилось намного ужасней, чем могло быть… Жена Сандро погибла в тот самый день от ножевого ранения, она смогла прогнать последнего грабителя, но сама не смогла выжить…\n\n';

function waitFor (ms) {
    return new Promise ((resolve, reject) => {
        setTimeout(resolve, ms)
    })
}

bot.command('start', ctx => {
    console.log(ctx.from)
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, 'Чтобы перейти к началу игры пропиши => /menu и выбери пункт "Начать игру"\n\nТак же если будут трудности, всегда можешь обратиться к подсказкам => /help.')
})

bot.command('menu', ctx => {
    console.log(ctx.from)
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, 'Вы в меню выбора', {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '▶ Начать игру', callback_data: 'page0_0' },
                ],
                [
                    { text: '⌛ Предыстория', callback_data: 'prehistory' },
                ],
                [
                    { text: '📊 Игровая статистика', callback_data: 'game_data' },
                ],
                [
                    { text: '💾 Главы', callback_data: 'part' },
                ],
            ]
        }
    })
})

bot.command('help', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
    let helpMessage = 'Панелька подсказок. Выберите главу, в которой у вас возникли трудности.';
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, helpMessage, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Глава 0: "Сумрачный Лес"', callback_data: 'paragraph_0' },
                ],
                [
                    { text: 'Глава 1: "Лимб"', callback_data: 'paragraph_1' },
                ],
                [
                    { text: 'Глава 2: "Те, кто любили..."', callback_data: 'paragraph_2' },
                ],
                [
                    { text: 'Глава 3: "Встреча с Вергилием"', callback_data: 'paragraph_3'},
                ],
                [
                    { text: 'Глава 4: "Те, кто ненавидят себя"', callback_data: 'paragraph_4'},
                ],
                [
                    { text: 'Глава 5: "Встреча с Медузой"', callback_data: 'paragraph_5'},
                ],
                [
                    { text: 'Глава 6: "Вопрос Дружбы"', callback_data: 'paragraph_6'},
                ],
            ],
        }
    })
})



// ----------- HELP -----------

bot.action('paragraph_0', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
    await bot.telegram.sendMessage(ctx.chat.id, 'Ответы на вопросы по порядку: 2,3,3')})

bot.action('paragraph_1', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
    await bot.telegram.sendMessage(ctx.chat.id, 'Для получения бала ребёнка брать не нужно.')})

bot.action('paragraph_2', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
    await bot.telegram.sendMessage(ctx.chat.id, 'Помогите женщине, но не соглашайтесь брать от неё награду.')})

bot.action('paragraph_3', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
    await bot.telegram.sendMessage(ctx.chat.id, 'Бегите по скалам.')})

bot.action('paragraph_4', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
    await bot.telegram.sendMessage(ctx.chat.id, 'Не плывите по течению и будьте вежливыми с голосом.')})

bot.action('paragraph_5', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
    await bot.telegram.sendMessage(ctx.chat.id, 'Ответы на вопросы по порядку: 2,3,2')})

bot.action('paragraph_6', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
    await bot.telegram.sendMessage(ctx.chat.id, 'Пропустите Вергилия ИЛИ сразу пойдите первыми, а потом выберите вариант "А может...".')})

// ----------- HELP (END) -----------

bot.action('part', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
    let helpMessage = 'Панелька Глав. В случае каких-то багов можете вернуться в начало главы, или при желании переиграть момент. \n\nНо при переигрывании конечный результат  может сломаться. Начинайте играть с начала!!!';
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, helpMessage, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Глава 0: "Сумрачный Лес"', callback_data: 'page0_0' },
                ],
                [
                    { text: 'Глава 1: "Лимб"', callback_data: 'page1_0' },
                ],
                [
                    { text: 'Глава 2: "Те, кто любили..."', callback_data: 'page2_0' },
                ],
                [
                    { text: 'Глава 3: "Встреча с Вергилием"', callback_data: 'page3_0'},
                ],
                [
                    { text: 'Глава 4: "Те, кто ненавидят себя"', callback_data: 'page5_0'},
                ],
                [
                    { text: 'Глава 5: "Встреча с Медузой"', callback_data: 'page6_0'},
                ],
                [
                    { text: 'Глава 6: "Вопрос Дружбы"', callback_data: 'page7_0'},
                ],
            ],
        }
    })
})

bot.action('prehistory', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
    await bot.telegram.sendMessage(ctx.chat.id, 'Молодость [до 18 лет]\nЖизнь Сандро была обычной, он жил в семье перекупщиков, в деньгах никогда проблем не было, его семья была католиками и сильно веровала исповеданиям Бога, его молодость прошла в поэзии и рисовании, он ходил в приличную школу, занимался спортом и мечтал стать великим художником, но родители хотели передать ему свой бизнес. Так жизнь и шла, он закончил учебу, в институт он так и не поступил из-за сложности системы в те времена, да и денег было нужно много отдать, так что он решил оставить свое искуство пока в пределах родного города и заняться бизнесом\n\nЖестокая судьба. [18 летие]\nСобытия происходят в 1472 г. в Неапольском королевстве на окраинах города Палермо. На его город напало войско Сардинское, они обокрали город и почти никого не оставили в живых, Сандро в это время был далеко от города по делам семьи и только возвращался домой, когда он вернулся, к его ужасу, все чем только он мог дорожить – было потеряно.\n\nТяжелые дни [до 23 лет]\nПервые лет 5 были самыми тяжелыми - это был период восстановления города. Тогда нужна была рабочая сила, но Сандро никак не годился на роль рабочего; он был худощавым, среднего роста, брюнетом. Еды у него всегда не хватало, так что набрать массу было тяжело. Тем более военные скептически относились к тем кто потерял дом, из-за чего часто были конфликты с местынм ополчением. Ситуации были разные: грабежи, драки и даже доходило до кое-чего хуже...\n\nНовая жизнь [до 25 лет]\nСо временем он смог найти себе работу в одной из главных торговых точок города, его поставили из-за долгов уборщиком, но как-то раз он смог продать дорогую вещь всего за пару фраз. Начальник, узнав об этом, дал ему место у кассы, что значительно подняло его прибыль.Сандро смог не то, что быстро вернуть долг, так и нормально зарабатывать. Через пару лет он открыл свой бизнесс на окраине города. Купил дом, где раньше распологался дом его родителей, а так же нашел в той местности красавицу жену...\n\nЕму 32 года, у него 3 детей, красивая жена и процветающий бизнесс, но однажды с ним случается ужасное - на его дом напали грабители. За время бедности Сандро совершил много грехов и вернуться к вере просто так не мог, черты послали к нему грабителей, с которыми он смог разобраться, но один из них смог все-таки ударить Сандро сильно по голове. Увидев в этом шанс, Бог лично решает направить к нему своих слуг и испытать его, проверив, достоин ли он получить его милость вновь.',
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'start', callback_data: 'page0_0' },
                ]
            ]
        }})})

bot.action('game_data', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
    bot.telegram.sendMessage(ctx.chat.id, 'Меню игровых данных:\n\n' + 'количество смертей: ' + death,
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Сбросить количество смертей', callback_data: 'death_0' },
                ],
                [
                    { text: 'Разблокированные концовки', callback_data: 'end_0' },
                ],
            ]
}})})

bot.action('end_0', async (ctx, next) => {
    console.log(ctx.from)
    death = 0;
    bot.telegram.sendMessage(ctx.chat.id, 'Все возможные смерти которые вы видели:\n\n' + dead1 + dead2 + dead3 + dead4 + dead5 + dead6 + dead7 + dead8 + '\n\nВсе Финалы игры\n\n' + end1 + '\n\n' + end2 + '\n\n' + end3 )})

bot.action('death_0', async (ctx, next) => {
    console.log(ctx.from)
    death = 0;
    bot.telegram.sendMessage(ctx.chat.id, 'Количество сброшено!')})

// -----------НАЧАЛО КВЕСТА!-----------

bot.action('page0_0', async (ctx, next) => {
    console.log(ctx.from)
    result = 0;
    await waitFor(500);
    await bot.telegram.sendMessage(ctx.chat.id,'Глава 0: "Сумрачный Лес"')
	await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/gloomy_forest.jpg"
    })
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'Сандро очнулся в лесу. Где он и что происходит, он не понимал.',{
        reply_markup: {
            inline_keyboard: [ //keyboard
                [
                    { text: "Где я?...", callback_data: "page0_1" },
                ],
            ],
        }
    })
})

bot.action('page0_1', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'Вы решили осмотреться и заметили у себя под ногами ✉ странную записку, в ней было написано следующее: \n\n"Здравствуй Сандро, ты оказался тут не просто так, твоя судьба была изменена, ты имеешь право вновь стать тем, кто достоин быть рядом с Господом своим. Долго не задерживайся и быстрее уходи из леса, назад главное не ходи, там… \n- Листок  был оборван на этих словах"')
    await waitFor(500);
    await bot.telegram.sendMessage(ctx.chat.id,'Вы не были уверены стоит ли доверять словам из записки, но были уверенны в одном, что нужно делать ноги из этого леса. \n\nПеред вами 3 пути:\n1⃣ Дорога вперед была проложена каменной тропинкой и, возможно, была лучшим вариантом...\n2⃣ Немного правее была другая дорожка, которая была вытоптанная шагами, скорее всего, людей.\n3⃣ И последняя была сзади, дорожка, которая была самой средней из всех, она не была идеальной, но и не так плоха, как другие... \nКуда же стоит пойти? ',{
        reply_markup: {
            inline_keyboard: [ //keyboard
                [
                    { text: "Каменная дорожка прямо", callback_data: "page0_t_0" },
                ],
                [
                    { text: "Тропинка направо", callback_data: "page0_r_0" },
                ],
                [
                    { text: "Возможно, все же путь назад?", callback_data: "page0_d_0" },
                ],
            ],
        }
    })
})

// -----------ПОЙТИ ПРЯМО!-----------

bot.action('page0_t_0', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/f_top.jpg"
    })
    await waitFor(500);
    await bot.telegram.sendMessage(ctx.chat.id,'Немного подумав, вы решили, что противоположностью назад, может быть только прямо. Дорожка прямо была хорошо проложена, вы были уверенны, что рано или поздно вы выйдите из этого леса...')
    await waitFor(500);
    await bot.telegram.sendMessage(ctx.chat.id,'...')
    await waitFor(500);
    await bot.telegram.sendMessage(ctx.chat.id,'...')
    await waitFor(500);
    await bot.telegram.sendMessage(ctx.chat.id,'...')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'Густной туман стал смениваться на свет солнца, но где-то вглуби леса вы услышали рев диких животных...',{
        reply_markup: {
            inline_keyboard: [ //keyboard
                [
                    { text: "Нужно быстрее уходить отсюда.", callback_data: "page0_t_1" },
                ],
            ],
        }
    })
})

bot.action('page0_t_1', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/f_top2.jpg"
    })
    await waitFor(500);
    await bot.telegram.sendMessage(ctx.chat.id,'Солнечный свет был все ярче и ярче. Вы почти покинули этот лес.')
    await waitFor(500);
    await bot.telegram.sendMessage(ctx.chat.id,'...')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'Вдали вы увидели ворота. Возможно, вам стоит идти именно туда, так что долго не думая...',{
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Вы направились к воротам", callback_data: "page0_2" },
                ],
            ],
        }
    })
})

// -----------ПОЙТИ ПРЯМО! (END) -----------

// -----------ПОЙТИ НАПРАВО!-----------

bot.action('page0_r_0', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/f_right.jpg"
    })
    await waitFor(500);
    await bot.telegram.sendMessage(ctx.chat.id,'Чтобы не идти прямо, но и не назад вы решили пойти направо. Конечно, это было бы более правильно назвать по диагонале, но это было не важно...')
    await waitFor(500);
    await bot.telegram.sendMessage(ctx.chat.id,'...')
    await waitFor(500);
    await bot.telegram.sendMessage(ctx.chat.id,'...')
    await waitFor(500);
    await bot.telegram.sendMessage(ctx.chat.id,'...')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'В определенный момент вы дошли до какого-то странного места. Это был чей-то ночлег. Вероятнее всего тут кто-то спал и огонь еще горел, но кто или что тут было вам не известно. Посмотрев далее, вы увидели дорожку, которая была более надежной, её структура уже была больше похожа на каменную. Вы хотели пойти дальше, но стоило ли бы вам осмотреться, может найдете что-то полезное?',{
        reply_markup: {
            inline_keyboard: [ //keyboard
                [
                    { text: "Нужно быстрее уходить отсюда.", callback_data: "page0_r_1" },
                ],
                [
                    { text: "Может я найду что-то полезное...", callback_data: "page0_r_0_0" },
                ],
            ],
        }
    })
})

bot.action('page0_r_0_0', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/f_halt.jpg"
    })
    await waitFor(500);
    await bot.telegram.sendMessage(ctx.chat.id,'Вы решили остаться и найти что-то полезное...')
    await waitFor(500);
    await bot.telegram.sendMessage(ctx.chat.id,'...')
    await waitFor(500);
    await bot.telegram.sendMessage(ctx.chat.id,'Где-то вдали вам послышались звуки диких животных, возможно они опасны...')
    await waitFor(500);
    await bot.telegram.sendMessage(ctx.chat.id,'...')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'Осмотрев местность вокруг привала, вы ничего не нашли, кроме всякого мусора, может стоит посмотреть около костра?',{
        reply_markup: {
            inline_keyboard: [ //keyboard
                [
                    { text: "Нужно уходить быстрее.", callback_data: "page0_r_1" },
                ],
                [
                    { text: "Возможно, стоит посмотреть ближе...", callback_data: "page0_r_0_1" },
                ],
            ],
        }
    })
})

bot.action('page0_r_0_1', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
    await bot.telegram.sendMessage(ctx.chat.id,'Вы сели на бревно и стали смотреть в огонь.')
    await waitFor(500);
    await bot.telegram.sendMessage(ctx.chat.id,'...')
    await waitFor(500);
    await bot.telegram.sendMessage(ctx.chat.id,'Справа от другого бревна лежала какая-то записка, заметив её, вы пересели на то древно и стали читать её.')
    await waitFor(500);
    await bot.telegram.sendMessage(ctx.chat.id,'...')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'- Александр, сожги это письмо после того, как прочтешь его. Как дойдешь до ворот произнеси этот номер: 59018206... далее была написана еще какая-то цифра и какой-то текст, но записка была почти сожжена... Что делать дальше?',{
        reply_markup: {
            inline_keyboard: [ //keyboard
                [
                    { text: "Теперь точно нужно уходить быстрее.", callback_data: "page0_r_1" },
                ],
                [
                    { text: "Может я найду все-таки другую часть записки?", callback_data: "page0_r_0_2" },
                ],
            ],
        }
    })
})

bot.action('page0_r_0_2', async (ctx, next) => {
    console.log(ctx.from)
    death = death + 1;
    dead2 = '💀Концовка №2: "Смерть от желания легкого пути"'
    await waitFor(500);
    await bot.telegram.sendMessage(ctx.chat.id,'Вы стали искать другие возможные записки, но ваши попытки были напрасны, ничего больше, кроме всякого мусора на траве, здесь не было.')
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/f_end.jpg"
    })
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'Как только вы решили пойти дальше, на Сандро напали дикие звери, которые явно были голодные, так что для вас это путешествие было окончено...' + deadGlobal + dead2,{
        reply_markup: {
            inline_keyboard: [ 
                [
                    { text: "Начать с самого начала", callback_data: "page0_0" },
                ],
            ],
        }
    })
})

bot.action('page0_r_1', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
    await bot.telegram.sendMessage(ctx.chat.id,'У вас времени не было развлекаться у привала, вы шли уже по более хорошей дорожке и сейчас вам казалось, что выход уже рядом...')
    await waitFor(500);
    await bot.telegram.sendMessage(ctx.chat.id,'...')
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/f_right2.jpg"
    })
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'Наконец-то вы увидели что-то похожее на выход из леса... И где-то в дали вам виднелась какая-то постройка...\n\nЭто были какие-то ворота.',{
        reply_markup: {
            inline_keyboard: [ //keyboard
                [
                    { text: "Пора уходить", callback_data: "page0_2" },
                ],
            ],
        }
    })
})

// -----------ПОЙТИ НАПРАВО! (END) -----------

// -----------ПОЙТИ НАЗАД!-----------

bot.action('page0_d_0', async (ctx, next) => {
    console.log(ctx.from)
    death = death + 1;
    dead1 = '💀Концовка №1: "Смерть от неверия"'
    await waitFor(500);
    await bot.telegram.sendMessage(ctx.chat.id,'Вы проявили свою твердость характера, решив, что стоит пойти назад. Дорожка не была идеальной, но вы не собирались играть в эти игры...')
    await waitFor(500);
    await bot.telegram.sendMessage(ctx.chat.id,'...')
    await waitFor(500);
    await bot.telegram.sendMessage(ctx.chat.id,'...')
    await waitFor(500);
    await bot.telegram.sendMessage(ctx.chat.id,'...')
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/f_down.jpg"
    })
    await waitFor(500);
    await bot.telegram.sendMessage(ctx.chat.id, 'Пройдя далее дорожка закончилась, но вы все же думали, что выход рядом... Очевидно было, что его здесь нет, но вы не сдавались...')
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/f_end.jpg"
    })
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'В определенный момент вы услышали лай диких зверей и через минуты они уже были рядом с вами. Это были не просто голодные волки, как вы могли подумать, это была стая состоявшая из волков, пум и львов. Все они имели конености разных животных, но вам не было времени их рассматривать, ведь они были голодные и как раз-таки нашли себе еду...' + deadGlobal + dead1,{
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Начать с самого начала", callback_data: "page0_0" },
                ],
            ],
        }
    })
})

// -----------ПОЙТИ НАЗАД! (END)-----------

// ----------- У ВОРОТ!  -----------

bot.action('page0_2', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'Подходя к воротам, вы обнаружили странные плиты, возможно, стоило бы на них взглянуть?',{
        reply_markup: {
            inline_keyboard: [ 
                [
                    { text: "Подойти к воротам", callback_data: "page0_3" },
                ],
                [
                    { text: "Взглянуть на плиты", callback_data: "page0_3_0" },
                ],
            ],
        }
    })
})

bot.action('page0_3_0', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
    await bot.telegram.sendMessage(ctx.chat.id,'Вы решили взглянуть на плиты...')
    await waitFor(500);
    await bot.telegram.sendMessage(ctx.chat.id,'...')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'Подойдя к ним ближе вы узначи, что это были... Плиты на которых написаны Заповеди Божьи...   ',{
        reply_markup: {
            inline_keyboard: [ 
                [
                    { text: "Подойти к воротам", callback_data: "page0_3" },
                ],
                [
                    { text: "Прочесть их", callback_data: "page0_3_1" },
                ],
            ],
        }
    })
})

bot.action('page0_3_1', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'1⃣ Я – Господь Бог твой, да не будет у тебя других богов, кроме Меня.\n\n2⃣ Не делай себе кумира и ни какого изображения того, что на небе вверху, что на земле внизу и что в водах ниже земли; не поклоняйся и не служи им.\n\n3⃣ Не произноси имени Господа Бога твоего напрасно.\n\n4⃣ Помни день покоя, чтобы проводить его свято; шесть дней трудись и совершай в них все твои дела, а день седьмой – день покоя – да будет посвящен Господу Богу твоему.\n\n5⃣ Почитай отца твоего и матерь твою, чтобы тебе было хорошо и чтобы ты долго жил на земле.\n\n6⃣ Не убивай.\n\n7⃣ Не прелюбодействуй.\n\n8⃣ Не кради.\n\n9⃣ Не произноси ложного свидетельства на ближнего твоего.\n\n1⃣0⃣ Не желай жены ближнего твоего и не желай дома ближнего твоего, ни поля его, ни раба его, ни рабыни его … ни всего того, что принадлежит ближнему твоему.')
    await waitFor(500);
    await bot.telegram.sendMessage(ctx.chat.id,'Думаю тут мне делать больше нечего.',{
        reply_markup: {
            inline_keyboard: [ 
                [
                    { text: "Подойти к воротам", callback_data: "page0_3" },
                ],
            ],
        }
    })
})

bot.action('page0_3', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/f_gates.jpg"
    })
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'Вы подошли к воротам. Сами ворота были высотой метров 10, а стены вокруг еще больше. Странно, что вы не увидели это здание еще в лесу, но вы понимали, что вся проблема была в тумане.')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'Вы попытались кого-то позвать, и сзади вас появился чахлый старик в черной накидке. У него в руках был меч, но он не был похож на того, кто мог вас ранить. Его лица не было видно, но как он там оказался, вас напугало больше.',{
        reply_markup: {
            inline_keyboard: [ 
                [
                    { text: "Извините... А как мне уйти отсюда...?", callback_data: "page0_4" },
                ],
            ],
        }
    })
})

//------------------------------СЛАДКОВА

bot.action('page0_4', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/f_dead.jpg"
    })
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'-Здравствуй, молодец... У тебя много вопросов, но ответы на них ты получишь только внутри. Сейчас ты должен знать только одно. Тебя выбрал Бог дабы дать тебе 2 шанс. Твоя праведная жизнь разозлила чертей, и они возжелали испортить тебе её, чтобы ты вернулся к тем, кто тебе помог выжить... Хах... В общем, я должен проверить достин ли ты попасть внутрь. Готов ли ты ответить на мои вопросы?',{
        reply_markup: {
            inline_keyboard: [ 
                [
                    { text: "Готов...", callback_data: "page0_5_1" },
                ],
                [
                    { text: "К слову, я не тот, о ком вы подумали..", callback_data: "page0_5_5" },
                ],
            ],
        }
    })
})

bot.hears('Сандро', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'Сандро, к чему же это было? Я и так знал твоё имя. Больше не смей меня перебивать. Значит ты готов, так что мы начинаем!',{
        reply_markup: {
            inline_keyboard: [ 
                [
                    { text: "Готов...", callback_data: "page0_5_1" },
                ],
            ],
        }
    })
})


bot.hears('Александр', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'Что!? Но ведь ты должен был уже быть за вратами... Твоё место, Александр, в Раю, но по ошибке ты оказался в этом лесу... Извини, что не узнал, просто сегодня еще кое-кто должен прийти. Так что назови мне свой номер и ты можешь проходить дальше. Главное, подойди к Харону, он тебя проведет...Так вот, я слушаю.') })

bot.hears('59018206', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'- А последняя цифра-то какая? Хотя, ты так долго пробыл в лесу и запомнил эти цифры... Меня удивляет то, что ты, впринципе, жив... Ладно, я пропущу тебя, сомневаюсь, что Сандро мог угадать 8 цифр из твоего номера, это же просто не возможно... Хах, ладно, посленяя цифра твоего номера 3. Так что проходи и скажи Харону о себе.',{
        reply_markup: {
            inline_keyboard: [ 
                [
                    { text: "Конечно, спасибо за понимание", callback_data: "page1_0" },
                ],
            ],
        }
    })
})

//----------------------------- END

bot.action('page0_5_1', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'Я задам тебе 3 вопроса. Ответишь правильно и я тебя пропущу, а иначе ты не достоин быть тут.\n\nВопрос 1:\nЧто такое вера (по Данте)?',{
        reply_markup: {
            inline_keyboard: [ 
                [
                    { text: "1. Воплощение Истины в жизни.", callback_data: "page0_5_1_f1" },
                ],
                [
                    { text: "2. Познание Истины.", callback_data: "page0_5_2" },
                ],
                [
                    { text: "3. Желание, устремленность к Истине.", callback_data: "page0_5_1_f2" }
                ],
            ],
        }
    })
})

bot.action('page0_5_1_f1', async (ctx, next) => {
    console.log(ctx.from)
    death = death + 1;
    dead3 = '💀Концовка №3: "Смерть от незнания"'
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'Возможно, этот вопрос сложноват, но твой ответ не верный. Воплощение Истины в жизни - это Любовь!')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'В следущий миг старик скинул капюшон с головы, и оттуда было видно лишь его череп, никакой плоти. Он стремительно продвинулся к вам и проткнул своим мечом...'+ deadGlobal + dead3 ,{
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Начать с самого начала", callback_data: "page0_0" },
                ],
                [
                    { text: "Вернуться к воротам", callback_data: "page0_4" },
                ],
            ],
        }
    })
})

bot.action('page0_5_1_f2', async (ctx, next) => {
    console.log(ctx.from)
    death = death + 1;
    dead3 = '💀Концовка №3: "Смерть от незнания"'
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'Возможно, этот вопрос сложноват, но твой ответ не верный. Желание, устремленность к Истине - это Жизнь!')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'В следущий миг старик скинул капюшон с головы, и оттуда было видно лишь его череп, никакой плоти. Он стремительно продвинулся к вам и проткнул своим мечом...'+ deadGlobal + dead3 ,{
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Начать с самого начала", callback_data: "page0_0" },
                ],
                [
                    { text: "Вернуться к воротам", callback_data: "page0_4" },
                ],
            ],
        }
    })
})



bot.action('page0_5_2', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'Верно. Познание Истины - есть сама вера.\n\nВопрос 2:\nКакая заповедь Божья запрещает предательство? Если быть точным, то не говори ложного про ближнего своего.',{
        reply_markup: {
            inline_keyboard: [ 
                [
                    { text: "6 заповедь", callback_data: "page0_5_2_f" },
                    { text: "8 заповедь", callback_data: "page0_5_2_f" },
                    { text: "9 заповедь", callback_data: "page0_5_3" }
                ],
            ],
        }
    })
})

bot.action('page0_5_2_f', async (ctx, next) => {
    console.log(ctx.from)
    death = death + 1;
    dead3 = '💀Концовка №3: "Смерть от незнания"'
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'Сандро, ты живешь по этим заповедям, не зная их? Проваливай отсюда!')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'В следущий миг старик скинул капюшон с головы, и оттуда было видно лишь его череп, никакой плоти. Он стремительно продвинулся к вам и проткнул своим мечом...'+ deadGlobal + dead3 ,{
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Начать с самого начала", callback_data: "page0_0" },
                ],
                [
                    { text: "Вернуться к воротам", callback_data: "page0_4" },
                ],
            ],
        }
    })
})

bot.action('page0_5_3', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'Последний вопрос.\n\nВопрос 3:\nКак звали ученика Иисуса Христа, который предал его? Это знает каждый младенец, так что не разочаровывай меня.',{
        reply_markup: {
            inline_keyboard: [ 
                [
                    { text: "1. Иаков Зеведеев", callback_data: "page0_5_3_f" },
                    { text: "2. Симон Кананит", callback_data: "page0_5_3_f" },
                    { text: "3. Иуда Искариот", callback_data: "page0_5_4" }
                ],
            ],
        }
    })
})

bot.action('page0_5_3_f', async (ctx, next) => {
    console.log(ctx.from)
    death = death + 1;
    dead3 = '💀Концовка №3: "Смерть от незнания"'
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'Такой вопрос учат в учебниках истории, а ты не смог на него ответить, мне жаль, но другого выбора нет!')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'В следущий миг старик скинул капюшон с головы, и оттуда было видно лишь его череп, никакой плоти. Он стремительно продвинулся к вам и проткнул своим мечом...'+ deadGlobal + dead3,{
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Начать с самого начала", callback_data: "page0_0" },
                ],
                [
                    { text: "Вернуться к воротам", callback_data: "page0_4" },
                ],
            ],
        }
    })
})

bot.action('page0_5_4', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'Поздравляю, все же ты знаешь такие элементарные вещи, так что ты можешь пройти дальше. Удачи тебе, Сандро.',{
        reply_markup: {
            inline_keyboard: [ 
                [
                    { text: "Спасибо. Я пошел.", callback_data: "page1_0" },
                ],
            ],
        }
    })
})

bot.action('page0_5_5', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'Старик в черном немного был удивлен. Он был несомненно уверен, что единственный, кто мог сейчас прийти из леса - это был Сандро. Но он не мог видеть его лица, у него не было глаз. Конечно, по такой логике, он не мог и слышать, но такая возможность у него была и была намного развитой, чем у других.')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'- Допустим, и как же тебя зовут?')
	await bot.telegram.sendMessage(ctx.chat.id,'Напишите ваше имя (Пример: Сандро)') 
})

// ----------- У ВОРОТ! (END) -----------

// -----------ГЛАВА1: "ЛИМБ"-----------

let bog1 = '...';

bot.action('page1_0', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'Глава 1: "Лимб"')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'Зайдя за ворота, перед вами будто был другой мир. Со стороны и не скажешь, но внутри повсюду были скалы и реки. Люди плакали и горевали. Какие были их мотивы горечи, вы не знали, но было ясно, что это их наказание... Если вам до этого момента еще казалось, что это все какая-то шутка, то теперь такие мысли стали пропадать.')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'Вы прошли немного дальше и стали замечать все больше и больше мучеников...')
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/1_door.jpg"
    })
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'Продолжая идти все дальше, вы заметили в дали мужчину стоящего на лодке, он единственный был, кто не плакал и мужественно смотрел на остальных.',{
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Подойти к нему", callback_data: "page1_1" },
                ],
            ],
        }
    })
})

bot.action('page1_1', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/1_haron.jpg"
    })
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'- Здравствуйте, ваше имя Харон?')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'Он внимательно посмотрел на вас и сказал:\n- Здравствуй, назви своё имя и я, Харон, назову твой приговор. ')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'Пример текста(соблюдайте в точности большие буквы): Моё имя Сандро')
})

bot.hears('Моё имя Александр', async (ctx, next) => {
    console.log(ctx.from)
    death = death + 1;
    dead4 = '💀Концовка №4: "Вечные муки в Лимбе"';
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'Он посмотрел на вас повнимательнее:\n- Александр значит?')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'...')
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/1_end.jpg"
    })
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'- Действительно, Александр, это вы, но тут такое дело. Вас все же направили в Лимб не просто так, вы отправитесь в рай, я выдам вам лодку, но перед этим вы должны будете отстрадать в Лимбе 500 лет. Это не так долго по сравнению с другими. Думаю, вы же понимаете причину этого? Вы не были крещены, так что у вас есть время подумать, чем займетесь на том свете.'+ deadGlobal + dead4,{
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Вернуться к входу", callback_data: "page1_0" },
                ],
                [
                    { text: "Вернуться в самое начало", callback_data: "page0_0" },
                ],
            ],
        }
    })
})

bot.hears('Моё имя Сандро', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'Он посмотрел на вас повнимательнее:\n- Сандро значит?')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'...')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'- Действительно, Сандро. Отлично, значит ты должен пройти все круги Ада и тогда ты получишь милость Божью. Я не буду тебя заставлять страдать, как делают это многие, так что можешь проходить к своей лодке и плыть к следующим вратам. Не удивляйся, что так просто, но это так.')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'- А да, поговори с тем парнем в толпе, думаю он будет тебе полезен.', {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Подойти к странному парню", callback_data: "page1_2" },
                ],
            ],
        }
    })
})

bot.action('page1_2', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/1_men.jpg"
    })
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'Вы направились к парню, которому целовали руки... ')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'- Привет, я Сан...\n\nНе успев договорить он вас перебил:\n- Привет, Сандро. Я - Вергилий. То, что ты сейчас видишь, ни что иное, как покаяние этих грешников. После того, как они мне выговариваются им становится легче, им нужен тот, кто выслушает их. Ведь все они только и делают, что плачут и жалуются. Я сам согласился на это; вместо 100 лет пребывания в Лимбе меня назначили слушателем их. Так я смог сохранить рассудок и находится здесь мне нужно всего 40 лет. Как раз-таки мои 40 лет заканчиваются очень скоро, поэтому последнее моё задание сопроводить тебя в Рай, к Богу.', {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "И как ты собираешься помочь мне?", callback_data: "page1_3" },
                ],
            ],
        }
    })
})

bot.action('page1_3', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/1_men2.jpg"
    })
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'Я вряд ли смогу быть с тобой рядом, так как я буду идти своим путём, но иногда мой и твой будут пересекаться. Ты должен понимать, что на каждом уровне тебя ждёт какое-то испытание. Я слышал слова Харона, но думаю даже он для тебя что-то приготовил. В общем все, чем я могу тебе помочь, это назвать тебе за что отвечает каждый круг, а так же напомнить заповеди Божьи. ', {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Расскажи мне, что ждёт меня дальше.", callback_data: "page1_3_0" },
                ],
                [
                    { text: "Напомни мне заповеди.", callback_data: "page1_3_1" },
                ],
                [
                    { text: "Пожалуй, я пойду.", callback_data: "page1_4" },
                ],
            ],
        }
    })
})

//---------- ЗАПОВЕДИ ----------
bot.action('page1_3_1', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
    await bot.telegram.sendMessage(ctx.chat.id,'Так и быть - Я освежу твою память!')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'1⃣ Я – Господь Бог твой, да не будет у тебя других богов, кроме Меня.\n\n2⃣ Не делай себе кумира и ни какого изображения того, что на небе вверху, что на земле внизу и что в водах ниже земли; не поклоняйся и не служи им.\n\n3⃣ Не произноси имени Господа Бога твоего напрасно.\n\n4⃣ Помни день покоя, чтобы проводить его свято; шесть дней трудись и совершай в них все твои дела, а день седьмой – день покоя – да будет посвящен Господу Богу твоему.\n\n5⃣ Почитай отца твоего и матерь твою, чтобы тебе было хорошо и чтобы ты долго жил на земле.\n\n6⃣ Не убивай.\n\n7⃣ Не прелюбодействуй.\n\n8⃣ Не кради.\n\n9⃣ Не произноси ложного свидетельства на ближнего твоего.\n\n1⃣0⃣ Не желай жены ближнего твоего и не желай дома ближнего твоего, ни поля его, ни раба его, ни рабыни его … ни всего того, что принадлежит ближнему твоему.',{
        reply_markup: {
            inline_keyboard: [ 
                [
                    { text: "Расскажи мне, что ждёт меня дальше.", callback_data: "page1_3_0" },
                ],
                [
                    { text: "Пожалуй, я пойду.", callback_data: "page1_4" },
                ],
            ],
        }
    })
})
//---------- О Кругах ----------
bot.action('page1_3_0', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
    await bot.telegram.sendMessage(ctx.chat.id,'Так и быть - Я поведаю тебе эту тайну.')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'В Аду ты встретишь много разных испытаний. Каждый страж будет проверять тебя на твои действия и поступки. Где ты нарушишь заповеди и поступишь плохо. Конечно, не факт, что только добросовестный путь приведет тебя к успеху, но, в любом случае, заповеди - это самый важный инструмент, чтобы покинуть это место.\n\nА теперь о кругах: \nЛимб - место, где скорбят без боли некрещеные. \nНа 2 - поддавшиеся плотским утехам. \nНа 3 - обжоры. \nНа 4 - те, кого жадность погубила. \nНа 5 - лентяи и просто злые люди. \nНа 6 - еретики и лжеучителя. \nНа 7 - убийцы всех мастей. \nНа 8 и 9 - те, кто обманывали.',{
        reply_markup: {
            inline_keyboard: [ 
                [
                    { text: "Напомни мне заповеди.", callback_data: "page1_3_1" },
                ],
                [
                    { text: "Пожалуй, я пойду.", callback_data: "page1_4" },
                ],
            ],
        }
    })
})
//---------- О Кругах (END)----------
bot.action('page1_4', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/1_boat.jpg"
    })
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'Вы направились в место, где была оставлена лодка для вас. Она была немного дальше от Харона и закрыта скалами и деревьями от грешников.')
    await waitFor(500);
    await bot.telegram.sendMessage(ctx.chat.id,'...')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'Проверив все ли на месте, вы убедились, что плыть можно. Он говорил, что ваша задача плыть по этому озеру прямо и тогда вы доплывёте до Ворот.')
    await waitFor(500);
    await bot.telegram.sendMessage(ctx.chat.id,'...')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'Но тут к вашей лодке подбежал маленький мальчик...',{
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Ты что-то хотел?", callback_data: "page1_5" },
                ],
            ],
        }
    })
})

bot.action('page1_5', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'-Извините, но не могли бы вы помочь мне... Я... я... Не могу здесь оставаться... Моя мама там, дальше, а я не хочу быть тут, один, я постоянно плачу и мне так плохо тут быть, одному...\n\nМальчик повторял слова о своей матере и о том как он хочет к ней...')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'Вы были удивлены. Мальчику на вид лет 6, и он просится к вам в лодку... По его словам, его мама находиться там, но стоит ли помогать ему, отправляя его через это озеро..?',{
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Хорошо, садись в лодку, но пригнись.", callback_data: "page1_6_1" },
                ],
                [
                    { text: "Прости, но я не могу тебе помочь...", callback_data: "page1_6_2" },
                ],
            ],
        }
    })
})

let razgovor1 = 'empty';
let razgovor1_2 = 'empty';
let razgovor1_3 = 'empty';

bot.action('page1_6_1', async (ctx, next) => {
    console.log(ctx.from)
    bog1 = '- Ты решил помочь ребёнку, но этим же нарушил его приговор. Страж простил тебе это, но все видел. Данный поступок благородный, если бы ты так поступил и в жизни, но это было не то место.';
    razgovor1 = 'Мальчик все время дрожал от страха. Он старался максимально прижимать голову к коленкам, что бы его не увидели...\nВам даже стало интересно, неужели Харон сможет его обнаружить даже так далеко? Но врятли это было возможно: туман на этом озере был густой, и увидеть берег, от которого он отплыл, было просто не возможно.';
    razgovor1_2 = 'Сойдя с берега, мальчик побежал куда-то далеко. Вы не успели ничего сделать, кроме как крикнуть ему: "Стой!"... И что это было?';
    razgovor1_3 = 'Тот ребёнок, которого ты подобрал... Ты не должен был его подбирать с собой. Не тебе решать судьбы тех, кто оказался здесь. Я понимаю твои мотивы, но это было глупо и безрассудно, Сандро. И, кстати, все они страдают безбольно. Лишь кажется, что им очень плохо, а на самом деле это не так. Что же будет с тем дитя - ничего, он не грешен, я должен был его сопроводить сюда, но так случилось, что он решил побегать от меня, так что ты даже мне помог, но от своих слов я не отказываюсь. Можешь идти дальше, но впредь помни заповеди и делай так, как велел Бог и его слуги.';
    result = result; 
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'Вы решили помочь ему. Благородный поступок мужчины - помочь ребенку найти маму.')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'Вы посадили его в лодку и стали отплывать...',{
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Отплываем", callback_data: "page1_6", },
                ],
            ],
        }
    })
})

bot.action('page1_6_2', async (ctx, next) => {
    console.log(ctx.from)
    result = result + 1; 
    bog1 = '- Ты решил не помогать ребенку, который нуждался в помощи. В жизни это бы вышло тебе грехом, но тут ты бы повлиял на его наказание, так что ты поступил правильно.';
    razgovor1 = '...';
    razgovor1_2 = 'Сойдя с берега, вы никого больше не увидели. Больше не было тех, кто страдал. Был лишь проход к воротам.';
    razgovor1_3 = 'Удачи.';
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id,'Решение, принятое вами, было грубое. Его слова и просьба... Но ведь что было с ним. если бы вы его взяли? Там... Где другой круг ада, может быть еще хуже... Все-таки там детям не место...', {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Отплываем", callback_data: "page1_6", },
                ],
            ],
        }
    })
})

bot.action('page1_6', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/1_boat2.jpg"
    })
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Пока вы плыли, вы все время смотрели на мимо проплывающие берега, люди... как их было много и как им было тяжело... Неужели они это заслужили за то, что просто были не крещенными..?')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, razgovor1)
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Вы решили обернуться, проверив близко ли берег... И да, вам осталось совсем немного!', {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Отлично, вот и берег", callback_data: "page1_7" },
                ],
            ],
        }
    })
})

bot.action('page1_7', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/1_haron2.jpg"
    })
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, razgovor1_2)
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Но времени у вас не было, сзади вас объвился Харон, перевозивший души людей. Освободив их, он правился к вам.\n- Поздравляю с прохождением первого круга. Если бы ты был не крещен, может я бы и заставил тебя пострадать, но нет. Ладно, я пойду, ворота открыты, ты можешь идти. Хотя стой...')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, razgovor1_3,
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Что ж... Идём дальше.", callback_data: "page2_0" },
                ],
            ],
        }
    })
})

// ----------- ГЛАВА2: "ТЕ, КТО ЛЮБИЛИ..." -----------

let bog2 = '...';

bot.action('page2_0', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Глава 2: "Те, кто любили..."')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Зайдя на следующий круг, атмосфера покоя была полностью утерена. Теперь все ниже и ниже наказания были хуже и хуже. Тут повсюду бушевали торнадо... ')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Пройдя далее, вы заметили, что в этих торнадо были люди... Т.е. это были их наказания..? Вам казалось это странным, но люди в них носились то вправо, то влево. Никто из них не оставался на земле - все они взлетали...')
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/2_minos.jpg"
    })
	await bot.telegram.sendMessage(ctx.chat.id, 'Вы обнаружили огромного мужчину с копьём в руках... Вы сразу приняли решение, что он и есть Страж этого уровня. Подойдя к нему, он взглянул на вас и, не сказав ни слова, направил руку в левую сторону. Там была какая-то дорожка, которая, возможно, вела дальше...',
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Извините...", callback_data: "page2_1_1" },
                ],
                [
                    { text: "Идём по дорожке", callback_data: "page2_1" },
                ],
            ],
        }
    })
})


bot.action('page2_1_1', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Он глянул на вас с неким призрением и сказал:\n- Я тебе показал куда идти. Так что не напрягай меня, ясно?! ',
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Что это за место?", callback_data: "page2_1_2" },
                ],
                [
                    { text: "Лучше я уйду отсюда...", callback_data: "page2_1" },
                ],
            ],
        }
    })
})

bot.action('page2_1_2', async (ctx, next) => {
    console.log(ctx.from)
    death = death + 1;
    dead5 = '💀Концовка №5: "Смерть из-за любопытства"';
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, '- Моё имя Минос, и ты, Сандро, надоел мне. Ты получил информацию куда идти, но твоё любопытство привело тебя к погибели, так что получи своё наказание!\nМинос проткнул вас своим копьём насквозь.' + deadGlobal + dead5,
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Вернуться в начало", callback_data: "page2_0" },
                ],
                [
                    { text: "Начать игру заново (1 Глава)", callback_data: "page0_0" },
                ],
            ],
        }
    })
})

let part2_way;
let part2_deed;


bot.action('page2_1', async (ctx, next) => {
    console.log(ctx.from)
    bog2 = '- Во втором испытании ты должен был помочь девушке, но ты отказался от этого. Страж простил тебя из-за его боевых принципов, но я все видел, так что в этом испытании ты должен был догадаться, что помочь им это было обязательно.';
    part2_way = 'Минос увидел, как мы подимаемся из лабиринта, даже немного улыбнулся, но его улыбка резко оборвалась через пару секунд.';
    part2_deed = '- Решившись пойти по лабиринту, ты прошел испытание мужества, но твоё решение не помочь людям в беде даже меня разочаровало... Но всё же, за твоё мужество, ты не понесешь никакого наказания, а только получишь право идти дальше. Иди дальше, храбрый воин.';
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Вы пошли по указанной Стражем дорожке. Он так и не представился и не захотел вести диалог. Вы решили не навязываться, так что просто пошли дальше.')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, '...')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Наконец-то вы дошли до нужного места. Вам понадобилось минут 10, чтобы подняться на эту гору, откуда было видно красоты этих безумных торнадо. Где-то вдали виднелись ворота на следующий круг...')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Осмотревшись вокруг, вы заметили тропинку дальше, которая вела вниз. Понаблюдав за ней, вы заметили, что она имеет разделение на дальнейшие тропинки. Да и кроме этого, одну из них не зацепляло Торнадо - это была левая тропинка. Дальше вы не видели куда идти, но возможно это был своеобразный лабиринт.')
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/2_para.jpg"
    })
	await bot.telegram.sendMessage(ctx.chat.id, 'После вы обратили внимание на плачущую женщину неподалеку от вас. Она сидела над каким-то человеком и пыталась его разбудить. Опять же, вы задумались, это очередная ловушка, или все же стоит помочь этим людям?',
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Я должен пройти этот лабиринт.", callback_data: "page2_2" },
                ],
                [
                    { text: "Ладно, спрошу, что с ними.", callback_data: "page2_2_0" },
                ],
            ],
        }
    })
})

bot.action('page2_2_0', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Подойдя к ним вы спросили:\n- Что случилось?\n Девушка сказала, что это её муж, и его слишком сильно ударило. Ему нужна помощь или иначе он будет калекой до конца своих дней, чего она очень не хотела.')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Конечно, умереть в этом мире было нельзя, но вот например: жить без головы - реально. Она указала на домик неподалеку отсюда и сказала, что там она сможет оказать помощь ему, но нужно его туда оттащить.\nКаковы ваши действия?',
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Я помогу ей", callback_data: "page2_2_1" },
                ],
                [
                    { text: "Лучше продолжу свой путь", callback_data: "page2_2" },
                ],
            ],
        }
    })
})

bot.action('page2_2_1', async (ctx, next) => {
    console.log(ctx.from)
    result = result + 1;
    bog2 = '- Во втором испытании ты должен был помочь девушке... Ты сделал это. Ты не поддался её чарам и в конечном итоге ты получил одобрение Стража. Это было хорошо.';
    part2_way = 'Минос увидел, как мы подимаемся из лабиринта, даже немного улыбнулся. Странно, но улыбка его не пропадала и настрой так же...\n- Настоящий Мужчина никогда не ищет легких путей! Ты заслуживаешь моё уважение парень. Не смотря на то, что девушка указала тебе легкий путь - ты все равно пошел моим путем и прошел его. Спасибо, что такие как ты все еще существуют. Ты - настоящий Воин.';
    part2_deed = '- Твой поступок помочь девушке приятен мне. Мне нравится, когда есть те, кто не бросит человека в беде, и ты один из них. Ступай далее.';
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Вы подняли мужчину на плечо и понесли его до небольшой хижины на окраине леса...')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, '...')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Когда вы наконец-то дошли, девушка была невероятно благодарна вам. Она удивилась, что тут еще оставались те, кто может помочь другим и не потеряли свою личность. Она утверждала, что здесь недавно, так что понимает, что тут происходит, а эта хижина... Она её нашла случайно, но часто сюда не ходит, ибо Минос следит за всеми. Так вы и узнали имя Стража.')
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/2_girl.jpg"
    })
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Вы рассказали о своём пути, пока она обрабатывала раны, так что она решила сделать вам подарок. Она открыла какой-то старый сундук, в котором скорее всего было золото... Конечно, вы отказались принять этот подарок, так как вы даже не знаете, сможете ли выйти отсюда.')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, '...')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Когда вы решили уходить, вы спросили, знает ли она краткий путь через эту бурю, на что она ответила, что можно пройти это все через скалы на окраине. Там есть мост, которым пользуется Страж, но, возможно, он будет не против...\n- Стойте, не хотите ли вы получить нечто больше, чем этот совет... например, меня...'
    ,
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Я пожалуй пойду...", callback_data: "page2_2_4" },
                ],
                [
                    { text: "Что Же Она Имеет В Виду? Хммм...", callback_data: "page2_2_2" },
                ],
            ],
        }
    })
})

bot.action('page2_2_2', async (ctx, next) => {
    console.log(ctx.from)
    bog2 = '- Во втором испытании ты должен был помочь девушке, но увы. Ты провалил его. Ты поддался волшебству красоты девушки, которая была замужняя и этим не выполнил одну из моих заповедей. Это было ужасно.';
    part2_way = 'Минос строго смотрел на нас.\n- Пройти лабиринт было мужественно... ';
    part2_deed = '- Ты нарушил самый главный грех этого круга... Так что мне не о чем с тобой говорить. Ступай, я не могу убить тебя после прохождения испытания, так как моя миссия была выполнена.';
    result = result - 2;
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/2_girl2.jpg"
    })
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Она повела вас в другую комнату, и здесь вы увидели другой её облик... Она все же не была человеком, а была настоящим демоном...\n- Черт... И что будет дальше..?\n- Ну, я действую по своей воле, моя задача выполнена, так что теперь ты можешь уходить, если сам этого желаешь.',
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Ну терять нечего", callback_data: "page2_2_3" },
                ],
                [
                    { text: "Лучше я уйду...", callback_data: "page2_2_4" },
                ],
            ],
        }
    })
})

bot.action('page2_2_3', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, '*Тут могла быть сцена любви, но не будет*',
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Пора уходить отсюда.", callback_data: "page2_2_4" },
                ],
            ],
        }
    })
})

bot.action('page2_2_4', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'На выходе из дома вы задумались над словами той девушки. Стоит ли поверить ей или все же пойдете через лабиринт.',
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Все же лабиринт надёжный вариант.", callback_data: "page2_2" },
                ],
                [
                    { text: "Ну попробуем обойти его...", callback_data: "page2_2_5" },
                ],
            ],
        }
    })
})

bot.action('page2_2_5', async (ctx, next) => {
    console.log(ctx.from)
    part2_way = 'Минос увидел вас, идущего по мосту... По его лицу было видно некое разочарование в ваших действиях, видимо он хотел, чтобы вы прошли этот лабиринт, но видимо это было не важно, поэтому он сказал:';
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Попытавшись обойти, вы нашли мост. Действительно, он там был и это вам сэкономило время. Вы решили пройти по нему...')
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/2_most.jpg"
    })
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Проходя мимо этой бури, вы даже представить не могли, как бы вам пришлось обходить это все.')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, '...')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Но выход был близко, вы уже видели ворота...',
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "У ворот.", callback_data: "page2_8" },
                ],
            ],
        }
    })
})


bot.action('page2_2', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Зайдя в лабиринт, вам стало понятно, что тут вам поможет только удача. Обзор был очень мал, и, скорее всего, вам тут поможет только ваша внимательность.')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, '...')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Вокруг были торнадо, но они вас не трогали... Может это и не так опасно, думали вы...')
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/2_1.jpg"
    })
	await bot.telegram.sendMessage(ctx.chat.id, 'Вы дошли до первого пересечения. Ваш выбор:',
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Налево", callback_data: "page2_3" },
                ],
                [
                    { text: "Направо", callback_data: "page2_labl" },
                ],
                [
                    { text: "Прямо", callback_data: "page2_labl" },
                ],
            ],
        }
    })
})

bot.action('page2_labl', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Вы шли по тропинке, как тут же торнадо схватило вас и начало вместе с другими людьми носить по кругу... Вы потеряли сознание...')
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/2_labl.jpg"
    })
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, '...')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, '...')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, '...')
    await waitFor(500); //картинка 1 карты
	await bot.telegram.sendMessage(ctx.chat.id, 'Очнувшись, вы оказались в самом начале этого лабиринта. Вам придётся пройти его заново.\nКуда идём?',
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Налево", callback_data: "page2_3" },
                ],
                [
                    { text: "Направо", callback_data: "page2_labl" },
                ],
                [
                    { text: "Прямо", callback_data: "page2_labl" },
                ],
            ],
        }
    })
})

bot.action('page2_end', async (ctx, next) => {
    console.log(ctx.from)
    death = death + 1;
    dead6 = '💀Концовка №6: "Смерть от падения"';
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Вы шли по тропинке, как тут же земля под ногами просто пропала. Верно, вы оказались не возле обрыва, а прямо в нём. Вы падали вниз...')
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/2_end.jpg"
    })
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, '...')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Вы упали вниз. Что вы могли ожидать, кроме как смерти? Верно! Вы мертвы.' + deadGlobal + dead6,
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "В начало Лабиринта", callback_data: "page2_2" },
                ],
                [
                    { text: "Пройти круг заново", callback_data: "page2_0" },
                ],
                [
                    { text: "Вернуться в самое начало", callback_data: "page0_0" },
                ],
            ],
        }
    })
})

bot.action('page2_wall', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Вы направились по дорожке. В определенный момент стала видеться стена...')
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/2_wall.jpg"
    })
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, '...')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Вы подошли достаточно близко и увидели, что вы в тупике. Прийдётся идти назад...',
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Назад", callback_data: "page2_5" },
                ],
            ],
        }
    })
})

bot.action('page2_3', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/2_2.jpg"
    })
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'И это оказалось ВЕРНО! Вы прошли без каких-либо происшествий до следущеюго выбора.')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Тут уже подсказок у вас не было. Куда идём?',
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Налево", callback_data: "page2_labl" },
                ],
                [
                    { text: "Направо", callback_data: "page2_4" },
                ],
                [
                    { text: "Прямо", callback_data: "page2_labl" },
                ],
            ],
        }
    })
})

bot.action('page2_4', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/2_3.jpg"
    })
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Вы шли и заметили рядом с вами расколотую землю. Достаточно опасно, но пройдя далее, вы дошли до следующего пересечения путей, так что вы выбрали верный путь!')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Куда идём дальше?',
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Налево", callback_data: "page2_end" },
                ],
                [
                    { text: "Направо", callback_data: "page2_labl" },
                ],
                [
                    { text: "Прямо", callback_data: "page2_5" },
                ],
            ],
        }
    })
})

bot.action('page2_5', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/2_4.jpg"
    })
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Снова развилка, куда думаете пойти?',
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Налево", callback_data: "page2_6" },
                ],
                [
                    { text: "Направо", callback_data: "page2_wall" },
                ],
                [
                    { text: "Прямо", callback_data: "page2_wall" },
                ],
            ],
        }
    })
})

bot.action('page2_6', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/2_5.jpg"
    })
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Вы чувствовали, что вы уже рядом с выходом, главное не сделать ошибку!\n Куда идём?',
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Налево", callback_data: "page2_end" },
                ],
                [
                    { text: "Направо", callback_data: "page2_7" },
                ],
                [
                    { text: "Прямо", callback_data: "page2_labl" },
                ],
            ],
        }
    })
})

bot.action('page2_7', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/2_6.jpg"
    })
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Пропасть сменилась на подъем, и за каким-то из путей явно были ворота...',
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Налево", callback_data: "page2_labl" },
                ],
                [
                    { text: "Направо", callback_data: "page2_labl" },
                ],
                [
                    { text: "Прямо", callback_data: "page2_8" },
                ],
            ], 
        }})})

bot.action('page2_8', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/2_gates.jpg"
    })
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Наконец-то вы подходили к воротам, но вас там уже ждали... Это был Страж. И он явно хотел сказать вам что-то перед вашим уходом.')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, part2_way)
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, part2_deed,
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Идём дальше.", callback_data: "page3_0" },
                ],
            ],
        }
    })
})

//---------------------------------------ГЛАВА 3 

bot.action('page3_0', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Глава 3: "Встреча с Вергилием"')
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/3_1.jpg"
    })
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Зайдя внутрь, вы встретили Вергилия.\n- Привет Вергилий, как ты?\n- Нет времени для разговоров. Ситуация критическая, нужно быстрее закончить испытания, на которые ты попал...\n- Что случилось?... Я вроде неплохо проходил их...\n- НЕТ! Это все неважно! Идёшь быстро за мной, я тебе позже все объясню.')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Вы ничего не поняли, но Вергилий вас быстро потянул за собой.')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, '- Сейчас мы должны уйти от Цербера... И тогда далее будет проще. Бежим.',
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Что происходит...", callback_data: "page3_1" },
                ],
            ],
        }
    })
})

bot.action('page3_1', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/3_2.jpg"
    })
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Вы побежали максимально далеко от Цербера, но его нюх не дал вам расслабиться... Он почувствовал вас, когда вы прошли мимо него, но когда он понял, что вы решили сбежать, то побежал за вами...')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Скорость его бега была однозначно выше, так что вам нужно было двигаться быстрее. Вы двигались по безопасной дорожке, но нужно было срезать путь, так что вам оставалось 2 выбора, срезать через скалы или пробежать через мучеников.\n- Вергилий, куда побежим?\n- Я не могу сказать, что лучше... Давай лучше ты примешь решение.')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, '- Что-о? *У него паника...* Ладно, ничего не поделаешь, идём через...',{
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Скалы", callback_data: "page3_2" },
                ],
                [
                    { text: "Людей", callback_data: "page3_2_2" },
                ],
            ],
        }
    })
})

bot.action('page3_2_2', async (ctx, next) => {
    console.log(ctx.from)
    dead7 = '💀Концовка №7: "Смерть в зубах Цербера"'
    death = death + 1;
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/3_dead.jpg"
    })
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Вы выбрали путь по которому ходили мученники, но как оказалось это был неправииьный путь. Земля под ногами была как слякоть, а ваша одежда начала таить. Видимо Страж решил перекинуть наказание на вас.')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Так и не добравшись до ворот Страж догнал вас. Видимо это Конец...' + deadGlobal + dead7,
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Бежим заново...", callback_data: "page3_1" },
                ],
                [
                    { text: "Начать игру заново", callback_data: "page0_0" },
                ],
            ],
        }
    })
})

bot.action('page3_2', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/3_3.jpg"
    })
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Вы выбрали правильный путь, ведь, пробежав по скалам, был риск упасть, но вы смогли успеть пройти их быстрее, чем Цербер догнал вас.\n\nТеперь, когда вы были рядом с воротами, Вергилий открыл их, и вы зашли внутрь.\n- Как ты их открыл..?\n- Неважно, я тебе все расскажу после того, как мы уйдём еще и от Плутоса.\n- Что? Ты хочешь бежать и от него?!\n- Ну, посмотрим.',
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Идём дальше...", callback_data: "page4_0" },
                ],
            ],
        }
    })
})

bot.action('page4_0', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/4_0.jpg"
    })
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Зайдя внутрь, Вергилий вас сразу же потащил к воротам. Страж Плутос указал на мешок и только хотел сказать суть испытания, как мы прошли мимо него. Удивительно, но он не стал за нами гнаться, а только лишь пропустил нас дальше.\n- Видишь, я же говорил, что тут будет просто.\n- Да, я уверен, что тебе просто повезло.\n- Возможно, но теперь мы почти прошли эти круги.',
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Верно говоришь...", callback_data: "page5_0" },
                ],
            ],
        }
    })
})

//-------------------------------------------Глава 4

bog3 ='...';

bot.action('page5_0', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Глава 4: "Те, кто ненавидят себя"')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Зайдя на следующий круг, вы увидели сильный туман и лодку.\n- Не будем терять времени, пошли сядем в лодку.\n- Вергилий, что случилось? Почему мы пробежали мимо Стражей..? Нам за это ничего не будет? Цербер вообще хотел нас разорвать...\n- Ну.. Я не ожидал такой реакции от Цербера, но вот Плутос знал, что нас пропустит. Он рад, когда все быстро заканчивается.')
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/5_0.jpg"
    })
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Вы дошли до лодки, сели в нее и стали отплывать.\n- Значит, нам нужно доплыть до того края?\n- Верно, я, если честно, знаю эти испытания, так что видимо Страж и не объявился.\n- Расскажи мне: почему мы спешили?\n- Дело в том, что я должен как можно быстрее покинуть ад... Я не могу тут долго оставаться, иначе я не смогу отсюда уйти... По этой причине я решил не ждать тебя, пока ты пройдешь все сам, а ускорить немного тебя, так что прости, за такой сюрприз. Я немного устал и подремаю... А ты плыви, это не займет больше 30 минут... - Вергилий уснул.',
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Течение стало меняться", callback_data: "page5_1" },
                ],
            ],
        }
    })
})

bot.action('page5_1', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/5_1.jpg"
    })
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Течение стало меняться. В момент, когда Вергилий уснул, лодку стало заносить по течению в сторону, которую они плыли.')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Возможно, это была хорошая возможость отдохнуть...\nСтоит ли отдохнуть или все же будем понемногу плыть? ',
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Отдых", callback_data: "page5_7" },
                ],
                [
                    { text: "Продолжим следить", callback_data: "page5_2" },
                ],
            ],
        }
    })
})

bot.action('page5_2', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/5_2.jpg"
    })
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Вы продолжили следить за течением и казалось, что вы близки к берегу, как тут услышали странный голос из тумана...\n- Кто тут? - попытались заговорить вы...')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, '- Привет, Сандро, как дела?')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Вы не понимали - это галлюцинации или Страж объявился. Но нужно было что-то ему ответить...',
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Привет, нормально, а ты как?", callback_data: "page5_3" },
                ],
                [
                    { text: "Нормально, но кто ты?", callback_data: "page5_3" },
                ],
                [
                    { text: "Если ты не появишься, то я отвечать не буду!", callback_data: "page5_3_2" },
                ],
            ],
        }
    })
})

bot.action('page5_3_2', async (ctx, next) => {
    console.log(ctx.from)
    result = result - 1;
    bog3 = '- В третьем испытании. Ты должен был показать, что ты не ленив, а так же не злобен. Но твой гнев разачаровал существо, которое тебе даже не пыталось навредить. Злость - это грех.';
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/5_3.jpg"
    })
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'После этих слов голос стал проподать, а туман начал рассеиваться... Что это было? Не ясно, но теперь вы ыбли около берега, так что можете продолжить свой путь.',
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Разбудить Вергилия", callback_data: "page5_6" },
                ],
            ],
        }
    })
})

bot.action('page5_3', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, '- Это хорошо)... А я вот плохо... Я всеголишь туман. Мне скучно. Расскажи что-то о себе, что тебе нравится?',
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Жизнь", callback_data: "page5_4" },
                ],
                [
                    { text: "Семья", callback_data: "page5_4" },
                ],
                [
                    { text: "Слушай, можно я спокойно доплыву до берега.", callback_data: "page5_3_2" },
                ],
            ],
        }
    })
})

bot.action('page5_4', async (ctx, next) => {
    console.log(ctx.from)
    result = result + 1;
    bog3 = '- В третьем испытании. Ты должен был показать, что ты не ленив, а так же не злобен. И ты смог это доказать. Молодец.';
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Это здорово... У меня нет чего-то, чем бы я мог дорожил... Ладно, было приятно поговорить с тобой, удачи и пока.',
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "И что это было...", callback_data: "page5_5" },
                ],
            ],
        }
    })
})

bot.action('page5_5', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/5_4.jpg"
    })
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, '- Доброе утро, Сандро.\n- О Вергилий, ты такое пропустил...\n- Слушай, Садро. Я понимаю, что тебе одиноко, но разговаривать с самим собой - это ненормально.\n- Стоп, ты всё слышал?\n- Верно.\n- Но я говорил с туманом.\n- Ты хоть слышишь, что говоришь? Да-с, видимо ты уже плохо соображаешь.')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Сандро решил просто промолчать, но в любом случае, они были около ворот.')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, '- Ну чтож, мы рядом, пошли Сандро.',
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Пошли", callback_data: "page5_6" },
                ],
            ],
        }
    })
})

bot.action('page5_6', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/5_end.jpg"
    })
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Сандро и Вергилий направились к воротам. Когда они до них дошли никто не объявился, так что они спокойно вошли в них.',
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Уходим", callback_data: "page6_0" },
                ],
            ],
        }
    })
})

bot.action('page5_7', async (ctx, next) => {
    console.log(ctx.from)
    result = result - 1;
    bog3 = '- В третьем испытании. Ты должен был показать, что ты не ленив, а так же не злобен. Но о Злость не о тебе. Так как ты просто ленив. Только ты получил возможность раслабиться в таком важном деле ты это сделал. Это было не правильно с твоей стороны, так что это испытание ты провалил.';
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/5_end.jpg"
    })
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Сандро решил отдохнуть. Ничего страшного, если он позволит себе хотябы на пару минут раслабить руки.\nВы плыли...')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Когда Сандро проснулся, то обнаружил, что Вергилий уже встал и вы были у ворот. Он вас позвал к себе. А значит вы упешно переплыли озеро.',
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Идём дальше", callback_data: "page6_0" },
                ],
            ],
        }
    })
})

//------------------------ГЛАВА 5

let bog4='...';

bot.action('page6_0', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Глава 5: "Встреча с Медузой"')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Зайдя в следущий круг, вы оказалия недалеко от какого-то города.\n- Нам нужно именно в него.\n- Вполне логично - Согласился Сандро.')
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/6_0.jpg"
    })
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Зайдя внутрь вы увидели разрушенный город... Повсюду были черти и мифические твари. Странное место, подумали вы...')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Вы зашли в бар чтобы встретить кое кого там. Ваша задача, по словам Вергилия, была ответить на еще пару вопросов от Медузы. Так званной королевы этого города... Немного подождав, пока Вергилий договориться с главой заведения, они пошли в особенную комнату. Тут вы встретили Медузу...',
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Приветствую, ваше величество я...", callback_data: "page6_1_1" },
                ],
                [
                    { text: "Поклониться в знак приветствия", callback_data: "page6_1" },
                ],
            ],
        }
    })
})

bot.action('page6_1_1', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/6_2.jpg"
    })
    dead8 = '💀Концовка №8: "Вечное заточение в камне"';
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Недоговорив эту фразу, вы перестали чувствовать тело... Дело в том, что она имела свойство превращать людей своим взглядом в камень... Вы глянули ей в глаза не успев она договорить, так что теперь ваша жизнь обречена на вечное заточение в камне... Может вы и покинете эту форму когда-то, но для этого она должна умереть...\n' + dead8,
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "В начало круга", callback_data: "page6_0" },
                ],
                [
                    { text: "Начать с самого начала", callback_data: "page0_0" },
                ],
            ],
        }
    })
})

bot.action('page6_1', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "photos/6_1.jpg"
    })
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, '- Я забыла надеть маску, подождите, не подымайте головы. Если вы сделаете это, то вы превратитесь в камень... Хотя это было бы забано... - Видимо Медузе было скучно в этом городе...')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Как только вы сели за стол. Она сразу переша к делу:\n- Значит, Сандро, ты должен ответить на 3 моих вопроса. Ответил - молодец, не ответил - просто уходишь. Иначе превращу в камень. Думаю тебе все понятно, так что я начинаю.')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Все вопросы либо имеют смысл, либо на знания библии.\n Вопрос №1:\nЧто является жизнью для тела?',
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "1. Зависть;", callback_data: "page6_4_2" },
                ],
                [
                    { text: "2. Кротость;", callback_data: "page6_2" },
                ],
                [
                    { text: "3. Добродушие;", callback_data: "page6_4_2" },
                ],
            ],
        }
    })
})

bot.action('page6_2', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Хорошо, следущий вопрос.')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Какое животное упоминается в Библии более 130 раз?',
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "1. Лягушка;", callback_data: "page6_4_2" },
                ],
                [
                    { text: "2. Единорог;", callback_data: "page6_4_2" },
                ],
                [
                    { text: "3. Лев;", callback_data: "page6_3" },
                ],
            ],
        }
    })
})

bot.action('page6_3', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Хорошо, последний вопрос.')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Кто не видел земли, но был выше её?',
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "1. Иисус;", callback_data: "page6_4_2" },
                ],
                [
                    { text: "2. Ной;", callback_data: "page6_4" },
                ],
                [
                    { text: "3. Ева;", callback_data: "page6_4_2" },
                ],
            ],
        }
    })
})

bot.action('page6_4_2', async (ctx, next) => {
    console.log(ctx.from)
    bog4='- Твоя задача у Медузы была ответить на пару вопросов. И как мне жаль, что ты на них не смог ответить. Ведь это простые вещи которые ты знал, если бы читал Библию чаще...';
    result = result - 1;
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Этого достаточно. Я услышала все, что хотела, так что я вас отправляю дальше. Удачи...')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Медуза укусила вас своими змеями из волос и вы потеряли сознание...',
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Чт...", callback_data: "page7_0" },
                ],
            ],
        }
    })
})

bot.action('page6_4', async (ctx, next) => {
    console.log(ctx.from)
    bog4='- Твоя задача у Медузы была ответить на пару вопросов. Тут ты так же, как и у ворот, на все ответил верно. Поздравляю.';
    result = result + 1;
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Пожалуй, это все было верно. Поздравляю... Я так рада за вас, что просто вау, нашелся тот, кто умеет гуглить или перечитал библию... Кхем, в общем, дальше вы бы должны были пережить моменты связаные с убийством... Но вы у нас на эту тему святые люди, так что отправляйтесь сразу на 9 круг за ним вы узнаете свою судьбу...')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Медуза укусила вас своими змеями из волос и вы потеряли сознание...',
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Чт...", callback_data: "page7_0" },
                ],
            ],
        }
    })
})

//---------------------ГЛАВА 6: "Вопрос Дружбы"

let bog5 ='...';

bot.action('page7_0', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Глава 6: "Вопрос Дружбы"')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Вы оказались в темном холодном месте. Вокруг был лёд... Немного пройдя вперед, вы глянули вниз, а там обнаружили ледяное озеро. Внизу были люди, которые кричали от боли. Их наказание заключалось в вечном прибывании под льдом...')
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, '- Сандро, я хотел тебя кое о чем попросить... - Начал говорить Вергилий. - Понимаешь ли... Пройти сейчас может только один, а второго пропустят лишь через неделю... На данном испытании нет наказания или чего-то подобного, тут решает дело только то, кто пройдет первым, а второй будет страдать, пока его не отпустят... Так мне сказал кое кто...',
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Вот значит что...", callback_data: "page7_1" },
                ],
            ],
        }
    })
})

bot.action('page7_1', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, '- И какой у нас план Вергилий?\n- Ты должен позволить мне пойти первому...\n- ЧТО?! С чего бы это?\n- Я только ради этого и побежал за тобой... Понимаешь ли... Если я не покину это место сегодня, то возможно я не смогу больше это сделать никогда...\n- Ты хочешь сказать, что мне решать, кто будет идти первым... Ясно... Значит выбор на мне...',
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "У ворот", callback_data: "page7_2" },
                ],
            ],
        }
    })
})

bot.action('page7_2', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Когда вы дошли до Ворот по Вергилию было Видно, что он очень сильно нервничал... Вы подошли до стража. Он посмотрел на вас и сказал:\n- Один из вас может пройти. Второй будет ждать своего времени. Решай Сандро, выбор на тебе.',
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Пойду Я", callback_data: "page7_3" },
                ],
                [
                    { text: "Идёт Вергилий", callback_data: "page7_5_2" },
                ],
            ],
        }
    })
})

bot.action('page7_3', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Когда Вергилий услышал, что вы идёте первым, то его лицо осознало безвыходность... Он ничего не мог поделать, так что Ворота открылись, можно было уходить.',
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Молче уйти", callback_data: "page7_5_0" },
                ],
                [
                    { text: "Попращаться с Вергилием", callback_data: "page7_4" },
                ],
            ],
        }
    })
})

bot.action('page7_4', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Находясь прямо перед воротами, вы обернулись, чтобы взглянуть на Вергилия. Он развернулся и уже отходил от ворот. К слову Страж тоже на вас уже не смотрел и так же отходил.',
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Прощай...", callback_data: "page7_5_1" },
                ],
                [
                    { text: "А может...", callback_data: "page7_5" },
                ],
            ],
        }
    })
})

bot.action('page7_5_0', async (ctx, next) => {
    console.log(ctx.from)
    result = result - 1;
    bog5='- Последнее, пятое испытание. Должно было проверить твою веру в дружбу...  Жаль, но ты не выслушал Вергилия, а ведь он просил тебя. это был его единственный шанс, чтобы выжить...';
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Вы даше не глянули в сторону Вергилия. Как только врата открылись вы вошли в них. Вы имели только одно желание - покинуть ад.',
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Встреча (Конец)", callback_data: "page8_0" },
                ],
            ],
        }
    })
})

bot.action('page7_5_1', async (ctx, next) => {
    console.log(ctx.from)
    bog5='- Последнее, пятое испытание. Должно было проверить твою веру в дружбу... Жаль, но ты не выслушал Вергилия, а ведь он просил тебя. это был его единственный шанс, чтобы выжить...';
    result = result - 1;
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Вы попращались с Вергилием. Кто знает, что с ним будет, но почему-то вы были уверенны, что все будет нормально... Может это так, а может нет. В любом случае вы пошли дальше и на этом ваше прибывание в аду закончилось.',
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Встреча (Конец)", callback_data: "page8_0" },
                ],
            ],
        }
    })
})

bot.action('page7_5_2', async (ctx, next) => {
    console.log(ctx.from)
    result = result + 1;
    bog5='- Последнее, пятое испытание. Должно было проверить твою веру в дружбу... Ты спас Вергилия. Ты обрек себя на тяжелые муки спася одну душу. Ты понимал, что выживешь, но все же это благородно.';
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Вы решили пропустить Вергилия первым. Это благородный поступок за который вы решили расплотиться муками в холодном льду. Страж превратил вас в одного из мучеников и кинул вас в воду. Почти сразу вы заледенели и вам пришлось терпеть невыносимую боль целую неделю...')
    await bot.telegram.sendMessage(ctx.chat.id, '...')
    await waitFor(200);
    await bot.telegram.sendMessage(ctx.chat.id, '...')
    await waitFor(200);
    await bot.telegram.sendMessage(ctx.chat.id, '...')
    await waitFor(200);
    await bot.telegram.sendMessage(ctx.chat.id, 'Как только время прошло. Вы смогли покинуть это ужасное место. Хоть возможно с некой злобой на Вергилия...',
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Встреча (Конец)", callback_data: "page8_0" },
                ],
            ],
        }
    })
})

bot.action('page7_5', async (ctx, next) => {
    console.log(ctx.from)
    bog5='- Последнее, пятое испытание. Должно было проверить твою веру в дружбу... Ты поступил достаточно интересно. Ты спас Вергилия и сам там не остался. Ворота охраня демон, так что я не буду тебя венить в чем либо. Скажем так, ты сделал правильно).';
    result = result + 1;
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Вы решили попробовать спасти его. Так как Страж отвернулся вы взяли его за руку и быстро побежали к воротам. Ни Вергилий, ни Страж такого не ожидали. Поздравляем вы обманули Стража. Вы думаете за это будете наказаны? Кто знает, но вы помогли другу.',
     {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Встреча (Конец)", callback_data: "page8_0" },
                ],
            ],
        }
    })
})

//Последний разговор.

bot.action('page8_0', async (ctx, next) => {
    console.log(ctx.from)
    showMessage();
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, 'Вы шли по коридору пока не услышали голос:\n-Сандро, ты прибыл.\nВы не ожидали, что он лично решит судить вас... Бог появился перед вами.\n- Я буду судить тебя! Достоин ли ты снова быть под моей защитой? Сейчас ты узнаешь.\nВы были так испуганы, что не могли сказать даже слова... Это был шок для вас...')
    await waitFor(200);
	await bot.telegram.sendMessage(ctx.chat.id, bog1)
    await waitFor(200);
	await bot.telegram.sendMessage(ctx.chat.id, bog2)
    await waitFor(200);
	await bot.telegram.sendMessage(ctx.chat.id, bog3)
    await waitFor(200);
	await bot.telegram.sendMessage(ctx.chat.id, bog4)
    await waitFor(200);
	await bot.telegram.sendMessage(ctx.chat.id, bog5,{
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "И каков вердикт..?", callback_data: "page8_1" },
                ],
            ],
        }
    })
})

bot.action('page8_1', async (ctx, next) => {
    console.log(ctx.from)
    await waitFor(500);
	await bot.telegram.sendMessage(ctx.chat.id, message)
    await waitFor(200);
	await bot.telegram.sendMessage(ctx.chat.id, message2)
    await waitFor(200);
	await bot.telegram.sendMessage(ctx.chat.id, 'Результат:\n\n' + dead1 + dead2 + dead3 + dead4 + dead5 + dead6 + dead7 + dead8 + '\n\nВсе Финалы игры\n\n' + end1 + '\n\n' + end2 + '\n\n' + end3 + '\n\nВаша карма:  ' + result )
    await waitFor(200);
	await bot.telegram.sendMessage(ctx.chat.id, 'Спасибо за прохождение.',{
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Начать заново.", callback_data: "page0_0" },
                ],
            ],
        }
    })
})

bot.launch();