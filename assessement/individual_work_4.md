# 🚀 Listă Teme Proiect: Aplicații Real-Time cu WebSockets

Acest document conține 20 de variante de proiecte pentru dezvoltarea de aplicații în timp real. Fiecare proiect este conceput să aibă o complexitate echivalentă, bazată pe comunicare bidirecțională.

---

## 🛠️ Cerințe Tehnice Obligatorii

Pentru orice temă aleasă, proiectul trebuie să demonstreze următoarele capacități:

1.  **Arhitectură Decuplată:** Backend-ul (Server) și Frontend-ul (Client) trebuie să fie entități separate.
2.  **Sistem de Camere (Rooms):** Utilizatorii trebuie să se poată grupa în instanțe separate (ex: pe familii, pe mese de joc, pe proiecte).
3.  **Mesagerie Privată (1-la-1):** Posibilitatea de a trimite date/mesaje către un singur utilizator specific (Direct Messaging).
4.  **Persistența Datelor (DB):** Integrarea unei baze de date (SQL sau NoSQL) pentru a stoca istoricul și starea aplicației.

---

## 📋 Variante de Proiecte

### 1. Listă de Cumpărături Comună (Shared Grocery List)
* **Rooms:** Fiecare familie/grup are o listă proprie.
* **Real-time:** Când cineva bifează un produs, acesta se taie de pe lista tuturor în timp real.
* **Privat:** Mesaj direct între membrii familiei: „Nu uita să iei și pâine!”.
* **DB:** Salvarea produselor și a stării lor (bifat/nebifat).

### 2. Rezervare Locuri în Timp Real (Seat Booking)
* **Rooms:** Fiecare sală de cinema sau cursă de autocar este un room separat.
* **Real-time:** Când un utilizator dă click pe un loc, acesta devine „Ocupat” (roșu) instantaneu pentru toți ceilalți.
* **Privat:** Confirmarea rezervării și biletul trimise direct utilizatorului.
* **DB:** Harta locurilor și statusul fiecărui scaun.

### 3. Manager de Task-uri Agile (Real-time Kanban)
* **Rooms:** Fiecare echipă/proiect reprezintă un room.
* **Real-time:** Mutarea unui task (card) dintr-o coloană în alta (ex: To Do -> Done) este vizibilă instantaneu pentru toți colegii.
* **Privat:** Chat privat între membrii echipei pe marginea unui anumit task.
* **DB:** Starea coloanelor și istoricul modificărilor pe task-uri.

### 4. Coadă Virtuală la Doctor (Virtual Medical Queue)
* **Rooms:** Fiecare cabinet medical este un room.
* **Real-time:** Pacienții văd în timp real cum se schimbă numărul de ordine: „Acum intră numărul 14, urmează 15”.
* **Privat:** Medicul îi trimite un mesaj direct pacientului: „Puteți intra în cabinet acum”.
* **DB:** Lista de așteptare și istoricul programărilor din ziua respectivă.

### 5. Aplicație de Vot Live (Quick Poll/Slido Clone)
* **Rooms:** Fiecare prezentare sau conferință are un cod de acces (room).
* **Real-time:** Audiența votează, iar graficele de pe ecranele tuturor se updatează instantaneu.
* **Privat:** Întrebări anonime trimise direct moderatorului.
* **DB:** Rezultatele voturilor și lista de întrebări primite.

### 6. Joc de X și 0 (Tic-Tac-Toe) Multi-Player
* **Rooms:** Fiecare masă de joc (Game ID).
* **Real-time:** Un jucător pune un simbol, iar adversarul vede mutarea instantaneu.
* **Privat:** Chat între cei doi adversari pe parcursul partidei.
* **DB:** Scorul general (Leaderboard) și starea curentă a tablei de joc pentru recuperare la refresh.

### 7. Tablă de Desen Colaborativă (Shared Whiteboard)
* **Rooms:** Sesiuni de brainstorming.
* **Real-time:** Coordonatele desenului sunt trimise tuturor; toți pot desena pe același canvas simultan.
* **Privat:** Un utilizator poate partaja o schiță rapidă doar cu un alt coleg.
* **DB:** Salvarea coordonatelor liniilor pentru a reconstrui desenul la reîncărcarea paginii.

### 8. Sistem de Management Cheltuieli de Grup (Splitwise Clone)
* **Rooms:** Grupuri de prieteni sau excursii.
* **Real-time:** Cineva adaugă o cheltuială nouă, iar sumele datorate de restul grupului se actualizează live.
* **Privat:** Notificare de tip „Settle up” trimisă direct unei persoane: „Îmi datorezi 50 lei”.
* **DB:** Tranzacțiile și balanța financiară a fiecărui membru.

