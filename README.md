# cobelt-application

## Prérequis

- Angular CLI doit être installé globalement via NPM (`npm i -g @angular/cli`)
- Créer le dossier `./server/logs`
- Créer le fichier `.env` à partir du fichier `.env-default`

## Test Docker (local)

`docker build -t cobelt-v1 .`

`docker run -d -p 3001:3001 cobelt-v1`