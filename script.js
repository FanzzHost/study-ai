// ===== DATA =====
const kelasData = [
    { id: 1, nama: "Kelas 1 SD", icon: "fa-child" },
    { id: 2, nama: "Kelas 2 SD", icon: "fa-child-reaching" },
    { id: 3, nama: "Kelas 3 SD", icon: "fa-shapes" },
    { id: 4, nama: "Kelas 4 SD", icon: "fa-pencil-alt" },
    { id: 5, nama: "Kelas 5 SD", icon: "fa-book" },
    { id: 6, nama: "Kelas 6 SD", icon: "fa-graduation-cap" },
    { id: 7, nama: "Kelas 7 SMP", icon: "fa-school" },
    { id: 8, nama: "Kelas 8 SMP", icon: "fa-school" },
    { id: 9, nama: "Kelas 9 SMP", icon: "fa-school" },
    { id: 10, nama: "Kelas 10 SMA", icon: "fa-university" },
    { id: 11, nama: "Kelas 11 SMA", icon: "fa-university" },
    { id: 12, nama: "Kelas 12 SMA", icon: "fa-university" }
];

const mapelData = {
    "Kelas 1 SD": [
        { nama: "Matematika", icon: "fa-calculator", deskripsi: "Berhitung, penjumlahan, pengurangan" },
        { nama: "Bahasa Indonesia", icon: "fa-language", deskripsi: "Membaca, menulis, berbicara" },
        { nama: "IPA", icon: "fa-flask", deskripsi: "Mengenal alam dan lingkungan" },
        { nama: "IPS", icon: "fa-globe-asia", deskripsi: "Mengenal lingkungan sosial" },
        { nama: "Pendidikan Agama", icon: "fa-praying-hands", deskripsi: "Pendidikan karakter dan agama" },
        { nama: "Seni Budaya", icon: "fa-palette", deskripsi: "Menggambar, bernyanyi, menari" }
    ],
    "Kelas 2 SD": [
        { nama: "Matematika", icon: "fa-calculator", deskripsi: "Perkalian, pembagian, satuan" },
        { nama: "Bahasa Indonesia", icon: "fa-language", deskripsi: "Membaca pemahaman, menulis cerita" },
        { nama: "IPA", icon: "fa-flask", deskripsi: "Makhluk hidup dan benda" },
        { nama: "IPS", icon: "fa-globe-asia", deskripsi: "Keluarga dan lingkungan" },
        { nama: "Pendidikan Agama", icon: "fa-praying-hands", deskripsi: "Akhlak dan ibadah" },
        { nama: "Seni Budaya", icon: "fa-palette", deskripsi: "Seni rupa dan musik" }
    ],
    "Kelas 3 SD": [
        { nama: "Matematika", icon: "fa-calculator", deskripsi: "Pecahan, satuan panjang, waktu" },
        { nama: "Bahasa Indonesia", icon: "fa-language", deskripsi: "Teks deskripsi, puisi, dongeng" },
        { nama: "IPA", icon: "fa-flask", deskripsi: "Ciri-ciri makhluk hidup" },
        { nama: "IPS", icon: "fa-globe-asia", deskripsi: "Lingkungan dan kegiatan ekonomi" },
        { nama: "Pendidikan Agama", icon: "fa-praying-hands", deskripsi: "Sejarah dan ajaran agama" },
        { nama: "Seni Budaya", icon: "fa-palette", deskripsi: "Seni tari dan teater" }
    ],
    "Kelas 4 SD": [
        { nama: "Matematika", icon: "fa-calculator", deskripsi: "Bangun datar, keliling, luas" },
        { nama: "Bahasa Indonesia", icon: "fa-language", deskripsi: "Teks narasi, berita, cerita" },
        { nama: "IPA", icon: "fa-flask", deskripsi: "Energi, gaya, dan gerak" },
        { nama: "IPS", icon: "fa-globe-asia", deskripsi: "Peta, kenampakan alam" },
        { nama: "Pendidikan Agama", icon: "fa-praying-hands", deskripsi: "Kitab suci dan sejarah" },
        { nama: "Seni Budaya", icon: "fa-palette", deskripsi: "Seni musik dan kriya" }
    ],
    "Kelas 5 SD": [
        { nama: "Matematika", icon: "fa-calculator", deskripsi: "Bangun ruang, volume, debit" },
        { nama: "Bahasa Indonesia", icon: "fa-language", deskripsi: "Teks eksplanasi, diskusi, pidato" },
        { nama: "IPA", icon: "fa-flask", deskripsi: "Sistem tubuh manusia" },
        { nama: "IPS", icon: "fa-globe-asia", deskripsi: "Sejarah perjuangan bangsa" },
        { nama: "Pendidikan Agama", icon: "fa-praying-hands", deskripsi: "Fiqih dan tasawuf" },
        { nama: "Seni Budaya", icon: "fa-palette", deskripsi: "Seni pertunjukan" }
    ],
    "Kelas 6 SD": [
        { nama: "Matematika", icon: "fa-calculator", deskripsi: "Operasi bilangan, statistik" },
        { nama: "Bahasa Indonesia", icon: "fa-language", deskripsi: "Teks laporan, editorial" },
        { nama: "IPA", icon: "fa-flask", deskripsi: "Adaptasi, ekosistem, tata surya" },
        { nama: "IPS", icon: "fa-globe-asia", deskripsi: "Globalisasi dan kerja sama" },
        { nama: "Pendidikan Agama", icon: "fa-praying-hands", deskripsi: "Muamalah dan kehidupan" },
        { nama: "Seni Budaya", icon: "fa-palette", deskripsi: "Seni rupa 3 dimensi" }
    ],
    "Kelas 7 SMP": [
        { nama: "Matematika", icon: "fa-calculator", deskripsi: "Bilangan, aljabar, geometri" },
        { nama: "Bahasa Indonesia", icon: "fa-language", deskripsi: "Teks observasi, prosedur" },
        { nama: "IPA", icon: "fa-flask", deskripsi: "Klasifikasi makhluk hidup" },
        { nama: "IPS", icon: "fa-globe-asia", deskripsi: "Interaksi sosial dan lembaga" },
        { nama: "Bahasa Inggris", icon: "fa-flag-usa", deskripsi: "Grammar, vocabulary, speaking" },
        { nama: "Pendidikan Agama", icon: "fa-praying-hands", deskripsi: "Al-Quran dan Hadits" },
        { nama: "PJOK", icon: "fa-running", deskripsi: "Olahraga dan kesehatan" },
        { nama: "Seni Budaya", icon: "fa-palette", deskripsi: "Seni musik dan tari" }
    ],
    "Kelas 8 SMP": [
        { nama: "Matematika", icon: "fa-calculator", deskripsi: "Teorema Pythagoras, lingkaran" },
        { nama: "Bahasa Indonesia", icon: "fa-language", deskripsi: "Teks eksplanasi, diskusi" },
        { nama: "IPA", icon: "fa-flask", deskripsi: "Sistem gerak, zat aditif" },
        { nama: "IPS", icon: "fa-globe-asia", deskripsi: "Kehidupan sosial budaya" },
        { nama: "Bahasa Inggris", icon: "fa-flag-usa", deskripsi: "Narrative text, report" },
        { nama: "Pendidikan Agama", icon: "fa-praying-hands", deskripsi: "Aqidah dan akhlak" },
        { nama: "PJOK", icon: "fa-running", deskripsi: "Bola basket, voli, atletik" },
        { nama: "Seni Budaya", icon: "fa-palette", deskripsi: "Seni rupa dan teater" }
    ],
    "Kelas 9 SMP": [
        { nama: "Matematika", icon: "fa-calculator", deskripsi: "Transformasi, statistika, peluang" },
        { nama: "Bahasa Indonesia", icon: "fa-language", deskripsi: "Teks laporan, ulasan" },
        { nama: "IPA", icon: "fa-flask", deskripsi: "Listrik, magnet, bioteknologi" },
        { nama: "IPS", icon: "fa-globe-asia", deskripsi: "Perubahan sosial budaya" },
        { nama: "Bahasa Inggris", icon: "fa-flag-usa", deskripsi: "Analytical exposition" },
        { nama: "Pendidikan Agama", icon: "fa-praying-hands", deskripsi: "Sejarah dan peradaban Islam" },
        { nama: "PJOK", icon: "fa-running", deskripsi: "Sepak bola, renang" },
        { nama: "Seni Budaya", icon: "fa-palette", deskripsi: "Seni pertunjukan modern" }
    ],
    "Kelas 10 SMA": [
        { nama: "Matematika", icon: "fa-calculator", deskripsi: "Eksponen, logaritma, trigonometri" },
        { nama: "Bahasa Indonesia", icon: "fa-language", deskripsi: "Teks editorial, kritik" },
        { nama: "Fisika", icon: "fa-atom", deskripsi: "Besaran, vektor, gerak" },
        { nama: "Kimia", icon: "fa-flask", deskripsi: "Atom, stoikiometri, ikatan" },
        { nama: "Biologi", icon: "fa-dna", deskripsi: "Sel, jaringan, metabolisme" },
        { nama: "Sejarah", icon: "fa-landmark", deskripsi: "Zaman praaksara, Hindu-Buddha" },
        { nama: "Geografi", icon: "fa-globe", deskripsi: "Litosfer, atmosfer, hidrosfer" },
        { nama: "Ekonomi", icon: "fa-chart-line", deskripsi: "Konsep ilmu ekonomi" },
        { nama: "Sosiologi", icon: "fa-users", deskripsi: "Sosialisasi dan interaksi" },
        { nama: "Bahasa Inggris", icon: "fa-flag-usa", deskripsi: "Narrative, analytical" },
        { nama: "Pendidikan Agama", icon: "fa-praying-hands", deskripsi: "Al-Quran dan tafsir" }
    ],
    "Kelas 11 SMA": [
        { nama: "Matematika", icon: "fa-calculator", deskripsi: "Turunan, integral, matriks" },
        { nama: "Bahasa Indonesia", icon: "fa-language", deskripsi: "Teks biografi, ceramah" },
        { nama: "Fisika", icon: "fa-atom", deskripsi: "Termodinamika, gelombang" },
        { nama: "Kimia", icon: "fa-flask", deskripsi: "Termokimia, laju reaksi" },
        { nama: "Biologi", icon: "fa-dna", deskripsi: "Sistem peredaran darah" },
        { nama: "Sejarah", icon: "fa-landmark", deskripsi: "Kolonialisme dan imperialisme" },
        { nama: "Geografi", icon: "fa-globe", deskripsi: "Biosfer, antroposfer" },
        { nama: "Ekonomi", icon: "fa-chart-line", deskripsi: "Pendapatan nasional" },
        { nama: "Sosiologi", icon: "fa-users", deskripsi: "Stratifikasi dan mobilitas" },
        { nama: "Bahasa Inggris", icon: "fa-flag-usa", deskripsi: "Hortatory exposition" },
        { nama: "Pendidikan Agama", icon: "fa-praying-hands", deskripsi: "Fiqih dan muamalah" }
    ],
    "Kelas 12 SMA": [
        { nama: "Matematika", icon: "fa-calculator", deskripsi: "Program linear, limit, integral" },
        { nama: "Bahasa Indonesia", icon: "fa-language", deskripsi: "Teks proposal, karya ilmiah" },
        { nama: "Fisika", icon: "fa-atom", deskripsi: "Listrik, magnet, fisika modern" },
        { nama: "Kimia", icon: "fa-flask", deskripsi: "Kesetimbangan, elektrokimia" },
        { nama: "Biologi", icon: "fa-dna", deskripsi: "Genetika, evolusi, bioteknologi" },
        { nama: "Sejarah", icon: "fa-landmark", deskripsi: "Perang dunia, perjuangan" },
        { nama: "Geografi", icon: "fa-globe", deskripsi: "Wilayah dan perencanaan" },
        { nama: "Ekonomi", icon: "fa-chart-line", deskripsi: "Pembangunan dan keuangan" },
        { nama: "Sosiologi", icon: "fa-users", deskripsi: "Perubahan sosial global" },
        { nama: "Bahasa Inggris", icon: "fa-flag-usa", deskripsi: "Review text, spoof" },
        { nama: "Pendidikan Agama", icon: "fa-praying-hands", deskripsi: "Dakwah dan peradaban" }
    ]
};

