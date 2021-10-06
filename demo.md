# Demo-utførelse

- Åpne Alvtime
  - Vue applikasjon
  - Timesførings-verktøy, plattform for læring
- Det skal inn en vær-applikasjon
  - For å planlegge avspassering
- Ingen kobling til timesføring
  - Ingen grunn til at den skal publiseres sammen med Alvtime
  - Ingen direkte koblinger mellom domenene
- La oss legge in en micro-frontend

  - Åpne terminal, start micro-frontend
  - Åpne Koden til Alvtime
    - Legg til script tag
    - Legg til html-taggen
    - Legg inn navn på tag i ignore-lista

- Hvordan fungerer micro-frontenden

  - En web-component basert på LitElement
    - Lettvekts-komponent for å lage web-komponenter
  - Trenger ikke webpack, meeeeeen
    - Sass
    - Typescript
    - Kunne selvfølgelig vært rein-js

- Hvordan kan dette eksemplet forbedres?
  - Last webcomponenten bare når den trengs
  - Ingen trenger å laste JS'en før de åpner den draweren
