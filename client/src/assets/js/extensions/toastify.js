var basic = document.getElementById('basic')
if(basic) {
    basic.addEventListener('click', () => {
        Toastify({
            text: "This is a toast",
            duration: 3000
        }).showToast();
    })
}

var background = document.getElementById('background')
if(background) {
    background.addEventListener('click', () => {
        Toastify({
            text: "This is a toast",
            duration: 3000,
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        }).showToast();
    })
}

var closeID = document.getElementById('close')
if(closeID) {
    closeID.addEventListener('click', () => {
        Toastify({
            text: "Click close button",
            duration: 3000,
            close:true,
            backgroundColor: "#4fbe87",
        }).showToast();
    })
}

var top_left = document.getElementById('top-left')
if(top_left) {
    top_left.addEventListener('click', () => {
        Toastify({
        text: "This is toast in top left",
        duration: 3000,
        close:true,
        gravity:"top",
        position: "left",
        backgroundColor: "#4fbe87",
    }).showToast();
})
}

var top_center = document.getElementById('top-center')
if(top_center) {
    top_center.addEventListener('click', () => {
        Toastify({
            text: "This is toast in top center",
            duration: 3000,
            close:true,
            gravity:"top",
            position: "center",
            backgroundColor: "#4fbe87",
        }).showToast();
    })
}

var top_right = document.getElementById('top-right')
if(top_right) {
    top_right.addEventListener('click', () => {
        Toastify({
            text: "This is toast in top right",
            duration: 3000,
            close:true,
            gravity:"top",
            position: "right",
            backgroundColor: "#4fbe87",
        }).showToast();
    })
}

var bottom_right = document.getElementById('bottom-right')
if(bottom_right) {
    bottom_right.addEventListener('click', () => {
        Toastify({
            text: "This is toast in bottom right",
            duration: 3000,
            close:true,
            gravity:"bottom",
            position: "right",
            backgroundColor: "#4fbe87",
        }).showToast();
    })
}

var bottom_center = document.getElementById('bottom-center')
if(bottom_center) {
    bottom_center.addEventListener('click', () => {
        Toastify({
            text: "This is toast in bottom center",
            duration: 3000,
            close:true,
            gravity:"bottom",
            position: "center",
            backgroundColor: "#4fbe87",
        }).showToast();
    })
}

var bottom_left = document.getElementById('bottom-left')
if(bottom_left) {
    bottom_left.addEventListener('click', () => {
        Toastify({
            text: "This is toast in bottom left",
            duration: 3000,
            close:true,
            gravity:"bottom",
            position: "left",
            backgroundColor: "#4fbe87",
        }).showToast();
    })
}
