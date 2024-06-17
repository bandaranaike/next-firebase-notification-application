// sendNotification.js
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://simplenotificationapp-13e2a-default-rtdb.asia-southeast1.firebasedatabase.app"
});


const sendNotification = (title, message, token) => {
    const messagePayload = {
        notification: {
            title: title,
            body: message,
        },
        token: token,
    };

    admin.messaging().send(messagePayload)
        .then((response) => {
            console.log('Successfully sent message:', response);
        })
        .catch((error) => {
            console.log('Error sending message:', error);
        });
};

module.exports = sendNotification;
