// ========== ДАННЫЕ ==========

// Участники группы
const membersData = [
    {
        name: "Александр Иванов",
        role: "Вокал, гитара",
        image: "images/member1.jpg"
    },
    {
        name: "Дмитрий Петров",
        role: "Барабаны",
        image: "images/member2.jpg"
    },
    {
        name: "Михаил Сидоров",
        role: "Бас-гитара",
        image: "images/member3.jpg"
    },
    {
        name: "Екатерина Смирнова",
        role: "Клавишные",
        image: "images/member4.jpg"
    }
];

// Альбомы
const albumsData = [
    {
        title: "Пусть играет музыка",
        year: "2025",
        image: "images/album1.jpg"
    },
    {
        title: "Новый рассвет",
        year: "2023",
        image: "images/album2.jpg"
    },
    {
        title: "Дорога домой",
        year: "2021",
        image: "images/album3.jpg"
    }
];

// Синглы
const singlesData = [
    { title: "Вдохновение", year: "2024" },
    { title: "Лети", year: "2024" },
    { title: "Тени прошлого", year: "2023" },
    { title: "За горизонт", year: "2023" },
    { title: "Первый шаг", year: "2022" }
];

// Плейлист для аудиоплеера
const playlistTracks = [
    { title: "Пусть играет музыка", artist: "Название группы", src: "audio/track1.mp3" },
    { title: "Новый рассвет", artist: "Название группы", src: "audio/track2.mp3" },
    { title: "Вдохновение", artist: "Название группы", src: "audio/track3.mp3" }
];

// Фото для галереи
const galleryPhotos = [
    { title: "Концерт в Москве", category: "concert", description: "Выступление на фестивале Урбан 2024", image: "images/concert1.jpg" },
    { title: "Репетиция", category: "rehearsal", description: "Подготовка к новому альбому", image: "images/rehearsal1.jpg" },
    { title: "Студия", category: "studio", description: "Запись альбома Пусть играет музыка", image: "images/studio1.jpg" },
    { title: "За кулисами", category: "behind", description: "Моменты до выступления", image: "images/behind1.jpg" },
    { title: "Концерт в Барнауле", category: "concert", description: "Концерт в клубе Рок-Сити", image: "images/concert2.jpg" },
    { title: "Репетиция басиста", category: "rehearsal", description: "Михаил на репетиции", image: "images/rehearsal2.jpg" }
];

// Ближайшие концерты
const upcomingConcerts = [
    { day: "25", month: "Июн", city: "Москва", venue: "Клуб 16 Тонн", tickets: "https://tickets.example.com" },
    { day: "30", month: "Июн", city: "Санкт-Петербург", venue: "Космонавт", tickets: "https://tickets.example.com" },
    { day: "12", month: "Июл", city: "Барнаул", venue: "Рок-Сити", tickets: "https://tickets.example.com" }
];

// Прошедшие концерты
const pastConcerts = [
    { date: "10 марта 2025", city: "Новосибирск", venue: "Подземка" },
    { date: "5 февраля 2025", city: "Екатеринбург", venue: "Tele-Club" },
    { date: "15 декабря 2024", city: "Барнаул", venue: "Рок-Сити" }
];

// ========== ЗАГРУЗКА ДАННЫХ ==========

