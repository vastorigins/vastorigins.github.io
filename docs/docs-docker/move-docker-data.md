---
sidebar_position: 1
---

# Move Docker Desktop Data to Another Location (WSL 2)

In Docker Desktop for Windows the WSL2 version, you don't usually have options to increase memory and diskspace as it will be managed directly by Windows.

The Docker Desktop data can be found originally in this location `%USERPROFILE%\AppData\Local\Docker\wsl\data`.

## 🚚 Export Docker Data 

In order to make this work, first shutdown Docker Desktop. This can be done by right-clicking the system tray icon of Docker then from the context menu Quit Docker Destop.

Next is open your command prompt and type the following:

```powershell
wsl --list -v
```

On which, when run will return to you the state of all WSL images.

```
  NAME                   STATE           VERSION
* docker-desktop         Stopped         2
  docker-desktop-data    Stopped         2
```

After that we export the `docker-desktop-data` into a tar archive. We will assume you are planning to move the docker data into `D:` drive, and within the drive you have already created a folder named `Docker`.

```powershell
wsl --export docker-desktop-data "D:\docker-desktop-data.tar"
```

Next, is to unregister `docker-desktop-data` from WSL.
This command below will delete `ext4.vhdx` from `%USERPROFILE%\AppData\Local\Docker\wsl\data\ext4.vhdx`, so make sure you back it up first.

```powershell
wsl --unregister docker-desktop-data
```

## 🚛 Import Docker Data

After export, we do import `docker-desktop-data` back to WSL.

```powershell
wsl --import docker-desktop-data "D:\Docker" "D:\docker-desktop-data.tar" --version 2
```

The `ext4.vhdx` will now reside in the `D:\Docker` folder. Start Docker Desktop and verify the changes.

If everything works out, you can now delete the tar archive you created earlier `D:\docker-desktop-data.tar`. Please don't delete the `ext4.vhdx`, otherwise you would lose all your images and containers in docker.

> In case docker icon turns red in Docker Desktop, clear the docker cache which can be found in Docker Desktop settings.

