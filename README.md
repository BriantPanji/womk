# WOMK - Website Orang Muda Katolik

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-6.19-2D3748?logo=prisma)](https://www.prisma.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwindcss)](https://tailwindcss.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-4169E1?logo=postgresql)](https://www.postgresql.org/)

Website profil _resmi_ untuk **Organisasi Orang Muda Katolik (OMK) Gereja Paroki St. Fransiskus Asisi, Padang Bulan, Medan**, Keuskupan Agung Medan. Platform ini menyediakan ruang publik yang dapat diakses oleh semua orang untuk mendapatkan informasi tentang OMK, berbagi artikel, berdiskusi melalui forum, dan aktivitas komunitas lainnya.

---

## 📖 Tentang Proyek

WOMK hadir sebagai solusi digital untuk organisasi Orang Muda Katolik dengan tujuan:

- 🌐 **Ruang Publik** — Menyediakan sarana informasi yang mudah diakses oleh siapa saja
- 📝 **Blog & Artikel** — Platform berbagi artikel, renungan, dan informasi kegiatan OMK
- 💬 **Forum Komunitas** — Sarana berdiskusi dan bertukar pendapat antar anggota
- 🖼️ **Galeri Kegiatan** — Dokumentasi visual kegiatan-kegiatan OMK
- 👥 **Manajemen Anggota** — Sistem keanggotaan dengan struktur wilayah dan lingkungan

### Mengapa Proyek Ini Dibuat?

Konten website akan dikelola oleh anggota OMK yang tidak memiliki latar belakang pemrograman, sehingga sistem CMS (Content Management System) menjadi kebutuhan utama untuk memudahkan pengelolaan konten.

---

## 🛠️ Tech Stack

| Kategori            | Teknologi                                                                       |
| ------------------- | ------------------------------------------------------------------------------- |
| **Framework**       | [Next.js 16](https://nextjs.org/) + [React 19](https://react.dev/) (App Router) |
| **Language**        | [TypeScript](https://www.typescriptlang.org/)                                   |
| **Styling**         | [Tailwind CSS 4](https://tailwindcss.com/)                                      |
| **Database**        | [PostgreSQL](https://www.postgresql.org/) (Vercel Postgres + Local)             |
| **ORM**             | [Prisma 6](https://www.prisma.io/)                                              |
| **Compiler**        | [React Compiler](https://react.dev/learn/react-compiler) (Babel Plugin)         |
| **Linting**         | [ESLint 9](https://eslint.org/)                                                 |
| **Package Manager** | [Bun](https://bun.sh/)                                                          |

---

## 🚀 Getting Started

### Prerequisites

Pastikan Anda memiliki software berikut terinstall:

- [Node.js](https://nodejs.org/) v18+ atau [Bun](https://bun.sh/)
- [PostgreSQL](https://www.postgresql.org/) (untuk database lokal)
- [Git](https://git-scm.com/)

### Installation

1. **Clone repository**

   ```bash
   git clone <repository-url>
   cd womk
   ```

2. **Install dependencies**

   ```bash
   bun install
   # atau menggunakan npm
   npm install
   ```

3. **Setup environment variables**

   Buat file `.env` di root direktori proyek:

   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/womk_db"
   ```

   > 💡 Untuk production di Vercel, gunakan connection string dari Vercel Postgres.

4. **Setup database**

   ```bash
   # Generate Prisma Client
   bunx prisma generate

   # Jalankan migrasi database
   bunx prisma migrate dev

   # (Optional) Seed data awal
   bunx prisma db seed
   ```

5. **Jalankan development server**

   ```bash
   bun dev
   # atau
   npm run dev
   ```

6. Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

---

## 📁 Struktur Proyek

```
womk/
├── prisma/
│   ├── migrations/        # File migrasi database
│   ├── seeds/             # Data seeder
│   ├── schema.prisma      # Schema database Prisma
│   └── seed.ts            # Entry point seeder
├── public/                # Static assets
├── scripts/               # Utility scripts
├── src/
│   └── app/               # Next.js App Router
├── prisma.config.ts       # Konfigurasi Prisma
├── next.config.ts         # Konfigurasi Next.js
├── tailwind.config.ts     # Konfigurasi Tailwind CSS
└── package.json
```

---

## 🗃️ Database Schema

### Modul Utama

| Modul                | Deskripsi                             |
| -------------------- | ------------------------------------- |
| **User & Akses**     | Manajemen user, role, dan status akun |
| **Struktur Gereja**  | Wilayah dan Lingkungan                |
| **Jabatan Gerejawi** | Jabatan dan periode kepengurusan      |
| **Artikel & Konten** | Blog, kategori, dan gambar artikel    |
| **Forum**            | Diskusi, komentar, dan voting         |
| **Galeri**           | Galeri pribadi dan publik             |

### Entity Relationship

```
User ──────┬──> Lingkungan ──> Wilayah
           ├──> UserRole ──> Role
           ├──> UserJabatan ──> Jabatan
           ├──> Article ──> Category
           ├──> Forum ──> ForumCategory
           ├──> ForumComment
           ├──> ForumVote
           ├──> Gallery
           └──> GalleryPublic
```

---

## 🌟 Credits

- **Developer**: [PencariKode](https://github.com/PencariKode)
- **Inspiration**: Proyek ini dibuat dengan inspirasi dari semangat **St. Carlo Acutis**, seorang milenial yang menggunakan teknologi untuk menyebarkan kasih Tuhan. Semangatnya menjadi teladan bagi OMK untuk berkarya di dunia digital.

> _"The Eucharist is the highway to heaven."_ — St. Carlo Acutis

---

## 📄 Lisensi

Proyek ini dikembangkan untuk kepentingan organisasi **Orang Muda Katolik (OMK)**.

---

<div align="center">
  
**Dibuat dengan ❤️ untuk OMK**

_"Janganlah hendaknya kerajinanmu kendor, biarlah rohmu menyala-nyala dan layanilah Tuhan"_ — Roma 12:11

</div>
