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
            })
        end
    end, false)
end

RegisterNetEvent('QBCore:Client:OnPlayerLoaded', function()
    SendNUIMessage({
        action = 'setNotifications',
        details = Config.Notifications
    })
end)


exports('notify', notify)
