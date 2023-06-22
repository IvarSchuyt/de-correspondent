# Proof of concept | Web-app voor De Correspondent

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
De Correspondent heeft onder andere mij gevraagd om een webversie van hun podcast-app te maken. Ik heb een responsive web-app gemaakt die qua stijl lijkt op de originele app. Hierbij heb ik gebruik gemaakt van onder andere Node, Express en EJS.

### Visual
![image](https://github.com/IvarSchuyt/de-correspondent/assets/112855849/e943ca66-56fb-417a-bfb8-8ff5be012b63)

### Link live-site
https://de-correspondent.adaptable.app/

## Gebruik
Ik heb een prototype van een podcast web-app gemaakt voor De Correspondent. De site werkt vrijwel hetzelfde als de bestaande app, maar heeft ook een nieuwe desktopversie gekregen. De mobiele versie heeft 3 knoppen als navigatie: de eerste is voor home, de tweede voor recente aflvereringen en de derde voor meer opties. Het logo bovenaan de pagina werkt óók als homeknop.

## Kenmerken
De code van de site bestaat uit EJS, HTML, CSS en JS. Met behulp van Node en Express zijn de JSON bestanden aan de site gekoppeld via de index.js. Vervolgens zijn verschillende elementen uit de JSON bestanden ingeladen door ze aan te roepen met EJS.

## Installatie
<!-- Bij Instalatie staat hoe een andere developer aan jouw repo kan werken -->
### Werken met deze repository:
1. Fork deze repository op GitHub.
2. Open de server en typ 'npm install' + het volgende: 'express, ejs en node-fetch'.
3. Neem .gitignoreop zodat de node_modulesniet online worden gezet.
4. Om de server te starten typ je 'npm start'
Er is geen '.env' gebruikt in dit project.


## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
