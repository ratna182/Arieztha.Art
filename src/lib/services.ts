import type { NavLink } from "@/lib/business";

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceSection {
  heading: string;
  paragraphs: string[];
}

export interface ServiceStep {
  title: string;
  description: string;
}

export interface ServiceData {
  slug: string;
  breadcrumb: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  whatsappMessage: string;
  highlights: string[];
  variantNote: string;
  variantColumns: string[];
  variants: string[][];
  sections: ServiceSection[];
  process: ServiceStep[];
  faqs: ServiceFaq[];
  related: NavLink[];
}

export const YASIN_SERVICE: ServiceData = {
  slug: "/cetak-yasin",
  breadcrumb: "Cetak Yasin",
  metaTitle: "Cetak Yasin Custom Bekasi | Arieztha.Art",
  metaDescription:
    "Cetak buku Yasin custom soft cover & hard cover di Bekasi. Cover foto almarhum, isi Yasin dan tahlil. Konsultasi desain via WhatsApp, buka 07.00–21.00.",
  eyebrow: "Soft cover · Hard cover · Cover foto",
  h1: "Cetak Buku Yasin Custom di Bekasi",
  intro:
    "Mencari cetak buku Yasin untuk tahlilan di Bekasi? Arieztha.Art mengerjakan buku Yasin custom dengan cover foto dan nama almarhum/almarhumah, baik soft cover maupun hard cover. Kirimkan foto dan teks yang ingin dicetak melalui WhatsApp, kami bantu prosesnya dengan tenang dan teliti.",
  whatsappMessage:
    "Halo Arieztha.Art, saya mau tanya cetak buku Yasin custom di Bekasi. Bisa dibantu?",
  highlights: [
    "Cover custom foto dan nama almarhum/almarhumah",
    "Pilihan soft cover dan hard cover",
    "Konsultasi desain langsung via WhatsApp",
  ],
  variantNote:
    "Jumlah pesanan dapat menyesuaikan kebutuhan acara, mulai dari 7, 40, 100, hingga 1000 hari. Estimasi waktu dan biaya dikonfirmasi setelah spesifikasi dan jumlah buku diterima.",
  variantColumns: ["Varian", "Cover", "Isi", "Jilid", "Estimasi"],
  variants: [
    [
      "Soft cover",
      "Custom foto dan nama",
      "Yasin dan tahlil",
      "Lem",
      "Dikonfirmasi via WhatsApp",
    ],
    [
      "Hard cover",
      "Custom foto dan nama",
      "Yasin dan tahlil",
      "Jahit dan lem",
      "Dikonfirmasi via WhatsApp",
    ],
    [
      "Tambahan desain",
      "Motif atau ornamen pilihan",
      "Sesuai permintaan",
      "Mengikuti varian",
      "Dikonfirmasi via WhatsApp",
    ],
  ],
  sections: [
    {
      heading: "Buku Yasin untuk acara 7, 40, 100, hingga 1000 hari",
      paragraphs: [
        "Buku Yasin sering dipesan untuk tahlilan, haul, pengajian, dan acara keluarga lainnya. Karena itu, jumlah dan waktu pengerjaan biasanya menyesuaikan tanggal acara. Sampaikan tanggal acara Anda saat menghubungi kami agar proses pengecekan dapat dilakukan lebih awal.",
        "Kami melayani pesanan dalam jumlah kecil maupun besar. Untuk pesanan dengan jumlah banyak, semakin awal spesifikasi dikirim, semakin lega waktu untuk pengecekan desain dan produksi.",
      ],
    },
    {
      heading: "Cover foto dan nama almarhum/almarhumah",
      paragraphs: [
        "Cover buku Yasin dapat diisi foto, nama, serta keterangan tanggal yang ingin dicantumkan. Kirimkan foto dengan kualitas terbaik yang Anda miliki, bukan hasil tangkapan ulang layar, agar hasil cetak tetap jelas dan hormat pada kenangan yang ingin dijaga.",
        "Kami akan membantu menata letak foto, nama, dan ornamen agar terlihat rapi. Anda dapat meminta penyesuaian sebelum produksi dimulai, sehingga hasil akhirnya sesuai dengan yang keluarga harapkan.",
      ],
    },
    {
      heading: "Soft cover atau hard cover?",
      paragraphs: [
        "Soft cover lebih ringan dan sederhana, cocok untuk pesanan dalam jumlah banyak yang dibagikan kepada jamaah. Hard cover memberi kesan lebih kokoh dan mewah, biasanya dipilih untuk buku yang disimpan keluarga atau diberikan kepada orang yang dituakan.",
        "Keduanya bisa menggunakan desain cover yang sama. Jika belum menentukan, kami dapat menjelaskan perbedaannya secara singkat melalui WhatsApp sebelum Anda memutuskan.",
      ],
    },
  ],
  process: [
    {
      title: "Kirim spesifikasi",
      description:
        "Hubungi WhatsApp kami dan sampaikan jumlah buku, jenis cover, serta tanggal acara.",
    },
    {
      title: "Kirim foto dan teks",
      description:
        "Sertakan foto, nama, dan keterangan yang ingin dicetak pada cover.",
    },
    {
      title: "Konfirmasi desain",
      description:
        "Kami kirimkan rancangan untuk dicek. Perbaikan dilakukan sebelum produksi.",
    },
    {
      title: "Produksi dan pengambilan",
      description:
        "Setelah desain disetujui, buku diproduksi lalu diambil di toko atau dikirim sesuai kesepakatan.",
    },
  ],
  faqs: [
    {
      question: "Berapa harga cetak buku Yasin di Bekasi?",
      answer:
        "Harga bergantung pada jumlah buku, jenis cover, dan tingkat desain. Kirimkan spesifikasi melalui WhatsApp agar kami dapat menghitung penawaran yang sesuai.",
    },
    {
      question: "Apakah bisa cetak Yasin satuan?",
      answer:
        "Jumlah pesanan menyesuaikan kebutuhan. Sampaikan jumlah yang Anda perlukan melalui WhatsApp untuk dikonfirmasi.",
    },
    {
      question: "Apakah cover bisa memakai foto almarhum?",
      answer:
        "Bisa. Kirimkan foto dengan resolusi terbaik, lalu kami bantu menata letaknya bersama nama dan keterangan yang diinginkan.",
    },
    {
      question: "Berapa lama proses cetak buku Yasin?",
      answer:
        "Estimasi bergantung pada jumlah dan antrean produksi. Untuk acara yang mendesak, sampaikan tanggalnya lebih awal agar bisa dibantu sejak awal.",
    },
    {
      question: "Apa beda soft cover dan hard cover?",
      answer:
        "Soft cover lebih ringan dan ekonomis untuk dibagikan, sedangkan hard cover lebih kokoh dan sering dipilih untuk koleksi keluarga. Keduanya dapat memakai desain cover yang sama.",
    },
    {
      question: "Apakah bisa dikirim ke luar Bekasi?",
      answer:
        "Pengiriman dapat dibicarakan sesuai lokasi dan jumlah pesanan. Hubungi WhatsApp kami untuk memastikan metode pengiriman yang tersedia.",
    },
  ],
  related: [
    { label: "Cetak Kwitansi Custom", href: "/cetak-kwitansi" },
    { label: "Cetak Nota NCR", href: "/cetak-nota" },
    { label: "Cara Pesan", href: "/cara-pesan" },
    { label: "Kontak dan Lokasi", href: "/kontak" },
  ],
};

