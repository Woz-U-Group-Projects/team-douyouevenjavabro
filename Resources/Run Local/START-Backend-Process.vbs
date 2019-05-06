'by Nikos 2019/04/29 - Start process for running backend
Set WshShell = CreateObject("WScript.Shell")
dim a, message
a = "carwell-backend.jar"
WshShell.Run "javaw -jar " & a
message=MsgBox("Launching backend code!" &Chr(10) & "It may take 10-90 seconds depending on  your PC performance",0,"Hi from Nikos ...")
