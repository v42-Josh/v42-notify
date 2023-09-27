const notifications = document.querySelector(".notifications");

const alerts = {};
var allNotifys;

const removeToast = (toast) => {
    toast.classList.add("hide");
    delete alerts[toast.id];
    if (toast.timeoutId) clearTimeout(toast.timeoutId);
    setTimeout(() => toast.remove(), 500);
}

const createToast = (id, details) => {
    var sound = new Audio(allNotifys[id]['sound']);
    sound.volume = allNotifys[id]['volume'];

    function playSound() {
        if (!allNotifys[id]['mute']) {
            sound.play()
        }
    }

    const { icon, color, defaultTile } = allNotifys[id];

    let title;
    if (!allNotifys[id]) {
        id = 'info';
    }

    if (details.caption) {
        title = details.caption;
    } else {
        title = defaultTile;
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
        toast.innerHTML = `<div class="column"> <i style="background: ${color}" class="fa ${icon} icon" style="background-color: n;"></i> <div class="message"> <div class="count-section" style="display: none"> <span id="count">0</span> </div> <span class="text text-1" style="color: var(--color);">${title[0].toUpperCase() + title.substring(1)}</span> <span class="text" id="text">${details.text}</span> </div> </div>`;
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

function testNotification(id, details) {
    createToast(id, details)
}

window.addEventListener('message', function (event) {
    switch (event.data.action) {
        case 'notify':
            createToast(event.data.type, event.data)
            break;
        case 'setNotifications':
            allNotifys = event.data.details;
            break
        case 'testNotify':
            testNotification(event.data.type, event.data);
            break
    }
});

// function createToast() {
//     let string = (Math.random() + 1).toString(36).substring(7);
//     return string;
// }

// function removeToast(string, time) {
//     setTimeout(() => {
//         $('#toast' + string).removeClass('active');
//         $('#' + string).remove();
//     }, time);

//     setTimeout(() => {
//         $('#toast' + string).removeClass('active');
//         $('#toast' + string).addClass('inactive');
//         setTimeout(() => {
//             $('#toast' + string).remove()
//         }, 500)
//     }, (time + 300));
// }

// function ShowNotification(data) {
//     var sound = new Audio('sound.mp3');
//     sound.volume = 0.8;
//     progress = document.querySelector(".progress");
//     let caption;
//     switch (data.type) {
//         case 'success':
//             caption = 'Success'
//             break;
//         case 'error':
//             caption = 'Error'
//             break;
//         case 'warning':
//             caption = 'Warning'
//             break;
//         case 'health':
//             caption = 'Health'
//             break;
//         case 'police':
//             caption = data.caption
//             break;
//         case 'ambulance':
//             caption = data.caption
//             break;
//         case 'primary':
//             caption = 'Info'
//             break;
//         default:
//             caption = 'Info'
//             break;
//     }

//     function playSound() {
//         if (data.playSound) {
//             sound.play()
//         }
//     }

//     switch (data.type) {
//         case 'success':
//             let successtring = createToast();
//             $('.toasts-wrap').append('<div class="toast success active" id="toast' + successtring + '" style="background: linear-gradient( to right, #00DD6B59 -8%, transparent 40%, transparent 100%, transparent 100%)"> <div class="toast-content"> <i class="fa-solid fa-check icon" style="background-color: #00DD6B;"></i> <div class="message"> <span class="text text-1" style="color: #00DD6B;">' + caption + '</span> <span class="text" id="text">' + data.text + '</span> </div> </div> <div class="progress active progsuccess" id="progress' + successtring + '"></div> </div>')
//             removeToast(successtring, data.time);
//             playSound()
//             break;
//         case 'error':
//             let errorstring = createToast();
//             $('.toasts-wrap').append('<div class="toast error active" id="toast' + errorstring + '" style="background: linear-gradient( to right, #FF004559 -8%, transparent 40%, transparent 100%, transparent 100%)"> <div class="toast-content"> <i class="fas fa-exclamation-triangle icon" style="background-color: #FF0045;"></i> <div class="message"> <span class="text text-1" style="color: #FF0045;">' + caption + '</span> <span class="text" id="text">' + data.text + '</span> </div> </div> <div class="progress active progerror" id="progress' + errorstring + '"></div> </div>')
//             removeToast(errorstring, data.time);
//             playSound()
//             break;
//         case 'warning':
//             let warningstring = createToast();
//             $('.toasts-wrap').append('<div class="toast success active" id="toast' + warningstring + '" style="background: linear-gradient( to right, #fc9f2759 -8%, transparent 40%, transparent 100%, transparent 100%)"> <div class="toast-content"> <i class="fas fa-exclamation-triangle  icon" style="background-color: #fc9f27;"></i> <div class="message"> <span class="text text-1" style="color: #fc9f27;">' + caption + '</span> <span class="text" id="text">' + data.text + '</span> </div> </div> <div class="progress active progwarning" id="progress' + warningstring + '"></div> </div>')
//             removeToast(warningstring, data.time);
//             playSound()
//             break;
//         case 'health':
//             let healthstring = createToast();
//             $('.toasts-wrap').append('<div class="toast healthstatus active" id="toast' + healthstring + '" style="background: linear-gradient( to right, #EF535059 -8%, transparent 40%, transparent 100%, transparent 100%)"> <div class="toast-content"> <i class="fas fa-heartbeat icon" style="background-color: #EF5350;"></i> <div class="message"> <span class="text text-1" style="color: #EF5350;">' + caption + '</span> <span class="text" id="text">' + data.text + '</span> </div> </div> <div class="progress active proghealthstatus" id="progress' + healthstring + '"></div> </div>')
//             removeToast(healthstring, data.time);
//             playSound()
//             break;
//         case 'police':
//             let policestring = createToast();
//             $('.toasts-wrap').append('<div class="toast police active" id="toast' + policestring + '" style="background: linear-gradient( to right, #135DD859 -8%, transparent 40%, transparent 100%, transparent 100%)"> <div class="toast-content"> <i class="fas fa-bullseye icon" style="background-color: #135DD8; --fa-secondary-color: #ffffff; --fa-secondary-opacity: 0.1;"></i> <div class="message"> <span class="text text-1" style="color: #135DD8;">' + caption + '</span> <span class="text" id="text">' + data.text + '</span> </div> </div> <div class="progress active progpolice" id="progress' + policestring + '"></div> </div>')
//             removeToast(policestring, data.time);
//             playSound()
//             break;
//         case 'ambulance':
//             let ambulancestring = createToast();
//             $('.toasts-wrap').append('<div class="toast ambulance active" id="toast' + ambulancestring + '" style="background: linear-gradient( to right, #FFC90559 -8%, transparent 40%, transparent 100%, transparent 100%)"> <div class="toast-content"> <i class="fa-solid fa-star-of-life icon" style="background-color: #FFC905; --fa-secondary-color: #ffffff; --fa-secondary-opacity: 0.1;"></i> <div class="message"> <span class="text text-1" style="color: #FFC905;">' + caption + '</span> <span class="text" id="text">' + data.text + '</span> </div> </div> <div class="progress active progambulance" id="progress' + ambulancestring + '"></div> </div>')
//             removeToast(ambulancestring, data.time);
//             playSound()
//             break;
//         case 'primary':
//             let primarystring = createToast();
//             $('.toasts-wrap').append('<div class="toast info active" id="toast' + primarystring + '" style="background: linear-gradient( to right, #2980b959 -8%, transparent 40%, transparent 100%, transparent 100%)"> <div class="toast-content"> <i class="fa-solid fa-circle-info icon" style="background-color: #2980b9; --fa-secondary-color: #ffffff; --fa-secondary-opacity: 0.1;"></i> <div class="message"> <span class="text text-1" style="color: #2980b9;">' + caption + '</span> <span class="text" id="text">' + data.text + '</span> </div> </div> <div class="progress active proginfo" id="progress' + primarystring + '"></div> </div>')
//             removeToast(primarystring, data.time);
//             playSound()
//             break;
//         default:
//             let defaultstring = createToast();
//             $('.toasts-wrap').append('<div class="toast info active" id="toast' + defaultstring + '" style="background: linear-gradient( to right, #2980b959 -8%, transparent 40%, transparent 100%, transparent 100%)"> <div class="toast-content"> <i class="fa-solid fa-circle-info icon" style="background-color: #2980b9; --fa-secondary-color: #ffffff; --fa-secondary-opacity: 0.1;"></i> <div class="message"> <span class="text text-1" style="color: #2980b9;">' + caption + '</span> <span class="text" id="text">' + data.text + '</span> </div> </div> <div class="progress active proginfo" id="progress' + defaultstring + '"></div> </div>')
//             removeToast(defaultstring, data.time);
//             playSound()
//             break;
//     }
// }