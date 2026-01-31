// ভাষা ট্রান্সলেশন অবজেক্ট
const translations = {
    bn: {
        // নেভিগেশন এবং সাধারণ
        title: "মুভি হাব - সিনেমা ও সিরিজ ডাউনলোড",
        logo: "মুভি<span>হাব</span>",
        search: "সার্চ",
        profile: "প্রোফাইল",
        menu: "মেনু",
        home: "হোম",
        movies: "মুভিস",
        series: "সিরিজ",
        trending: "ট্রেন্ডিং",
        downloads: "ডাউনলোডস",
        favorites: "ফেভারিটস",
        settings: "সেটিংস",
        logout: "লগ আউট",
        
        // হিরো সেকশন
        heroTitle1: "সেরা মুভি ও সিরিজ কালেকশন",
        heroDesc1: "হাজারো মুভি ও সিরিজ এখানে পাবেন। উচ্চ গুণগত মানে ডাউনলোড করুন যেকোন সময় দেখার জন্য।",
        exploreNow: "এখনি এক্সপ্লোর করুন",
        
        // বিভাগ
        trendingNow: "ট্রেন্ডিং এখন",
        newReleases: "নতুন রিলিজ",
        viewAll: "সব দেখুন",
        
        // গাইড
        downloadGuide: "ডাউনলোড গাইড",
        step1: "সিনেমা খুঁজুন",
        step1Desc: "আপনার পছন্দের সিনেমা বা সিরিজ সার্চ করুন বা ব্রাউজ করুন",
        step2: "ডাউনলোড করুন",
        step2Desc: "ডাউনলোড বাটনে ক্লিক করুন এবং আপনার পছন্দের কোয়ালিটি নির্বাচন করুন",
        step3: "উপভোগ করুন",
        step3Desc: "ডাউনলোড শেষে আপনার ডিভাইসে যেকোন সময় সিনেমা উপভোগ করুন",
        
        // মোডাল
        genre: "ধরন:",
        rating: "রেটিং:",
        year: "সাল:",
        duration: "সময়:",
        language: "ভাষা:",
        description: "বর্ণনা:",
        downloadQuality: "ডাউনলোড কোয়ালিটি",
        download: "ডাউনলোড",
        watchTrailer: "ট্রেলার দেখুন",
        addFavorite: "ফেভারিটে যোগ করুন",
        
        // সার্চ
        searchPlaceholder: "সিনেমা বা সিরিজ খুঁজুন...",
        
        // নোটিফিকেশন
        downloading: "ডাউনলোড শুরু হয়েছে...",
        addedToFavorites: "ফেভারিটে যোগ করা হয়েছে",
        removedFromFavorites: "ফেভারিট থেকে সরানো হয়েছে",
        
        // ইত্যাদি
        quality: "কোয়ালিটি",
        size: "সাইজ",
        action: "অ্যাকশন",
        adventure: "অ্যাডভেঞ্চার",
        drama: "ড্রামা",
        comedy: "কমেডি",
        thriller: "থ্রিলার"
    },
    en: {
        // Navigation and General
        title: "Movie Hub - Movies & Series Download",
        logo: "Movie<span>Hub</span>",
        search: "Search",
        profile: "Profile",
        menu: "Menu",
        home: "Home",
        movies: "Movies",
        series: "Series",
        trending: "Trending",
        downloads: "Downloads",
        favorites: "Favorites",
        settings: "Settings",
        logout: "Logout",
        
        // Hero Section
        heroTitle1: "Best Movie & Series Collection",
        heroDesc1: "Find thousands of movies and series here. Download in high quality to watch anytime.",
        exploreNow: "Explore Now",
        
        // Categories
        trendingNow: "Trending Now",
        newReleases: "New Releases",
        viewAll: "View All",
        
        // Guide
        downloadGuide: "Download Guide",
        step1: "Find Movie",
        step1Desc: "Search or browse your favorite movie or series",
        step2: "Download",
        step2Desc: "Click download button and choose your preferred quality",
        step3: "Enjoy",
        step3Desc: "Enjoy the movie anytime on your device after download",
        
        // Modal
        genre: "Genre:",
        rating: "Rating:",
        year: "Year:",
        duration: "Duration:",
        language: "Language:",
        description: "Description:",
        downloadQuality: "Download Quality",
        download: "Download",
        watchTrailer: "Watch Trailer",
        addFavorite: "Add to Favorites",
        
        // Search
        searchPlaceholder: "Search movie or series...",
        
        // Notifications
        downloading: "Download started...",
        addedToFavorites: "Added to favorites",
        removedFromFavorites: "Removed from favorites",
        
        // Miscellaneous
        quality: "Quality",
        size: "Size",
        action: "Action",
        adventure: "Adventure",
        drama: "Drama",
        comedy: "Comedy",
        thriller: "Thriller"
    }
};

// বর্তমান ভাষা
let currentLanguage = 'bn';

// ভাষা পরিবর্তন ফাংশন
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // HTML ভাষা পরিবর্তন
    document.documentElement.lang = lang;
    
    // ভাষা বাটন অ্যাকটিভ স্টেট
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // সব টেক্সট এলিমেন্ট আপডেট
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.dataset.lang;
        if (translations[lang][key]) {
            if (element.tagName === 'TITLE') {
                element.textContent = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
    
    // প্লেসহোল্ডার আপডেট
    document.querySelectorAll('[data-lang-placeholder]').forEach(element => {
        const key = element.dataset.langPlaceholder;
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // নোটিফিকেশন শো
    showNotification(`${lang === 'bn' ? 'ভাষা পরিবর্তন করা হয়েছে' : 'Language changed'}!`);
    
    // লোকাল স্টোরেজে সংরক্ষণ
    localStorage.setItem('movieHubLanguage', lang);
}
