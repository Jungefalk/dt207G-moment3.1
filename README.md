# DT207G - Moment 3, del 2.1
## Av Caroline Jungefalk

Detta är en labb till kursent DT207G i bakend-baserad webbutveckling.  
Syftet med labben är att förstå hur man kan bygga en webbtjänst med NoSQL-databaser, i detta fallet med MongoDB.  
  
Detta repo innehåller kod för en webbtjänst som hanterar CRUD-operationer för ett CV. Den är byggd med Mongoose och Express. 

### Länk till API

Länk till API:et  
[https://dt207g-moment3-1.onrender.com/work_experience](https://dt207g-moment3-1.onrender.com/work_experience)

### Databas

Projektet ligger i en molnbaserad MongoDB-databas via MongoDB Atlas.
Den ansluts med hjälp av en uri som ligger sparad i koden och genererar tabeller enligt nedan:  

| Kolumn | Datatyp | Beskrivning |
| --- | --- | --- |
| _id | ObjectId | Primärnyckel |
| company_name | String | Namn på företaget |
| job_title | String | Jobbtitel |
| location | String | Plats |
| start_date | Date | Startdatum |
| end_date | Date | Slutdatum (ej obligatoriskt) |
| description | String | Arbetsbeskrivning |

### Användning

Nedan beskrivs API:ets endpoints.  

| Metod | Endpoint | Beskrivning |
| --- | --- | --- |
| GET | /work_experience | Hämtar all befintlig data |
| GET | /work_experience/:id | Hämtar post baserat på angivet id |
| POST | /work_experience | Lägger till en ny post | 
| PUT | /work_experience/:id | Uppdaterar en existerande post baserat på anviget id |
| DELETE | /work_experience/:id | Raderar en post baserat på angivet id |