export const KWITANSI_SERVICE: ServiceData = {
  slug: "/cetak-kwitansi",
  breadcrumb: "Cetak Kwitansi",
  metaTitle: "Cetak Kwitansi Custom Bekasi | Arieztha.Art",
  metaDescription:
    "Cetak kwitansi custom di Bekasi dengan logo, nomor seri, pilihan 2 ply dan 3 ply. Cocok untuk usaha, sekolah, dan organisasi. Konsultasi via WhatsApp.",
  eyebrow: "Custom logo · Nomor seri · 2/3 ply",
  h1: "Cetak Kwitansi Custom di Bekasi",
  intro:
    "Kwitansi yang rapi membantu pencatatan pembayaran terlihat lebih profesional. Arieztha.Art melayani cetak kwitansi custom di Bekasi dengan logo, nomor seri, serta pilihan 2 ply atau 3 ply. Kirimkan contoh atau spesifikasi Anda melalui WhatsApp, kami bantu sesuaikan.",
  whatsappMessage:
    "Halo Arieztha.Art, saya mau tanya cetak kwitansi custom di Bekasi. Bisa dibantu?",
  highlights: [
    "Logo dan identitas usaha sesuai desain Anda",
    "Nomor seri untuk memudahkan pencatatan",
    "Pilihan 2 ply dan 3 ply",
  ],
  variantNote:
    "Spesifikasi ukuran, jumlah lembar per set, dan jumlah pesanan dikonfirmasi saat pemesanan. Membawa contoh kwitansi lama, foto, atau logo asli akan mempercepat proses penyesuaian desain.",
  variantColumns: ["Jenis", "Kegunaan", "Identitas", "Lembar", "Estimasi"],
  variants: [
    [
      "Kwitansi 2 ply",
      "Arsip penerbit dan penerima",
      "Logo dan nama usaha",
      "2 lembar per set",
      "Dikonfirmasi via WhatsApp",
    ],
    [
      "Kwitansi 3 ply",
      "Tambahan arsip untuk pihak lain",
      "Logo dan nama usaha",
      "3 lembar per set",
      "Dikonfirmasi via WhatsApp",
    ],
    [
      "Custom nomor seri",
      "Kontrol nomor urut pembayaran",
      "Logo, nama, dan nomor seri",
      "Mengikuti varian",
      "Dikonfirmasi via WhatsApp",
    ],
  ],
  sections: [
    {
      heading: "Kwitansi untuk usaha, sekolah, dan organisasi",
      paragraphs: [
        "Kwitansi dipakai untuk merekam penerimaan pembayaran, mulai dari transaksi harian toko sampai iuran sekolah dan kegiatan organisasi. Desain yang konsisten membuat dokumen lebih mudah dipercaya dan diarsipkan.",
        "Anda dapat mencantumkan nama usaha, logo, alamat, nomor telepon, serta kolom keterangan pembayaran. Jika sudah punya desain lama, kirimkan saja sebagai acuan agar identitasnya tetap sama.",
      ],
    },
    {
      heading: "2 ply atau 3 ply?",
      paragraphs: [
        "Kwitansi 2 ply umumnya dipakai ketika cukup ada lembar untuk penerbit dan penerima pembayaran. Kwitansi 3 ply menambah satu lembar arsip, sehingga lebih nyaman untuk usaha yang membutuhkan pencatatan berlapis.",
        "Jika belum yakin, jelaskan alur pencatatan Anda melalui WhatsApp. Kami bantu menentukan jumlah lembar yang paling masuk akal untuk kebutuhan tersebut.",
      ],
    },
    {
      heading: "Nomor seri dan logo custom",
      paragraphs: [
        "Nomor seri memudahkan pengecekan kwitansi yang sudah dipakai, hilang, atau perlu dicari kembali. Nomor dapat disiapkan berurutan sesuai permintaan. Untuk perusahaan atau organisasi, logo dan nama akan diposisikan agar tetap terbaca meskipun dicetak dalam ukuran kecil.",
        "Sampaikan rentang nomor yang diinginkan, jumlah pesanan, dan contoh penulisan yang biasa dipakai. Kami akan mengonfirmasi rancangannya sebelum produksi.",
      ],
    },
  ],
  process: [
    {
      title: "Kirim contoh atau spesifikasi",
      description:
        "Sampaikan ukuran, jumlah, jumlah ply, dan apakah memakai nomor seri.",
    },
    {
      title: "Kirim logo dan data",
      description:
        "Lampirkan logo, nama usaha, alamat, dan keterangan yang ingin dicetak.",
    },
    {
      title: "Cek rancangan",
      description:
        "Kami kirimkan rancangan untuk diperiksa, termasuk susunan nomor seri.",
    },
    {
      title: "Produksi dan pengambilan",
      description:
        "Setelah disetujui, kwitansi diproduksi lalu diambil di toko atau dikirim.",
    },
  ],
  faqs: [
    {
      question: "Berapa harga cetak kwitansi custom di Bekasi?",
      answer:
        "Harga dipengaruhi jumlah pesanan, jumlah ply, dan tingkat desain. Kirimkan spesifikasi melalui WhatsApp untuk mendapatkan penawaran.",
    },
    {
      question: "Bisa cetak kwitansi dengan logo usaha?",
      answer:
        "Bisa. Kirimkan file logo terbaik yang Anda miliki, lalu kami sesuaikan dengan tata letak kwitansi.",
    },
    {
      question: "Apakah bisa memakai nomor seri?",
      answer:
        "Bisa. Sampaikan rentang atau aturan nomor yang diinginkan agar penomorannya sesuai dengan pencatatan Anda.",
    },
    {
      question: "Apa beda kwitansi 2 ply dan 3 ply?",
      answer:
        "2 ply menyediakan dua lembar per set, sedangkan 3 ply menambah satu lembar arsip. Pilih sesuai kebutuhan pencatatan usaha Anda.",
    },
    {
      question: "Berapa lama proses cetaknya?",
      answer:
        "Estimasi bergantung pada jumlah dan antrean. Setelah spesifikasi diterima, kami akan menginformasikan perkiraan waktu pengerjaan.",
    },
  ],
  related: [
    { label: "Cetak Nota NCR", href: "/cetak-nota" },
    { label: "Cetak Buku Yasin Custom", href: "/cetak-yasin" },
    { label: "Cara Pesan", href: "/cara-pesan" },
    { label: "Kontak dan Lokasi", href: "/kontak" },
  ],
};

