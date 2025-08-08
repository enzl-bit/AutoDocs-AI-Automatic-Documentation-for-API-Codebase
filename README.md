# 🧠 AutoDocs AI

AutoDocs AI adalah tool open-source yang secara otomatis menghasilkan dokumentasi dari kode sumber (JS/Python) dan menampilkannya dalam web viewer interaktif berbasis React + Tailwind.

> 🎯 Cocok untuk developer yang ingin mendokumentasikan API internal, helper functions, atau library pribadi secara instan tanpa repot menulis manual.

---

## 🚀 Fitur Utama

- 🧾 Generate dokumentasi otomatis dari kode sumber JavaScript
- 🌐 Viewer web responsif menggunakan React + Tailwind
- 🧠 Support parsing deskripsi fungsi, parameter, dan return
- 🔌 Backend berbasis Express.js
- 📄 Output dalam format JSON (dapat diekspor ke Markdown)
- 💡 Siap untuk integrasi parser bahasa lain (Python, Java, dll)

---

## 📁 Struktur Proyek

```
AutoDocsAI/
├── frontend/             # Web viewer (React + TypeScript + Tailwind)
│   └── App.tsx           # Komponen utama
├── backend/              # API untuk parsing kode
│   ├── index.js          # Server Express
│   └── utils/parser.js   # Parser fungsi JS
└── README.md
```

---

## ⚙️ Cara Menggunakan

### 1. Clone repo

```bash
git clone https://github.com/namamu/autodocs-ai.git
cd autodocs-ai
```

### 2. Jalankan Backend

```bash
cd backend
npm install
npm start
```

API akan tersedia di `http://localhost:3001/api/docs`

### 3. Jalankan Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend akan tersedia di `http://localhost:5173/`

---

## 🧪 Contoh Penggunaan

Paste kode JS seperti ini ke textarea:

```js
/**
 * Menyapa seseorang
 * @param {string} name - Nama yang ingin disapa
 * @returns {string} Pesan sapaan
 */
function greet(name) {
  return `Halo, ${name}!`;
}
```

Lalu klik **"Generate Docs"**, hasilnya akan tampil di bawah.

---

## 💡 Rencana Pengembangan

- [x] Parsing JS
- [ ] Parsing Python & TypeScript
- [ ] Export dokumentasi ke Markdown/PDF
- [ ] Upload file lokal
- [ ] Deployment ke Railway/Vercel

---

## 🤝 Kontribusi

Pull request dan ide sangat diterima! Buka issue atau PR.

---

## ☕ Donasi

Dukung pengembangan proyek ini:

[![PayPal](https://img.shields.io/badge/Donate-PayPal-blue.svg)](https://www.paypal.me/Zwsss)

---

## 🛡️ Lisensi

MIT License © 2025 [enzl-bit](https://github.com/enzl-bit)
