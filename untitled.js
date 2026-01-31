// ডেটা - মুভি এবং সিরিজ তালিকা
const moviesData = [
    {
        id: 1,
        title: "Avengers: Endgame",
        titleBn: "অ্যাভেঞ্জারস: এন্ডগেম",
        year: 2019,
        rating: 8.4,
        duration: "3h 2m",
        genre: ["অ্যাকশন", "অ্যাডভেঞ্চার", "ড্রামা"],
        genreEn: ["Action", "Adventure", "Drama"],
        language: "ইংরেজি, বাংলা ডাবিং",
        description: "অ্যাভেঞ্জারদের অবশিষ্ট সদস্যরা থানোসের কাজের পরিণতি মোকাবেলা করেন এবং মহাবিশ্বে শৃঙ্খলা ফিরিয়ে আনার চেষ্টা করেন।",
        descriptionEn: "The remaining Avengers confront the consequences of Thanos's actions and attempt to restore order to the universe.",
        poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 2,
        title: "The Dark Knight",
        titleBn: "দ্য ডার্ক নাইট",
        year: 2008,
        rating: 9.0,
        duration: "2h 32m",
        genre: ["অ্যাকশন", "ক্রাইম", "ড্রামা"],
        genreEn: ["Action", "Crime", "Drama"],
        language: "ইংরেজি",
        description: "ব্যাটম্যান, জিম গর্ডন এবং হ্যাভি ডেন্ট গথাম সিটি থেকে অপরাধ দূর করতে একসাথে কাজ করেন। তবে জোকার নামের এক অপরাধী তাদের পরিকল্পনা বানচাল করে দেয়।",
        descriptionEn: "Batman, Jim Gordon, and Harvey Dent work together to rid Gotham City of crime, but a criminal mastermind known as the Joker disrupts their plans.",
        poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 3,
        title: "Inception",
        titleBn: "ইনসেপশন",
        year: 2010,
        rating: 8.8,
        duration: "2h 28m",
        genre: ["অ্যাকশন", "সাই-ফাই", "থ্রিলার"],
        genreEn: ["Action", "Sci-Fi", "Thriller"],
        language: "ইংরেজি, বাংলা সাবটাইটেল",
        description: "একজন চোর যিনি মানুষের স্বপ্নে গোপনে তথ্য চুরি করেন, তাকে সবচেয়ে কঠিন মিশন দেওয়া হয়: কারো মননে একটি ধারণা রোপণ করা।",
        descriptionEn: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 4,
        title: "Interstellar",
        titleBn: "ইন্টারস্টেলার",
        year: 2014,
        rating: 8.6,
        duration: "2h 49m",
        genre: ["অ্যাডভেঞ্চার", "ড্রামা", "সাই-ফাই"],
        genreEn: ["Adventure", "Drama", "Sci-Fi"],
        language: "ইংরেজি",
        description: "একদল অনুসন্ধানী ভ্রমণ করে মহাকাশের একটি কৃষ্ণগহ্বরের মাধ্যমে, মানবতার জন্য নতুন বাসস্থান খুঁজতে।",
        descriptionEn: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        poster: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 5,
        title: "The Shawshank Redemption",
        titleBn: "দ্য শশ্যাঙ্ক রিডেম্পশন",
        year: 1994,
        rating: 9.3,
        duration: "2h 22m",
        genre: ["ড্রামা"],
        genreEn: ["Drama"],
        language: "ইংরেজি",
        description: "দুই কয়েদির দীর্ঘ বছরের বন্ধুত্বের গল্প, তাদের হতাশা, আশা এবং মুক্তির অনুসন্ধান।",
        descriptionEn: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        poster: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 6,
        title: "Parasite",
        titleBn: "প্যারাসাইট",
        year: 2019,
        rating: 8.6,
        duration: "2h 12m",
        genre: ["কমেডি", "ড্রামা", "থ্রিলার"],
        genreEn: ["Comedy", "Drama", "Thriller"],
        language: "কোরিয়ান, বাংলা সাবটাইটেল",
        description: "একটি দরিদ্র পরিবার ধনী পরিবারের সাথে সম্পর্ক গড়ে তোলে এবং তাদের জীবন আক্রমণ করে।",
        descriptionEn: "A poor family schemes to become employed by a wealthy family by infiltrating their household and posing as unrelated, highly qualified individuals.",
        poster: "https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
];

// ফেভারিট মুভি আইডি তালিকা
let favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [1, 3];

// DOM এলিমেন্ট
const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');
const menuClose = document.getElementById('menu-close');
const searchBtn = document.querySelector('.search-btn');
const searchContainer = document.querySelector('.search-container');
const searchClose = document.querySelector('.search-close');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const movieModal = document.getElementById('movie-modal');
const modalClose = document.getElementById('modal-close');
const downloadBtn = document.getElementById('download-btn');
const trendingGrid = document.getElementById('trending-movies');
const newReleasesGrid = document.getElementById('new-releases');
const notification = document.getElementById('notification');
const notificationText = document.getElementById('notification-text');
const langBnBtn = document.getElementById('lang-bn');
const langEnBtn = document.getElementById('lang-en');

// মুভি কার্ড জেনারেট ফাংশন
function generateMovieCard(movie) {
    const isFavorite = favoriteMovies.includes(movie.id);
    const title = currentLanguage === 'bn' && movie.titleBn ? movie.titleBn : movie.title;
    const genre = currentLanguage === 'bn' ? movie.genre.join(', ') : movie.genreEn.join(', ');
    
    return `
        <div class="movie-card" data-id="${movie.id}">
            <div class="movie-poster">
                <img src="${movie.poster}" alt="${title}">
                <div class="movie-overlay">
                    <button class="quick-view" data-lang="quickView">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-movie-id="${movie.id}">
                        <i class="${isFavorite ? 'fas' : 'far'} fa-heart"></i>
                    </button>
                </div>
            </div>
            <div class="movie-info">
                <h3 class="movie-title">${title}</h3>
                <div class="movie-meta">
                    <span>${movie.year}</span>
                    <span class="movie-rating">${movie.rating} <i class="fas fa-star"></i></span>
                </div>
                <div class="movie-genre">${genre}</div>
                <button class="btn-download" data-movie-id="${movie.id}">
                    <i class="fas fa-download"></i> 
                    <span data-lang="download">ডাউনলোড</span>
                </button>
            </div>
        </div>
    `;
}

// মুভি গ্রিড লোড ফাংশন
function loadMovies() {
    // ট্রেন্ডিং মুভি লোড
    trendingGrid.innerHTML = '';
    moviesData.slice(0, 4).forEach(movie => {
        trendingGrid.innerHTML += generateMovieCard(movie);
    });
    
    // নতুন মুভি লোড
    newReleasesGrid.innerHTML = '';
    moviesData.slice(2, 6).forEach(movie => {
        newReleasesGrid.innerHTML += generateMovieCard(movie);
    });
    
    // ইভেন্ট লিসেনার যোগ
    attachMovieCardEvents();
}

// মুভি কার্ড ইভেন্ট যোগ
function attachMovieCardEvents() {
    // মুভি কার্ড ক্লিক
    document.querySelectorAll('.movie-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // যদি বাটনে ক্লিক না করা হয়
            if (!e.target.closest('.btn-download') && !e.target.closest('.favorite-btn') && !e.target.closest('.quick-view')) {
                const movieId = parseInt(card.dataset.id);
                openMovieModal(movieId);
            }
        });
    });
    
    // ডাউনলোড বাটন
    document.querySelectorAll('.btn-download').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const movieId = parseInt(btn.dataset.movieId);
            downloadMovie(movieId);
        });
    });
    
    // ফেভারিট বাটন
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const movieId = parseInt(btn.dataset.movieId);
            toggleFavorite(movieId);
        });
    });
}