// ===== STATE =====
let selectedKelas = null;
let selectedMapel = null;
let currentSoal = [];
let jawabanUser = {};
let timerInterval = null;
let startTime = null;
let apiKey = localStorage.getItem('groq_api_key') || localStorage.getItem('gemini_api_key') || '';

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    // Hide loading screen
    setTimeout(() => {
        document.getElementById('loading-screen').classList.add('hidden');
    }, 1500);

    // Render kelas
    renderKelas();

    // Populate latihan selects
    populateLatihanSelects();

    // Update API status banner
    updateApiStatusBanner();

    // Navbar scroll
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile nav toggle
    document.getElementById('nav-toggle').addEventListener('click', () => {
        document.getElementById('nav-links').classList.toggle('active');
    });

    // Smooth scroll for nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                document.getElementById('nav-links').classList.remove('active');
            }
        });
    });

    // Update active nav on scroll
    window.addEventListener('scroll', updateActiveNav);

    // Check API key
    if (!apiKey) {
        setTimeout(() => {
            showToast('Klik tombol 🔑 API Key di navbar untuk mengatur API Key Groq');
        }, 2000);
    }
});

// ===== RENDER FUNCTIONS =====
function renderKelas() {
    const grid = document.getElementById('kelas-grid');
    grid.innerHTML = kelasData.map(kelas => `
        <button class="kelas-btn" onclick="selectKelas('${kelas.nama}')" data-kelas="${kelas.nama}">
            <i class="fas ${kelas.icon}"></i>
            <span>${kelas.nama}</span>
        </button>
    `).join('');
}

