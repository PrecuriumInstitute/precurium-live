# PRECURIUM – technische Bestandsaufnahme

Stand: 11.10.2026.

Aktualisierung nach Nutzerkorrektur: CURE soll entfallen; der Nutzer möchte bei „Kea“ bleiben. Im bisherigen Website-Text steht CARE. Die genaue Schreibweise (CARE oder KEA) und die dazu passende Original-Logo-Datei sind noch zu bestätigen. Frühere CURE-Vorgaben in diesem Bericht sind damit aufgehoben; der Dateiname 06_LOGO_ORIGINAL_CURE.jpg bezeichnet nur die zuvor angeforderte Datei und ist keine aktuelle Wortlautvorgabe.

Diese Bestandsaufnahme ist eine Vorbereitung der Umsetzung, kein Abschlussbericht und keine Freigabe zum Livegang.

## Ausgangsstand und Sicherung

- Repository: https://github.com/PrecuriumInstitute/precurium-live
- Default-Branch: main
- Geprüfter Ausgangscommit: 2be12de916279871870bdc3e8eb5d5ff563604c9
- Sicherungsbranch: backup-before-approved-homepage-20261011
- Entwicklungsbranch: implement-approved-homepage-20261011
- Beide Branches wurden vom genannten Ausgangscommit erstellt und anschließend über die Branch-Liste kontrolliert.
- Vorhandene ältere Branches wurden nicht verändert oder als Designquelle übernommen.

## Veröffentlichung

Der letzte über GitHub ermittelte Pages-Lauf ist https://github.com/PrecuriumInstitute/precurium-live/actions/runs/38038902022 (10.10.2026, 08:44 UTC). Er gehört zum Ausgangscommit auf main. Build, Deploy und Statusmeldung wurden erfolgreich abgeschlossen.

CNAME enthält precurium.com. Das belegt die im Repository hinterlegte Domain. Die tatsächlich unter https://precurium.com/ ausgelieferte Seite, die aktuellen Pages-Einstellungen, DNS und HTTPS konnten in dieser Sitzung nicht unabhängig geprüft werden. Der Webabruf scheiterte; die Chrome-Steuerung konnte wegen eines lokalen Laufzeitfehlers nicht starten. Deshalb ist der veröffentlichte Commit über den erfolgreichen Deployment-Lauf belegt, aber die Live-Auslieferung noch nicht bestätigt.

Keine Änderungen an main, Domain, DNS, CNAME, HTTPS oder Pages-Quelle. Keine Veröffentlichung, kein Merge und keine Nachrichten oder Testbuchungen.

## Technik und Sprachfassungen

- Statische HTML-Website; kein package.json und kein eigener Workflow im vollständig abgefragten Repository-Dateibaum.
- Startseiten: index.html, en/index.html, ar/index.html.
- Arabische Startseite enthält lang="ar" und dir="rtl".
- Gemeinsame Dateien: assets/site.css, assets/site.js, assets/config.js.
- CSS enthält responsive Regeln bei 1180, 1050 und 720 Pixeln sowie reduced-motion-Regeln. Eine vorhandene Regel belegt noch keine visuelle Geräteprüfung.
- Aktuelle CSS-Schriftfamilie: Inter, Montserrat, Segoe UI, Arial, sans-serif. Die geforderten Serifentitel sind in dieser Schriftdefinition noch nicht umgesetzt.
- Bestehende Rechtstexte wurden nicht verändert.

## Abweichungen vom verbindlichen Auftrag

- Deutsche Startseite enthält "Privatpraxis im Aufbau", "Geplantes Leistungsspektrum", Hinweise auf Praxisstart und inaktive Buchungselemente. EN/AR enthalten entsprechende Vorankündigungen.
- Prinzipienband und Footer verwenden CARE. CURE wurde durch die jüngste Nutzerkorrektur verworfen; die genaue Schreibweise von „Kea“ ist noch offen.
- Aktuelle Seite verwendet eine stilisierte MRT-Darstellung und ein Biobot-Technologiebild.
- Drei freigegebene Standortkacheln und das regionale Abschlussband sind noch nicht vorhanden.
- Leistungsinformationen sind überwiegend Abschnitte derselben Startseite; eigenständige Leistungsseiten fehlen.
- Bestehende Qualifikations- und Engagementangaben wurden nur als vorhandener Inhalt festgestellt, nicht als aktuell bestätigt.

## Kontakt und Buchung

assets/config.js: doctolib.enabled=false, doctolib.url leer. Somit liegt im geprüften Stand kein aktiver Doctolib-Link vor.

