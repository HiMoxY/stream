const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "_";
client.on("message", message => {

            if (message.content.startsWith(prefix + "adoumynoob")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : @HiMoxY™#1027`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : @HiMoxY™#1027  ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`_test | HiMoxY`,"https://www.twitch.tv/himoxytm")
client.user.setStatus("dnd")
});



client.login(process.env.TOKEN);