function selectKelas(kelasNama) {
    selectedKelas = kelasNama;

    // Update active state
    document.querySelectorAll('.kelas-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.kelas === kelasNama);
    });

    // Show mapel container
    document.getElementById('mapel-container').style.display = 'block';
    document.getElementById('selected-kelas-name').textContent = kelasNama;
    document.getElementById('materi-container').style.display = 'none';

    // Render mapel
    const mapelGrid = document.getElementById('mapel-grid');
    const mapels = mapelData[kelasNama] || [];
    mapelGrid.innerHTML = mapels.map(mapel => `
        <div class="mapel-card" onclick="selectMapel('${mapel.nama}')">
            <div class="mapel-icon">
                <i class="fas ${mapel.icon}"></i>
            </div>
            <h4>${mapel.nama}</h4>
            <p>${mapel.deskripsi}</p>
        </div>
    `).join('');

    // Scroll to mapel
    document.getElementById('mapel-container').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function selectMapel(mapelNama) {
    selectedMapel = mapelNama;

    document.getElementById('mapel-container').style.display = 'none';
    document.getElementById('materi-container').style.display = 'block';
    document.getElementById('materi-kelas-badge').textContent = selectedKelas;
    document.getElementById('materi-maple-title').textContent = mapelNama;

    // Reset content
    document.getElementById('materi-content').innerHTML = `
        <div class="empty-state">
            <i class="fas fa-book-reader"></i>
            <h4>Siap Belajar?</h4>
            <p>Masukkan topik yang ingin kamu pelajari, lalu klik "Generate Materi dengan AI" untuk mendapatkan penjelasan dari Gemini AI.</p>
        </div>
    `;
    document.getElementById('topik-input').value = '';

    document.getElementById('materi-container').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function backToKelas() {
    document.getElementById('mapel-container').style.display = 'none';
    document.getElementById('materi-container').style.display = 'none';
    selectedKelas = null;
    selectedMapel = null;
    document.querySelectorAll('.kelas-btn').forEach(btn => btn.classList.remove('active'));
}

function backToMapel() {
    document.getElementById('materi-container').style.display = 'none';
    document.getElementById('mapel-container').style.display = 'block';
    selectedMapel = null;
}

function populateLatihanSelects() {
    const kelasSelect = document.getElementById('latihan-kelas');
    kelasData.forEach(kelas => {
        const option = document.createElement('option');
        option.value = kelas.nama;
        option.textContent = kelas.nama;
        kelasSelect.appendChild(option);
    });

    // Update mapel when kelas changes
    kelasSelect.addEventListener('change', () => {
        const mapelSelect = document.getElementById('latihan-mapel');
        mapelSelect.innerHTML = '<option value="">Pilih Mapel</option>';
        const kelas = kelasSelect.value;
        if (kelas && mapelData[kelas]) {
            mapelData[kelas].forEach(mapel => {
                const option = document.createElement('option');
                option.value = mapel.nama;
                option.textContent = mapel.nama;
                mapelSelect.appendChild(option);
            });
        }
    });
}

// ===== API FUNCTIONS =====
async function callGroqAPI(prompt) {
    if (!apiKey) {
        showModal();
        throw new Error('API Key belum diatur');
    }

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.7,
            max_tokens: 4000
        })
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || error.message || 'Gagal memanggil API Groq');
    }

    const data = await response.json();
    return data.choices[0].message.content;
}

