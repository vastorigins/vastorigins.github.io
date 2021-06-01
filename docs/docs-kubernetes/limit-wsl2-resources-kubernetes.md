---
sidebar_position: 2
---

# Limit WSL2 Resources To Speed Up Kubernetes

WSL2 when setup doesn't provide any limits. It means that if you have 8 cores cpu and 16Gb memory, it will use all that up. 
The problem with it is sometimes it affects your host computer and it gets slow. So to solve that problem we try to limit
the resource consumption of WSL2.

## Limit WSL Resource Consumption

On your profile directory `%USERPROFILE%` create a new file named `.wslconfig`. Set it's content to the following:

```toml
[wsl2]
memory=8GB
processors=8
```

Change the settings base on your workstation capability, and this is what works for me. 

Next, open up a powershell terminal in administrator mode and restart the LxssManager as this manages WSL2.

```powershell
Get-Service LxssManager | Restart-Service
```

You could also use the `wsl --shutdown` method to restart WSL. Check if the `vmmem` process still consumes beyond its limit.

# Troubleshoot

If the changes still not reflecting, try restarting your machine and also restart Docker Desktop.