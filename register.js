export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // Simulasi penyimpanan user baru (tidak permanen)
    // Dalam implementasi nyata, ini disimpan di database

    res.status(200).json({
      success: true,
      message: `Akun '${username}' berhasil dibuat (simulasi)`
    });
  } else {
    res.status(405).json({ message: "Metode tidak didukung" });
  }
}