export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // Simulasi user (hardcoded, bukan database)
    const users = {
      "user1": { password: "1234", limit: 5 },
      "user2": { password: "abcd", limit: 3 }
    };

    if (users[username] && users[username].password === password) {
      res.status(200).json({ success: true, limit: users[username].limit });
    } else {
      res.status(401).json({ success: false, message: "Login gagal" });
    }
  } else {
    res.status(405).json({ message: "Metode tidak didukung" });
  }
}