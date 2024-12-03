@echo off
docker-compose up -d --build --force-recreate --remove-orphans
:wait
docker-compose ps | findstr /r "sde.*Up" >nul
if %errorlevel% neq 0 (
    echo Attendo l'avvio del servizio sde...
    timeout /t 2 /nobreak >nul
    goto wait
)
docker-compose exec sde bash
