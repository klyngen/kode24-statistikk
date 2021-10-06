# Hvordan gjøre microfrontends

- Hovedsak to veier til å lage micro-frontends
  - Rendring i frontend
  - Rending i backend
  - Man kan selvfølgelig blande disse

=vertical slide=

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

=vertical slide=

## Frontend

- Mange måter å gjøre det på
  - IFrames
  - Module federation
  - Web-compoents

=vertical slide=

## IFrames

- Hvorfor, hvorfor ikke

=vertical slide=

## Module federation

- Fungerte ikke for oss

=vertical slide=

## Web Components

Faglig om web components

=vertical slide=

### Trenger ikke være mere enn dette

_index.html_

```
<script>
    class MicroFrontendFun extends HTMLElement {
        constructor() {
            super();
            this.innerHTML = "Micro frontends for FTW!";
        }
    }
    customElements.define("micro-demo", MicroFrontendFun);
</script>

<micro-demo></micro-demo>
```
