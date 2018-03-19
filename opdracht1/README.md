# Browser Technologies
//Robuuste, toegankelijke websites leren bouwen …

## Opdracht 1 - Progressive Enhancement
//Het web is voor iedereen. Leren over Progressive enhancement

### Opdracht 1.1 - Breek het Web
Het Web laten 'breken' door features van het platform bewust uit te zetten. Images, custom fonts, JavaScript, kleur, breedband internet, etc. Allemaal met als doel je te laten beseffen hoeveel je nog niet weet van het Web, erachter komen dat je misschien aannames hebt die niet kloppen, en om je je in te laten leven in de eindgebruiker.

Onderzoek minimaal twee features. Dat betekent uitvogelen wat het voor impact heeft op de sites die je kent en normaal gebruikt. Kies sites in je directe omgeving: van je werkgever, lokale vereniging, de cafetaria om de hoek, en/of eerdere projecten die je zelf gedaan hebt.

Kies 2 features van de 8
- Zoek uit welke problemen ze kunnen veroorzaken (verzamel cijfers, meningen, ervaringen)
- Zoek uit hoe je dit kunt testen (hoe kun je een feature ‘uitzetten’)
- Vind een aantal sites waar dit ook problemen oplevert (uit je directe omgeving)
- Beschrijf hoe je dit kan fiksen
- Maak hierover een presentatie en neem die woensdag mee, dan gaan we de resultaten bespreken
Lezen: [Everyone has JavaScript, right?](https://kryogenix.org/code/browser/everyonehasjs.html) en [I Turned Off JavaScript and it was Glorious](https://www.wired.com/2015/11/i-turned-off-javascript-for-a-whole-week-and-it-was-glorious/)


### Opdracht 1.2 - Fork je OBA
Hoe zit het eigenlijk met Progressive Enhancement van je OBA opdracht? Waarschijnlijk kan daar wel het één en ander aan verbeterd worden, dat ding is immers in een week in elkaar gehackt!

Voor deze opdracht ga je toepassen wat je van opdracht 1.1 hebt geleerd.
- Pas Progressive enhancement toe op je OBA Web App.
- Check je OBA Web App op de 8 features uit opdracht 1.1 en verbeter de code waar mogelijk.
- Test  je OBA Web App in het device lab.
- Laat je OBA Web App voorlezen door een screenreader.
- Gebruik onderstaande artikelen om je code te optimaliseren.
[The accessibility mindset](https://24ways.org/2015/the-accessibility-mindset/) en [Accessibility Originates With UX: A BBC iPlayer Case Study](https://www.smashingmagazine.com/2015/02/bbc-iplayer-accessibility-case-study/)

Beoordelingscriteria
- Zet je code op Github
- Schrijf een Readme met:
  - een beschrijving van de problemen die je hebt gevonden
  - beschrijf hoe je de problemen hebt opgelost
  - of hoe je dit zou oplossen (met todo’s) als je genoeg tijd en budget zou hebben

 ## 1. Zonder muis & trackpad
  De website werkt redelijk met alleen tab & pijltjes toetsen, alleen werkt de 'go back' knop niet. Dit zou een makkelijke oplossing moeten zijn. Een go-to content knop voor de content is niet echt nodig.  
 Verder zijn er geen persoonlijke :hover states toegevoegd, wat de navigatie wel duidelijk zou kunnen maken, maar dit is opzich geen probleem aangezien de standaard hover ook niet geblokeert is

 ## 2. Breedband
 > Tests zijn gedaan op firefox developer editie, 3g regular throttle, met een geleegde localstorage

 Tot mijn verassing werkt de website best aardig, soms kan het wel een seconde duren om de homepagina te laden maar dit is ook voornamenlijk vanwege de niet zo snelle rijksmuseum API. 
 De afbeeldingen laden ook wat langzamer om deze reden.  
 Het nadeel is wel dat de afbeeldingen de primaire content van mijn website zijn, en het laden hiervan dus bepaalt hoelang het duurt voordat er content te zien is.   
 Wellicht zou het netjes zijn om ipv een api call van 100 afbeeldingen iets van 30 te doen voor mobiel,zodat de call onder 1 seconden kan komen.
 Ook zou het gebruik van placeholder afbeeldingen kunnen helpen in de listviews aangezien een aantal afbeeldingen erg lang moeten laden (+2 seconden)
 
 ## 3. Images
 Omdat mijn website veel rust op afbeeldingen, is de website vrij leeg zonder afbeeldingen.
 Ook merk ik dat er geen alt's voor de afbeeldingen zijn, wat best programmatisch geset zou kunnen worden.  
 Ook lijkt me het converteren van de afbeeldingen die png naar jpg geen slecht idee, zodat ik zeker weet dat de afbeeldingen niet meer data innemen dan nodig. 
 Ook zou compressie op eenserver van de afbeeldingen die worden geladen een optie zijn, alhoewel ditniet heel vat baar is.

 ## 4. Custom fonts
 De website gebruikt geen custom fonts.
 Misschien zou een 3rd party font wel leuk zijn (bijv van google), om het wat mooier te maken.

 ## 5. Kleur
 > Getest voor Protanopia & Deuteranopia

 De website gebruikt veel grijs en wit, waardoor de website prima te zien is.
 Sommige kunststukken zijn minder zichtbaar,  maar daar kan ik persoonlijk weinig aan doen

## 6. Javascript
Zonder javascript laad mijn website vrijwel niets, zelfs niet de navigatie. Dit komt omdat ik de navigatie aan de hand van de sections in de HTML geneer met javascript. Ook zie je geen content meer, omdat deze wordt opgehaald met een api dmv javascript.  
Dit eerste kan zeker worden opgelost, bijvorbeeld door een fallback statische navigatie aant e maken.  
Aan de api valt niet veel te doen. Misschien zou een idee zijn om een standaard lijst van afbeeldingen op te slaan en deze te laten zienals er geen javascript is, maar dan heb ik alsnog weinig data aangezien deze data uit JSON komt. 

## 7. Local storage 


## 8. Cookies 

