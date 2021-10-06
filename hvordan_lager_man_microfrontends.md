# Hvordan gjøre microfrontends

- Hovedsak to veier til å lage micro-frontends
  - Rendring i frontend
  - Rending i backend
  - Man kan selvfølgelig blande disse

## Backend

[God kilde til serverside. Blander til og med inn Web-Components](https://micro-frontends.org/)

- Når man trenger ekstremt god ytelse
  - Eller vil tilfredsstille Søkemotor-gudene
- Server side includes
- Alle team kan publisere sin kode som gjemmes bak en felles reverse-proxy

```
 <!--#include virtual="/code_from_team1" -->
 <!--#include virtual="/code_from_team2" -->
 <!--#include virtual="/code_from_team3" -->
```

## Frontend

- Mange måter å gjøre det på
  - IFrames -> Spotify
  - Module federation -> Et webpack verktøy
  - Web-compoents
    - Her fokuset vårt skal ligge
