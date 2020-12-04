// Määrittele discord.js module & luo uusi Discord client
const Discord = require('discord.js');
const bot = new Discord.Client();
// Määrittele asetustiedosto:
const asetukset = require('./asetukset.json');
// Määrittele fs/file system, jolla
// voidaan lukea kansioiden/tiedostojen sisältöä:
const fs = require('fs');
// Määrittele botin Prefix
let prefix = asetukset.prefix;



// Tarkista asetukset.json tiedosto:
if (asetukset.prefix === "Bottisi prefix tähän." || "") {
  console.log(`\x1b[91m[VIRHE] \x1b[0mEt lisännyt botin prefixiä asetukset.json tiedostoon!`);
  setTimeout(() => {
    process.exit();
  }, 10);
}
if (asetukset.omistaja === "Discord IDsi tähän." || "") {
  console.log(`\x1b[91m[VIRHE] \x1b[0mEt lisännyt omaa Discord IDtäsi asetukset.json tiedostoon!`);
  setTimeout(() => {
    process.exit();
  }, 10);
}
if (asetukset.token === "Bottisi token tähän." || "") {
  console.log(`\x1b[91m[VIRHE] \x1b[0mEt lisännyt bottisi tokenia asetukset.json tiedostoon!`);
  setTimeout(() => {
    process.exit();
  }, 10);
}



// Lue kansio ./eventit/:
fs.readdir("./eventit/", (virhe, tiedostot) => {
  // Mikäli jokin virhe tapahtuu, printataan se consoleen.
  if (virhe) return console.error(virhe);
  // Hae kaikki tiedostot ./events/-kansiosta:
  tiedostot.forEach((file) => {
    // Määrittele eventti ja sen tiedoston nimi:
    const eventti = require(`./eventit/${file}`);
    let eventName = file.split(".")[0];
    // Printtaa consoleen mikä eventti on ladattu:
    console.log(`[${eventName}] Event ladattu.`);
    // "Liitä" eventti bottiin:
    bot.on(eventName, eventti.bind(null, bot));
  });
});



// Luo uudet Discord.Collectionit komennoille:
bot.komennot = new Discord.Collection();
bot.aliasit = new Discord.Collection();



// Lue kansio ./komennot/:
fs.readdir("./komennot/", (virhe, tiedostot) => {
  // Mikäli jokin virhe tapahtuu, printataan se consoleen.
  if (virhe) return console.error(virhe);
  // Hae kaikki tiedostot ./komennot/-kansiosta:
  tiedostot.forEach((tiedosto) => {
    // Mikäli tiedosto ei ole JavaScript tiedosto
    // Älä "hyväksy sitä", vaan käytä return;-toimintoa:
    if (!tiedosto.endsWith(".js")) return;
    // Määrittele komento ja sen tiedoston nimi:
    let komento = require(`./komennot/${tiedosto}`);
    let tiedostonimi = tiedosto.split(".")[0];
    // Aseta komento:
    bot.komennot.set(komento.komento.nimi, komento);
    // Printtaa consoleen mikä komento on ladattu:
    console.log(`[${tiedostonimi}] Komento ladattu!`);
    // Mikäli komennolla on muita export-nimiä:
    if (komento.komento.alias) {
      komento.komento.alias.forEach(alias => {
        bot.aliasit.set(alias, komento.komento.nimi);
      });
    };
  });
});



// Printtaa consoleen "<botin nimi> on päällä!" ja aseta botin tila.
bot.on("ready", () => {
  console.log(`${bot.user.tag} on nyt päällä.`);
  bot.user.setActivity(`SAKU Development`, { type: PLAYING });
  bot.user.setStatus(`online`)
});



// Kirjaudu sisään botin tokenilla.
bot.login(asetukset.token)
