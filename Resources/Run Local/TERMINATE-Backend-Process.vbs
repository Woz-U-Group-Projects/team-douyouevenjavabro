'by Nikos 2019/04/29 - Kill process for running backend
Const strComputer = "." 
  Dim objWMIService, colProcessList, message
  Set objWMIService = GetObject("winmgmts:" & "{impersonationLevel=impersonate}!\\" & strComputer & "\root\cimv2")
  Set colProcessList = objWMIService.ExecQuery("SELECT * FROM Win32_Process WHERE Name = 'javaw.exe'")
  For Each objProcess in colProcessList 
    objProcess.Terminate() 
  Next  
 message=MsgBox("Process for the backend code is terminated!" &Chr(10) & "Don't forget to push your changes to GitHub.",0,"Bye from Nikos ...")