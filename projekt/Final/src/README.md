# Komprimierung/Minimierung

Am Anfang haben wir alle Files in den src ordner hinzugefügt damit wir die minifiers für HTML und CSS brauchen können. Danach haben wir mit rimraf den Dist so automatisiert, dass es die alten Inhalte von dort löscht. Wir mussten dafür ein tasks.js file erstellen.

![image](https://github.com/Karolskipolski/Gruppe09/assets/142780585/6a5d7ef8-bfeb-48df-9944-3f2295dfd346)

Nacher gings weiter an das minimieren der Inhalte. Dies taten wir mit minifier für HTML und CSS. Die minimierten Inhalte haben wir in den dist Ordner hinzugefügt. 

![image](https://github.com/Karolskipolski/Gruppe09/assets/142780585/108a221b-3c62-44ce-b607-f2236743a257)

Beim nächsten Schritt haben wir alle Bilder und Videos in einen Ordner versetzt damit wir Resourcen kopieren können. Mit diesem Script konnten wir dies ausführen.

![image](https://github.com/Karolskipolski/Gruppe09/assets/142780585/aacc0097-41ea-4019-a326-944687810bd7)

# Automatisieren sie ihre Publikation

Im nächsten Schritt haben wir ein FTP änliches File erstellt, dass die Parameter für das Publizieren braucht um den richtigen Server zu finden.

![image](https://github.com/Karolskipolski/Gruppe09/assets/142780585/ec0d3f79-a326-4e6a-8206-e5b676e83fca)

Wir haben dann auch noch ein kleines Script im JS File gebraucht um es zu starten.

![image](https://github.com/Karolskipolski/Gruppe09/assets/142780585/e2c4078b-1baa-48dd-900b-937ab50fcfdf)

Mit npm run build können wir Alles ausführen und automatisch publizieren.
