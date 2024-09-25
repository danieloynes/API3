# API3
 # Creating the README content in Norwegian and saving it as a .md file.

readme_content = """
# README

## Oversikt
Dette prosjektet er en enkel webapplikasjon som lar brukere søke etter og vise informasjon om karakterer fra Harry Potter-universet. Ved å bruke et eksternt API henter applikasjonen karakterdata og presenterer dem i et interaktivt format.

## Hvordan Programmet Fungerer
Applikasjonen består av en HTML-side som gir strukturen, en CSS-fil for styling, og en JavaScript-fil for funksjonalitet. Når brukeren skriver inn navnet på en karakter i søkeboksen, filtrerer applikasjonen de viste karakterene basert på input. Karakterdata, inkludert bilder og tilleggsinformasjon, hentes fra et API.

## Implementasjon
- **HTML**: Den grunnleggende strukturen til applikasjonen er satt opp med en søkeboks og en container for å vise karakterer.
- **CSS**: Styling er brukt for å forbedre den visuelle presentasjonen, inkludert bakgrunnsbilder og kortoppsett.
- **JavaScript**: Skriptet håndterer datahenting, karaktervisning og søkefunksjonalitet.

## Teknologier Brukt
- HTML5
- CSS3
- JavaScript (ES6)
- Fetch API
- Eksternt API: [Harry Potter API](https://hp-api.onrender.com/api/characters)

## Funksjoner / Funksjonalitet
- **Hent Karakterer**: Henter karakterdata fra Harry Potter API.
- **Vis Karakterer**: Gjengir karakterinformasjon og bilder på nettsiden.
- **Søkemotor**: Filtrerer karakterer basert på brukerens input i søkeboksen.

## Skjermbilde
![Screenshot of Harry Potter Characters App](https://via.placeholder.com/600x400?text=Harry+Potter+Characters+App)

## Lenker og Dokumentasjon
- [Harry Potter API Dokumentasjon](https://hp-api.onrender.com/)
- [MDN Web Docs om Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

## Design
Designet inkorporerer et magisk tema som passer for Harry Potter-universet. Bakgrunnen har et eventyrlig bilde, og karakterkortene er stilisert med myke skygger og avrundede kanter for et moderne utseende. Hovedfargene som brukes er:
- Bakgrunn: Bilde-basert
- Tekst: Mørk Grå (#333)
- Kort Bakgrunn: Hvit

## Egenvurdering: Hva Jeg Hadde Gjort Annerledes
Hvis jeg skulle gjøre prosjektet på nytt, ville jeg:
- Forbedret søkefunksjonaliteten for å inkludere uskarpe søk for bedre brukeropplevelse.
- Vurdert å legge til paginering for karaktervisning for å forbedre lastetider.
- Implementert en lastespinner mens data hentes for å forbedre tilbakemeldingen til brukeren.
- Eksperimentert med et mørkere tema for å bedre samsvare med Harry Potter-estetikken.

### Fargebruk
Den mørk grå tekstfargen ble valgt for lesbarhet mot de lysere kortbakgrunnene, mens det eventyrlige bakgrunnsbildet tilfører dybde uten å være for distraherende. Karakterkortene bruker hvitt for å skille seg ut mot bakgrunnen.

## Kilder
- [Harry Potter Wiki](https://harrypotter.fandom.com/wiki/Harry_Potter_Wiki)
- [W3Schools - Hvordan Lage en Søkeboks](https://www.w3schools.com/howto/howto_js_search_box.asp)
- [CSS Tricks - Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

