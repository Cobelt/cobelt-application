# umi-application

## Prérequis

- Angular CLI doit être installé globalement via NPM (`npm i -g @angular/cli`)
- Créer le dossier `./server/logs`
- Créer le fichier `.env` à partir du fichier `.env-default`

## Test Docker (local)

`docker build -t umi-v3 .`

`docker run -d -p 3000:3000 umi-v3`