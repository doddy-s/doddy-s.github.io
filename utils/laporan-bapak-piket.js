function createFromTemplate() {
    const extractedDatas = {
        sleman: extractData(document.getElementById('sleman').value, 'sleman'),
        polresta: extractData(document.getElementById('polresta').value, 'polresta'),
        bantul: extractData(document.getElementById('bantul').value, 'bantul'),
        kulonprogo: extractData(document.getElementById('kulonprogo').value, 'kulonprogo'),
        gunungkidul: extractData(document.getElementById('gunungkidul').value, 'gunungkidul'),
        tambahan: extractData(document.getElementById('tambahan').value, 'tambahan'),
    }
    const finalLaporan = new Laporan()

    Object.keys(extractedDatas).forEach((kabupaten) => {
        extractedDatas[kabupaten].getKeys().forEach((key) => {
            finalLaporan[key].value += extractedDatas[kabupaten][key].value
        })

        console.log("RM "+kabupaten+"=="+extractedDatas[kabupaten].kermat.value)
        console.log("Kejadian "+kabupaten+"=="+extractedDatas[kabupaten].kejadian.value)
    })

    const weekday = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu']
    const months = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ]

    const currentDate = new Date()
    const day = weekday[currentDate.getDay()]
    const dayBefore = weekday[currentDate.getDay()-1] || "Sabtu"
    const dayAfter = weekday[currentDate.getDay()+1] || "Minggu"
    const date = currentDate.getDate()
    const month = months[currentDate.getMonth()]
    const year = currentDate.getFullYear()

    console.log(day, date, month, year)

    const is12H = document.getElementById('kurun').checked


    const result = `Kepada : Yth.
1. KAKORLANTAS POLRI
2. KAPOLDA DIY 

Dari : DIRLANTAS POLDA DIY
Perihal : Lapsit Kamseltibcarlantas 

Dilaporkan JENDERAL, situasi Kamseltibcarlantas di wilayah hukum Polda DIY dan jajaran selama 1 X ${is12H ? '12' : '24'} jam
pada hari ${dayBefore} s.d. ${day}, tanggal ${date-1} s.d ${date} ${month} ${year} pukul ${is12H ? '17.00' : '17.00'} WIB s/d ${is12H ? '05.00' : '17.00'} sebagai berikut : 

Kejadian menonjol : NIHIL 

1. LAKA LANTAS  :  ${finalLaporan.kejadian.value}  kejadian
    MD  :  ${finalLaporan.md.value}
    LB  :  ${finalLaporan.lb.value}
    LR  :  ${finalLaporan.lr.value}
    RM  :  ${formatRupiah(finalLaporan.kermat.value)}

2. GIAT GAKKUM  :  ${finalLaporan.getTotalGiatGakkum()}  kali
    a. Jenis Dakgar  :  
        -E-Tilang  :  ${finalLaporan.eTilang.value}  kali
        -Manual  :  ${finalLaporan.manual.value}  kali
        -Teguran  :  ${finalLaporan.teguran.value}  kali

    b. Jenis Gar Lantas  :  
        -Helm  :  ${finalLaporan.helm.value}  kali
        -Mabuk  :  ${finalLaporan.mabuk.value}  kali
        -Sabuk  :  ${finalLaporan.sabuk.value}  kali
        -Kecepatan  :  ${finalLaporan.kecepatan.value}  kali
        -GunHP  :  ${finalLaporan.menggunakanHp.value}  kali
        -Lawanarus  :  ${finalLaporan.lawanArus.value}  kali
        -Muatan  :  ${finalLaporan.muatan.value}  kali
        -JalurCepat  :  ${finalLaporan.jalurCepat.value || 0}  kali
        -Garrambu  :  ${finalLaporan.melanggarRambu.value}  kali
        -Dibwhumur  :  ${finalLaporan.diBawahUmur.value}  kali
        -Lighton  :  ${finalLaporan.lightOn.value}  kali
        -Kelengkapan  :  ${finalLaporan.kelengkapan.value}  kali
        -TNKB  :  ${finalLaporan.tnkb.value || 0}  kali
        -Apill  :  ${finalLaporan.apill.value}  kali
        -Surat-surat  :  ${finalLaporan.suratsurat.value || 0}  kali
        -Blombongan  :  ${finalLaporan.blombongan.value}  kali
        -Lainnya  :  ${finalLaporan.lainnya.value}  kali

3. GIAT KAMSEL  :  ${finalLaporan.getTotalGiatKamsel()}  kali
    a. DikmasLantas  :  
        -DikmasLts  :  ${finalLaporan.dikmasLts.value}  kali
        -Binluh  :  ${finalLaporan.binluh.value}  kali
        -Sosialisasi  :  ${finalLaporan.sosialisasi.value}  kali
        -Penling  :  ${finalLaporan.penling.value}  kali

    b. Jemenopsrek  :  
        -SurveiPrasjal  :  ${finalLaporan.surveiPrasjal.value}  kali
        -RekayasaLalin  :  ${finalLaporan.rekayasaLantas.value}  kali
        -KTL  :  ${finalLaporan.ktl.value}  kali
        -Blackspot-Troubelspot  :  ${finalLaporan.blackspotTroublespot.value}  kali
        -Bencanaalam  :  ${finalLaporan.bencanaAlam.value}  kali

    c. AuditdanInspeksi  :  
        -Kerjasama  :  ${finalLaporan.kerjasama.value}  kali
        -Inspeksi  :  ${finalLaporan.inspeksi.value}  kali
        -Andalalin  :  ${finalLaporan.andalalin.value}  kali

    d. Standarisasi
        -Surveystandarisasi  :  ${finalLaporan.surveiPrasjal.value}  kali
        -RamcekSarang  :  ${finalLaporan.ramcekSarang.value}  kali

4. PUBLIKASI MEDIA SOSIAL  :  
    a. Facebook  :  ${finalLaporan.facebook.value}  kali
    b. Twitter  :  ${finalLaporan.twitter.value}  kali
    c. Instagram  :  ${finalLaporan.instagram.value}  kali
    d. Youtube  :  ${finalLaporan.youtube.value}  kali
    e. Mediaonline  :  ${finalLaporan.mediaOnline.value}  kali
    f. Telegram  :  ${finalLaporan.telegram.value || 0}  kali
    g. TikTok  :  ${finalLaporan.tiktok.value || 0}  kali

5. GIAT PEMBINAAN  :  ${finalLaporan.getTotalGiatPembinaan()}  kali
    a. Binrohtal  :  ${finalLaporan.binrohtal.value}  kali
    b. Pelatihan  :  ${finalLaporan.pelatihan.value}  kali
    c. Supervisi  :  ${finalLaporan.supervisi.value}  kali

6. GIAT TURJAWALI  :  ${finalLaporan.getTotalGiatTurjawali()}  kali
    a. Pengaturan  :  ${finalLaporan.pengaturan.value}  kali
    b. Penjagaan  :  ${finalLaporan.penjagaan.value}  kali
    c. Pengawalan  :  ${finalLaporan.pengawalan.value}  kali
    d. Patroli  :  ${finalLaporan.patroli.value}  kali

V. RENGIAT HARI ${dayAfter}, TANGGAL ${date+1} ${month} ${year}

A. POLRESTA YOGYAKARTA

${getRenggiat('polresta')}

B. POLRESTA SLEMAN

${getRenggiat('sleman')}

C. POLRES BANTUL

${getRenggiat('bantul')}

D. POLRES KULONPROGO

${getRenggiat('kulonprogo')}

E. POLRES GUNUNGKIDUL

${getRenggiat('gunungkidul')}

Demikian JENDERAL yang dapat kami laporkan. 

Hormat Kami
DIRLANTAS POLDA DIY
KBP. ALFIAN NURRIZAL, S.H., S.I.K., M. Hum.

Tembusan :
1. PARA PJU KORLANTAS POLRI
2. PARA PJU POLDA DIY.`

    console.log(result)
    copyToUsersClipboard(result)

    console.log(finalLaporan)
}

