Config = {}

Config.Debug = false     -- Set to true is you want to enable /notify command. Usage: '/notify error';

Config.Notifications = { -- Restart your server for new notifications!
    ['error'] = {
        icon = 'fas fa-exclamation-triangle',
        sound = "sound.mp3",
        color = '#FF0045',
        volume = "0.3",
        mute = false,
    },
    ['success'] = {
        icon = 'fa-solid fa-check',
        sound = "sound.mp3",
        color = '#00DD6B',
        volume = "0.3",
        mute = false,
    },
    ['warning'] = {
        icon = 'fas fa-exclamation-triangle',
        sound = "sound.mp3",
        color = '#fc9f27',
        volume = "0.3",
        mute = false,
    },
    ['health'] = {
        icon = 'fas fa-heartbeat',
        sound = "sound.mp3",
        color = '#EF5350',
        volume = "0.3",
        mute = false,
    },
    ['police'] = {
        icon = 'fas fa-bullseye',
        sound = "sound.mp3",
        color = '#135DD8',
        volume = "0.3",
        mute = false,
    },
    ['ambulance'] = {
        icon = 'fa-solid fa-star-of-life',
        sound = "sound.mp3",
        color = '#FFC905',
        volume = "0.3",
        mute = false,
    },
    ['info'] = {
        icon = 'fa-solid fa-circle-info',
        sound = "sound.mp3",
        color = '#2980b9',
        volume = "0.3",
        mute = false,
    },
    ['primary'] = { -- Keep this for default notification!
        icon = 'fa-solid fa-circle-info',
        sound = "sound.mp3",
        color = '#2980b9',
        volume = "0.3",
        mute = false,
    }
}
