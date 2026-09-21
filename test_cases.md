# Test Case: Struk Belanja (`code.js`)

**37 tes: 37 LULUS, 0 GAGAL**

Setiap tes dijalankan langsung ke `code.js` yang asli dengan input dummy. **Aktual** adalah output program.

`Tanya: …` = program menunggu input berikutnya · `Error: …` = nama singkat pesan error · `CRASH` = program berhenti karena error

## Setiap `if` dites dua arah

| Cek | true | false |
|---|---|---|
| nama = `selesai` (di loop nama) | N-4 | N-1 |
| belum ada barang (`count === 1`) | N-4 | N-7 |
| nama kosong | N-2 | N-1 |
| nama = `selesai` (hentikan loop) | N-4 | N-1 |
| jumlah bukan angka | Q-1 | Q-3 |
| jumlah ≤ 0 | Q-3 | Q-5 |
| jumlah bukan bilangan bulat | Q-5 | Q-6 |
| harga bukan angka | P-1 | P-2 |
| harga ≤ 0 | P-2 | D-1 |
| total < 50.000 | D-1 | D-2 |
| total < 100.000 | D-2 | D-4 |
| ada minimal 1 barang (buat struk) | M-4 | N-4 |
| uang bukan angka | M-1 | M-2 |
| uang ≤ 0 | M-2 | M-3 |
| uang < total | M-3 | M-4 |

## 1. Nama barang

Awal program. Tanpa persiapan.

| ID | Tes | Input | Diharapkan | Aktual | Hasil |
|---|---|---|---|---|---|
| N-1 | Nama normal | `"Pensil"` | `Tanya: jumlah` | `Tanya: jumlah` | LULUS |
| N-2 | Kosong | `""` | `Error: nama kosong`<br>`Tanya: nama barang` | `Error: nama kosong`<br>`Tanya: nama barang` | LULUS |
| N-3 | Hanya spasi | `"   "` | `Error: nama kosong`<br>`Tanya: nama barang` | `Error: nama kosong`<br>`Tanya: nama barang` | LULUS |
| N-4 | `selesai` sebagai barang pertama | `"selesai"` | `Alert: belum ada barang, struk tidak dibuat` | `Alert: belum ada barang, struk tidak dibuat` | LULUS |
| N-5 | `SELESAI` huruf kapital | `"SELESAI"` | `Alert: belum ada barang, struk tidak dibuat` | `Alert: belum ada barang, struk tidak dibuat` | LULUS |
| N-6 | `selesai` dengan spasi di belakang | `"selesai "` | `Alert: belum ada barang, struk tidak dibuat` | `Alert: belum ada barang, struk tidak dibuat` | LULUS |
| N-7 | `selesai` setelah 1 barang | `"selesai"` | `Tanya: uang yang diberikan` | `Tanya: uang yang diberikan` | LULUS |

## 2. Jumlah

Persiapan: nama = `Pensil`.

| ID | Tes | Input | Diharapkan | Aktual | Hasil |
|---|---|---|---|---|---|
| Q-1 | Huruf | `"abc"` | `Error: bukan angka`<br>`Tanya: jumlah` | `Error: bukan angka`<br>`Tanya: jumlah` | LULUS |
| Q-2 | Kosong | `""` | `Error: harus lebih dari 0`<br>`Tanya: jumlah` | `Error: harus lebih dari 0`<br>`Tanya: jumlah` | LULUS |
| Q-3 | Nol | `"0"` | `Error: harus lebih dari 0`<br>`Tanya: jumlah` | `Error: harus lebih dari 0`<br>`Tanya: jumlah` | LULUS |
| Q-4 | Negatif | `"-5"` | `Error: harus lebih dari 0`<br>`Tanya: jumlah` | `Error: harus lebih dari 0`<br>`Tanya: jumlah` | LULUS |
| Q-5 | Desimal | `"2.5"` | `Error: harus bilangan bulat`<br>`Tanya: jumlah` | `Error: harus bilangan bulat`<br>`Tanya: jumlah` | LULUS |
| Q-6 | Angka normal | `"1"` | `Tanya: harga` | `Tanya: harga` | LULUS |

## 3. Harga

Persiapan: nama = `Pensil`, jumlah = `2`.

