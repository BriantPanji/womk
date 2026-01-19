import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function seedKelompokJabatan() {
    console.log("Seeding KelompokJabatan...");
    
    // const kelompokJabatan = [
    //     "BPH OMK",
    //     "Koordinator",
    //     "Keanggotaan",
    //     "Kegerejaan",
    //     "Pastoral OMK",
    //     "Lainnya"
    // ];

    const kelompokJabatan = [
        {
            name: "BPH OMK",
            desc: "Badan Pengurus Harian dari OMK."
        },
        {
            name: "Koordinator",
            desc: "Jabatan koordinator dalam OMK, baik Koordinator Divisi, Wilayah, ataupun Koordinator Lingkungan."
        },
        {
            name: "Keanggotaan",
            desc: "Jabatan yang berhubungan atau setara dengan keanggotaan OMK."
        },
        {
            name: "Kegerejaan",
            desc: "Jabatan untuk orang-orang selain OMK yang memiliki jabatan atau berhubungan dengan Gereja."
        },
        {
            name: "Pastoral OMK",
            desc: "Jabatan untuk orang-orang selain OMK yang memiliki jabatan yang bertanggung jawab secara langsung bagi OMK."
        },
        {
            name: "Lainnya",
            desc: "Lainnya."
        }
    ];

    for (const kel of kelompokJabatan) {
        await prisma.kelompokJabatan.create({
            data: kel
        });
    }
}

export default seedKelompokJabatan;
