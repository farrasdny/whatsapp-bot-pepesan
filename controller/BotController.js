const { Controller, Response } = require("pepesan");
const f = require("../utils/Formatter");

module.exports = class BotController extends Controller {

    // --------- FUNCTION MENU
    // PEMBUKA
    async introduction(request) {
      return Response.menu.fromArrayOfString(
          [
            f("menu.pstOnline"),
            f("menu.konsultasiStatistik"),
            f("menu.dataStatistik"),
            f("menu.pojokStatistik"),
            f("menu.saranPengaduan")
          ],
          f("intro", [request.name]),
          f("template.menu"),
        );
    }

    // PANDUAN KONSULTASI STATISTIK 
    async consultation(request) {
      return Response.menu.fromArrayOfString(
          [
            f("menu.k1"),
            f("menu.k2"),
            f("menu.k3"),
            f("menu.k4"),
            f("menu.k5"),
            f("menu.exit")
          ],
          f("introKonsultasiOnline", [request.name]),
          f("template.menu")
        );
    }

    // INFORMASI DATA STATISTIK 
    async dataStatistics(request) {
      return Response.menu.fromArrayOfString(
        [
          f("menu.d1"),
          f("menu.d2"),
          f("menu.d3"),
          f("menu.exit")
        ],
        f("introDataStatistik", [request.name]),
        f("template.menu")
      );
    }

    // SOSIAL DAN KEPENDUDUKAN 
    async sosialKependudukan(request) {
      return Response.menu.fromArrayOfString(
        [
          f("menu.sk1"),
          f("menu.sk2"),
          f("menu.sk3"),
          f("menu.sk4"),
          f("menu.sk5"),
          f("menu.sk6"),
          f("menu.sk7"),
          f("menu.sk8"),
          f("menu.sk9"),
          f("menu.sk10"),
          f("menu.sk11"),
          f("menu.sk12"),
          f("menu.sk13"),
          f("menu.sk14"),
          f("menu.sk15"),
          f("menu.sk16"),
          f("menu.exit")
        ],
        f("introSosialKependudukan", [request.name]),
        f("template.menu")
      );
    }
    
    // EKONOMI DAN PERDAGANGAN
    async ekonomiPerdagangan(request) {
      return Response.menu.fromArrayOfString(
        [
          f("menu.ep1"),
          f("menu.ep2"),
          f("menu.ep3"),
          f("menu.ep4"),
          f("menu.ep5"),
          f("menu.ep6"),
          f("menu.ep7"),
          f("menu.ep8"),
          f("menu.ep9"),
          f("menu.ep10"),
          f("menu.ep11"),
          f("menu.ep12"),
          f("menu.exit")
        ],
        f("introEkonomiPerdagangan", [request.name]),
        f("template.menu")
      );
    }

    // PERTANIAN DAN PERTAMBANGAN
    async pertanianPertambangan(request) {
      return Response.menu.fromArrayOfString(
        [
          f("menu.pp1"),
          f("menu.pp2"),
          f("menu.pp3"),
          f("menu.pp4"),
          f("menu.pp5"),
          f("menu.pp6"),
          f("menu.pp7"),
          f("menu.exit")
        ],
        f("introPertanianPertambangan", [request.name]),
        f("template.menu"),
      );
    }


    // --------- FUNCTION BUKAN MENU
    async pstOnlineMenu(request) {
      return this.reply("*Pelayanan Statistik Terpadu (PST) Online 📲* \n\nBerikut link website seputar Publikasi PST Online : http://perpustakaan.bps.go.id \n• Ketik *ex* untuk keluar")
    }

    // KONSULTASI STATISTIK
    async k1Menu(request) {
      return Response.image.fromURL("./image/logo-or-header/konsul-1.png","*Panduan Layanan Konsultasi Statistik Online Maupun Offline* \n\n• Ketik *ex* untuk keluar")
    }
    async k2Menu(request) {
      return Response.image.fromURL("./image/logo-or-header/konsul-2.png","*Panduan Layanan Konsultasi Statistik Online Maupun Offline* \n\n• Ketik *ex* untuk keluar")
    }
    async k3Menu(request) {
      return Response.image.fromURL("./image/logo-or-header/konsul-3.png","*Panduan Layanan Konsultasi Statistik Online Maupun Offline* \n\n• Ketik *ex* untuk keluar")
    }
    async k4Menu(request) {
      return Response.image.fromURL("./image/logo-or-header/konsul-4.png","*Panduan Layanan Konsultasi Statistik Online Maupun Offline* \n\n• Ketik *ex* untuk keluar")
    }
    async k5Menu(request) {
      return Response.image.fromURL("./image/logo-or-header/konsul-5.png","*Daftar Jenis & Tarif Penerimaan Negara Bukan Pajak BPS* \nBerdasarkan Peraturan Pemerintah No.7 Tahun 2015 \n\n• Keluar *[ex]*")
    }

    // OPTION SOSIAL KEPENDUDUKAN
    async agama(request) {
      return this.reply("*Selamat Datang!* \n*Informasi Data Statistik Agama* \n\nBerikut Link Website Seputar Data Statistik Agama : \nhttps://malangkab.bps.go.id/subject/108/agama.html#subjekViewTab3 \n• Ketik *ex* untuk keluar")
    }
    async gender(request) {
      return this.reply("*Selamat Datang!* \n*Informasi Data Statistik Gender* \n\nBerikut Link Website Seputar Data Statistik Gender : \nhttps://malangkab.bps.go.id/subject/40/gender.html#subjekViewTab3 \n• Ketik *ex* untuk keluar")
    }
    async geografi(request) {
      return this.reply("*Selamat Datang!* \n*Informasi Data Statistik Geografi* \n\nBerikut Link Website Seputar Data Statistik Geografi : \nhttps://malangkab.bps.go.id/subject/153/geografi.html#subjekViewTab3 \n• Ketik *ex* untuk keluar")
    }
    async iklim(request) {
      return this.reply("*Selamat Datang!* \n*Informasi Data Statistik Iklim* \n\nBerikut Link Website Seputar Data Statistik Iklim : \nhttps://malangkab.bps.go.id/subject/154/iklim.html#subjekViewTab3 \n• Ketik *ex* untuk keluar")
    }
    async indeksPembangunanManusia(request) {
      return this.reply("*Selamat Datang!* \n*Informasi Data Statistik Indeks Pembangunan Manusia* \n\nBerikut Link Website Seputar Data Statistik Indeks Pembangunan Manusia : \nhttps://malangkab.bps.go.id/subject/26/indeks-pembangunan-manusia.html#subjekViewTab3 \n• Ketik *ex* untuk keluar")
    }
    async kemiskinanKetimpangan(request) {
      return this.reply("*Selamat Datang!* \n*Informasi Data Statistik Indeks Kemiskinan dan Ketimpangan* \n\nBerikut Link Website Seputar Data Statistik Kemiskinan dan Ketimpangan : \nhttps://malangkab.bps.go.id/subject/23/kemiskinan-dan-ketimpangan.html#subjekViewTab3 \n• Ketik *ex* untuk keluar")
    }
    async kependudukan(request) {
      return this.reply("*Selamat Datang!* \n*Informasi Data Statistik Indeks Kependudukan* \n\nBerikut Link Website Seputar Data Statistik Kependudukan : \nhttps://malangkab.bps.go.id/subject/12/kependudukan.html#subjekViewTab3 \n• Ketik *ex* untuk keluar")
    }
    async kesehatan(request) {
      return this.reply("*Selamat Datang!* \n*Informasi Data Statistik Indeks Kesehatan* \n\nBerikut Link Website Seputar Data Statistik Kesehatan : \nhttps://malangkab.bps.go.id/subject/30/kesehatan.html#subjekViewTab3 \n• Ketik *ex* untuk keluar")
    }
    async konsumsiPengeluaran(request) {
      return this.reply("*Selamat Datang!* \n*Informasi Data Statistik Indeks Konsumsi dan Pengeluaran* \n\nBerikut Link Website Seputar Data Statistik Konsumsi dan Pengeluaran : \nhttps://malangkab.bps.go.id/subject/5/konsumsi-dan-pengeluaran.html#subjekViewTab3 \n• Ketik *ex* untuk keluar")
    }
    async lingkunganHidup(request) {
      return this.reply("*Selamat Datang!* \n*Informasi Data Statistik Indeks Lingkungan Hidup* \n\nBerikut Link Website Seputar Data Statistik Lingkungan Hidup : \nhttps://malangkab.bps.go.id/subject/152/lingkungan-hidup.html#subjekViewTab3 \n• Ketik *ex* untuk keluar")
    }
    async pemerintahan(request) {
      return this.reply("*Selamat Datang!* \n*Informasi Data Statistik Indeks Pemerintahan* \n\nBerikut Link Website Seputar Data Statistik Pemerintahan : \nhttps://malangkab.bps.go.id/subject/101/pemerintahan.html#subjekViewTab3 \n• Ketik *ex* untuk keluar")
    }
    async pendidikan(request) {
      return this.reply("*Selamat Datang!* \n*Informasi Data Statistik Indeks Pendidikan* \n\nBerikut Link Website Seputar Data Statistik Pendidikan : \nhttps://malangkab.bps.go.id/subject/28/pendidikan.html#subjekViewTab3 \n• Ketik *ex* untuk keluar")
    }
    async perumahan(request) {
      return this.reply("*Selamat Datang!* \n*Informasi Data Statistik Indeks Perumahan* \n\nBerikut Link Website Seputar Data Statistik Perumahan : \nhttps://malangkab.bps.go.id/subject/29/perumahan.html#subjekViewTab3 \n• Ketik *ex* untuk keluar")
    }
    async politikKeamanan(request) {
      return this.reply("*Selamat Datang!* \n*Informasi Data Statistik Indeks Politik dan Keamanan* \n\nBerikut Link Website Seputar Data Statistik Politik dan Keamanan : \nhttps://malangkab.bps.go.id/subject/34/politik-dan-keamanan.html#subjekViewTab3 \n• Ketik *ex* untuk keluar")
    }
    async sosialBudaya(request) {
      return this.reply("*Selamat Datang!* \n*Informasi Data Statistik Indeks Sosial Budaya* \n\nBerikut Link Website Seputar Data Statistik Sosial Budaya : \nhttps://malangkab.bps.go.id/subject/27/sosial-budaya.html#subjekViewTab3 \n• Ketik *ex* untuk keluar")
    }
    async tenagaKerja(request) {
      return this.reply("*Selamat Datang!* \n*Informasi Data Statistik Indeks Tenaga Kerja* \n\nBerikut Link Website Seputar Data Statistik Tenaga Kerja : \nhttps://malangkab.bps.go.id/subject/6/tenaga-kerja.html#subjekViewTab3 \n• Ketik *ex* untuk keluar")
    }

    // OPTION EKONOMI PERDAGANGAN
    async eksporImpor(request) {
      return this.reply("*Selamat Datang!* \n*Informasi Data Statistik Ekspor Impor* \n\nBerikut Link Website Seputar Data Statistik Ekspor Impor : \nhttps://malangkab.bps.go.id/subject/8/ekspor-impor.html#subjekViewTab3 \n• Ketik *ex* untuk keluar")
    }
    async energi(request) {
      return this.reply("*Selamat Datang!* \n*Informasi Data Statistik Energi* \n\nBerikut Link Website Seputar Data Statistik Energi : \nhttps://malangkab.bps.go.id/subject/7/energi.html#subjekViewTab3 \n• Ketik *ex* untuk keluar")
    }
    async hargaEceran(request) {
      return this.reply("*Selamat Datang!* \n*Informasi Data Statistik Harga Eceran* \n\nBerikut Link Website Seputar Data Statistik Harga Eceran : \nhttps://malangkab.bps.go.id/subject/102/harga-eceran.html#subjekViewTab3 \n• Ketik *ex* untuk keluar")
    }
    async produsen(request) {
      return this.reply("*Selamat Datang!* \n*Informasi Data Statistik Produsen* \n\nBerikut Link Website Seputar Data Statistik Produsen : \nhttps://malangkab.bps.go.id/subject/36/harga-produsen.html#subjekViewTab3 \n• Ketik *ex* untuk keluar")
    }
    async industri(request) {
      return this.reply("*Selamat Datang!* \n*Informasi Data Statistik Industri* \n\nBerikut Link Website Seputar Data Statistik Industri : \nhttps://malangkab.bps.go.id/subject/9/industri.html#subjekViewTab3 \n• Ketik *ex* untuk keluar")
    }
    async inflasi(request) {
      return this.reply("*Selamat Datang!* \n*Informasi Data Statistik Inflasi* \n\nBerikut Link Website Seputar Data Statistik Inflasi : \nhttps://malangkab.bps.go.id/subject/3/inflasi.html#subjekViewTab3 \n• Ketik *ex* untuk keluar")
    }
    async keuangan(request) {
      return this.reply("*Selamat Datang!* \n*Informasi Data Statistik Keuangan* \n\nBerikut Link Website Seputar Data Statistik Keuangan : \nhttps://malangkab.bps.go.id/subject/13/keuangan.html#subjekViewTab3 \n• Ketik *ex* untuk keluar")
    }
    async komunikasi(request) {
      return this.reply("*Selamat Datang!* \n*Informasi Data Statistik Komunikasi* \n\nBerikut Link Website Seputar Data Statistik Komunikasi : \nhttps://malangkab.bps.go.id/subject/2/komunikasi.html#subjekViewTab3 \n• Ketik *ex* untuk keluar")
    }
    async pariwisata(request) {
      return this.reply("*Selamat Datang!* \n*Informasi Data Statistik Pariwisata* \n\nBerikut Link Website Seputar Data Statistik Pariwisata : \nhttps://malangkab.bps.go.id/subject/16/pariwisata.html#subjekViewTab3 \n• Ketik *ex* untuk keluar")
    }
    async domestikRegionalBruto(request) {
      return this.reply("*Selamat Datang!* \n*Informasi Data Statistik Domestik Regional Bruto* \n\nBerikut Link Website Seputar Data Statistik Domestik Regional Bruto : \nhttps://malangkab.bps.go.id/subject/52/produk-domestik-regional-bruto.html#subjekViewTab3 \n• Ketik *ex* untuk keluar")
    }
    async transportasi(request) {
      return this.reply("*Selamat Datang!* \n*Informasi Data Statistik Transportasi* \n\nBerikut Link Website Seputar Data Statistik Transportasi : \nhttps://malangkab.bps.go.id/subject/17/transportasi.html#subjekViewTab3 \n• Ketik *ex* untuk keluar")
    }
    async upahBuruh(request) {
      return this.reply("*Selamat Datang!* \n*Informasi Data Statistik Upah Buruh* \n\nBerikut Link Website Seputar Data Statistik Upah Buruh : \nhttps://malangkab.bps.go.id/subject/19/upah--buruh.html#subjekViewTab3 \n• Ketik *ex* untuk keluar")
    } 

    // PERTANIAN DAN PERTAMBANGAN
    async hortikultura(request) {
      return this.reply("*Selamat Datang!* \n*Informasi Data Statistik Hortikultura* \n\nBerikut Link Website Seputar Data Statistik Hortikultura : \nhttps://malangkab.bps.go.id/subject/55/hortikultura.html#subjekViewTab3 \n• Ketik *ex* untuk keluar")
    }
    async kehutanan(request) {
      return this.reply("*Selamat Datang!* \n*Informasi Data Statistik Kehutanan* \n\nBerikut Link Website Seputar Data Statistik Kehutanan : \nhttps://malangkab.bps.go.id/subject/60/kehutanan.html#subjekViewTab3 \n• Ketik *ex* untuk keluar")
    }
    async perikanan(request) {
      return this.reply("*Selamat Datang!* \n*Informasi Data Statistik Perikanan* \n\nBerikut Link Website Seputar Data Statistik Perikanan : \nhttps://malangkab.bps.go.id/subject/56/perikanan.html#subjekViewTab3 \n• Ketik *ex* untuk keluar")
    }
    async perkebunan(request) {
      return this.reply("*Selamat Datang!* \n*Informasi Data Statistik Perkebunan* \n\nBerikut Link Website Seputar Data Statistik Perkebunan : \nhttps://malangkab.bps.go.id/subject/54/perkebunan.html#subjekViewTab3 \n• Ketik *ex* untuk keluar")
    }
    async pertambangan(request) {
      return this.reply("*Selamat Datang!* \n*Informasi Data Statistik Pertambangan* \n\nBerikut Link Website Seputar Data Statistik Pertambangan : \nhttps://malangkab.bps.go.id/subject/10/pertambangan.html#subjekViewTab3 \n• Ketik *ex* untuk keluar")
    }
    async peternakan(request) {
      return this.reply("*Selamat Datang!* \n*Informasi Data Statistik Peternakan* \n\nBerikut Link Website Seputar Data Statistik Peternakan : \nhttps://malangkab.bps.go.id/subject/24/peternakan.html#subjekViewTab3 \n• Ketik *ex* untuk keluar")
    }
    async tanamanPangan(request) {
      return this.reply("*Selamat Datang!* \n*Informasi Data Statistik Tanaman Pangan* \n\nBerikut Link Website Seputar Data Statistik Tanaman Pangan : \nhttps://malangkab.bps.go.id/subject/53/tanaman-pangan.html#subjekViewTab3 \n• Ketik *ex* untuk keluar")
    }
    
    
    // POJOK STATISTIK
    async pojokStatistikMenu(request) {
      return this.reply("*Selamat Datang!* \n*Layanan Pojok Statistik 📊* \n\nSilahkan hubungi nomor : \n+62 896-5499-3852 \n• Ketik *ex* untuk keluar")
    }

    // SARAN DAN PENGADUAN
    async saranPengaduanMenu(request) {
      return this.reply("*Selamat Datang!* \n*Saran dan Pengaduan 💡* \n\nLayanan saran dan pengaduan dapat menghubungi e-mail : \npengaduan3507@bps.go.id \n• Ketik *ex* untuk keluar");
    }
    
}