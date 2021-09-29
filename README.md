# Veien til Micro-frontends

## Hva i alle dager er en micro-frontend

En micro-frontend er et stykke frontend som utvikles, leveres og vedlikeholdes helt uavhengig av plattform-applikasjonen. I praksis, så betyr det at et team releaser en versjon uavhengig, og gjennom ren skjær magi, så inkluderes denne nye versjonen som en del av plattformen. Et eksempel på hvordan noe slikt kan fungere, er at Netflix' nettside publiserer en ny versjon av avspillings-mekanismen helt uavhengig av resten av nettsiden.

Men hvilket problem løser egentlgi micro-frontends? Teknologiske; absolutt ingen. Organiskatoriske; mange.

## Ambisjoner og mange utviklere

Introduksjonen vi hadde til microfrontends var at vi satt i en bedrit med alt for mange utviklere
som skulle utvikle en felles plattform for å se alle mulige slags data om en digital tvilling.

Når jeg hørte om micro-frontends for første gang, så var det gjennom at det var et ønkse om at mitt angular-prosjekt skulle nå kunne inkluderes i en helt annen applikasjon. Dette var helt upløyd mark hos aize.

# Disposisjon

- Hva er microfrontends (15 min) -> Truls

  - Hvorfor
  - Does and donts
    - Hvordan høste fordelene

- Hvordan lager man microfrontends?

  - Serverside (under 2,5 min) -> Klingen
    - Amazon, zalando
    - Utrolig mange brukere
  - Client side (under 2,5 min) -> Klingen
    - Spotify -> Iframe
    - Module-federation
      - Kritist problem med pakkeversjoner
      - Ikke modent kanskje rask demo
  - Webcomponents (20 min - 30 min)

    - Hvordan vi fikk det til å fungere
      - webpack
      - Deployment
      - Last dynamisk
      - Demo -> Klingen
    - Gotchas
      - document.getElementById -> blir fyfy
      - pakke-versjoner mellom host og micro-frontend
      - Du må bli master på webpack
      - Pakkestørrelse
      - Shadowroot og :root / :host

  - Hva er visjonen vår
    - Hva skal plattformen gjøre
    - Plattform
      - Moder app som holder styr på routing og layout
      - Alle velger rammeverket de behersker
    - Inter-frontend kommunikasjon
      - Koblinger
