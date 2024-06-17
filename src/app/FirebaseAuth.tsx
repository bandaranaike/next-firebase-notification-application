// src/app/FirebaseAuth.tsx
"use client";
import React, { useEffect, useState } from "react";
import { app } from "@/firebaseConfig";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const FirebaseAuth = () => {
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const requestPermission = async () => {
            const permission = await Notification.requestPermission();
            if (permission === 'granted') {
                try {
                    const registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js');

                    const messaging = getMessaging(app); // Initialize messaging here
                    const fcmToken = await getToken(messaging, { vapidKey: 'BIt-30RsuvCsp3w7n05cVSYmb2GD8IDH3fQ94zq6218yJYTU-ug8OSfd3jDrgG4B0U2KSyvn2K_hFsDK39HkPo0', serviceWorkerRegistration: registration });
                    console.log('FCM Token:', fcmToken);
                    setToken(fcmToken); // Save the token
                    // Optionally, send the token to your backend server
                    await fetch('/api/store-token', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ token: fcmToken }),
                    });
                } catch (error) {
                    console.error('Service Worker registration or FCM Token error', error);
                }
            } else {
                console.log('Permission denied');
            }
        };

        requestPermission();

        const messaging = getMessaging(app); // Initialize messaging here for onMessage
        console.log("Initialize messaging")
        onMessage(messaging, (payload) => {
            console.log('Message received. ', payload);
            alert(`Title: ${payload.notification.title}\nMessage: ${payload.notification.body}`);
        });
    }, []);

    return (
        <div>
            {token && <p>Your FCM Token: {token}</p>}
        </div>
    );
};

export default FirebaseAuth;
