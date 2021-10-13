<h1 class="r-fit-text">Organisatoriske fallgruver<span class="dot">.</span></h1>

=new slide=

## Vi bruker micro frontender<span class="dot">.</span>

🥂 <!-- .element: style="font-size:10rem" -->

=new slide=

## Men utviklingen går ikke fortere<span class="dot">.</span>

😳 <!-- .element: style="font-size:10rem" -->

Note:

- Utviklere i begge team bruker masse tid i møter for å finne ut av hvordan og hvem som skal videreutvikle den divergerned og mere og mere komplokse komponenten.
- Utviklere forteller i standup at de ikke får verdig tasken sin før noen ett annet sted i organisjasjonen har fikset en bug i en komponent han eller hun skal bruke.
- etc...

=new slide=

## Så hva må vi som utviklere passe på?

<div class="underline"></div>

Unngå å bli avhengig av folk i andre team‼️

Note:

- Flere må løse de samme problemene hver for seg.
- Unngå felles biblioteker
- Det er vansklig om ikke umulig å forrutse fremtiden.
  - Så det er letter å lage flere accordians en å lage en som dekker alle usecases som man ikke vet hva er enda.
- Om du må ha felles biblioteker, så gjør det som ordentlig prosjekter med nok resureser til å ligge langt forran kravene til de som trenger biblioteket
- Som dere helt sikkert begynner å se så har dette både fordeler og ulemper:

- Duplikasjon av avhengigheter ( React, Vue, Angular )
- Brukere må laste ned den samme koden flere ganger i samme app.

Men flere og flere rapporterer signifikante fordeler som har latt team skalere levereanser av uavhengig publiserte og videreutviklede løsninger.

## Så hva må vi som utviklere passe på for å ikke ødelegger for denne strategien.

Her er det en stor fallgruver. Som utviklere har vi blitt opplært til å ikke duplisere kode. Og det finnes en accordian komponent i den ene applikasjonen. Du trenger en accordian i den andre applikasjonen. Vi bare trekker den ut av den ene applikasjonen inn i ett bibliotek som vi så npm installer i begge applikasjonene. NEI NEI NEI. Så har vi koblet de sammen til en monolitt igjen. Symptomer på dette er:

Her er det også fallgruver. De forskjellige microfrontendene vil uten tvil måtte kommunisere med hverandre. Dette kan man gjøre på flere måter:

Frontenden må deles opp på de grensene der det er minst komunikasjon

- Ingen flere felles bilioteker
- - Hvorfor
  - Does and donts
    - Hvordan høste fordelen

=new slide=

## Kommunikasjon<span class="dot">.</span>

<div class="underline"></div>

Sett av tid til å definere og automatisere kontraktene mellom microfrontendene

Note:

- Det bli veldig fort slik at man bruker session storage, url eller custom events og at disse byggenner å krangle med hverandre
- Så sett av tid til å automatisere og dokumentere apiene mellom microfrontendene. Slik at når en microfrontend ønsker å fargelegge en node i 3d modelle. Så kan teamet bare lese igjennom hvordan og hva man kan kommunisere for at det skal skje. Og man vet sikkert at det ikke kolliderer med noen annen kommunikasjon

