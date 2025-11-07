export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const event = req.body;
    console.log('Received event from Okta:', event);
    return res.status(200).json({ message: 'Event received', event });
  } catch (error) {
    console.error('Error handling event:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}