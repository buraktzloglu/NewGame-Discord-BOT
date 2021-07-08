const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const prefix = require('./config.json');

require('dotenv').config()
require("./util/eventHandler")(client)

const fs = require("fs");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js") 
    if(jsfile.length <= 0) {
         return console.log("[!] Couldn't Find Commands!");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        client.commands.set(pull.config.name, pull);  
        pull.config.aliases.forEach(alias => {
            client.aliases.set(alias, pull.config.name)
        });
    });
});

client.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(!message.content.startsWith(prefix)) return;
    let commandfile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(client,message,args)
});

client.on("guildMemberAdd", member => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'door')
    welcomeChannel.send (`Welcome! ${member}`)
})

client.on("guildMemberRemove", member => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'door')
    welcomeChannel.send (`Goodbye! ${member}`)
})

// client.on("guildMemberAdd", member => {
//     const channel = member.guild.channels.cache.find(ch => ch.name === 'door');
//     if (!channel) return;
//     var joinEmbed = new Discord.MessageEmbed()
//     .setTitle(`__Welcome to the ${message.guild.name}!__`)
//     .setDescription(`${member} Joined us..`)
//     .setColor('GREEN')
//     channel.send(joinEmbed);
// })

// client.on("guildMemberRemove", member => {
//     const lChannel = member.guild.channels.cache.find(channel => channel.name === 'goodbye')
//     var leaveEmbed = new Discord.MessageEmbed()
//     .setTitle(`__Left the NewGame server!__`)
//     .addField(`${member} Left us..`)
//     .setColor('RED')
//     lChannel.send(leaveEmbed)
// })

client.on("messageReactionAdd", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id === "779633966831370260") {
        if (reaction.emoji.name === '🇦🇪'){
            await reaction.message.guild.members.cache.get(user.id).roles.add("779818250044702751")
        }
        else if (reaction.emoji.name === '🇧🇬'){
            await reaction.message.guild.members.cache.get(user.id).roles.add("779827858033213440")
        }
        else if (reaction.emoji.name === '🇨🇳'){
            await reaction.message.guild.members.cache.get(user.id).roles.add("779818300603367444")
        }
        else if (reaction.emoji.name === '🇨🇿'){
            await reaction.message.guild.members.cache.get(user.id).roles.add("779818346601250846")
        }
        else if (reaction.emoji.name === '🇳🇱'){
            await reaction.message.guild.members.cache.get(user.id).roles.add("779819310369472513")
        }
        else if (reaction.emoji.name === '🇫🇷'){
            await reaction.message.guild.members.cache.get(user.id).roles.add("779817781318254592")
        }
        else if (reaction.emoji.name === '🇩🇪'){
            await reaction.message.guild.members.cache.get(user.id).roles.add("779634368732987412")
        }
        else if (reaction.emoji.name === '🇮🇱'){
            await reaction.message.guild.members.cache.get(user.id).roles.add("779634371111419904")
        }
        else if (reaction.emoji.name === '🇮🇳'){
            await reaction.message.guild.members.cache.get(user.id).roles.add("779634371715661845")
        }
        else if (reaction.emoji.name === '🇮🇹'){
            await reaction.message.guild.members.cache.get(user.id).roles.add("779817979810152509")
        }
        else if (reaction.emoji.name === '🇰🇷'){
            await reaction.message.guild.members.cache.get(user.id).roles.add("786890949451317249")
        }
        else if (reaction.emoji.name === '🇳🇴'){
            await reaction.message.guild.members.cache.get(user.id).roles.add("779828088699748353")
        }
        else if (reaction.emoji.name === '🇵🇱'){
            await reaction.message.guild.members.cache.get(user.id).roles.add("779634369874231356")
        }
        else if (reaction.emoji.name === '🇵🇹'){
            await reaction.message.guild.members.cache.get(user.id).roles.add("779827972571529246")
        }
        else if (reaction.emoji.name === '🇷🇴'){
            await reaction.message.guild.members.cache.get(user.id).roles.add("779818058549428256")
        }
        else if (reaction.emoji.name === '🇷🇺'){
            await reaction.message.guild.members.cache.get(user.id).roles.add("779634370486730752")
        }
        else if (reaction.emoji.name === '🇪🇸'){
            await reaction.message.guild.members.cache.get(user.id).roles.add("779634369307344927")
        }
        else if (reaction.emoji.name === '🇸🇪'){
            await reaction.message.guild.members.cache.get(user.id).roles.add("779827680215826433")
        }
        else if (reaction.emoji.name === '🇹🇷'){
            await reaction.message.guild.members.cache.get(user.id).roles.add("779634366832967680")
        }
    }
})

client.on("messageReactionRemove", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id === "779633966831370260") {
        if (reaction.emoji.name === '🇦🇪'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove("779818250044702751")
        }
        else if (reaction.emoji.name === '🇧🇬'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove("779827858033213440")
        }
        else if (reaction.emoji.name === '🇨🇳'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove("779818300603367444")
        }
        else if (reaction.emoji.name === '🇨🇿'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove("779818346601250846")
        }
        else if (reaction.emoji.name === '🇳🇱'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove("779819310369472513")
        }
        else if (reaction.emoji.name === '🇫🇷'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove("779817781318254592")
        }
        else if (reaction.emoji.name === '🇩🇪'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove("779634368732987412")
        }
        else if (reaction.emoji.name === '🇮🇱'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove("779634371111419904")
        }
        else if (reaction.emoji.name === '🇮🇳'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove("779634371715661845")
        }
        else if (reaction.emoji.name === '🇮🇹'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove("779817979810152509")
        }
        else if (reaction.emoji.name === '🇳🇴'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove("779828088699748353")
        }
        else if (reaction.emoji.name === '🇵🇱'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove("779634369874231356")
        }
        else if (reaction.emoji.name === '🇵🇹'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove("779827972571529246")
        }
        else if (reaction.emoji.name === '🇷🇴'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove("779818058549428256")
        }
        else if (reaction.emoji.name === '🇷🇺'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove("779634370486730752")
        }
        else if (reaction.emoji.name === '🇪🇸'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove("779634369307344927")
        }
        else if (reaction.emoji.name === '🇸🇪'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove("779827680215826433")
        }
        else if (reaction.emoji.name === '🇹🇷'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove("779634366832967680")
        }
    }
})

client.login(process.env.BOT_TOKEN);