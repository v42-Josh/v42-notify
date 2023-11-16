Config = {}

Config.DeaultNotify = 'primary'; -- Default notification (if there is no notify type given)
Config.Debug = false             -- Set to true is you want to enable /notify command. Usage: '/notify error';
Config.EsxNotifcation = false    --Set this to true to use ESX notifications

Config.GlobalMute = false        -- If set to true, this mutes all notifications regardless of notification settings

Config.Notifications = {         -- Restart your server for new notifications!
    ['error'] = {
        icon = 'fas fa-exclamation-triangle',
        title = 'Error',
        sound = "sound.mp3",
        color = '#FF0045',
        volume = "0.3",
        mute = false,
    },
    ['success'] = {
        icon = 'fa-solid fa-check',
        title = 'Success',
        sound = "sound.mp3",
        color = '#00DD6B',
        volume = "0.3",
        mute = false,
    },
    ['warning'] = {
        icon = 'fas fa-exclamation-triangle',
        title = 'Warning',
        sound = "sound.mp3",
        color = '#fc9f27',
        volume = "0.3",
        mute = false,
    },
    ['health'] = {
        icon = 'fas fa-heartbeat',
        title = 'Health',
        sound = "sound.mp3",
        color = '#EF5350',
        volume = "0.3",
        mute = false,
    },
    ['police'] = {
        icon = 'fas fa-bullseye',
        title = 'Police',
        sound = "sound.mp3",
        color = '#135DD8',
        volume = "0.3",
        mute = false,
    },
    ['ambulance'] = {
        icon = 'fa-solid fa-star-of-life',
        title = 'Ambulance',
        sound = "sound.mp3",
        color = '#FFC905',
        volume = "0.3",
        mute = false,
    },
    ['info'] = { -- Default notfication of ESX (You can edit this notify)
        icon = 'fa-solid fa-circle-info',
        title = 'Info',
        sound = "sound.mp3",
        color = '#2980b9',
        volume = "0.3",
        mute = false,
    },
    ['primary'] = { -- Default notification of QBCore (You can edit this notify)
        icon = 'fa-solid fa-circle-info',
        title = 'Info',
        sound = "sound.mp3",
        color = '#2980b9',
        volume = "0.3",
        mute = false,
    },
}