function getRenggiat(wilayah) {
    let temp = null
    try {
        temp = document.getElementById(wilayah).value.match(/!([\s\S]*?)!/)
    } catch {}

    if(temp != null) return temp[1]

    return null
}

function copyToUsersClipboard(text) {
    var dummy = document.createElement('textarea')
    document.body.appendChild(dummy)
    dummy.value = text
    dummy.select()
    document.execCommand('copy')
    document.body.removeChild(dummy)
}

function formatRupiah(angka) {
    let rupiah = '';        
    const angkaRev = angka.toString().split('').reverse().join('');
    for (let i = 0; i < angkaRev.length; i++) {
        if (i % 3 === 0) {
            rupiah += angkaRev.substr(i, 3) + '.';
        }
    }
    return 'Rp ' + rupiah.split('', rupiah.length - 1).reverse().join('') + ',-';
}

class Laporan {
    constructor() {
        //Optional
        this.jalurCepat = new LaporanItem([
            new RegExp('jalurcepat(\\d+)'),
        ])

        this.tnkb = new LaporanItem([
            new RegExp('tnkb(\\d+)'),
        ])

        this.suratsurat = new LaporanItem([
            new RegExp('suratsurat(\\d+)'),
        ])
        
        this.telegram = new LaporanItem([
            new RegExp('telegram(\\d+)'),
        ])
        
        this.tiktok = new LaporanItem([
            new RegExp('tiktok(\\d+)'),
        ])

        //Core
        this.kejadian = new LaporanItem([
            new RegExp('lakalantas(\\d+)kejadian'),
            new RegExp('lakalantas(\\d+)laporan'),
            new RegExp('lakalaka(\\d+)laporan'),
        ])

        this.md = new LaporanItem([
            new RegExp('md(\\d+)'),
        ])

        this.lb = new LaporanItem([
            new RegExp('lb(\\d+)'),
        ])

        this.lr = new LaporanItem([
            new RegExp('lr(\\d+)'),
        ])

        this.kermat = new LaporanItem([
            new RegExp('rmrp(\\d+)'),
            new RegExp('kerugianmaterirp(\\d+)'),
            new RegExp('kerugianmaterialrp(\\d+)'),
            new RegExp('kerugianmaterialrp(\\d+)'),
            new RegExp('kermatrp(\\d+)'),
            new RegExp('totalkermatrp(\\d+)'),
            new RegExp('kerugianrp(\\d+)'),
        ])

        this.eTilang = new LaporanItem([
            new RegExp('etilang(\\d+)'),
        ])

        this.manual = new LaporanItem([
            new RegExp('manual(\\d+)'),
        ])

        this.teguran = new LaporanItem([
            new RegExp('teguran(\\d+)'),
        ])

        this.helm = new LaporanItem([
            new RegExp('helm(\\d+)'),
        ])

        this.mabuk = new LaporanItem([
            new RegExp('mabuk(\\d+)'),
        ])

        this.sabuk = new LaporanItem([
            new RegExp('sabuk(\\d+)'),
        ])

        this.kecepatan = new LaporanItem([
            new RegExp('kecepatan(\\d+)'),
        ])

        this.menggunakanHp = new LaporanItem([
            new RegExp('gunhp(\\d+)'),
        ])

        this.lawanArus = new LaporanItem([
            new RegExp('lawanarus(\\d+)'),
        ])

        this.muatan = new LaporanItem([
            new RegExp('muatan(\\d+)'),
        ])

        this.apill = new LaporanItem([
            new RegExp('apill(\\d+)'),
        ])

        this.melanggarRambu = new LaporanItem([
            new RegExp('garrambu(\\d+)'),
            new RegExp('rambumarka(\\d+)'),
        ])

        this.diBawahUmur = new LaporanItem([
            new RegExp('dibawahumur(\\d+)'),
            new RegExp('dibwhumur(\\d+)'),
            new RegExp('dbwhumur(\\d+)'),
        ])

        this.lightOn = new LaporanItem([
            new RegExp('lighton(\\d+)'),
        ])

        this.blombongan = new LaporanItem([
            new RegExp('blombongan(\\d+)'),
        ])

        this.kelengkapan = new LaporanItem([
            new RegExp('kelengkapan(\\d+)'),
            new RegExp('kelengkapankendaraan(\\d+)'),
        ])

        this.lainnya = new LaporanItem([
            new RegExp('lainnya(\\d+)'),
            new RegExp('lainnyanopol(\\d+)'),
        ])

        this.dikmasLts = new LaporanItem([
            new RegExp('dikmaslts(\\d+)'),
        ])

        this.binluh = new LaporanItem([
            new RegExp('binluh(\\d+)'),
        ])

        this.sosialisasi = new LaporanItem([
            new RegExp('sosialisasi(\\d+)'),
        ])

        this.penling = new LaporanItem([
            new RegExp('penling(\\d+)'),
        ])

        this.surveiPrasjal = new LaporanItem([
            new RegExp('surveiprasjal(\\d+)'),
        ])

        this.rekayasaLantas = new LaporanItem([
            new RegExp('rekayasalantas(\\d+)'),
            new RegExp('rekayasalalin(\\d+)'),
        ])

        this.ktl = new LaporanItem([
            new RegExp('ktl(\\d+)'),
        ])

        this.blackspotTroublespot = new LaporanItem([
            new RegExp('blackspottroublespot(\\d+)'),
            new RegExp('blackspottroubelspot(\\d+)'),
        ])

        this.bencanaAlam = new LaporanItem([
            new RegExp('bencanaalam(\\d+)'),
        ])

        this.kerjasama = new LaporanItem([
            new RegExp('kerjasama(\\d+)'),
        ])

        this.inspeksi = new LaporanItem([
            new RegExp('inspeksi(\\d+)'),
        ])

        this.andalalin = new LaporanItem([
            new RegExp('andalalin(\\d+)'),
        ])

        this.surveiStandarisasi = new LaporanItem([
            new RegExp('surveistandarisasi(\\d+)'),
            new RegExp('surveystandarisasi(\\d+)'),
        ])

        this.ramcekSarang = new LaporanItem([
            new RegExp('ramceksarang(\\d+)'),
        ])

        this.facebook = new LaporanItem([
            new RegExp('facebook(\\d+)'),
        ])

        this.twitter = new LaporanItem([
            new RegExp('twitter(\\d+)'),
        ])

        this.instagram = new LaporanItem([
            new RegExp('instagram(\\d+)'),
        ])

        this.youtube = new LaporanItem([
            new RegExp('youtube(\\d+)'),
        ])

        this.mediaOnline = new LaporanItem([
            new RegExp('mediaonline(\\d+)'),
        ])

        this.binrohtal = new LaporanItem([
            new RegExp('binrohtal(\\d+)'),
        ])

        this.pelatihan = new LaporanItem([
            new RegExp('pelatihan(\\d+)'),
        ])

        this.supervisi = new LaporanItem([
            new RegExp('supervisi(\\d+)'),
        ])

        this.pengaturan = new LaporanItem([
            new RegExp('pengaturan(\\d+)'),
        ])

        this.penjagaan = new LaporanItem([
            new RegExp('penjagaan(\\d+)'),
        ])

        this.pengawalan = new LaporanItem([
            new RegExp('pengawalan(\\d+)'),
        ])

        this.patroli = new LaporanItem([
            new RegExp('patroli(\\d+)'),
        ])
        
        this.patroli = new LaporanItem([
            new RegExp('patroli(\\d+)'),
        ])

        this.renggiat = new LaporanItem([
            new RegExp('/\{([^}]+)\}/g')
        ])
    }

