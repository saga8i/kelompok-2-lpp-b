console.log("=== INPUT BARANG BELANJA ===");
console.log("(Ketik 'selesai' pada Nama barang jika sudah tidak ada barang lagi)\n");

let count = 1;
let totalBelanja = 0;

while (true) {
    console.log(`\n=== Data Barang ${count} ===`);

    let item;
    while (true) {
        item = prompt("Masukkan nama barang: ");
        if (item.toLowerCase() === "selesai") {
            if (count === 1) {
                console.log("Total item masih 0, silahkan masukkan nama barang dahulu.");
                continue;
            }
            break;
        }
        if (item.trim() === "") {
            console.log("Nama barang tidak boleh kosong. Coba lagi.");
            continue;
        }
        break;
    }

    if (item.toLowerCase() === "selesai") break;

    let amount;
    while (true) {
        amount = Number(prompt("Masukkan jumlah barang: "));
        if (isNaN(amount)) {
            console.log("Jumlah barang harus berupa angka. Coba lagi.");
        } else if (amount <= 0) {
            console.log("Jumlah barang harus lebih dari 0. Coba lagi.");
        } else if (!Number.isInteger(amount)) {
            console.log("Jumlah barang harus berupa bilangan bulat. Coba lagi.");
        } else {
            break;
        }
    }

    let price;
    while (true) {
        price = Number(prompt("Masukkan harga satuan barang: "));
        if (isNaN(price)) {
            console.log("Harga barang harus berupa angka. Coba lagi.");
        } else if (price <= 0) {
            console.log("Harga barang harus lebih dari 0. Coba lagi.");
        } else {
            break;
        }
    }

    globalThis[`item${count}`] = item;
    globalThis[`amount${count}`] = amount;
    globalThis[`price${count}`] = price;

    let total = amount * price;

    let diskon;
    if (total < 50000) {
        diskon = 0;
    } else if (total < 100000) {
        diskon = 5;
    } else {
        diskon = 10;
    }

    let nilaiDiskon = total * diskon / 100;
    let hargaSetelahDiskon = total - nilaiDiskon;
    globalThis[`finalPrice${count}`] = hargaSetelahDiskon;
    totalBelanja += hargaSetelahDiskon;

    console.log(`\n--- Hasil Barang ${count} ---`);
    console.log(`Nama barang       : ${item}`);
    console.log(`Harga sebelum diskon : Rp${total.toLocaleString("id-ID")}`);
    console.log(`Diskon             : ${diskon}%`);
    console.log(`Harga setelah diskon: Rp${hargaSetelahDiskon.toLocaleString("id-ID")}`);

    count++;
}

let uangDikasih;
while (true) {
    uangDikasih = Number(prompt(`\nMasukkan uang yang diberikan (Total belanja = Rp${totalBelanja.toLocaleString("id-ID")}):`));
    if (isNaN(uangDikasih)) {
        console.log("Uang yang diberikan harus berupa angka. Coba lagi.");
    } else if (uangDikasih <= 0) {
        console.log("Uang yang diberikan harus lebih dari 0. Coba lagi.");
    } else if (uangDikasih < totalBelanja) {
      console.log("Uang yang diberikan harus lebih dari total belanja. Berikan uang yang cukup dan coba lagi.")
    } else {
        break;
    }
}

let uangKembalian = uangDikasih - totalBelanja;

console.log("\n\n========== STRUK BELANJA ==========");

for (let i = 1; i < count; i++) {
    console.log(
        `${globalThis[`item${i}`]} : Rp${globalThis[`finalPrice${i}`].toLocaleString("id-ID")}`
    );
}

console.log("-----------------------------------");
console.log(`TOTAL           : Rp${totalBelanja.toLocaleString("id-ID")}`);
console.log(`UANG DIBERIKAN  : Rp${uangDikasih.toLocaleString("id-ID")}`);
console.log(`UANG KEMBALIAN  : Rp${uangKembalian.toLocaleString("id-ID")}`);
console.log("===================================");