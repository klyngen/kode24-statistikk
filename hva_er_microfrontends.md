# Hva er microfrontends <!-- .element: class="r-fit-text" -->

=new slide=

<img src="https://media.giphy.com/media/ukMiDlCmdv2og/giphy.gif" width="80%"/>

=new slide=

## En løsning på et organisatorisk problem

Hvordan får vi skalert frontend utvikling?

Note:

- Oppretholde hastighet

Å skalere frontend utvikling slik at mange team kan jobbe sammen om ett stort og komplekst produkt.

Altså er det overordnede målet med microfrontends et organisatorisk problem. Et team med utviklere har en maks størrelse før 1 ekstra utvikler ikke lenger betyr 1 ekstra produksjon.

=new slide=

## Skaleringsproblemene

- Endringer blir vanskeligere
- Refaktorering blir vanskeligere
- Endringer krever møter
- Publisering krever møter

Note:

- Stor og kompleks kodebase som det er vanskelig å naviger og forstå

Det er flere grunner til dette. De problemene microfrontends prøver å løse er:

- Bytte ut stor og komplekse kodebaser med mere håndterbare størrelser
- En mere skalerbare organisasjon via løsrevne autonome team
- Oppgradering og oppdatering av avhengigheter uten å påvirke mange andre
- Lettere refaktorering på en mere incrementell måte

=new slide=

Som dere helt sikkert begynner å se så har dette både fordeler og ulemper:

- Duplikasjon av avhengigheter ( React, Vue, Angular )
- Flere må løse de samme problemene hver for seg.
- Brukere må laste ned den samme koden flere ganger i samme app.

=new slide=

Men flere og flere rapporterer signifikante fordeler som har latt team skalere levereanser av uavhengig publiserte og videreutviklede løsninger.

## Så hva må vi som utviklere passe på for å ikke ødelegger for denne strategien.

=new slide=

## Fordeler

### Inkrementelle oppgraderinger

=new slide=

Dette der en veldig god måte å starte en microfrontend reise på. Du har en stor og kompleks frontend monolitt og vil implementere noe nytt i deler av den. Men for å kunne bruke dette nye biblioteket må du oppgradere rammeverket. Isteden for å oppgradere hele applikasjonen så lager du en helt ny app som du så pakker sammen og laster inn i den eksisterende applikasjonen. De to applikasjonene kan oppgraderes vær for seg og når de gir mening for vær av de.

=new slide=

Her er det en stor fallgruver. Som utviklere har vi blitt opplært til å ikke duplisere kode. Og det finnes en accordian komponent i den ene applikasjonen. Du trenger en accordian i den andre applikasjonen. Vi bare trekker den ut av den ene applikasjonen inn i ett bibliotek som vi så npm installer i begge applikasjonene. NEI NEI NEI. Så har vi koblet de sammen til en monolitt igjen. Symptomer på dette er:

=new slide=

- Utviklere i begge team bruker masse tid i møter for å finne ut av hvordan og hvem som skal videreutvikle den divergerned og mere og mere komplokse komponenten.
- Utviklere forteller i standup at de ikke får verdig tasken sin før noen ett annet sted i organisjasjonen har fikset en bug i en komponent han eller hun skal bruke.
- etc...

=new slide=

### Enkel og isolert kodebase

=new slide=

Om man deler opp en monolitt i mindre biter så blir bitene mindre en monolitten :P En mindre kodebase er enklere for utviklere å jobbe med. Det blir mye lettere å unngå kompleksiteten ved at kode som ikke skal være koblet samme blir det ved tilfeldigheter. Vi må fortsatt skrive clean code. Målet her er å gjøre det det lettere å gjøre gode beslutninger når man skriver kode og vanskeligere å gjøre dårlige beslutninger.

Her er det også fallgruver. De forskjellige microfrontendene vil uten tvil måtte kommunisere med hverandre. Dette kan man gjøre på flere måter:

=new slide=

Via:

- Server
- Window events
- Local/Session storage
- Via URL

=new slide=

Uansett hvordan man ender opp med å gjøre det så må man lage en explisitt kontrokat på hva som sendes og motas hvor. Dette er jo noe vi burdet gjort uansett og noe som har hatt stor sukksess i microservise verden ved definering av APIer. Du trenge rikke vente på at teamet i naborommet må bli ferdig men sin halv-ferdig enorm endring. Vært team publisere sin microfronend når og så ofte som det passer i forhold til hvilken type future man jobber på.

=new slide=

Siden kodebasen er mindre vil også linting, testing og bygging ta kortere tid.

=new slide=

### Autonome team

TODO: Skrive om autonome team og fordelen og ulempene med det.

=new slide=

### Uavhengig publisering

=new slide=

Vær microfronend kan publiseres vær for seg. Dette reduserer størrelsen på endringen i vær publisering og reduserer risikoen for feil. Det blir også typisk mindre tid mellom publiseringen. Altså blir det kortere tid fra en utvikler jobbet med koden til man finner ut at det var noen galt. Når det er kort tid siden du utviklet noe så er det mye lettere å sette seg inn i koden igjen og rasker å fikse feilen.

=new slide=

- Ingen flere felles bilioteker
- - Hvorfor
  - Does and donts
    - Hvordan høste fordelene

=new slide=

## Passer microfronend for deg

=new slide=

# TODOS

- [ ] Sjekke om State of devops har noen på microfrontends
- [ ] Sjekke om det finnes flere publikasjoner med gode rykter som sier att dette funker
- [ ] TODO item

=new slide=

<!-- .slide: data-background="#FFF" -->

```js [1-2|3|4]
let a = 1;
let b = 2;
let c = (x) => 1 + 2 + x;
c(3);
```

=new slide=

- Item 1 <!-- .element: class="fragment" data-fragment-index="2" -->
- Item 2 <!-- .element: class="fragment" data-fragment-index="1" -->