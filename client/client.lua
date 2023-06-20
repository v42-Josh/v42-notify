function notify(text, texttype, time)
    if type(text) == "table" then
        local ttext = text.text or 'Placeholder'
        local caption = text.caption or 'Placeholder'
        texttype = texttype or 'primary'
        time = time or 5000
        SendNUIMessage({
            action = 'notify',
            type = texttype,
            time = time,
            text = ttext,
            caption = caption,
            playSound = Config.PlaySound
        })
    else
        texttype = texttype or 'primary'
        time = time or 5000
        print(Config.PlaySound)
        SendNUIMessage({
            action = 'notify',
            type = texttype,
            time = time,
            text = text,
            playSound = Config.PlaySound
        })
    end
end

exports('notify', notify)
