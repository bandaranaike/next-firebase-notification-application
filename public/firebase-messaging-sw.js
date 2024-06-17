// public/firebase-messaging-sw.js
console.log("Service Worker Loaded");
self.addEventListener('fetch',function(event) {

    importScripts('https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js');
    importScripts('https://www.gstatic.com/firebasejs/9.1.0/firebase-messaging.js');

    const firebaseConfig = {
        apiKey: "AIzaSyDPUWipj4hP0wyjj32NT5E169EZGexJi88",
        authDomain: "simplenotificationapp-13e2a.firebaseapp.com",
        projectId: "simplenotificationapp-13e2a",
        storageBucket: "simplenotificationapp-13e2a.appspot.com",
        messagingSenderId: "1048350807000",
        appId: "1:1048350807000:web:687fbe37f685ef9e8c98ad",
        measurementId: "G-F9D2D56EQP"
    };

    firebase.initializeApp(firebaseConfig);

    const messaging = firebase.messaging();

    messaging.onBackgroundMessage(function (payload) {
        console.log('[firebase-messaging-sw.js] Received background message ', payload);
        const notificationTitle = payload.notification.title;
        const notificationOptions = {
            body: payload.notification.body,
            icon: '/firebase-logo.png'
        };

        self.registration.showNotification(notificationTitle, notificationOptions);
    });
})