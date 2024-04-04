const { Router, Response } = require("pepesan");
const BotController = require("./controller/BotController");
const f = require("./utils/Formatter");

const router = new Router();

// ======= PEMBUKA & PENUTUP
router.keyword("hi", [BotController, "introduction"]);
router.keyword("ex", [BotController, "introduction"]);
router.menu(f("menu.exit"), [BotController, "introduction"]);

// ======= MENU UTAMA
router.menu(f("menu.pstOnline"), [BotController, "pstOnlineMenu"]);
router.menu(f("menu.konsultasiStatistik"), [BotController, "consultation"]);
router.menu(f("menu.dataStatistik"), [BotController, "dataStatistics"]);
router.menu(f("menu.pojokStatistik"), [BotController, "pojokStatistikMenu"]);
router.menu(f("menu.saranPengaduan"), [BotController, "saranPengaduanMenu"]);

// ======= MENU DATA STATISTIK
// SOSIAL DAN KEPENDUDUKAN
router.menu(f("menu.d1"), [BotController, "sosialKependudukan"]);

router.menu(f("menu.sk1"), [BotController, "agama"]);
router.menu(f("menu.sk2"), [BotController, "gender"]);
router.menu(f("menu.sk3"), [BotController, "geografi"]);
router.menu(f("menu.sk4"), [BotController, "iklim"]);
router.menu(f("menu.sk5"), [BotController, "indeksPembangunanManusia"]);
router.menu(f("menu.sk6"), [BotController, "kemiskinanKetimpangan"]);
router.menu(f("menu.sk7"), [BotController, "kependudukan"]);
router.menu(f("menu.sk8"), [BotController, "kesehatan"]);
router.menu(f("menu.sk9"), [BotController, "konsumsiPengeluaran"]);
router.menu(f("menu.sk10"), [BotController, "lingkunganHidup"]);
router.menu(f("menu.sk11"), [BotController, "pemerintahan"]);
router.menu(f("menu.sk12"), [BotController, "pendidikan"]);
router.menu(f("menu.sk13"), [BotController, "perumahan"]);
router.menu(f("menu.sk14"), [BotController, "politikKeamanan"]);
router.menu(f("menu.sk15"), [BotController, "sosialBudaya"]);
router.menu(f("menu.sk16"), [BotController, "tenagaKerja"]);

// EKONOMI PERDAGANGAN
router.menu(f("menu.d2"), [BotController, "ekonomiPerdagangan"]);

router.menu(f("menu.ep1"), [BotController, "eksporImpor"]);
router.menu(f("menu.ep2"), [BotController, "energi"]);
router.menu(f("menu.ep3"), [BotController, "hargaEceran"]);
router.menu(f("menu.ep4"), [BotController, "produsen"]);
router.menu(f("menu.ep5"), [BotController, "industri"]);
router.menu(f("menu.ep6"), [BotController, "inflasi"]);
router.menu(f("menu.ep7"), [BotController, "keuangan"]);
router.menu(f("menu.ep8"), [BotController, "komunikasi"]);
router.menu(f("menu.ep9"), [BotController, "pariwisata"]);
router.menu(f("menu.ep10"), [BotController, "domestikRegionalBruto"]);
router.menu(f("menu.ep11"), [BotController, "transportasi"]);
router.menu(f("menu.ep12"), [BotController, "upahBuruh"]);

// PERTANIAN PERTAMBANGAN
router.menu(f("menu.d3"), [BotController, "pertanianPertambangan"]);

router.menu(f("menu.pp1"), [BotController, "hortikultura"]);
router.menu(f("menu.pp2"), [BotController, "kehutanan"]);
router.menu(f("menu.pp3"), [BotController, "perikanan"]);
router.menu(f("menu.pp4"), [BotController, "perkebunan"]);
router.menu(f("menu.pp5"), [BotController, "pertambangan"]);
router.menu(f("menu.pp6"), [BotController, "peternakan"]);
router.menu(f("menu.pp7"), [BotController, "tanamanPangan"]);

// KONSULTASI STATISTIK
router.menu(f("menu.k1"), [BotController, "k1Menu"]);
router.menu(f("menu.k2"), [BotController, "k2Menu"]);
router.menu(f("menu.k3"), [BotController, "k3Menu"]);
router.menu(f("menu.k4"), [BotController, "k4Menu"]);
router.menu(f("menu.k5"), [BotController, "k5Menu"]);


module.exports = router;    