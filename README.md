# v42-notify

Preview:

![notify-thumb](https://github.com/v42-Josh/v42-notify/assets/135979159/5b79caa1-19eb-456d-9d2d-bd6869e78ad4)


### Manual

- Change the following line in qb-core/client/functions.lua default line 88: 

Replace this function:
```
function QBCore.Functions.Notify(text, texttype, length)
    if type(text) == "table" then
        local ttext = text.text or 'Placeholder'
        local caption = text.caption or 'Placeholder'
        texttype = texttype or 'primary'
        length = length or 5000
        SendNUIMessage({
            action = 'notify',
            type = texttype,
            length = length,
            text = ttext,
            caption = caption
        })
    else
        texttype = texttype or 'primary'
        length = length or 5000
        SendNUIMessage({
            action = 'notify',
            type = texttype,
            length = length,
            text = text
        })
    end
end
```

Replace the above code with the following:

```
function QBCore.Functions.Notify(text, texttype, length)
    exports['v42-notify']:notify(text, texttype, length);
end
```


**Restart your server to enjoy your new notifications <3!**

Create custom Notifications in the config.lua
```
['error'] = {
    icon = 'fas fa-exclamation-triangle', -Custom icon (fontawesome)
    sound = "sound.mp3", - Custom .mp3 sound
    color = '#FF0045', - Custom notify color
    volume = "0.3", - Sound volume
    mute = false, - Sound muted set to true
},
```
