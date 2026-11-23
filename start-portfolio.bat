@echo off
title Mayuri Mundkar Portfolio - Local Server
echo ========================================================
echo  Launching Mayuri Mundkar's Portfolio on Localhost
echo ========================================================
set "PATH=C:\Users\ADMIN\.gemini\antigravity\scratch\tools\node;%PATH%"
cd /d "%~dp0"
echo Starting Vite server at http://localhost:5173/ ...
start http://localhost:5173/
call npx vite --host --port 5173
pause

