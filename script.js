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
        { nama: "Seni Budaya", icon: "fa-palette", deskripsi: "Seni musik dan tari" },
        { nama: "Informatika Dasar", icon: "fa-laptop-code", deskripsi: "Dasar pemrograman dan logika" }
    ],
    "Kelas 8 SMP": [
        { nama: "Matematika", icon: "fa-calculator", deskripsi: "Teorema Pythagoras, lingkaran" },
        { nama: "Bahasa Indonesia", icon: "fa-language", deskripsi: "Teks eksplanasi, diskusi" },
        { nama: "IPA", icon: "fa-flask", deskripsi: "Sistem gerak, zat aditif" },
        { nama: "IPS", icon: "fa-globe-asia", deskripsi: "Kehidupan sosial budaya" },
        { nama: "Bahasa Inggris", icon: "fa-flag-usa", deskripsi: "Narrative text, report" },
        { nama: "Pendidikan Agama", icon: "fa-praying-hands", deskripsi: "Aqidah dan akhlak" },
        { nama: "PJOK", icon: "fa-running", deskripsi: "Bola basket, voli, atletik" },
        { nama: "Seni Budaya", icon: "fa-palette", deskripsi: "Seni rupa dan teater" },
        { nama: "Informatika Dasar", icon: "fa-laptop-code", deskripsi: "Pemrograman dan algoritma" }
    ],
    "Kelas 9 SMP": [
        { nama: "Matematika", icon: "fa-calculator", deskripsi: "Transformasi, statistika, peluang" },
        { nama: "Bahasa Indonesia", icon: "fa-language", deskripsi: "Teks laporan, ulasan" },
        { nama: "IPA", icon: "fa-flask", deskripsi: "Listrik, magnet, bioteknologi" },
        { nama: "IPS", icon: "fa-globe-asia", deskripsi: "Perubahan sosial budaya" },
        { nama: "Bahasa Inggris", icon: "fa-flag-usa", deskripsi: "Analytical exposition" },
        { nama: "Pendidikan Agama", icon: "fa-praying-hands", deskripsi: "Sejarah dan peradaban Islam" },
        { nama: "PJOK", icon: "fa-running", deskripsi: "Sepak bola, renang" },
        { nama: "Seni Budaya", icon: "fa-palette", deskripsi: "Seni pertunjukan modern" },
        { nama: "Informatika Dasar", icon: "fa-laptop-code", deskripsi: "Database dan jaringan" }
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
        { nama: "Pendidikan Agama", icon: "fa-praying-hands", deskripsi: "Al-Quran dan tafsir" },
        { nama: "Informatika Dasar", icon: "fa-laptop-code", deskripsi: "Pemrograman dan data" }
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
        { nama: "Pendidikan Agama", icon: "fa-praying-hands", deskripsi: "Fiqih dan muamalah" },
        { nama: "Informatika Dasar", icon: "fa-laptop-code", deskripsi: "AI dan machine learning dasar" }
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
        { nama: "Pendidikan Agama", icon: "fa-praying-hands", deskripsi: "Dakwah dan peradaban" },
        { nama: "Informatika Dasar", icon: "fa-laptop-code", deskripsi: "Cyber security dan IoT" }
    ]
};

// ===== STATE =====
let currentSoal = [];
let jawabanUser = {};
let flaggedSoal = {};
let currentQuestionIndex = 0;
let timerInterval = null;
let startTime = null;

// ===== API KEY TERTANAM =====
const apiKey = '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';

// ===== INIT NAVBAR =====
function initNavbar() {
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile nav toggle
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close nav when clicking a link
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
}