function loadMembers() {
    const container = document.getElementById("membersGrid");
    if (!container) return;
    
    container.innerHTML = "";
    membersData.forEach(member => {
        const card = document.createElement("div");
        card.className = "member-card";
        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}" onerror="this.src='https://via.placeholder.com/150x150?text=Фото'">
            <h3>${member.name}</h3>
            <p>${member.role}</p>
        `;
        container.appendChild(card);
    });
}

function loadAlbums() {
    const container = document.getElementById("albumsGrid");
    if (!container) return;
    
    container.innerHTML = "";
    albumsData.forEach(album => {
        const card = document.createElement("div");
        card.className = "album-card";
        card.innerHTML = `
            <img src="${album.image}" alt="${album.title}" onerror="this.src='https://via.placeholder.com/250x250?text=Обложка'">
            <div class="album-info">
                <h3>${album.title}</h3>
                <p>${album.year}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

function loadSingles() {
    const container = document.getElementById("singlesList");
    if (!container) return;
    
    container.innerHTML = "";
    singlesData.forEach(single => {
        const item = document.createElement("div");
        item.className = "single-item";
        item.innerHTML = `
            <div class="single-title">
                <h4>${single.title}</h4>
                <p>${single.year}</p>
            </div>
            <button class="single-play" data-track="${single.title}">
                <i class="fas fa-play"></i>
            </button>
        `;
        container.appendChild(item);
    });
}

function loadConcertsPreview() {
    const container = document.getElementById("concertsPreview");
    if (!container) return;
    
    container.innerHTML = "";
    upcomingConcerts.forEach(concert => {
        const item = document.createElement("div");
        item.className = "concert-item-preview";
        item.innerHTML = `
            <div class="concert-date">
                <div class="day">${concert.day}</div>
                <div class="month">${concert.month}</div>
            </div>
            <div class="concert-place">
                <h3>${concert.city}</h3>
                <p>${concert.venue}</p>
            </div>
            <a href="${concert.tickets}" class="concert-ticket">Билеты</a>
        `;
        container.appendChild(item);
    });
}

function loadFullConcerts() {
    const container = document.getElementById("concertsFullList");
    if (!container) return;
    
    container.innerHTML = "";
    upcomingConcerts.forEach(concert => {
        const card = document.createElement("div");
        card.className = "concert-card";
        card.innerHTML = `
            <div class="concert-date-large">
                <div class="day">${concert.day}</div>
                <div class="month">${concert.month}</div>
            </div>
            <div class="concert-info">
                <h3>${concert.city}</h3>
                <p>${concert.venue}</p>
            </div>
            <a href="${concert.tickets}" class="btn-primary">Купить билет</a>
        `;
        container.appendChild(card);
    });
}

function loadPastConcerts() {
    const container = document.getElementById("pastConcertsList");
    if (!container) return;
    
    container.innerHTML = "";
    pastConcerts.forEach(concert => {
        const item = document.createElement("div");
        item.className = "past-concert";
        item.innerHTML = `
            <strong>${concert.date}</strong> — ${concert.city}, ${concert.venue}
        `;
        container.appendChild(item);
    });
}

// ========== ГАЛЕРЕЯ ==========

function loadGallery(filterCategory = "all") {
    const container = document.getElementById("galleryGrid");
    if (!container) return;
    
    let filtered = galleryPhotos;
    if (filterCategory !== "all") {
        filtered = galleryPhotos.filter(photo => photo.category === filterCategory);
    }
    
    container.innerHTML = "";
    filtered.forEach((photo, index) => {
        const item = document.createElement("div");
        item.className = "gallery-item";
        item.innerHTML = `
            <img src="${photo.image}" alt="${photo.title}" onerror="this.src='https://via.placeholder.com/400x300?text=Фото+группы'">
            <div class="gallery-info">
                <h3>${photo.title}</h3>
                <p>${photo.category === "concert" ? "🎸 Концерт" : 
                    photo.category === "rehearsal" ? "🎵 Репетиция" :
                    photo.category === "studio" ? "🎧 Студия" : "🎭 За кулисами"}</p>
            </div>
        `;
        item.addEventListener("click", () => openModal(index, filtered));
        container.appendChild(item);
    });
}

let currentGallery = [];

function openModal(index, galleryArray) {
    currentGallery = galleryArray;
    const photo = galleryArray[index];
    
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    
    modalImage.src = photo.image;
    modalTitle.textContent = photo.title;
    modalDescription.textContent = photo.description || photo.category;
    
    modal.style.display = "block";
}

function initGalleryFilters() {
    const buttons = document.querySelectorAll(".filter-btn");
    if (buttons.length === 0) return;
    
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const category = btn.getAttribute("data-category");
            loadGallery(category);
        });
    });
}

// ========== АУДИОПЛЕЕР ==========