    getKeys() {
        return Object.keys(this)
    }

    getTotalGiatGakkum() {
        const keys = [
            'eTilang',
            'manual',
            'teguran',
            'helm',
            'mabuk',
            'sabuk',
            'kecepatan',
            'menggunakanHp',
            'lawanArus',
            'muatan',
            'apill',
            'melanggarRambu',
            'diBawahUmur',
            'lightOn',
            'blombongan',
            'kelengkapan',
            'lainnya',
            'jalurCepat',
            'tnkb',
            'muatan'
        ]

        let total = 0;

        keys.forEach((key) => {
            total += this[key].value || 0;
        })
        return total
    }
    
    getTotalGiatKamsel() {
        const keys = [
            'dikmasLts',
            'binluh',
            'sosialisasi',
            'penling',
            'surveiPrasjal',
            'rekayasaLantas',
            'ktl',
            'blackspotTroublespot',
            'bencanaAlam',
            'kerjasama',
            'inspeksi',
            'andalalin',
            'surveiStandarisasi',
            'ramcekSarang'
        ]

        let total = 0;

        keys.forEach((key) => {
            total += this[key].value || 0;
        })
        return total
    }
    
    getTotalGiatPembinaan() {
        const keys = [
            'binrohtal',
            'pelatihan',
            'supervisi'
        ]

        let total = 0;

        keys.forEach((key) => {
            total += this[key].value || 0;
        })
        return total
    }

