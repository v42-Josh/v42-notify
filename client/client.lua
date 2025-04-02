local function sendNotify(text, textType, time, caption)
    SendNUIMessage({
        action   = 'notify',
        type     = textType,
        time     = time,
        text     = text,
        details  = Config.Notifications[textType],
        position = Config.Position,
        caption  = caption
    })
end

function notify(text, textType, time)
    local defaultType = Config.DefaultNotify or "info"

    if textType == true then
        textType = "success"
    elseif textType == false or textType == 0 then
        textType = "error"
    elseif type(textType) ~= "string" then
        textType = defaultType
    end

    if not Config.Notifications[textType] then
        print(("[v42-notify] [ERROR] Notification type \"%s\" is not defined in Config.Notifications. Please add it to your config to use this notification.")
            :format(tostring(textType)))
        return
    end

    time = time or 5000

    if type(text) == "table" then
        local notifyText = text.text or "Placeholder"
        local caption = text.caption or "Placeholder"
        sendNotify(notifyText, textType, time, caption)
    else
        sendNotify(text, textType, time)
    end
end

if Config.Debug then
    RegisterCommand("notify", function(_, args)
        local notifyType = args[1]
        if not Config.Notifications[notifyType] then
            print(("[v42-notify] [ERROR] Notification type \"%s\" is not defined in Config.Notifications. Please add it to your config to use this notification.")
                :format(tostring(notifyType)))
            return
        end
        if notifyType then
            SendNUIMessage({
                action  = "testNotify",
                type    = notifyType,
                time    = 5000,
                text    = "This is a test notification for: " .. notifyType,
                details = Config.Notifications[notifyType]
            })
        end
    end, false)
end

RegisterNUICallback("nui-ready", function()
    SendNUIMessage({
        action     = "setGlobalMute",
        globalMute = Config.GlobalMute or false
    })
end)

exports("notify", notify)
