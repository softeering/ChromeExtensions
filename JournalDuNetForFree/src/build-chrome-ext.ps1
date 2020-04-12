$root = $PSScriptRoot
cd "C:\Program Files (x86)\Google\Chrome\Application"

.\chrome.exe --load-extension=$root

pause

cd $root