| ID | Tes | Input | Diharapkan | Aktual | Hasil |
|---|---|---|---|---|---|
| P-1 | Huruf | `"abc"` | `Error: bukan angka`<br>`Tanya: harga` | `Error: bukan angka`<br>`Tanya: harga` | LULUS |
| P-2 | Kosong | `""` | `Error: harus lebih dari 0`<br>`Tanya: harga` | `Error: harus lebih dari 0`<br>`Tanya: harga` | LULUS |
| P-3 | Nol | `"0"` | `Error: harus lebih dari 0`<br>`Tanya: harga` | `Error: harus lebih dari 0`<br>`Tanya: harga` | LULUS |
| P-4 | Negatif | `"-100"` | `Error: harus lebih dari 0`<br>`Tanya: harga` | `Error: harus lebih dari 0`<br>`Tanya: harga` | LULUS |
| P-5 | `Infinity` | `"Infinity"` | Error, tanya harga lagi | `Error: bukan angka`<br>`Tanya: harga` | LULUS |

## 4. Diskon

Persiapan: nama = `Barang`. Hasil = **harga sebelum diskon → diskon → harga setelah diskon**.  
Aturan: di bawah 50.000 = 0% · 50.000 sampai 99.999 = 5% · 100.000 ke atas = 10%.

| ID | Tes | Input | Diharapkan | Aktual | Hasil |
|---|---|---|---|---|---|
| D-1 | Tepat di bawah 50.000 | jumlah 1, harga 49999 | `Rp49.999 → 0% → Rp49.999` | `Rp49.999 → 0% → Rp49.999` | LULUS |
| D-2 | Tepat 50.000 | jumlah 1, harga 50000 | `Rp50.000 → 5% → Rp47.500` | `Rp50.000 → 5% → Rp47.500` | LULUS |
| D-3 | Tepat di bawah 100.000 | jumlah 1, harga 99999 | `Rp99.999 → 5% → Rp94.999,05` | `Rp99.999 → 5% → Rp94.999,05` | LULUS |
| D-4 | Tepat 100.000 | jumlah 1, harga 100000 | `Rp100.000 → 10% → Rp90.000` | `Rp100.000 → 10% → Rp90.000` | LULUS |
| D-5 | Jumlah × harga | jumlah 3, harga 20000 | `Rp60.000 → 5% → Rp57.000` | `Rp60.000 → 5% → Rp57.000` | LULUS |
| D-6 | Harga desimal | jumlah 1, harga 1500.5 | `Rp1.500,5 → 0% → Rp1.500,5` | `Rp1.500,5 → 0% → Rp1.500,5` | LULUS |
| D-7 | Harga diketik dengan titik: `15.000` | jumlah 1, harga 15.000 | `Rp15 → 0% → Rp15` | `Rp15 → 0% → Rp15` | LULUS |

## 5. Uang yang diberikan

Persiapan: `Pensil` × 2 @ 5000, lalu `selesai`. **Total = Rp10.000**.

| ID | Tes | Input | Diharapkan | Aktual | Hasil |
|---|---|---|---|---|---|
| M-1 | Huruf | `"abc"` | `Error: bukan angka`<br>`Tanya: uang yang diberikan` | `Error: bukan angka`<br>`Tanya: uang yang diberikan` | LULUS |
| M-2 | Nol | `"0"` | `Error: harus lebih dari 0`<br>`Tanya: uang yang diberikan` | `Error: harus lebih dari 0`<br>`Tanya: uang yang diberikan` | LULUS |
| M-3 | Uang kurang (9999) | `"9999"` | `Error: uang kurang`<br>`Tanya: uang yang diberikan` | `Error: uang kurang`<br>`Tanya: uang yang diberikan` | LULUS |
| M-4 | Uang pas (kembalian = 0) | `"10000"` | `Struk:`<br>`Pensil : Rp10.000`<br>`TOTAL : Rp10.000`<br>`UANG DIBERIKAN : Rp10.000`<br>`UANG KEMBALIAN : Rp0` | `Struk:`<br>`Pensil : Rp10.000`<br>`TOTAL : Rp10.000`<br>`UANG DIBERIKAN : Rp10.000`<br>`UANG KEMBALIAN : Rp0` | LULUS |
| M-5 | Uang lebih | `"20000"` | `Struk:`<br>`Pensil : Rp10.000`<br>`TOTAL : Rp10.000`<br>`UANG DIBERIKAN : Rp20.000`<br>`UANG KEMBALIAN : Rp10.000` | `Struk:`<br>`Pensil : Rp10.000`<br>`TOTAL : Rp10.000`<br>`UANG DIBERIKAN : Rp20.000`<br>`UANG KEMBALIAN : Rp10.000` | LULUS |

