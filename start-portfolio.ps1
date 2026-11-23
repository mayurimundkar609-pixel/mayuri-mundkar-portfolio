# PowerShell Launcher for Mayuri Mundkar's Portfolio
$env:PATH = "C:\Users\ADMIN\.gemini\antigravity\scratch\tools\node;" + $env:PATH
Set-Location $PSScriptRoot
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host " Launching Mayuri Mundkar's Portfolio on Localhost" -ForegroundColor Green
Write-Host "========================================================" -ForegroundColor Cyan
Start-Process "http://localhost:5173/"
npx vite --host --port 5173

