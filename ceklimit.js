export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username } = req.body;

    // Simulasi cek limit
    const users = {
      "user1": { limit: 5 },
      "user2": { limit: 3 }
    };

    if (users[username]) {
      res.status(200).json({ success: true, limit: users[username].limit });
    } else {
      res.status(404).json({ success: false, message: "User tidak ditemukan" });
    }
  } else {
    res.status(405).json({ message: "Metode tidak didukung" });
  }
}