// ===== API FUNCTIONS =====
async function callGroqAPI(prompt) {
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

// ===== FORMAT MATERI =====
function formatMateri(text) {
    let html = text
        .replace(/^###\s+(.*$)/gim, '<h5>$1</h5>')
        .replace(/^##\s+(.*$)/gim, '<h4>$1</h4>')
        .replace(/^#\s+(.*$)/gim, '<h4>$1</h4>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`(.*?)`/g, '<code>$1</code>')
        .replace(/^>\s+(.*$)/gim, '<blockquote>$1</blockquote>')
        .replace(/^\-\s+(.*$)/gim, '<li>$1</li>')
        .replace(/^\d+\.\s+(.*$)/gim, '<li>$1</li>');

    // Wrap lists
    html = html.replace(/(<li>.*?<\/li>)/gs, '<ul>$1</ul>');
    html = html.replace(/<\/ul>\s*<ul>/g, '');

    // Wrap paragraphs
    const paragraphs = html.split('\n\n');
    html = paragraphs.map(p => {
        p = p.trim();
        if (p.startsWith('<h') || p.startsWith('<ul') || p.startsWith('<blockquote') || p === '') {
            return p;
        }
        return `<p>${p.replace(/\n/g, '<br>')}</p>`;
    }).join('');

    return html;
}

// ===== SOAL ENGINE =====
function renderQuestionNavigator() {
    const navigator = document.getElementById('question-navigator');
    if (!navigator) return;

    navigator.innerHTML = currentSoal.map((soal, index) => {
        let classes = 'question-dot';
        if (index === currentQuestionIndex) classes += ' active';
        if (jawabanUser[soal.nomor]) classes += ' answered';
        if (flaggedSoal[soal.nomor]) classes += ' flagged';
        return `<div class="${classes}" onclick="goToQuestion(${index})" data-index="${index}">${index + 1}</div>`;
    }).join('');
}

function renderSingleQuestion(index) {
    currentQuestionIndex = index;
    const soal = currentSoal[index];
    if (!soal) return;

    const card = document.getElementById('question-card');
    if (!card) return;

    // Update progress
    const progress = ((index + 1) / currentSoal.length) * 100;
    const fill = document.getElementById('progress-bar-fill');
    if (fill) fill.style.width = progress + '%';

    const currentNum = document.getElementById('soal-current-num');
    if (currentNum) currentNum.textContent = index + 1;

    // Update navigator
    renderQuestionNavigator();

    // Update nav buttons
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const finishSection = document.getElementById('finish-section');

    if (btnPrev) btnPrev.disabled = index === 0;
    if (btnNext) btnNext.style.display = index === currentSoal.length - 1 ? 'none' : 'flex';
    if (finishSection) finishSection.style.display = index === currentSoal.length - 1 ? 'block' : 'none';

    // Update flag button
    const btnFlag = document.getElementById('btn-flag');
    const flagIcon = document.getElementById('flag-icon');
    if (btnFlag && flagIcon) {
        if (flaggedSoal[soal.nomor]) {
            btnFlag.classList.add('active');
            flagIcon.style.color = 'var(--warning)';
        } else {
            btnFlag.classList.remove('active');
            flagIcon.style.color = '';
        }
    }

    // Build question card
    const typeLabel = soal.tipe === 'essay' ? 'Essay' : 'Pilihan Ganda';

    let content = `
        <div class="question-card-header">
            <div class="question-number-badge">${soal.nomor}</div>
            <div class="question-type-badge">${typeLabel}</div>
        </div>
        <div class="question-text">${soal.pertanyaan.replace(/\n/g, '<br>')}</div>
    `;

    if (soal.tipe === 'essay') {
        const savedAnswer = jawabanUser[soal.nomor] || '';
        content += `
            <div class="question-essay" style="display: block;">
                <textarea id="essay-textarea" placeholder="Tulis jawabanmu di sini..." oninput="saveEssayAnswer(${soal.nomor})">${savedAnswer}</textarea>
            </div>
        `;
    } else {
        const savedAnswer = jawabanUser[soal.nomor];
        content += `<div class="question-options">`;
        content += soal.pilihan.map(pilihan => {
            const value = pilihan.charAt(0);
            const text = pilihan.substring(3);
            const isSelected = savedAnswer === value;
            return `
                <div class="option-item ${isSelected ? 'selected' : ''}" onclick="selectOption(${soal.nomor}, '${value}')">
                    <div class="option-letter">${value}</div>
                    <div class="option-text">${text}</div>
                </div>
            `;
        }).join('');
        content += `</div>`;
    }

    card.innerHTML = content;
    card.style.animation = 'none';
    card.offsetHeight; // trigger reflow
    card.style.animation = 'fadeInUp 0.4s ease';
}

function selectOption(nomor, value) {
    jawabanUser[nomor] = value;
    renderSingleQuestion(currentQuestionIndex);
    renderQuestionNavigator();
}

function saveEssayAnswer(nomor) {
    const textarea = document.getElementById('essay-textarea');
    if (textarea) {
        jawabanUser[nomor] = textarea.value;
        renderQuestionNavigator();
    }
}

function goToQuestion(index) {
    if (index >= 0 && index < currentSoal.length) {
        renderSingleQuestion(index);
    }
}

function nextQuestion() {
    if (currentQuestionIndex < currentSoal.length - 1) {
        renderSingleQuestion(currentQuestionIndex + 1);
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        renderSingleQuestion(currentQuestionIndex - 1);
    }
}

function toggleFlag() {
    const soal = currentSoal[currentQuestionIndex];
    if (soal) {
        flaggedSoal[soal.nomor] = !flaggedSoal[soal.nomor];
        renderQuestionNavigator();
        if (flaggedSoal[soal.nomor]) {
            showToast('Soal ditandai untuk review');
        }
    }
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
        if (timerEl) timerEl.textContent = `${minutes}:${seconds}`;
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

        if (soal.tipe === 'pilihan_ganda') {
            if (userAnswer === soal.jawaban_benar) {
                benar++;
            } else {
                salah++;
            }
        } else {
            // Essay - count as "answered" if user wrote something meaningful
            if (userAnswer && userAnswer.trim().length > 10) {
                benar++;
            } else {
                salah++;
            }
        }
    });

    // Show hasil
    const soalPage = document.getElementById('soal-page-container');
    const hasilContainer = document.getElementById('hasil-container');

    if (soalPage) soalPage.style.display = 'none';
    if (hasilContainer) {
        hasilContainer.style.display = 'block';
        hasilContainer.scrollIntoView({ behavior: 'smooth' });
    }

    const percentage = Math.round((benar / total) * 100);

    const scoreEl = document.getElementById('hasil-score');
    const pctEl = document.getElementById('hasil-percentage');
    const msgEl = document.getElementById('hasil-message');
    const statBenar = document.getElementById('stat-benar');
    const statSalah = document.getElementById('stat-salah');
    const statWaktu = document.getElementById('stat-waktu');

    if (scoreEl) scoreEl.textContent = `${benar}/${total}`;
    if (pctEl) pctEl.textContent = `${percentage}%`;
    if (statBenar) statBenar.textContent = benar;
    if (statSalah) statSalah.textContent = salah;
    if (statWaktu) statWaktu.textContent = getElapsedTime();

    let message = '';
    if (percentage >= 90) message = '\u{1F31F} Luar biasa! Kamu sangat menguasai materi ini!';
    else if (percentage >= 70) message = '\u{1F44D} Bagus! Tingkatkan lagi belajarmu!';
    else if (percentage >= 50) message = '\u{1F4AA} Cukup baik, terus berlatih ya!';
    else message = '\u{1F4DA} Jangan menyerah! Pelajari lagi materinya.';

    if (msgEl) msgEl.textContent = message;
}

function reviewAnswers() {
    const hasilContainer = document.getElementById('hasil-container');
    const reviewContainer = document.getElementById('review-container');

    if (hasilContainer) hasilContainer.style.display = 'none';
    if (reviewContainer) {
        reviewContainer.style.display = 'block';
        reviewContainer.scrollIntoView({ behavior: 'smooth' });
    }

    const reviewList = document.getElementById('review-list');
    if (!reviewList) return;

    reviewList.innerHTML = currentSoal.map((soal, index) => {
        const userAnswer = jawabanUser[soal.nomor];
        let isCorrect = false;

        if (soal.tipe === 'pilihan_ganda') {
            isCorrect = userAnswer === soal.jawaban_benar;
        } else {
            isCorrect = userAnswer && userAnswer.trim().length > 10;
        }

        const statusClass = isCorrect ? 'correct' : 'wrong';
        const statusText = isCorrect ? 'Benar' : 'Salah';

        let answerDisplay = '';
        if (soal.tipe === 'pilihan_ganda') {
            const pilihanText = soal.pilihan.find(p => p.startsWith(userAnswer + '.')) || 'Tidak dijawab';
            const jawabanBenarText = soal.pilihan.find(p => p.startsWith(soal.jawaban_benar + '.'));
            answerDisplay = `
                <div class="review-item-answer">
                    <strong>Jawabanmu:</strong> ${pilihanText}<br>
                    <strong>Jawaban Benar:</strong> ${jawabanBenarText}
                </div>
            `;
        } else {
            answerDisplay = `
                <div class="review-item-answer">
                    <strong>Jawabanmu:</strong> ${userAnswer || 'Tidak dijawab'}<br>
                    <strong>Jawaban Referensi:</strong> ${soal.jawaban_benar}
                </div>
            `;
        }

        return `
            <div class="review-item">
                <div class="review-item-header">
                    <div class="review-item-number ${statusClass}">${index + 1}</div>
                    <div class="review-item-status ${statusClass}">${statusText}</div>
                </div>
                <div class="review-item-question">${soal.pertanyaan}</div>
                ${answerDisplay}
                <div class="review-item-explanation">
                    <strong>Penjelasan:</strong> ${soal.penjelasan}
                </div>
            </div>
        `;
    }).join('');
}

function closeReview() {
    const reviewContainer = document.getElementById('review-container');
    const hasilContainer = document.getElementById('hasil-container');

    if (reviewContainer) reviewContainer.style.display = 'none';
    if (hasilContainer) {
        hasilContainer.style.display = 'block';
        hasilContainer.scrollIntoView({ behavior: 'smooth' });
    }
}

// ===== TOAST =====
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    if (!toast || !toastMessage) return;

    toastMessage.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}
