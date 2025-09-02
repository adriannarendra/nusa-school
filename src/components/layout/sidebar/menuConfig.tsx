import {
    BookOpen,
    GraduationCap,
    Wallet,
    Home,
} from "lucide-react";

const menu= [
    {
        name: "Home",
        icon: Home,
        path: "/dashboard",
    },
    {
        name: "PMB",
        icon: BookOpen,
        children: [
            { name: "Pendaftaran", path: "/pmb/pendaftaran" },
            { name: "Seleksi", path: "/pmb/seleksi" },
        ],
    },
    {
        name: "KBM",
        icon: GraduationCap,
        children: [
            { name: "Jadwal", path: "/kbm/jadwal" },
            { name: "Absensi", path: "/kbm/absensi" },
        ],
    },
    {
        name: "Keuangan",
        icon: Wallet,
        children: [
            { name: "Dashboard", path: "/keuangan" },
            { name: "Cost Center", path: "/keuangan/cost-center" },
            { name: "Daftar Ulang", path: "/keuangan/daftar-ulang" },
            { name: "Biaya Operasional", path: "/keuangan/operasional" },
            { name: "Biaya Pendidikan", path: "/keuangan/pendidikan" },
            { name: "Rekap Transaksi", path: "/keuangan/rekap" },
        ],
    },
];

export default menu