let currentTrackIndex = 0;
const audio = document.getElementById("audioPlayer");
const playBtn = document.getElementById("playBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const progress = document.getElementById("progress");
const currentTrackName = document.getElementById("currentTrack");

function loadPlaylist() {
    const container = document.getElementById("playlist");
    if (!container) return;
    
    container.innerHTML = "";
    playlistTracks.forEach((track, index) => {
        const item = document.createElement("div");
        item.className = "playlist-item";
        item.innerHTML = `
            <i class="fas fa-music"></i> ${track.title}
        `;
        item.addEventListener("click", () => playTrack(index));
        container.appendChild(item);
    });
}

function playTrack(index) {
    currentTrackIndex = index;
    const track = playlistTracks[currentTrackIndex];
    audio.src = track.src;
    currentTrackName.textContent = track.title;
    audio.play();
    if (playBtn) playBtn.innerHTML = '<i class="fas fa-pause"></i>';
}

function initAudioPlayer() {
    if (!playBtn) return;
    
    playBtn.addEventListener("click", () => {
        if (audio.paused) {
            if (!audio.src) playTrack(0);
            else audio.play();
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            audio.pause();
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    });
    
    prevBtn.addEventListener("click", () => {
        currentTrackIndex = (currentTrackIndex - 1 + playlistTracks.length) % playlistTracks.length;
        playTrack(currentTrackIndex);
    });
    
    nextBtn.addEventListener("click", () => {
        currentTrackIndex = (currentTrackIndex + 1) % playlistTracks.length;
        playTrack(currentTrackIndex);
    });
    
    audio.addEventListener("timeupdate", () => {
        if (audio.duration) {
            progress.value = (audio.currentTime / audio.duration) * 100;
        }
    });
    
    progress.addEventListener("input", () => {
        audio.currentTime = (progress.value / 100) * audio.duration;
    });
    
    audio.addEventListener("ended", () => {
        currentTrackIndex = (currentTrackIndex + 1) % playlistTracks.length;
        playTrack(currentTrackIndex);
    });
}

// ========== ФОРМА ОБРАТНОЙ СВЯЗИ ==========

function initContactForm() {
    const form = document.getElementById("feedbackForm");
    if (!form) return;
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value.trim();
        
        if (!name || !email || !subject || !message) {
            showFormMessage("Пожалуйста, заполните все поля", "error");
            return;
        }
        
        if (!isValidEmail(email)) {
            showFormMessage("Введите корректный email", "error");
            return;
        }
        
        const feedback = {
            id: Date.now(),
            name, email, subject, message,
            date: new Date().toLocaleString()
        };
        
        let feedbacks = JSON.parse(localStorage.getItem("bandFeedbacks") || "[]");
        feedbacks.push(feedback);
        localStorage.setItem("bandFeedbacks", JSON.stringify(feedbacks));
        
        showFormMessage("Спасибо! Мы свяжемся с тобой в ближайшее время!", "success");
        form.reset();
    });
}

function initSubscribeForm() {
    const form = document.getElementById("subscribeForm");
    if (!form) return;
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("subscribeEmail").value.trim();
        
        if (!isValidEmail(email)) {
            document.getElementById("subscribeMessage").innerHTML = '<p style="color: red;">Введите корректный email</p>';
            return;
        }
        
        let subscribers = JSON.parse(localStorage.getItem("subscribers") || "[]");
        if (!subscribers.includes(email)) {
            subscribers.push(email);
            localStorage.setItem("subscribers", JSON.stringify(subscribers));
        }
        
        document.getElementById("subscribeMessage").innerHTML = '<p style="color: #00ff00;">Подписка оформлена! Спасибо!</p>';
        form.reset();
        setTimeout(() => {
            document.getElementById("subscribeMessage").innerHTML = "";
        }, 3000);
    });
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showFormMessage(text, type) {
    const msgDiv = document.getElementById("formMessage");
    if (msgDiv) {
        msgDiv.textContent = text;
        msgDiv.className = `form-message ${type}`;
        setTimeout(() => {
            msgDiv.textContent = "";
            msgDiv.className = "form-message";
        }, 5000);
    }
}

// ========== МОБИЛЬНОЕ МЕНЮ И МОДАЛЬНОЕ ОКНО ==========

function initMobileMenu() {
    const toggle = document.getElementById("menuToggle");
    const menu = document.getElementById("navMenu");
    if (toggle && menu) {
        toggle.addEventListener("click", () => {
            menu.classList.toggle("show");
        });
    }
}

function initModal() {
    const modal = document.getElementById("modal");
    const close = document.querySelector(".modal-close");
    
    if (modal && close) {
        close.addEventListener("click", () => {
            modal.style.display = "none";
        });
        
        window.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    }
}

// ========== ИНИЦИАЛИЗАЦИЯ ==========

document.addEventListener("DOMContentLoaded", () => {
    loadMembers();
    loadAlbums();
    loadSingles();
    loadConcertsPreview();
    loadFullConcerts();
    loadPastConcerts();
    loadGallery();
    loadPlaylist();
    initAudioPlayer();
    initGalleryFilters();
    initContactForm();
    initSubscribeForm();
    initMobileMenu();
    initModal();
});