## Hva er micro frontend?

Note:

- Før vi kunne sette igang med microfrontend så måtte vi finne ut av hva det egentlig er.
- Det svaret vi fant var at det er

=new slide=

<!-- <img src="https://media.giphy.com/media/ukMiDlCmdv2og/giphy.gif" width="80%"/> -->

## En av løsningene på<span class="dot">.</span></h2>

<span style="font-size: 4rem;">👇</span>

<!-- TODO: Understrek og punktum-->

Hvordan får vi skalert frontend-utvikling?

Note:

- Flere team jobber på samme frontend
- Ny funksjonalitet blir vanskeliger og vanskeliger
- Endringer blir mer komplisert
- Refaktoreringer krever mere koordinering mellom team
- Testene tar lengere tid å kjøre
- Publisering krever møter og koordinering mellom teamene

- Vi drømmer oss tilbake til den tiden da alle beslutninger kunne gjøres innad i teamet
- Og Pulisering var noe vi gjorde når vi var ferdig med en ny funksjonalitet

=new slide=

## Microservicer har jo løst dette<span class="dot">.</span>

<p style="font-size:10rem">👍</p>

Note:

- Alle disse problemene har vi jo hørt at backend har vært igjennom
- I backend kan man dele opp sine enorme monolitter i microserviser og definere kontrokter vi api endepunkter og swagger dokumentasjone
- Dette vil vi også ha

=new slide=

<h2>Microfronend til unnsetning<span class="dot">.</span></h2>

<img src="https://media.giphy.com/media/5BaJ6438Qp6RJQRRQn/giphy.gif" alt="">

Note:

- Vi vil også dele opp vår monolitt i mindre isolerte deler.

=new slide=

<h2 class="">Microfrontend-utfordringer<span class="dot">.</span></h2>

<ul class="emoji-list">
  <li>👎 Operationel kompleksitet</li>
  <li>👎 Forskjell mellom miljøer</li>
  <li>👎 Pakke størrelse</li>
</ul>

=new slide=

<h2 class="">Microfrontend-lovnader<span class="dot">.</span></h2>

<ul class="emoji-list">
  <li>👍 Uavhengig publisering</li>
  <li>👍 Inkrementelle oppgraderinger</li>
  <li>👍 Autonome team</li>
  <li>👍 Enkle uavhengige codebaser</li>
</ul>

Note:

- Bytte ut stor og komplekse kodebaser med mere håndterbare størrelser
- En mere skalerbare organisasjon via løsrevne autonome team
- Oppgradering og oppdatering av avhengigheter uten å påvirke mange andre
- Lettere refaktorering på en mere incrementell måte

- Do you have enough automation in place to feasibly provision and manage the additional required infrastructure?
- Will your frontend development, testing, and release processes scale to many applications?
- Are you comfortable with decisions around tooling and development practices becoming more decentralised and less controllable?
- How will you ensure a minimum level of quality, consistency, or governance across your many independent frontend codebases?

- Dette der en veldig god måte å starte en microfrontend reise på. Du har en stor og kompleks frontend monolitt og vil implementere noe nytt i deler av den. Men for å kunne bruke dette nye biblioteket må du oppgradere rammeverket. Isteden for å oppgradere hele applikasjonen så lager du en helt ny app som du så pakker sammen og laster inn i den eksisterende applikasjonen. De to applikasjonene kan oppgraderes vær for seg og når de gir mening for vær av de.

- Enkel og isolert kodebase

<img src="https://media.giphy.com/media/SYXXT4vkT7I4nGWPhI/giphy.gif">

<!-- ## Om man deler opp en monolitt i mindre biter så blir bitene mindre en monolitten -->

## Deler man opp kodebasen så blir det flere mindre deler

<img src="https://media.giphy.com/media/vQqeT3AYg8S5O/giphy.gif">

<!-- <img src="https://media.giphy.com/media/lJ0JGfNBrRWJVCRChd/giphy.gif"> -->

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

## Autonome team

- Det eneste møtet man trenger å være med på er standup
- Hele kodebasen eies av ett team krav til publisering

## Uavhengig publisering

<img src="https://media.giphy.com/media/uFtywzELtkFzi/giphy.gif">

Vær microfronend kan publiseres vær for seg. Dette reduserer størrelsen på endringen i vær publisering og reduserer risikoen for feil. Det blir også typisk mindre tid mellom publiseringen. Altså blir det kortere tid fra en utvikler jobbet med koden til man finner ut at det var noen galt. Når det er kort tid siden du utviklet noe så er det mye lettere å sette seg inn i koden igjen og rasker å fikse feilen.

## Passer micro frontend for deg

Flere team skal jobbe på samme frontend

- Du er stor organisasjon som skal samarbeide om 1 frontend
- Du har en monolitt som er vanskelig å videreutvikle

=new slide=

<h2 class="">Kort oppsummert<span class="dot">.</span></h2>

<div tagCloud>
Kodebaser
Team
Teknologi
Publiseringsprosesser
</div>

Note:
Og sørge for at kodebaser, team, teknologi og publiserings prosesser har evnen til å operer og utvikle seg uavhengig av hverandre uten for mye koordinasjon.