// মুভি মোডাল ওপেন
function openMovieModal(movieId) {
    const movie = moviesData.find(m => m.id === movieId);
    if (!movie) return;
    
    const title = currentLanguage === 'bn' && movie.titleBn ? movie.titleBn : movie.title;
    const description = currentLanguage === 'bn' ? movie.description : movie.descriptionEn;
    const genre = currentLanguage === 'bn' ? movie.genre.join(', ') : movie.genreEn.join(', ');
    
    // মোডাল কন্টেন্ট সেট
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-genre').textContent = genre;
    document.getElementById('modal-rating').innerHTML = `${movie.rating}/10 <i class="fas fa-star"></i>`;
    document.getElementById('modal-year').textContent = movie.year;
    document.getElementById('modal-duration').textContent = movie.duration;
    document.getElementById('modal-language').textContent = movie.language;
    document.getElementById('modal-description').textContent = description;
    document.getElementById('modal-poster').querySelector('img').src = movie.poster;
    document.getElementById('modal-poster').querySelector('img').alt = title;
    
    // ডাউনলোড বাটনে ডেটা সেট
    downloadBtn.dataset.movieId = movieId;
    
    // ফেভারিট বাটন আপডেট
    const isFavorite = favoriteMovies.includes(movieId);
    const favoriteBtn = document.getElementById('add-favorite');
    favoriteBtn.innerHTML = `<i class="${isFavorite ? 'fas' : 'far'} fa-heart"></i> ${currentLanguage === 'bn' ? 'ফেভারিটে যোগ করুন' : 'Add to Favorites'}`;
    favoriteBtn.dataset.movieId = movieId;
    
    // মোডাল শো
    movieModal.classList.add('open');
}