## 6. Tombol Cancel

Pengguna menekan Cancel di kotak pop-up.

| ID | Tes | Input | Diharapkan | Aktual | Hasil |
|---|---|---|---|---|---|
| C-1 | Cancel di nama barang | `Cancel` | Tidak crash | `Error: nama kosong`<br>`Tanya: nama barang` | LULUS |
| C-2 | Cancel di jumlah | `Cancel` | `Error: harus lebih dari 0`<br>`Tanya: jumlah` | `Error: harus lebih dari 0`<br>`Tanya: jumlah` | LULUS |
| C-3 | Cancel di harga | `Cancel` | `Error: harus lebih dari 0`<br>`Tanya: harga` | `Error: harus lebih dari 0`<br>`Tanya: harga` | LULUS |
| C-4 | Cancel di uang yang diberikan | `Cancel` | `Error: harus lebih dari 0`<br>`Tanya: uang yang diberikan` | `Error: harus lebih dari 0`<br>`Tanya: uang yang diberikan` | LULUS |

## 7. Satu sesi penuh

Satu sesi lengkap dari awal sampai struk.

| ID | Tes | Input | Diharapkan | Aktual | Hasil |
|---|---|---|---|---|---|
| F-1 | 3 barang, masing-masing beda diskon | Buku 1×30000, Tas 1×60000, Laptop 1×200000, `selesai`, bayar 300000 | `Struk:`<br>`Buku : Rp30.000`<br>`Tas : Rp57.000`<br>`Laptop : Rp180.000`<br>`TOTAL : Rp267.000`<br>`UANG DIBERIKAN : Rp300.000`<br>`UANG KEMBALIAN : Rp33.000` | `Struk:`<br>`Buku : Rp30.000`<br>`Tas : Rp57.000`<br>`Laptop : Rp180.000`<br>`TOTAL : Rp267.000`<br>`UANG DIBERIKAN : Rp300.000`<br>`UANG KEMBALIAN : Rp33.000` | LULUS |
| F-2 | Nama barang sama dua kali | Pensil 1×1000, Pensil 1×2000, `selesai`, bayar 5000 | `Struk:`<br>`Pensil : Rp1.000`<br>`Pensil : Rp2.000`<br>`TOTAL : Rp3.000`<br>`UANG DIBERIKAN : Rp5.000`<br>`UANG KEMBALIAN : Rp2.000` | `Struk:`<br>`Pensil : Rp1.000`<br>`Pensil : Rp2.000`<br>`TOTAL : Rp3.000`<br>`UANG DIBERIKAN : Rp5.000`<br>`UANG KEMBALIAN : Rp2.000` | LULUS |
| F-3 | Pengguna salah input, lalu selesai | `""` `Kopi` `abc` `2` `0` `3000` `selesai` `1000` `6000` | `Error: nama kosong`<br>`Error: bukan angka`<br>`Error: harus lebih dari 0`<br>`Error: uang kurang`<br>`Struk:`<br>`Kopi : Rp6.000`<br>`TOTAL : Rp6.000`<br>`UANG DIBERIKAN : Rp6.000`<br>`UANG KEMBALIAN : Rp0` | `Error: nama kosong`<br>`Error: bukan angka`<br>`Error: harus lebih dari 0`<br>`Error: uang kurang`<br>`Struk:`<br>`Kopi : Rp6.000`<br>`TOTAL : Rp6.000`<br>`UANG DIBERIKAN : Rp6.000`<br>`UANG KEMBALIAN : Rp0` | LULUS |

## Bug yang sudah diperbaiki

-  **N-6**: Sudah diperbaiki. `selesai ` (dengan spasi) sekarang dianggap `selesai`.
-  **C-1**: Sudah diperbaiki. Cancel di nama barang tidak crash lagi. Muncul error "nama kosong", lalu ditanya lagi.
-  **P-5**: Sudah diperbaiki. `Infinity` sekarang ditolak untuk harga dan uang (`!Number.isFinite`).


