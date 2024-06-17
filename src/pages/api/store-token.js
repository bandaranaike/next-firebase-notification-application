// pages/api/store-token.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { token } = req.body;
        // Store the token in your database
        // For simplicity, we'll just log it here
        console.log('Received FCM token:', token);
        res.status(200).json({ message: 'Token stored successfully' });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