// মুভি ডাউনলোড ফাংশন
function downloadMovie(movieId) {
    const movie = moviesData.find(m => m.id === movieId);
    if (!movie) return;
    
    const selectedQuality = document.querySelector('.quality-btn.active')?.dataset.quality || '720p';
    const title = currentLanguage === 'bn' && movie.titleBn ? movie.titleBn : movie.title;
    
    // নোটিফিকেশন শো
    showNotification(currentLanguage === 'bn' ? 
        `"${title}" ডাউনলোড শুরু হয়েছে (${selectedQuality})` : 
        `"${title}" download started (${selectedQuality})`
    );
    
    // এখানে আসলে ডাউনলোড লজিক থাকবে
    console.log(`Downloading movie ${movieId} in ${selectedQuality} quality`);
    
    // সিমুলেটেড ডাউনলোড প্রোগ্রেস
    simulateDownload();
}

// সিমুলেটেড ডাউনলোড
function simulateDownload() {
    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        if (progress <= 100) {
            showNotification(`${currentLanguage === 'bn' ? 'ডাউনলোড হচ্ছে:' : 'Downloading:'} ${progress}%`);
        }
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                showNotification(currentLanguage === 'bn' ? 'ডাউনলোড সম্পন্ন হয়েছে!' : 'Download completed!');
            }, 500);
        }
    }, 300);
}

// ফেভারিট টগল
function toggleFavorite(movieId) {
    const index = favoriteMovies.indexOf(movieId);
    const movie = moviesData.find(m => m.id === movieId);
    const title = currentLanguage === 'bn' && movie.titleBn ? movie.titleBn : movie.title;
    
    if (index === -1) {
        // ফেভারিটে যোগ
        favoriteMovies.push(movieId);
        showNotification(`"${title}" ${currentLanguage === 'bn' ? 'ফেভারিটে যোগ করা হয়েছে' : 'added to favorites'}`);
    } else {
        // ফেভারিট থেকে সরান
        favoriteMovies.splice(index, 1);
        showNotification(`"${title}" ${currentLanguage === 'bn' ? 'ফেভারিট থেকে সরানো হয়েছে' : 'removed from favorites'}`);
    }
    
    // লোকাল স্টোরেজে সংরক্ষণ
    localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
    
    // UI আপডেট
    const favoriteBtn = document.querySelector(`.favorite-btn[data-movie-id="${movieId}"]`);
    if (favoriteBtn) {
        const icon = favoriteBtn.querySelector('i');
        if (index === -1) {
            favoriteBtn.classList.add('active');
            icon.classList.remove('far');
            icon.classList.add('fas');
        } else {
            favoriteBtn.classList.remove('active');
            icon.classList.remove('fas');
            icon.classList.add('far');
        }
    }
    
    // মোডালের ফেভারিট বাটন আপডেট
    const modalFavoriteBtn = document.getElementById('add-favorite');
    if (modalFavoriteBtn && parseInt(modalFavoriteBtn.dataset.movieId) === movieId) {
        const icon = modalFavoriteBtn.querySelector('i');
        if (index === -1) {
            icon.classList.remove('far');
            icon.classList.add('fas');
            modalFavoriteBtn.innerHTML = `<i class="fas fa-heart"></i> ${currentLanguage === 'bn' ? 'ফেভারিটে যোগ করুন' : 'Add to Favorites'}`;
        } else {
            icon.classList.remove('fas');
            icon.classList.add('far');
            modalFavoriteBtn.innerHTML = `<i class="far fa-heart"></i> ${currentLanguage === 'bn' ? 'ফেভারিটে যোগ করুন' : 'Add to Favorites'}`;
        }
    }
}

