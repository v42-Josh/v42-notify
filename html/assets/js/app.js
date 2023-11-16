const notifications = document.querySelector(".notifications");

let globalMute = false

const alerts = {};

const removeToast = (toast) => {
    toast.classList.add("hide");
    delete alerts[toast.id];
    if (toast.timeoutId) clearTimeout(toast.timeoutId);
    setTimeout(() => toast.remove(), 500);
}

const createToast = (id, details, notify) => {
    var sound = new Audio(notify['sound']);
    sound.volume = notify['volume'];

    function playSound() {
        if (!globalMute && !notify['mute']) {
            sound.play()
        }
    }

    const { icon, color, title } = notify;

    let defaultTile;

    if (details.caption) {
        defaultTile = details.caption;
    } else {
        defaultTile = title;
    }

    const toast = document.createElement("li");
    var toastId = (Math.random() + 1).toString(36).substring(4);
    toast.className = `toast ${id}`;
    toast.id = toastId;
    function getKeyByValue(object, value) {
        return Object.keys(object).find(key =>
            object[key] === value);
    }

    function createNotify() {
        alerts[toastId] = details.text;
        toast.innerHTML = `<div class="column"> <i style="background: ${color}" class="fa ${icon} icon" style="background-color: n;"></i> <div class="message"> <div class="count-section" style="display: none"> <span id="count">0</span> </div> <span class="text text-1" style="color: var(--color);">${defaultTile[0].toUpperCase() + defaultTile.substring(1)}</span> <span class="text" id="text">${details.text}</span> </div> </div>`;
        toast.style.setProperty('--color', color);
        toast.style.setProperty('--animation', 'progress ' + (Math.round(details.time / 1000).toFixed(1)) + 's linear forwards');
        toast.style.setProperty('--color-gd', color + 59);
        notifications.appendChild(toast);
        toast.timeoutId = setTimeout(() => removeToast(toast), details.time);
    }

    function updateNotify(id) {
        let element = $('#' + id);
        let elementTimeOut = document.getElementById(id).timeoutId;
        let count = Number(element.find('#count').text());
        element.find('.count-section').css('display', 'block');
        element.find('#count').text(count + 1)
        clearTimeout(elementTimeOut);
        document.getElementById(id).timeoutId = setTimeout(() => removeToast(element[0]), details.time);
        document.getElementById(id).style.removeProperty('--animation');
        setTimeout(function () {
            document.getElementById(id).style.setProperty('--animation', 'progress ' + (Math.round(details.time / 1000).toFixed(1)) + 's linear forwards')
        }, 100);
    }

    if (Object.values(alerts).indexOf(details.text) > -1) {
        updateNotify(getKeyByValue(alerts, details.text));
        playSound();
    } else {
        createNotify();
        playSound();
    }

}

function testNotification(id, details, notify) {
    createToast(id, details, notify)
}

window.addEventListener('message', function (event) {
    switch (event.data.action) {
        case 'notify':
            createToast(event.data.type, event.data, event.data.details)
            break;
        case 'setGlobalMute':
            globalMute = (event.data.globalMute === true)
            break;
        case 'testNotify':
            testNotification(event.data.type, event.data, event.data.details);
            break
    }
});

$(() => {
    $.post('https://v42-notify/nui-ready')
})