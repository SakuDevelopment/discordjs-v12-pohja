## Tietoja:
Tämä bottipohja on tehty vapaaseen käyttöön. Saat muokata sitä, jne. 

Mikäli sinulla tulee ongelmia asentamisessa [liitythän](https://saku.dev/discord) Discord palvelimellemme ja kysythän apua.

## Asentaminen:
[1] Asenna node.js (https://nodejs.org/en/download/)

[2] Luo uusi kansio laitteellesi, avaa komentokehote ja kopioi discordjs-v12-pohja komennolla:
```sh
$ git clone https://github.com/sakudevelopment/discordjs-v12-pohja
$ cd discordjs-v12-pohja
```
[3] Luo uusi Application Discordiin [täällä](https://discord.com/developers) ja luo botti **bot** välilehdestä.

[4] Kopioi botin token ja lisää se asetukset.json tiedostoon. Sen jälkeen täytä loput tiedot asetukset.json tiedostossa.

[5] Luo botille kutsulinkki [täällä](https://discordapi.com/permissions.html). Tarvitset siihen Applicationin IDtä, jonka löydät [täältä](https://discord.com/developers). Kun olet luonut kutsulinkin, lisää botti palvelimellesi.

[6] Seuraavaksi voit asentaa kaikki vaadittavat moduulit komennolla:
```sh
$ npm install
```

[7] Nyt voit käynnistää botin komennolla:
```sh
$ node index.js
```


## Komennon lisääminen:
Voit lisätä komennon luomalla uuden tiedoston **/komennot/** kansioon ja lisäämällä sinne tämän pohjan:
```js
// Määrittele discord.js module:
const Discord = require('discord.js');
// Määrittele asetustiedosto:
const asetukset = require('../asetukset.json');

exports.run = async(bot, message, args) => {
  
  /* Komennon koodi tähän. */
  
}

exports.komento = {
  nimi: 'komento',
  alias: ['komento2'],
}
```

## Lisenssi
[MIT](https://choosealicense.com/licenses/mit/)