// নোটিফিকেশন শো
function showNotification(message) {
    notificationText.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// সার্চ ফাংশন
function performSearch(query) {
    if (query.trim() === '') {
        searchResults.innerHTML = '';
        return;
    }
    
    const results = moviesData.filter(movie => {
        const title = currentLanguage === 'bn' && movie.titleBn ? movie.titleBn : movie.title;
        return title.toLowerCase().includes(query.toLowerCase());
    });
    
    displaySearchResults(results);
}

// সার্চ রেজাল্ট ডিসপ্লে
function displaySearchResults(results) {
    searchResults.innerHTML = '';
    
    if (results.length === 0) {
        searchResults.innerHTML = `<div class="no-results">${currentLanguage === 'bn' ? 'কোন ফলাফল পাওয়া যায়নি' : 'No results found'}</div>`;
        return;
    }
    
    results.forEach(movie => {
        const title = currentLanguage === 'bn' && movie.titleBn ? movie.titleBn : movie.title;
        const genre = currentLanguage === 'bn' ? movie.genre.join(', ') : movie.genreEn.join(', ');
        
        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item';
        resultItem.innerHTML = `
            <div class="result-poster">
                <img src="${movie.poster}" alt="${title}">
            </div>
            <div class="result-info">
                <h4>${title}</h4>
                <div class="result-meta">
                    <span>${movie.year}</span>
                    <span>${movie.rating} <i class="fas fa-star"></i></span>
                </div>
                <div class="result-genre">${genre}</div>
            </div>
        `;
        
        resultItem.addEventListener('click', () => {
            openMovieModal(movie.id);
            searchContainer.classList.add('hidden');
        });
        
        searchResults.appendChild(resultItem);
    });
}

// কোয়ালিটি বাটন সিলেক্ট
document.querySelectorAll('.quality-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.quality-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// ইভেন্ট লিসেনার
document.addEventListener('DOMContentLoaded', () => {
    // মেনু টগল
    menuToggle.addEventListener('click', () => {
        sideMenu.classList.add('open');
    });
    
    menuClose.addEventListener('click', () => {
        sideMenu.classList.remove('open');
    });
    
    // সার্চ টগল
    searchBtn.addEventListener('click', () => {
        searchContainer.classList.remove('hidden');
        searchInput.focus();
    });
    
    searchClose.addEventListener('click', () => {
        searchContainer.classList.add('hidden');
        searchInput.value = '';
        searchResults.innerHTML = '';
    });
    
    // সার্চ ইনপুট
    searchInput.addEventListener('input', (e) => {
        performSearch(e.target.value);
    });
    
    // মোডাল ক্লোজ
    modalClose.addEventListener('click', () => {
        movieModal.classList.remove('open');
    });
    
    // বাইরে ক্লিক করলে মোডাল ক্লোজ
    movieModal.addEventListener('click', (e) => {
        if (e.target === movieModal) {
            movieModal.classList.remove('open');
        }
    });
    
    // ডাউনলোড বাটন
    downloadBtn.addEventListener('click', () => {
        const movieId = parseInt(downloadBtn.dataset.movieId);
        downloadMovie(movieId);
    });
    
    // ফেভারিট বাটন (মোডালে)
    document.getElementById('add-favorite').addEventListener('click', (e) => {
        const movieId = parseInt(e.currentTarget.dataset.movieId);
        toggleFavorite(movieId);
    });
    
    // ভাষা পরিবর্তন
    langBnBtn.addEventListener('click', () => changeLanguage('bn'));
    langEnBtn.addEventListener('click', () => changeLanguage('en'));
    
    // লগআউট বাটন
    document.querySelector('.btn-logout').addEventListener('click', () => {
        showNotification(currentLanguage === 'bn' ? 'লগ আউট সফলভাবে সম্পন্ন হয়েছে' : 'Successfully logged out');
    });
    
    // এক্সপ্লোর বাটন
    document.querySelector('.hero-section .btn-primary').addEventListener('click', () => {
        document.querySelector('.category-section').scrollIntoView({ behavior: 'smooth' });
    });
    
    // ভিউ অল লিঙ্ক
    document.querySelectorAll('.view-all').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showNotification(currentLanguage === 'bn' ? 'সব মুভি লোড হচ্ছে...' : 'Loading all movies...');
        });
    });
    
    // ট্রেলার বাটন
    document.getElementById('watch-trailer').addEventListener('click', () => {
        showNotification(currentLanguage === 'bn' ? 'ট্রেলার লোড হচ্ছে...' : 'Loading trailer...');
    });
    
    // সাইড মেনু লিঙ্ক
    document.querySelectorAll('.menu-list a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.menu-list a').forEach(a => a.classList.remove('active'));
            link.classList.add('active');
            sideMenu.classList.remove('open');
            
            const section = link.textContent.toLowerCase();
            showNotification(`${section} ${currentLanguage === 'bn' ? 'সেকশনে যাওয়া হচ্ছে...' : 'section loading...'}`);
        });
    });
    
    // লোকাল স্টোরেজ থেকে ভাষা লোড
    const savedLanguage = localStorage.getItem('movieHubLanguage') || 'bn';
    changeLanguage(savedLanguage);
    
    // মুভি লোড
    loadMovies();
});
