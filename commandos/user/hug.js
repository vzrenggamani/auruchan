const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

/*
The code base is from :
https://github.com/shidoitsuka/another-miku-bot
Thanks to him!! COOLAH CODAA!!! ^^--^^
*/

exports.run = async (auru, message, args) => {

    const pokesamwan = [ //KATAKATAPOKESAMWAN
        `${message.author.tag}  is hugging **${args[0]}**`,
        `Mwaaaaa!!!!`
    ];

    const pokeself = [
        `No idea what ${message.author.tag} doing`,
        `Anybody, please hug ${message.author.tag}`,
        `Sorry ${message.author.tag}, i can't hug you! >>w<<`  
    ]

    //VARIABLEJALAN
    const wordAnswer = pokesamwan.random(),
        hugimage = await neko.getSFWHug(),
        pokeselff = pokeself.random(),
        alonedesc = `**${message.author.username}** is lonely and hugging themselves..\nHere some hugs for ${message.author.tag}`;
    let description, image, footer;

    // PILIH MANA HAYOO
    !args[0] ? (description = alonedesc, image = hugimage.url, footer = pokeselff) : (description = wordAnswer, image = hugimage.url, footer = `${message.author.tag} poked someone. CUTE!`);

    // RESULTS
    const embed = new Discord.RichEmbed()
        .setAuthor("AuruChan - Poke", "https://auruchan.pw/commands/user#hug", `${hugimage.url}`)
        .setDescription(description)
        .setImage(`${hugimage.url}`)
        .setColor("#688fff")
        .setFooter(`${footer}`)
    message.channel.send("*Chotto ne >>__<<")
        .then(m => m.edit({
            embed
        }))
};


 