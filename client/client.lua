function notify(text, texttype, time)
    if type(text) == "table" then
        local ttext = text.text or 'Placeholder'
        local caption = text.caption or 'Placeholder'
        texttype = texttype or Config.DeaultNotify
        time = time or 5000
        SendNUIMessage({
            action = 'notify',
            type = texttype,
            time = time,
            text = ttext,
            details = Config.Notifications[texttype],
            caption = caption,
        })
    else
        texttype = texttype or Config.DeaultNotify
        time = time or 5000
        SendNUIMessage({
            action = 'notify',
            type = texttype,
            time = time,
            text = text,
            details = Config.Notifications[texttype]
        })
    end
end

if Config.Debug then
    RegisterCommand('notify', function(source, args, raw)
        local notify = args[1];
        if notify ~= nil then
            SendNUIMessage({
                action = 'testNotify',
                type = notify,
                time = 5000,
                text = 'This is an test notification for: ' .. notify,
                details = Config.Notifications[notify]
            })
        end
    end, false)
end

exports('notify', notify)