Vorhandene Kontaktziele: mailto:info@precurium.com; Impressum nennt 07127 7288978. Diese Einträge belegen vorhandene Kontaktdaten, nicht die Erreichbarkeit oder einen bestätigten Terminannahmeprozess. Vor Abschluss der Website muss der tatsächliche Terminweg geprüft werden. Keine Testnachricht und keine Testbuchung durchgeführt.

Impressums-/Betreiberadresse: Rechbergweg 2, 72124 Pliezhausen. Sie darf nicht als einer der drei neuen Behandlungsstandorte dargestellt werden. Rechtstexte bleiben bis zur gesonderten Prüfung unverändert.

## Verbindliche Dateien: noch nicht verfügbar

Der vollständig abgefragte Repository-Dateibaum enthält weder 00_AUFTRAG.txt / PRECURIUM_Browser_Auftrag.txt noch die sechs benannten Freigabedateien:

1. 01_STARTSEITE_FREIGEGEBEN.png
2. 02_ABSCHLUSSBAND_REFERENZ.png
3. 03_PORTRAET_ORIGINAL.png
4. 04_RAUM_FREIGEGEBEN.png
5. 05_MRT_ORIGINAL.png
6. 06_LOGO_ORIGINAL_CURE.jpg

Vorhandene alte Bilddateien sind assets/precurium-logo.png, assets/stephan-kruck.jpg, assets/kruck-op.jpg und assets/biobot-monalisa.png. Ihre Gleichheit mit den freigegebenen Originalen ist nicht belegt. Sie werden nicht ersatzweise als Freigabedateien übernommen.

Lokaler Dateizugriff und Chrome-Laufzeit scheitern mit setup refresh had errors bzw. beendetem Node-Prozess. Lokale Anhänge konnten nicht auf Vorhandensein oder Bildinhalt geprüft werden. Der im Chat übermittelte Auftrag ist gelesen; zusätzliche Dateihinweise sind noch offen.

Für das Abschlussband ist außerdem die bildreine Produktionsdatei bzw. die bearbeitbare Quelldatei erforderlich, sofern die Referenz ausschließlich mit eingebrannter Schrift und Schaltflächen vorliegt. Keine andere Landschaft einsetzen und keine doppelte Beschriftung.

## Umsetzung nach Bereitstellung

Verbindliche Reihenfolge: Kopfzeile → Titelbereich mit Originalporträt → zwei gleichwertige Leistungskacheln → vier Qualitätsmerkmale → Patientenweg → drei Standortkacheln → freigegebenes regionales Abschlussband → Fußzeile.

Säulen: Prävention & Executive Health; Urologie & Prostatadiagnostik.

Standorte gemäß Nutzerfreigabe:
- DOC Stuttgart / PRECURIUM Hauptzentrum: Löffelstraße 40, 70597 Stuttgart. Persönliche Sprechstunde und spezialisierte Diagnostik.
- Universitätsklinikum Tübingen: Hoppe-Seyler-Straße 3, 72076 Tübingen. Universitäre Sprechstunde und spezialisierte Prostatadiagnostik. Eigenständiges universitäres Angebot.
- Max Grundig Klinik: Schwarzwaldhochstraße 1, 77815 Bühl. Privatmedizinische Beratung und Diagnostik.

Abschlussband: "Lassen Sie uns gemeinsam den nächsten Schritt gehen."; echte HTML-Schaltflächen "Termin anfragen" und "Mehr erfahren".

Originalporträt, Arztzimmer, MRT und Logo schützen. Keine neuen Bilder oder zusätzlichen Logos erzeugen. Die Gesichtsdarstellung bleibt unverändert; am Arztzimmer ausschließlich die freigegebene Logo-Montage. Logo-Wortlaut: PREVENTION | PRECISION | INTEGRATION | letzter Begriff gemäß jüngster Nutzerkorrektur. CURE entfällt; CARE/KEA vor Umsetzung bestätigen und ausschließlich das passende Original-Logo verwenden.

DE/EN/AR erhalten. Keine neuen Tracker, Gesundheitsdatenformulare, erfundenen Leistungen oder ungeprüften Buchungslinks.

## Noch ausstehende Abnahme

- Sämtliche Freigabedateien tatsächlich öffnen und prüfen.
- Vollständigen Zusatzauftrag und Dateihinweise lesen.
- Live-Auslieferung und Pages-Quelle lesend prüfen.
- Responsive Umsetzung und funktionierende Vorschau.
- Desktop-, iPad- und Smartphone-Ansichten.
- Separate Prüfung von Name, Logo, Bildern, Adressen, Texten, Links, Sprache/RTL und Terminwegen.
- Implementierungs-PR und abschließender Prüfbericht.

LIVEGANG GESPERRT: Erst die ausdrückliche Nachricht "VERÖFFENTLICHEN" erlaubt das Zusammenführen und Veröffentlichen der geprüften Änderungen.