### 9. Controler pentru Prezentări (Remote Clicker)
* **Rooms:** Codul unic al prezentării (Laptop + Telefon).
* **Real-time:** Apeși „Next” pe telefon și pagina prezentării se schimbă pe laptopul care proiectează.
* **Privat:** Notițe (Speaker Notes) vizibile doar pe ecranul telefonului.
* **DB:** Ordinea slide-urilor și log-uri de acces.

### 10. Status Prezență Birou (Team Presence Tracker)
* **Rooms:** Departamentele firmei (IT, HR, Sales).
* **Real-time:** Un angajat își schimbă statusul („La masă”, „In a meeting”, „Disponibil”) și toți colegii văd schimbarea instant.
* **Privat:** Mesaj direct: „Când te eliberezi, avem nevoie de tine pe proiectul X”.
* **DB:** Istoricul activității zilnice.

### 11. Licitație de Obiecte în Timp Real (Auction App)
* **Rooms:** Fiecare obiect scos la licitație.
* **Real-time:** Cea mai mare ofertă (bid) este afișată instantaneu tuturor participanților.
* **Privat:** Mesaj de confirmare câștigător trimis direct de organizator.
* **DB:** Istoricul ofertelor și prețul final.

### 12. Tracker de Livrare Simulat (Delivery Monitor)
* **Rooms:** Codul de comandă.
* **Real-time:** „Curierul” updatează locația (simulat), iar „Clientul” vede pin-ul mișcându-se pe hartă.
* **Privat:** Chat direct între client și curier pentru detalii de livrare.
* **DB:** Ultimele coordonate GPS salvate.

### 13. Habit Tracker de Grup (30 Day Challenge)
* **Rooms:** Provocări specifice (ex: „No Sugar Challenge”).
* **Real-time:** Vezi live cine și-a completat task-ul zilnic în cadrul grupului.
* **Privat:** Mesaje de încurajare 1-la-1.
* **DB:** Progresul fiecărui utilizator pe zile.

### 14. Avizier Digital pentru Școli (Bulletin Board)
* **Rooms:** Fiecare clasă sau facultate.
* **Real-time:** Profesorul postează un anunț urgent, iar acesta apare ca o notificare pe ecranele elevilor.
* **Privat:** Întrebare privată de la un elev către profesor referitoare la anunț.
* **DB:** Lista de anunțuri arhivate.

### 15. Soundboard Sincronizat pentru Evenimente
* **Rooms:** Sesiuni de petrecere sau podcast.
* **Real-time:** Când cineva apasă un buton de sunet (ex: „Applause”), sunetul rulează simultan la toți cei conectați.
* **Privat:** Cerere de melodie/sunet trimisă direct „DJ-ului”.
* **DB:** Lista de sunete disponibile și log-uri de utilizare.

### 16. Monitorizare Servere/Echipamente (IT Dashboard)
* **Rooms:** Echipe de mentenanță.
* **Real-time:** Dacă un senzor (simulat) raportează o eroare, o alertă roșie apare instant pe dashboard-ul echipei.
* **Privat:** Un tehnician preia alerta și îi dă mesaj managerului: „Am început intervenția”.
* **DB:** Log-uri cu erori și timpii de răspuns.

### 17. Panou de Vot pentru Muzică (Social Jukebox)
* **Rooms:** Cafenele sau locații de evenimente.
* **Real-time:** Clienții votează următoarea piesă, iar playlist-ul se reordonează live pe ecranul principal.
* **Privat:** Mesaj către admin: „Vă rog să dați muzica mai încet”.
* **DB:** Numărul de voturi per melodie.

### 18. Sistem de Suport Clienți (Live Ticketing)
* **Rooms:** Categorii de suport (Tehnic, Facturare).
* **Real-time:** Operatorii văd când apare un tichet nou și care dintre colegi l-a preluat deja.
* **Privat:** Chat privat între operator și clientul care a deschis tichetul.
* **DB:** Starea tichetelor (Deschis, În lucru, Închis).

### 19. Editor de Text Colaborativ (Simple Google Docs)
* **Rooms:** Fiecare document creat.
* **Real-time:** Liniile de text scrise de un utilizator apar instantaneu la ceilalți editori.
* **Privat:** Comentarii pe marginea textului vizibile doar între autor și un anumit editor.
* **DB:** Conținutul documentului salvat la intervale regulate.

### 20. Kitchen Display System (Restaurant/Fast-Food)
* **Rooms:** Secții din bucătărie (Grătar, Bar, Salate).
* **Real-time:** Chelnerul trimite comanda, și ea apare instant pe monitorul secției respective.
* **Privat:** Bucătarul anunță chelnerul: „Comanda pentru masa 4 este gata”.
* **DB:** Statusul fiecărui preparat din comandă.

---



**Criterii de Evaluare recomandate:**
* Corectitudinea sincronizării între clienți.
* Gestionarea reconectării (recuperarea stării din DB).
* Securitatea de bază (CORS, validarea datelor).
* Creativitatea în design și UX.