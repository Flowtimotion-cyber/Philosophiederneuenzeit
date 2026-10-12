# philosophiederneuenzeit.de

Wissenschaftliche Website von Dr. Magdalena (Lina) Börsig-Hover. Statische Seite mit [Astro](https://astro.build), Schriften lokal eingebunden (keine Google-Server, keine Cookies).

## Lokal starten

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # fertige Seite in dist/
```

## Wo was steht

| Inhalt | Datei |
|---|---|
| Schriftenverzeichnis, Rezensionen, Vorträge, Lehre, Tätigkeiten | `src/data/werk.js` |
| Seiten | `src/pages/*.astro` |
| Farben, Schriften, Raster | `src/styles/global.css` |
| Kontaktdaten | `src/lib.js` |
| Bilder | `public/img/` |

Neue Publikation: in `src/data/werk.js` einen Eintrag in die passende Liste einfügen (Jahr, Titel, Nachweis). Die Sortierung nach Jahr passiert automatisch.

## Veröffentlichung

Jeder Push auf `main` baut die Seite über GitHub Actions und veröffentlicht sie auf GitHub Pages (Vorschau unter `https://flowtimotion-cyber.github.io/Philosophiederneuenzeit/`, mit `noindex`).

### Umzug der Domain von Jimdo

1. Domain bei Jimdo freigeben (Auth-Code) und zu einem neuen Registrar umziehen.
2. DNS: `www` als CNAME auf `flowtimotion-cyber.github.io`, Apex-Domain mit A-Records auf GitHub Pages (185.199.108.153, .109.153, .110.153, .111.153).
3. Repo → Settings → Pages → Custom domain `www.philosophiederneuenzeit.de`, HTTPS erzwingen.
4. Repo → Settings → Secrets and variables → Variables: `CUSTOM_DOMAIN` = `true`. Danach neu deployen.

## Offene Punkte (Freigabe durch die Autorin)

Einträge mit `pruefen:` in `src/data/werk.js` enthalten Unsicherheiten aus dem Entwurf (Seitenzahlen, Publikationsort, Datumsangaben). Die beiden Guardini-Fotos aus dem Entwurf sind eingebunden (Startseite, Forschung, Buchseite). Vor dem Livegang auf der echten Domain die Nutzungsrechte klären: Profilporträt beim Universitätsarchiv Tübingen, Schreibtischfoto Quelle unbekannt.
