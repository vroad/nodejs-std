@echo off
haxe nodejs-shared.hxml
if %ERRORLEVEL% neq 0 (
	exit /b
)
copy /b nodejs-shared.hxml+nodejs-shared.hxml.part nodejs-export.hxml
haxe nodejs-export.hxml