# Usa un'immagine ufficiale di Node su Ubuntu 24.04 come base
FROM node:18-bookworm

# Imposta la directory di lavoro
WORKDIR /app

# Aggiorna il sistema e installa dipendenze aggiuntive necessarie per Wrangler
RUN apt-get update && apt-get install -y \
    git \
    bash \
    nano \
    && rm -rf /var/lib/apt/lists/*

# Copia il package.json e il package-lock.json per installare le dipendenze
COPY package*.json ./

# Installa le dipendenze del progetto, inclusi Wrangler e Vitest come devDependencies
RUN npm install
RUN Exercises/Exercise3 && npm install
RUN npm install -g wrangler

# Copia il resto del codice sorgente nell'immagine
COPY . .

# Espone la porta che l'app utilizza, se richiesta in modalità dev
EXPOSE 8787
