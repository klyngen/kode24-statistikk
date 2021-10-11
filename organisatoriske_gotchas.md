## Vi bruker microfrontender

🥂 <!-- .element: style="font-size:10rem" -->

=new slide=

## Men utviklingen går ikke fortere

😂 <!-- .element: style="font-size:10rem" -->

Note:

- Utviklere i begge team bruker masse tid i møter for å finne ut av hvordan og hvem som skal videreutvikle den divergerned og mere og mere komplokse komponenten.
- Utviklere forteller i standup at de ikke får verdig tasken sin før noen ett annet sted i organisjasjonen har fikset en bug i en komponent han eller hun skal bruke.
- etc...

=new slide=

## Så hva må vi som utviklere passe på for å ikke ødelegger for denne strategien.

- Unngå å bli avhengig av folk i andre team

Note:

- Unngå felles biblioteker
- Det er vansklig om ikke umulig å forrutse fremtiden.
  - Så det er letter å lage flere accordians en å lage en som dekker alle usecases som man ikke vet hva er enda.
- Om du må ha felles biblioteker, så gjør det som ordentlig prosjekter med nok resureser til å ligge langt forran kravene til de som trenger biblioteket
- Som dere helt sikkert begynner å se så har dette både fordeler og ulemper:

- Flere må løse de samme problemene hver for seg.

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