// ===== GENERATE MATERI =====
async function generateMateri() {
    const topik = document.getElementById('topik-input').value.trim();
    if (!topik) {
        showToast('Masukkan topik yang ingin dipelajari');
        return;
    }

    if (!apiKey) {
        showModal();
        return;
    }

    const contentDiv = document.getElementById('materi-content');
    contentDiv.innerHTML = `
        <div class="loading-state">
            <div class="loader"></div>
            <p>Sedang generate materi dengan AI...</p>
        </div>
    `;

    try {
        const prompt = `Buatkan materi pembelajaran lengkap dalam Bahasa Indonesia untuk:
- Kelas: ${selectedKelas}
- Mata Pelajaran: ${selectedMapel}
- Topik: ${topik}

Format materi:
1. Penjelasan konsep dasar
2. Contoh-contoh
3. Poin-poin penting
4. Rangkuman singkat

Gunakan bahasa yang mudah dipahami siswa ${selectedKelas}.`;

        const materi = await callGroqAPI(prompt);
        contentDiv.innerHTML = `<div class="materi-generated">${formatMateri(materi)}</div>`;
        showToast('Materi berhasil digenerate!');
    } catch (error) {
        contentDiv.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-exclamation-triangle" style="color: var(--danger)"></i>
                <h4>Gagal Generate Materi</h4>
                <p>${error.message}</p>
            </div>
        `;
        showToast('Gagal generate materi: ' + error.message);
    }
}

function formatMateri(text) {
    // Convert markdown-like formatting to HTML
    let html = text
        .replace(/^### (.*$)/gim, '<h5>$1</h5>')
        .replace(/^## (.*$)/gim, '<h4>$1</h4>')
        .replace(/^# (.*$)/gim, '<h4>$1</h4>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`(.*?)`/g, '<code>$1</code>')
        .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
        .replace(/^\- (.*$)/gim, '<li>$1</li>')
        .replace(/^\d+\. (.*$)/gim, '<li>$1</li>');

    // Wrap lists
    html = html.replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>');
    // Fix nested lists
    html = html.replace(/<\/ul>\s*<ul>/g, '');

    // Convert newlines to paragraphs
    const paragraphs = html.split('\n\n');
    html = paragraphs.map(p => {
        p = p.trim();
        if (p.startsWith('<h') || p.startsWith('<ul') || p.startsWith('<blockquote')) {
            return p;
        }
        return p ? `<p>${p.replace(/\n/g, '<br>')}</p>` : '';
    }).join('');

    return html;
}

// ===== GENERATE SOAL =====
async function generateSoal() {
    const kelas = document.getElementById('latihan-kelas').value;
    const mapel = document.getElementById('latihan-mapel').value;
    const topik = document.getElementById('latihan-topik').value.trim();
    const jumlah = document.getElementById('latihan-jumlah').value;
    const kesulitan = document.getElementById('latihan-kesulitan').value;
    const tipe = document.getElementById('latihan-tipe').value;

    if (!kelas || !mapel) {
        showToast('Pilih kelas dan mata pelajaran terlebih dahulu');
        return;
    }

    if (!apiKey) {
        showModal();
        return;
    }

    // Hide hasil if shown
    document.getElementById('hasil-container').style.display = 'none';
    document.getElementById('soal-container').style.display = 'block';

    const soalList = document.getElementById('soal-list');
    soalList.innerHTML = `
        <div class="loading-state">
            <div class="loader"></div>
            <p>Sedang generate soal dengan AI...</p>
        </div>
    `;

    // Update badges
    document.getElementById('soal-kelas-badge').textContent = kelas;
    document.getElementById('soal-mapel-badge').textContent = mapel;
    document.getElementById('soal-kesulitan-badge').textContent = kesulitan.charAt(0).toUpperCase() + kesulitan.slice(1);

    // Reset state
    jawabanUser = {};
    currentSoal = [];
    startTimer();

    try {
        let prompt = `Buatkan ${jumlah} soal ${tipe === 'pilihan_ganda' ? 'pilihan ganda' : tipe === 'essay' ? 'essay' : 'campuran pilihan ganda dan essay'} dalam Bahasa Indonesia untuk:
- Kelas: ${kelas}
- Mata Pelajaran: ${mapel}
- Topik: ${topik || 'Umum'}
- Tingkat Kesulitan: ${kesulitan}

Format JSON berikut (PENTING: hanya return JSON, tanpa markdown code block):
{
  "soal": [
    {
      "nomor": 1,
      "pertanyaan": "...",
      "tipe": "pilihan_ganda",
      "pilihan": ["A. ...", "B. ...", "C. ...", "D. ..."],
      "jawaban_benar": "A",
      "penjelasan": "..."
    }
  ]
}

Untuk soal essay, format:
{
  "nomor": 1,
  "pertanyaan": "...",
  "tipe": "essay",
  "jawaban_benar": "...",
  "penjelasan": "..."
}

Pastikan soal sesuai untuk siswa ${kelas} dan jawaban benar selalu ada.`;

        const response = await callGroqAPI(prompt);

        // Parse JSON
        let jsonStr = response;
        // Remove markdown code blocks if present
        jsonStr = jsonStr.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();

        const data = JSON.parse(jsonStr);
        currentSoal = data.soal || [];

        renderSoal();
        updateProgress();
        showToast('Soal berhasil digenerate!');
    } catch (error) {
        soalList.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-exclamation-triangle" style="color: var(--danger)"></i>
                <h4>Gagal Generate Soal</h4>
                <p>${error.message}</p>
                <button class="btn btn-primary" onclick="generateSoal()" style="margin-top: 16px">
                    <i class="fas fa-redo"></i> Coba Lagi
                </button>
            </div>
        `;
        showToast('Gagal generate soal: ' + error.message);
        stopTimer();
    }
}

