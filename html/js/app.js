window.addEventListener('message', function (event) {
    switch (event.data.action) {
        case 'show':
            ShowNotification(event.data);
            break;
        default:
            ShowNotification(event.data);
            break;
    }
});

function createToast() {
    let string = (Math.random() + 1).toString(36).substring(7);
    return string;
}

function removeToast(string, time) {
    setTimeout(() => {
        $('#toast' + string).removeClass('active');
        $('#' + string).remove();
    }, time);

    setTimeout(() => {
        $('#toast' + string).removeClass('active');
        $('#toast' + string).addClass('inactive');
        setTimeout(() => {
            $('#toast' + string).remove()
        }, 500)
    }, (time + 300));
}

function ShowNotification(data) {
    progress = document.querySelector(".progress");
    let caption;
    switch (data.type) {
        case 'success':
            caption = 'Success'
            break;
        case 'error':
            caption = 'Error'
            break;
        case 'warning':
            caption = 'Warning'
            break;
        case 'health':
            caption = 'Health'
            break;
        case 'police':
            caption = data.caption
            break;
        case 'ambulance':
            caption = data.caption
            break;
        case 'primary':
            caption = 'Info'
            break;
        default:
            caption = 'Info'
            break;
    }

    switch (data.type) {
        case 'success':
            let successtring = createToast();
            $('.toasts-wrap').append('<div class="toast success active" id="toast' + successtring + '" style="background: linear-gradient( to right, #00DD6B59 -8%, transparent 40%, transparent 100%, transparent 100%)"> <div class="toast-content"> <i class="fa-solid fa-check icon" style="background-color: #00DD6B;"></i> <div class="message"> <span class="text text-1" style="color: #00DD6B;">' + caption + '</span> <span class="text" id="text">' + data.text + '</span> </div> </div> <div class="progress active progsuccess" id="progress' + successtring + '"></div> </div>')
            removeToast(successtring, data.time);
            break;
        case 'error':
            let errorstring = createToast();
            $('.toasts-wrap').append('<div class="toast error active" id="toast' + errorstring + '" style="background: linear-gradient( to right, #FF004559 -8%, transparent 40%, transparent 100%, transparent 100%)"> <div class="toast-content"> <i class="fas fa-exclamation-triangle icon" style="background-color: #FF0045;"></i> <div class="message"> <span class="text text-1" style="color: #FF0045;">' + caption + '</span> <span class="text" id="text">' + data.text + '</span> </div> </div> <div class="progress active progerror" id="progress' + errorstring + '"></div> </div>')
            removeToast(errorstring, data.time);
            break;
        case 'warning':
            let warningstring = createToast();
            $('.toasts-wrap').append('<div class="toast success active" id="toast' + warningstring + '" style="background: linear-gradient( to right, #fc9f2759 -8%, transparent 40%, transparent 100%, transparent 100%)"> <div class="toast-content"> <i class="fas fa-exclamation-triangle  icon" style="background-color: #fc9f27;"></i> <div class="message"> <span class="text text-1" style="color: #fc9f27;">' + caption + '</span> <span class="text" id="text">' + data.text + '</span> </div> </div> <div class="progress active progwarning" id="progress' + warningstring + '"></div> </div>')
            removeToast(warningstring, data.time);
            break;
        case 'health':
            let healthstring = createToast();
            $('.toasts-wrap').append('<div class="toast healthstatus active" id="toast' + healthstring + '" style="background: linear-gradient( to right, #EF535059 -8%, transparent 40%, transparent 100%, transparent 100%)"> <div class="toast-content"> <i class="fas fa-heartbeat icon" style="background-color: #EF5350;"></i> <div class="message"> <span class="text text-1" style="color: #EF5350;">' + caption + '</span> <span class="text" id="text">' + data.text + '</span> </div> </div> <div class="progress active proghealthstatus" id="progress' + healthstring + '"></div> </div>')
            removeToast(healthstring, data.time);
            break;
        case 'police':
            let policestring = createToast();
            $('.toasts-wrap').append('<div class="toast police active" id="toast' + policestring + '" style="background: linear-gradient( to right, #135DD859 -8%, transparent 40%, transparent 100%, transparent 100%)"> <div class="toast-content"> <i class="fas fa-bullseye icon" style="background-color: #135DD8; --fa-secondary-color: #ffffff; --fa-secondary-opacity: 0.1;"></i> <div class="message"> <span class="text text-1" style="color: #135DD8;">' + caption + '</span> <span class="text" id="text">' + data.text + '</span> </div> </div> <div class="progress active progpolice" id="progress' + policestring + '"></div> </div>')
            removeToast(policestring, data.time);
            break;
        case 'ambulance':
            let ambulancestring = createToast();
            $('.toasts-wrap').append('<div class="toast ambulance active" id="toast' + ambulancestring + '" style="background: linear-gradient( to right, #FFC90559 -8%, transparent 40%, transparent 100%, transparent 100%)"> <div class="toast-content"> <i class="fa-solid fa-star-of-life icon" style="background-color: #FFC905; --fa-secondary-color: #ffffff; --fa-secondary-opacity: 0.1;"></i> <div class="message"> <span class="text text-1" style="color: #FFC905;">' + caption + '</span> <span class="text" id="text">' + data.text + '</span> </div> </div> <div class="progress active progambulance" id="progress' + ambulancestring + '"></div> </div>')
            removeToast(ambulancestring, data.time);
            break;
        case 'primary':
            let primarystring = createToast();
            $('.toasts-wrap').append('<div class="toast info active" id="toast' + primarystring + '" style="background: linear-gradient( to right, #2980b959 -8%, transparent 40%, transparent 100%, transparent 100%)"> <div class="toast-content"> <i class="fa-solid fa-circle-info icon" style="background-color: #2980b9; --fa-secondary-color: #ffffff; --fa-secondary-opacity: 0.1;"></i> <div class="message"> <span class="text text-1" style="color: #2980b9;">' + caption + '</span> <span class="text" id="text">' + data.text + '</span> </div> </div> <div class="progress active proginfo" id="progress' + primarystring + '"></div> </div>')
            removeToast(primarystring, data.time);
            break;
        default:
            let defaultstring = createToast();
            $('.toasts-wrap').append('<div class="toast info active" id="toast' + defaultstring + '" style="background: linear-gradient( to right, #2980b959 -8%, transparent 40%, transparent 100%, transparent 100%)"> <div class="toast-content"> <i class="fa-solid fa-circle-info icon" style="background-color: #2980b9; --fa-secondary-color: #ffffff; --fa-secondary-opacity: 0.1;"></i> <div class="message"> <span class="text text-1" style="color: #2980b9;">' + caption + '</span> <span class="text" id="text">' + data.text + '</span> </div> </div> <div class="progress active proginfo" id="progress' + defaultstring + '"></div> </div>')
            removeToast(defaultstring, data.time);
            break;
    }
}