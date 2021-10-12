## Hva er micro frontend?

Note:

- Før vi kunne sette igang med microfrontend så måtte vi finne ut av hva det egentlig er.
- Det svaret vi fant var at det er

=new slide=

<!-- <img src="https://media.giphy.com/media/ukMiDlCmdv2og/giphy.gif" width="80%"/> -->

## En løsning på et organisatorisk problem

<!-- TODO: Understrek og punktum-->

Hvordan får vi skalert frontend-utvikling?

Note:

- Etterhvert som frontendene våre blir større og større så blir utviklingen av nye funksjonaliteter vanskeliger og vanskeliger
- Alle Endringer blir mer komplisert
- Refaktoreringer krever mere koordinering utover i organisasjonen
- Testene tar lengere tid å kjøre
- Publisering krever møter og koordinering med flere andre team

- Vi drømmer oss tilbake til den tiden da alle beslutninger kunne gjøres innad i teamet
- Og Pulisering var noe vi gjorde når vi var ferdig med en ny funksjonalitet

## Skaleringsproblemene

- Endringer blir vanskeligere
- Refaktorering blir vanskeligere
- Endringer krever møter
- Publisering krever møter

- Stor og kompleks kodebase som det er vanskelig å naviger og forstå

Det er flere grunner til dette. De problemene microfrontends prøver å løse er:

- Bytte ut stor og komplekse kodebaser med mere håndterbare størrelser
- En mere skalerbare organisasjon via løsrevne autonome team
- Oppgradering og oppdatering av avhengigheter uten å påvirke mange andre
- Lettere refaktorering på en mere incrementell måte

=new slide=

## Micro frontend til unnsetning

<div class="r-stack">
  <img class="fragment fade-in-then-out" src="https://media.giphy.com/media/mMmr83fKDHok4ihdrI/giphy.gif">
  <p style="font-size:10rem" class="fragment fade-in">👌</p>
</div>

Note:

- Alle disse problemene har vi jo hørt at backend har vært igjennom
- I backend kan man dele opp sine enorme monolitter i microserviser

=new slide=

## Inkrementelle oppgraderinger

```
$ npm upgrade leftpad
```

Note:
Dette der en veldig god måte å starte en microfrontend reise på. Du har en stor og kompleks frontend monolitt og vil implementere noe nytt i deler av den. Men for å kunne bruke dette nye biblioteket må du oppgradere rammeverket. Isteden for å oppgradere hele applikasjonen så lager du en helt ny app som du så pakker sammen og laster inn i den eksisterende applikasjonen. De to applikasjonene kan oppgraderes vær for seg og når de gir mening for vær av de.

=new slide=

## Enkel og isolert kodebase

<img src="https://media.giphy.com/media/SYXXT4vkT7I4nGWPhI/giphy.gif">

=new slide=

<!-- ## Om man deler opp en monolitt i mindre biter så blir bitene mindre en monolitten -->

## Deler man opp kodebasen så blir det flere mindre deler

<img src="https://media.giphy.com/media/vQqeT3AYg8S5O/giphy.gif"> <!-- .element: class="fragment" -->

<!-- <img src="https://media.giphy.com/media/lJ0JGfNBrRWJVCRChd/giphy.gif"> -->

Note:
Alt er letter med en mindre kodebase

- Navigere
- Refaktorering
- Overblikk

## Gammelt

- En mindre kodebase er enklere for utviklere å jobbe med.
- Lettere å unngå kompleksiteten ved at kode som ikke skal være koblet samme blir det ved tilfeldigheter.
- Vi må fortsatt skrive clean code.
- Målet her er å gjøre det det lettere å gjøre gode beslutninger når man skriver kode og vanskeligere å gjøre dårlige beslutninger.

## Kommunikasjon

Via:

- Server
- Window events
- Local/Session storage
- Via URL

Uansett hvordan man ender opp med å gjøre det så må man lage en explisitt kontrokat på hva som sendes og motas hvor. Dette er jo noe vi burdet gjort uansett og noe som har hatt stor sukksess i microservise verden ved definering av APIer. Du trenge rikke vente på at teamet i naborommet må bli ferdig men sin halv-ferdig enorm endring. Vært team publisere sin microfronend når og så ofte som det passer i forhold til hvilken type future man jobber på.

Siden kodebasen er mindre vil også linting, testing og bygging ta kortere tid.

=new slide=

## Autonome team

Note:

- Det eneste møtet man trenger å være med på er standup
- Hele kodebasen eies av ett team krav til publisering

=new slide=

## Uavhengig publisering

<img src="https://media.giphy.com/media/uFtywzELtkFzi/giphy.gif">

Note:
Vær microfronend kan publiseres vær for seg. Dette reduserer størrelsen på endringen i vær publisering og reduserer risikoen for feil. Det blir også typisk mindre tid mellom publiseringen. Altså blir det kortere tid fra en utvikler jobbet med koden til man finner ut at det var noen galt. Når det er kort tid siden du utviklet noe så er det mye lettere å sette seg inn i koden igjen og rasker å fikse feilen.

=new slide=

## Passer micro frontend for deg

Flere team skal jobbe på samme frontend

Note:

- Du er stor organisasjon som skal samarbeide om 1 frontend
- Du har en monolitt som er vanskelig å videreutvikle
