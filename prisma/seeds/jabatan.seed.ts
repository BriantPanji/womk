import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function seedJabatan() {
    console.log("Seeding Jabatan...");

    /*const jabatan = [
        "Ketua OMK",
        "Wakil Ketua OMK",
        "Sekretaris",
        "Bendahara",
        "OMK",
        "Koordinator Kerohanian", // need more info
        "Koordinator Humas",
        "Koordinator Wilayah",
        "Koordinator Lingkungan",
        "Anggota OMK",
        
    ];*/

    async function findKelJabatanId(name: string) {
        const kelJabatan = await prisma.kelompokJabatan.findUnique({
            where: {
                name: name
            }
        });

        if (!kelJabatan)
            throw new Error(`Kelompok Jabatan ${name} not found`);
        return kelJabatan.id;
    }

    const jabatan = [
        {
            name: "Ketua OMK",
            desc: "Ketua dari OMK.",
            kelompokJabatanId: await findKelJabatanId("BPH OMK")
        },
        {
            name: "Wakil Ketua OMK",
            desc: "Wakil dari Ketua OMK.",
            kelompokJabatanId: await findKelJabatanId("BPH OMK")
        },
        {
            name: "Sekretaris",
            desc: "Sekretaris dari OMK.",
            kelompokJabatanId: await findKelJabatanId("BPH OMK")
        },
        {
            name: "Bendahara",
            desc: "Bendahara dari OMK.",
            kelompokJabatanId: await findKelJabatanId("BPH OMK")
        },
        {
            name: "Koordinator Kerohanian",
            desc: "Koordinator dari Divisi Kerohanian OMK.",
            kelompokJabatanId: await findKelJabatanId("Koordinator")
        },
        {
            name: "Koordinator Humas",
            desc: "Koordinator dari Divisi Humas OMK.",
            kelompokJabatanId: await findKelJabatanId("Koordinator")
        },
        {
            name: "Koordinator Wilayah",
            desc: "Salah satu dari Koordinator untuk Wilayah Gereja",
            kelompokJabatanId: await findKelJabatanId("Koordinator")
        },
        {
            name: "Koordinator Lingkungan",
            desc: "Salah satu dari Koordinator untuk Lingkungan Gereja",
            kelompokJabatanId: await findKelJabatanId("Koordinator")
        },
        {
            name: "Anggota OMK",
            desc: "Anggota umum OMK Gereja.",
            kelompokJabatanId: await findKelJabatanId("Keanggotaan")
        }, 
        {
            name: "Pengurus Gereja",
            desc: "Pengurus dari Gereja.",
            kelompokJabatanId: await findKelJabatanId("Kegerejaan")
        }, 
        {
            name: "Ketua DPP",
            desc: "Ketua dari DPP Gereja.",
            kelompokJabatanId: await findKelJabatanId("Kegerejaan")
        }, 
        {
            name: "Pastor",
            desc: "Pastor / Imam.",
            kelompokJabatanId: await findKelJabatanId("Kegerejaan")
        }, 
        {
            name: "Biarawan",
            desc: "Biarawan non-imam (Frater, Bruder, ataupun Rahib).",
            kelompokJabatanId: await findKelJabatanId("Kegerejaan")
        }, 
        {
            name: "Biarawati",
            desc: "Biarawati / Suster.",
            kelompokJabatanId: await findKelJabatanId("Kegerejaan")
        }, 
        {
            name: "Pastor Moderator",
            desc: "Pastor Moderator untuk OMK.",
            kelompokJabatanId: await findKelJabatanId("Pastoral OMK")
        }, 
        {
            name: "Pembimbing OMK",
            desc: "Pembimbing OMK.",
            kelompokJabatanId: await findKelJabatanId("Pastoral OMK")
        }, 
        {
            name: "Kepemudaan",
            desc: "Bidang Kepemudaan Gereja.",
            kelompokJabatanId: await findKelJabatanId("Pastoral OMK")
        }, 
        {
            name: "Tamu",
            desc: "Tamu.",
            kelompokJabatanId: await findKelJabatanId("Lainnya")
        }, 
        {
            name: "Umat",
            desc: "Umat non-OMK.",
            kelompokJabatanId: await findKelJabatanId("Lainnya")
        }, 
        {
            name: "BIR",
            desc: "Anggota dari Bina Iman Remaja dalam Gereja.",
            kelompokJabatanId: await findKelJabatanId("Lainnya")
        },
        // {
        //     name: "",
        //     desc: "",
        //     kelompokJabatanId: await findKelJabatanId("")
        // }
    ];

    for (const jb of jabatan) {
        await prisma.jabatan.create({
            data: jb
        });
    }
    
}

export default seedJabatan;
