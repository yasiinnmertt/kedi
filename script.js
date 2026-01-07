let factList = [];

const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const themeText = document.getElementById('themeText');
const fetchBtn = document.getElementById('fetchBtn');
const cardContainer = document.getElementById('cardContainer');
const statusMessage = document.getElementById('statusMessage');

// --- TEMA YÖNETİMİ (FIXED) ---
themeToggle.onclick = () => {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    
    if (isDark) {
        // Açık Moda Geçiş
        document.body.removeAttribute('data-theme');
        themeIcon.innerText = "☀️";
        themeText.innerText = "Açık Mod";
        // Yazının kaybolmaması için rengi manuel sabitleyelim
        themeToggle.style.color = "var(--accent-color)";
    } else {
        // Koyu Moda Geçiş
        document.body.setAttribute('data-theme', 'dark');
        themeIcon.innerText = "🌙";
        themeText.innerText = "Koyu Mod";
        themeToggle.style.color = "var(--accent-color)";
    }
};

// --- ÇEVİRİ ---
async function translateFact(text) {
    try {
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=tr&dt=t&q=${encodeURI(text)}`;
        const res = await fetch(url);
        const json = await res.json();
        return json[0][0][0];
    } catch { return text; }
}

// --- VERİ ÇEKME ---
async function handleFetch() {
    statusMessage.innerText = "Bilgi getiriliyor...";
    try {
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        const turkishFact = await translateFact(data.fact);

        factList.push({ fact: turkishFact });
        renderCards();
        statusMessage.innerText = "Yeni bilgi eklendi!";
    } catch {
        statusMessage.innerText = "Bir hata oluştu.";
    }
}

// --- RENDER ---
function renderCards() {
    cardContainer.innerHTML = "";
    factList.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'cat-card';
        card.innerHTML = `<h3>BİLGİ #${index + 1}</h3><p>${item.fact}</p>`;
        
        card.onclick = () => {
            document.getElementById('detailContent').innerText = item.fact;
            document.getElementById('homePage').classList.add('hidden');
            document.getElementById('detailPage').classList.remove('hidden');
        };
        cardContainer.appendChild(card);
    });
}

fetchBtn.onclick = handleFetch;
document.getElementById('backBtn').onclick = () => {
    document.getElementById('detailPage').classList.add('hidden');
    document.getElementById('homePage').classList.remove('hidden');
};