/*
  Warnings:

  - Added the required column `desc` to the `jabatan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kelompokJabatanId` to the `jabatan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "jabatan" ADD COLUMN     "desc" TEXT NOT NULL,
ADD COLUMN     "kelompokJabatanId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "kelompok_jabatan" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,

    CONSTRAINT "kelompok_jabatan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "kelompok_jabatan_name_key" ON "kelompok_jabatan"("name");

-- AddForeignKey
ALTER TABLE "jabatan" ADD CONSTRAINT "jabatan_kelompokJabatanId_fkey" FOREIGN KEY ("kelompokJabatanId") REFERENCES "kelompok_jabatan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
