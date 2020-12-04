// Määrittele asetustiedosto:
const asetukset = require('../asetukset.json');


// Eventin asetukset, tässä tilanteessa viestin lähettäminen:
module.exports = (bot, message) => {
  
  // Määrittele prefix:
  let prefix = asetukset.prefix;
  // Määrittele viestin sisältö:
  let viesti = message.content.split(/\s+/g);
  // Määrittele argumentit:
  let args = viesti.slice(1);
  // Määrittele komento:
  let komento = viesti[0];
  // Määräittele komentotiedosto:
  let cmd = bot.komennot.get(komento.slice(prefix.length)) || bot.komennot.get(bot.aliasit.get(komento.slice(prefix.length)));
  
  // Mikäli viesti ei ala prefixillä, return:
  if (!command.startsWith(prefix)) return;
  // Mikäli viestin lähettäjä on bot, return:
  if (message.author.bot) return;
  // Mikäli viesti on lähetetty yksityisviesteissä, return:
  if (message.channel.type == "dm") return;
  
  // Mikäli komento löytyi, triggeraa sen koodi:
  if (komento) {
    komento.run(bot, message, args);
  }
}