function renderSoal() {
    const soalList = document.getElementById('soal-list');

    if (currentSoal.length === 0) {
        soalList.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-inbox"></i>
                <h4>Tidak Ada Soal</h4>
                <p>Coba generate soal baru.</p>
            </div>
        `;
        return;
    }

    soalList.innerHTML = currentSoal.map((soal, index) => {
        if (soal.tipe === 'essay') {
            return `
                <div class="soal-item" data-nomor="${soal.nomor}">
                    <div class="soal-number">${soal.nomor}</div>
                    <div class="soal-pertanyaan">${soal.pertanyaan}</div>
                    <div class="soal-essay">
                        <textarea id="jawaban-${soal.nomor}" placeholder="Tulis jawabanmu di sini..." onchange="simpanJawaban(${soal.nomor}, this.value)"></textarea>
                    </div>
                </div>
            `;
        } else {
            return `
                <div class="soal-item" data-nomor="${soal.nomor}">
                    <div class="soal-number">${soal.nomor}</div>
                    <div class="soal-pertanyaan">${soal.pertanyaan}</div>
                    <div class="soal-pilihan">
                        ${soal.pilihan.map(pilihan => {
                            const value = pilihan.charAt(0);
                            const text = pilihan.substring(3);
                            return `
                                <div class="pilihan-item" onclick="pilihJawaban(${soal.nomor}, '${value}')">
                                    <input type="radio" name="soal-${soal.nomor}" value="${value}" id="pilihan-${soal.nomor}-${value}">
                                    <label for="pilihan-${soal.nomor}-${value}">${pilihan}</label>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        }
    }).join('');
}

function pilihJawaban(nomor, value) {
    jawabanUser[nomor] = value;
    document.getElementById(`pilihan-${nomor}-${value}`).checked = true;
    updateProgress();
}

function simpanJawaban(nomor, value) {
    jawabanUser[nomor] = value;
    updateProgress();
}

function updateProgress() {
    const total = currentSoal.length;
    const answered = Object.keys(jawabanUser).length;
    const percentage = total > 0 ? (answered / total) * 100 : 0;

    document.getElementById('progress-fill').style.width = percentage + '%';
    document.getElementById('progress-text').textContent = `${answered} / ${total}`;
}

// ===== TIMER =====
function startTimer() {
    stopTimer();
    startTime = Date.now();
    const timerEl = document.getElementById('timer');

    timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const minutes = Math.floor(elapsed / 60).toString().padStart(2, '0');
        const seconds = (elapsed % 60).toString().padStart(2, '0');
        timerEl.textContent = `${minutes}:${seconds}`;
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function getElapsedTime() {
    if (!startTime) return '00:00';
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(elapsed / 60).toString().padStart(2, '0');
    const seconds = (elapsed % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
}

// ===== CEK JAWABAN =====
function cekJawaban() {
    if (currentSoal.length === 0) return;

    stopTimer();

    let benar = 0;
    let salah = 0;
    const total = currentSoal.length;

    currentSoal.forEach(soal => {
        const userAnswer = jawabanUser[soal.nomor];
        const soalEl = document.querySelector(`.soal-item[data-nomor="${soal.nomor}"]`);

        if (soal.tipe === 'pilihan_ganda') {
            const pilihanItems = soalEl.querySelectorAll('.pilihan-item');
            pilihanItems.forEach(item => {
                const input = item.querySelector('input');
                const value = input.value;

                item.classList.remove('benar', 'salah');

                if (value === soal.jawaban_benar) {
                    item.classList.add('benar');
                } else if (value === userAnswer && value !== soal.jawaban_benar) {
                    item.classList.add('salah');
                }
            });

            if (userAnswer === soal.jawaban_benar) {
                benar++;
            } else {
                salah++;
            }

            // Show explanation
            if (!soalEl.querySelector('.jawaban-benar-box')) {
                const explanation = document.createElement('div');
                explanation.className = 'jawaban-benar-box';
                explanation.innerHTML = `
                    <h5><i class="fas fa-check-circle"></i> Jawaban Benar: ${soal.jawaban_benar}</h5>
                    <p>${soal.penjelasan}</p>
                `;
                soalEl.appendChild(explanation);
            }
        } else {
            // Essay - show correct answer
            if (!soalEl.querySelector('.jawaban-benar-box')) {
                const explanation = document.createElement('div');
                explanation.className = 'jawaban-benar-box';
                explanation.innerHTML = `
                    <h5><i class="fas fa-check-circle"></i> Jawaban Referensi:</h5>
                    <p>${soal.jawaban_benar}</p>
                    <h5 style="margin-top: 12px"><i class="fas fa-info-circle"></i> Penjelasan:</h5>
                    <p>${soal.penjelasan}</p>
                `;
                soalEl.appendChild(explanation);
            }

            // For essay, count as "answered" if user wrote something
            if (userAnswer && userAnswer.trim().length > 10) {
                benar++;
            } else {
                salah++;
            }
        }
    });

    // Show hasil
    document.getElementById('soal-container').style.display = 'none';
    document.getElementById('hasil-container').style.display = 'block';

    const percentage = Math.round((benar / total) * 100);
    document.getElementById('hasil-score').textContent = `${benar}/${total}`;
    document.getElementById('hasil-percentage').textContent = `${percentage}%`;
    document.getElementById('stat-benar').textContent = benar;
    document.getElementById('stat-salah').textContent = salah;
    document.getElementById('stat-waktu').textContent = getElapsedTime();

    let message = '';
    if (percentage >= 90) message = '🌟 Luar biasa! Kamu sangat menguasai materi ini!';
    else if (percentage >= 70) message = '👍 Bagus! Tingkatkan lagi belajarmu!';
    else if (percentage >= 50) message = '💪 Cukup baik, terus berlatih ya!';
    else message = '📚 Jangan menyerah! Pelajari lagi materinya.';

    document.getElementById('hasil-message').textContent = message;

    document.getElementById('hasil-container').scrollIntoView({ behavior: 'smooth' });
}

function resetSoal() {
    stopTimer();
    currentSoal = [];
    jawabanUser = {};
    document.getElementById('soal-container').style.display = 'none';
    document.getElementById('hasil-container').style.display = 'none';
    document.getElementById('soal-list').innerHTML = '';
    document.getElementById('progress-fill').style.width = '0%';
    document.getElementById('progress-text').textContent = '0 / 0';
    document.getElementById('timer').textContent = '00:00';

    // Scroll to form
    document.querySelector('.latihan-form').scrollIntoView({ behavior: 'smooth' });
}

// ===== MODAL =====
function showModal() {
    document.getElementById('api-modal').classList.add('active');
    const savedKey = localStorage.getItem('gemini_api_key');
    if (savedKey) {
        document.getElementById('api-key-input').value = savedKey;
    }
}

function closeModal() {
    document.getElementById('api-modal').classList.remove('active');
}

function toggleApiVisibility() {
    const input = document.getElementById('api-key-input');
    const icon = document.getElementById('api-eye-icon');
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.replace('fa-eye-slash', 'fa-eye');
    }
}

function saveApiKey() {
    const key = document.getElementById('api-key-input').value.trim();
    const save = document.getElementById('save-api-key').checked;

    if (!key) {
        showToast('Masukkan API Key terlebih dahulu');
        return;
    }

    apiKey = key;
    if (save) {
        localStorage.setItem('groq_api_key', key);
        // Hapus key lama Gemini kalau ada
        localStorage.removeItem('gemini_api_key');
    } else {
        localStorage.removeItem('groq_api_key');
    }

    updateApiStatusBanner();
    closeModal();
    showToast('API Key Groq berhasil disimpan!');
}


// ===== API STATUS CHECK =====
function updateApiStatusBanner() {
    const banner = document.getElementById('api-status-banner');
    if (apiKey && apiKey.startsWith('AIzaSy')) {
        banner.classList.add('hidden');
    } else {
        banner.classList.remove('hidden');
    }
}

// ===== TEST API KEY =====
async function testApiKey() {
    const input = document.getElementById('api-key-input');
    const result = document.getElementById('api-test-result');
    const key = input.value.trim();

    if (!key) {
        result.innerHTML = '<i class="fas fa-times-circle"></i> Masukkan API Key dulu';
        result.className = 'error';
        return;
    }

    result.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Testing...';
    result.className = '';

    try {
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${key}`
            },
            body: JSON.stringify({
                model: "llama-3.3-70b-versatite",
                messages: [{ role: "user", content: 'Hi' }],
                max_tokens: 10
            })
        });

        if (response.ok) {
            result.innerHTML = '<i class="fas fa-check-circle"></i> API Key Groq valid!';
            result.className = 'success';
        } else {
            const error = await response.json();
            result.innerHTML = `<i class="fas fa-times-circle"></i> ${error.error?.message || 'API Key tidak valid'}`;
            result.className = 'error';
        }
    } catch (error) {
        result.innerHTML = `<i class="fas fa-times-circle"></i> Error: ${error.message}`;
        result.className = 'error';
    }
}

// Override init untuk update banner
const originalInit = document.addEventListener;
// Update init function
const oldDOMContentLoaded = () => {};

// ===== TOAST =====
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    toastMessage.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

// ===== NAV ACTIVE =====
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}