export const NOTA_SERVICE: ServiceData = {
  slug: "/cetak-nota",
  breadcrumb: "Cetak Nota",
  metaTitle: "Cetak Nota NCR Bekasi | Arieztha.Art",
  metaDescription:
    "Cetak nota NCR custom di Bekasi: nota kontan, nota 2 ply dan 3 ply dengan logo serta nomor seri. Cocok untuk toko dan usaha. Konsultasi via WhatsApp.",
  eyebrow: "Nota NCR · Nota kontan · Custom",
  h1: "Cetak Nota NCR Custom di Bekasi",
  intro:
    "Nota yang jelas memudahkan transaksi harian dan pengecekan arsip usaha. Arieztha.Art melayani cetak nota NCR custom di Bekasi untuk toko, warung, dan usaha jasa, dengan pilihan 2 ply atau 3 ply serta desain sesuai identitas Anda. Hubungi WhatsApp kami untuk mulai konsultasi.",
  whatsappMessage:
    "Halo Arieztha.Art, saya mau tanya cetak nota NCR custom di Bekasi. Bisa dibantu?",
  highlights: [
    "Nota NCR tanpa karbon untuk transaksi harian",
    "Pilihan nota 2 ply dan 3 ply",
    "Desain logo dan nomor seri sesuai usaha",
  ],
  variantNote:
    "Ukuran, jumlah lembar, dan jumlah pesanan dikonfirmasi saat pemesanan. Membawa contoh nota lama atau menyebutkan ukuran yang biasa dipakai akan mempercepat proses.",
  variantColumns: ["Jenis", "Kegunaan", "Identitas", "Lembar", "Estimasi"],
  variants: [
    [
      "Nota NCR 2 ply",
      "Arsip penjual dan pembeli",
      "Logo dan nama usaha",
      "2 lembar per set",
      "Dikonfirmasi via WhatsApp",
    ],
    [
      "Nota NCR 3 ply",
      "Tambahan arsip transaksi",
      "Logo dan nama usaha",
      "3 lembar per set",
      "Dikonfirmasi via WhatsApp",
    ],
    [
      "Nota kontan",
      "Bukti pembayaran lunas",
      "Logo, nama, dan kolom keterangan",
      "Mengikuti varian",
      "Dikonfirmasi via WhatsApp",
    ],
  ],
  sections: [
    {
      heading: "Nota NCR untuk transaksi harian",
      paragraphs: [
        "Nota NCR atau nota tanpa karbon memudahkan penulisan transaksi karena salinannya terbentuk langsung saat ditulis. Jenis ini praktis untuk toko, warung, bengkel, dan usaha jasa yang masih mencatat transaksi secara manual.",
        "Kolom pada nota dapat disesuaikan dengan cara Anda berjualan, misalnya nama barang, jumlah, harga, diskon, dan keterangan pembayaran. Semakin jelas contoh yang dikirim, semakin cepat penyesuaian dilakukan.",
      ],
    },
    {
      heading: "Nota 2 ply dan 3 ply",
      paragraphs: [
        "Nota 2 ply cocok untuk usaha yang cukup menyimpan satu salinan internal dan satu untuk pembeli. Nota 3 ply memberi ruang arsip tambahan, misalnya untuk bagian keuangan atau rekap harian.",
        "Jika transaksi Anda melibatkan beberapa pihak, sampaikan alurnya melalui WhatsApp. Kami bantu memilih jumlah lembar yang tidak berlebihan namun tetap memadai.",
      ],
    },
    {
      heading: "Nota kontan dan desain custom",
      paragraphs: [
        "Nota kontan biasanya diberi penanda pembayaran lunas agar tidak tertukar dengan transaksi yang masih berjalan. Penanda ini bisa disiapkan dalam desain maupun sebagai kolom yang diisi saat transaksi.",
        "Logo, nama usaha, alamat, dan nomor telepon dapat dicetak pada nota. Kirimkan identitas usaha Anda dan kami akan menata letaknya agar tetap terbaca jelas di ukuran nota yang dipilih.",
      ],
    },
  ],
  process: [
    {
      title: "Kirim spesifikasi",
      description:
        "Sebutkan jenis nota, jumlah ply, ukuran, dan jumlah pesanan.",
    },
    {
      title: "Kirim identitas usaha",
      description:
        "Lampirkan logo, nama usaha, alamat, dan data yang ingin dicetak.",
    },
    {
      title: "Cek rancangan",
      description:
        "Kami kirimkan rancangan nota untuk diperiksa sebelum produksi.",
    },
    {
      title: "Produksi dan pengambilan",
      description:
        "Setelah disetujui, nota diproduksi lalu diambil di toko atau dikirim.",
    },
  ],
  faqs: [
    {
      question: "Berapa harga cetak nota NCR di Bekasi?",
      answer:
        "Harga bergantung pada ukuran, jumlah ply, jumlah pesanan, dan desain. Kirimkan spesifikasi melalui WhatsApp untuk penawaran yang sesuai.",
    },
    {
      question: "Apa itu nota NCR?",
      answer:
        "Nota NCR adalah nota tanpa karbon yang menghasilkan salinan otomatis saat ditulis. Praktis untuk transaksi manual di toko dan usaha jasa.",
    },
    {
      question: "Sebaiknya pilih nota 2 ply atau 3 ply?",
      answer:
        "2 ply cukup untuk satu arsip internal dan satu untuk pembeli. Pilih 3 ply jika Anda membutuhkan satu lembar arsip tambahan.",
    },
    {
      question: "Bisa custom logo dan nomor seri?",
      answer:
        "Bisa. Kirimkan logo dan aturan penomoran yang diinginkan agar rancangan disesuaikan sejak awal.",
    },
    {
      question: "Berapa lama pengerjaan nota?",
      answer:
        "Estimasi dikonfirmasi setelah spesifikasi diterima. Untuk kebutuhan mendesak, sampaikan tanggal yang diinginkan lebih awal.",
    },
    {
      question: "Apakah bisa pesan dalam jumlah banyak?",
      answer:
        "Bisa. Sampaikan perkiraan jumlah agar kami dapat menginformasikan waktu produksi yang realistis.",
    },
  ],
  related: [
    { label: "Cetak Kwitansi Custom", href: "/cetak-kwitansi" },
    { label: "Cetak Buku Yasin Custom", href: "/cetak-yasin" },
    { label: "Cara Pesan", href: "/cara-pesan" },
    { label: "Kontak dan Lokasi", href: "/kontak" },
  ],
};

export const SERVICES: ServiceData[] = [
  YASIN_SERVICE,
  KWITANSI_SERVICE,
  NOTA_SERVICE,
];