    getTotalGiatTurjawali() {
        const keys = [
            'pengaturan',
            'penjagaan',
            'pengawalan',
            'patroli'
        ]

        let total = 0;

        keys.forEach((key) => {
            total += this[key].value || 0;
        })
        return total
    }
}

class LaporanItem {
    constructor(regexParam) {
        this.value = null
        this.regexs = regexParam
    }
}

function extractData(text, wilayah) {
    const laporan = new Laporan()

    if(text === '') return laporan

    const tempRenggiat = text.match(laporan.renggiat.regexs[0])
    if(tempRenggiat != null) 
        laporan.renggiat.value = tempRenggiat[1]

    
    const cleanText = text.replace(/\s+/g, '').replace(/[.\-:;/*]/g, '').toLowerCase()

    laporan.getKeys().forEach((key) => {
        for(let i = 0; i < laporan[key].regexs.length; i++) {
            try {
                laporan[key].value = parseInt(cleanText.match(laporan[key].regexs[i])[1])
                break
            } catch(error) {
                // console.log(key+' with regex '+laporan[key].regexs[i]+' cant find value')
            }
        }
        if (laporan[key].value == null) {
            console.log('^^^^'+key+' in '+wilayah.toUpperCase()+' regexs needs to be added^^^^')
        }
    })

    return laporan
}

function elementValueOf(id) {
    console.log(document.getElementById(id).value)
}

