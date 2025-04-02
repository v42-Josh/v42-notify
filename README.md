# 🔔 v42-notify [QB/ESX Notification System]

A professional, easy-to-use, and highly customizable notification resource for FiveM, supporting both QBCore and ESX frameworks.

**💬 Support Discord**: [Join the Community](https://discord.com/invite/ackuWrBVV3)  
**🎥 Showcase Video**: [Watch on YouTube](https://www.youtube.com/watch?v=jLbM1542Xi8)

![v42Thumbnail_notify](https://github.com/user-attachments/assets/46354753-a7c3-4f24-a099-330d711c006e)

---

## 🚀 Installation

### Resource Installation
1. Download or clone the repository to your `resources` folder.

2. Add the following line to your `server.cfg`:


```bash
ensure v42-notify
```

---

## ⚙️ Framework Setup

### 🟢 QBCore

**Step 1:** Open the file:

```
qb-core/client/functions.lua
```

Locate the `QBCore.Functions.Notify` function (around line 88) and replace the entire function with:

```lua
function QBCore.Functions.Notify(text, texttype, length)
    exports['v42-notify']:notify(text, texttype, length)
end
```

**Step 2:** Restart your server or type in your console (F8):

```bash
ensure v42-notify
```

### ✅ **QBCore Usage Example**:

```lua
QBCore.Functions.Notify("Your message here", "success", 5000)
```

---

### 🔵 ESX

**Step 1:** Open the file:

```
es_extended/client/functions.lua
```

Locate the `ESX.ShowNotification` function (around line 73) and replace the entire function with:

```lua
function ESX.ShowNotification(message, notifyType, length)
    if GetResourceState("v42-notify") ~= "missing" then
        return exports['v42-notify']:notify(message, notifyType, length);
    end

    print("[^1ERROR^7] ^5v42-notify^7 is Missing!")
end
```

**Step 2:** Enable ESX notification integration in your `config.lua`:

```lua
Config.EsxNotification = true
```

**Step 3:** Restart your server or type in your console (F8):

```bash
ensure v42-notify
```

### ✅ **ESX Usage Example**:

```lua
ESX.ShowNotification("Your message here", "success", 5000)
```

---

## 🎨 Custom Notifications

You can easily create custom notifications by editing the `config.lua`:

Example:
```lua
['error'] = {
    icon   = 'fas fa-exclamation-triangle', -- Custom icon (FontAwesome)
    sound  = "sound.mp3",                   -- Custom sound file (.mp3)
    color  = '#FF0045',                     -- Notification background color
    volume = "0.3",                         -- Sound volume (0.0 to 1.0)
    mute   = false,                         -- Set to true if you want to mute the sound
},
```

You can create as many notification types as needed (e.g., success, warning, info, admin, bank, etc.).

---

## 🧪 Testing Notifications (In-Game)

To test notifications quickly, enable debug mode in your `config.lua`:

```lua
Config.Debug = true
```

Then use the following in-game command to test:

```bash
/notify success
```

---

## 📌 Supported Positions

You can set notification positions in your `config.lua`:

```lua
Config.Position = "top-right"
```

Available positions:
- top-left
- top-right
- bottom-left
- bottom-right
- top-center
- bottom-center
- left
- right

---

## 📂 File Structure

```
v42-notify/
├── client/
│   └── client.lua
├── html/
│   ├── assets/
│   │   ├── css/
│   │   │   └── main.css
│   │   ├── js/
│   │   │   └── app.js
│   │   └── sound.mp3
│   └── ui.html
├── config.lua
├── fxmanifest.lua
├── LICENSE
└── README.md
```

---

## 👨‍💻 Developer Notes

- 🔊 Custom sounds must be `.mp3` and placed in `/html/assets/`.
- 🎨 Icons available via [FontAwesome](https://fontawesome.com/).
- 🔁 Customize styles, fonts, and animations in `style.css`.

---

## 💬 Support

Join our [Discord Community](https://discord.com/invite/ackuWrBVV3) for support or to showcase your setup.

Enjoy a professional and easy-to-use notification system with v42-notify 🚀

Made with ❤️ by [v42-Josh](https://github.com/v42-Josh).

