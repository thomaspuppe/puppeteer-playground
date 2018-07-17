

## ideas

- "Testing-Framework": 
  - Wrapper für rot/grüne Ausgabe beim Durchlauf
  - Screenshots along the way schießen und in Ordner sortieren
- Typische Fälle die wir testen wollen mal durchspielen.
  - nur eine h1
  - Breite von nem Element messen
  - kein Bild größer als 200KB
  - Cache-Header vorhanden
    - einzelne natürlich lieber direkt checken ... aber alle Bilder einer Seite via puppeteer??
  - 301 Redirect
    - könnte lieber via cUrl oder ein simples npm Tool gehen ... puppeteer nur als
  - Komprimierung aktiv
  - kein Request an youtube/google, wenn kein optin cookie gesetzt ist
- externe Scoring-API (Lighthouse? Pagespeed Insights? (w3c) validation?) als Test-Case einbinden
- lokale npm Software (Pa11y? Perf Budget?) als Test-Case einbinden
- komplexere Sachen wie PIN-holen oder Login