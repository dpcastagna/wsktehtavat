# Commands for unsigned scripts in powershell

Get-ExecutionPolicy -list

Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
