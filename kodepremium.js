export default function handler(req, res) {
  if (req.method === 'POST') {
    const { kode } = req.body;

    const kodeValid = {
      "PREMIUM123": 10,
      "EDIV2": 20,
      "DHB": 15
    };

    if (kodeValid[kode]) {
      res.status(200).json({
        success: true,
        tambahanLimit: kodeValid[kode]
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Kode tidak valid"
      });
    }
  } else {
    res.status(405).json({ message: "Metode tidak didukung" });
  }
}