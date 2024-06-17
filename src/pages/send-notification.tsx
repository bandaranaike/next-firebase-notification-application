// src/app/send-notification.tsx
"use client";
import React, { useState } from "react";

const SendNotification = () => {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [token, setToken] = useState("eYp8Qd-U0uXW8ZBsQo_akx:APA91bFKJgGpuz-rwdvWTT8l4mVThWXnv2QNyEkigHlmpzJxfkIhv2URmbicI3IfXskUYDZX0QTCOd3d2dbHWjlEzin5wGImZkRHm4CkNxsfrbnq1j4sA49YWb5M5AfI-5TG7wtQmIg3");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch('http://localhost:3100/send-notification', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                message,
                token,
            }),
        });

        if (response.ok) {
            console.log('Notification sent successfully!');
        } else {
            console.log('Failed to send notification.');
        }
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-4">
            <h1 className="text-2xl font-bold mb-4">Send Notification</h1>
            <form onSubmit={handleSubmit} className="w-full max-w-md">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="token">
                        Token
                    </label>
                    <input
                        id="token"
                        type="text"
                        value={token}
                        onChange={(e) => setToken(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Send Notification
                </button>
            </form>
        </div>
    );
};

export default SendNotification;
