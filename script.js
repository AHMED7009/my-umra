/* ========================================
   الملف الموحد للـ JavaScript - رحلتي للعمرة
   ======================================== */

// ==========================================
// قاموس الترجمة
// ==========================================
const translations = {
    ar: {
        logo: "رحلتي للعمرة",
        nav_home: "الرئيسية",
        nav_hotels: "الفنادق",
        nav_guide: "دليل المعتمر",
        nav_contact: "اتصل بنا",
        btn_book: "حجز عمرة",
        hero_title: "رحلة إيمانية لا تُنسى",
        hero_desc: "نعتني بكافة تفاصيل رحلتك لتركز فقط في عبادتك",
        btn_book_now: "احجز عمرتك الآن",
        packages_title: "باقات العمرة المميزة",
        packages_desc: "اختر الباقة التي تناسب احتياجاتك",
        pkg_vip_title: "الباقة الملكية (VIP)",
        pkg_vip_desc: "إقامة في فندق مطل على الكعبة، مواصلات خاصة، وخدمة 24 ساعة.",
        pkg_vip_price: "ابتداءً من 5000 ريال",
        pkg_eco_title: "الباقة الاقتصادية",
        pkg_eco_desc: "إقامة مريحة قريبة من الحرم مع توفير باصات ترددية على مدار الساعة.",
        pkg_eco_price: "ابتداءً من 1500 ريال",
        hotels_hero_title: "فنادقنا المميزة",
        hotels_hero_desc: "اختر من أفضل الفنادق القريبة من الحرم المكي",
        hotels_list_title: "قائمة الفنادق",
        hotels_list_desc: "نقدم لك أفضل الخيارات للإقامة المريحة",
        btn_back_hotels: "العودة للفنادق",
        sec_contact: "معلومات الاتصال",
        lbl_phones: "أرقام التواصل",
        lbl_emails: "البريد الإلكتروني",
        sec_gallery: "معرض الصور",
        sec_services: "الخدمات المتاحة",
        sec_reviews: "تقييمات النزلاء",
        footer_desc: "منصتكم الموثوقة لتنظيم رحلات العمرة والزيارة بأعلى معايير الجودة.",
        footer_links: "روابط سريعة",
        link_faq: "الأسئلة الشائعة",
        link_privacy: "سياسة الخصوصية",
        link_terms: "الشروط والأحكام",
        footer_contact: "تواصل معنا",
        copyright: "جميع الحقوق محفوظة © 2026 رحلتي للعمرة",
        lbl_rating: "تقييم",
        lbl_reviews: "تقييم",
        lbl_based_on: "بناءً على",
        btn_view_details: "عرض التفاصيل",
        contact_desc: "نحن هنا لمساعدتك في أي وقت",
        contact_address: "مكة المكرمة، المملكة العربية السعودية",
        form_title: "أرسل لنا رسالة",
        form_name: "الاسم الكامل",
        form_email: "البريد الإلكتروني",
        form_phone: "رقم الهاتف",
        form_message: "رسالتك",
        form_send: "إرسال الرسالة",
        guide_1_title: "التأشيرة والإجراءات",
        guide_1_desc: "تعرف على متطلبات التأشيرة والأوراق اللازمة لأداء العمرة",
        guide_2_title: "مناسك العمرة",
        guide_2_desc: "دليل شامل لأداء مناسك العمرة خطوة بخطوة",
        guide_3_title: "ما يجب اصطحابه",
        guide_3_desc: "قائمة بالأغراض الأساسية التي تحتاجها في رحلتك"
    },
    en: {
        logo: "My Umrah Journey",
        nav_home: "Home",
        nav_hotels: "Hotels",
        nav_guide: "Pilgrim Guide",
        nav_contact: "Contact Us",
        btn_book: "Book Umrah",
        hero_title: "An Unforgettable Spiritual Journey",
        hero_desc: "We take care of all your trip details so you can focus on worship",
        btn_book_now: "Book Your Umrah Now",
        packages_title: "Exclusive Umrah Packages",
        packages_desc: "Choose the package that suits your needs",
        pkg_vip_title: "Royal Package (VIP)",
        pkg_vip_desc: "Stay in a hotel overlooking the Kaaba, private transport, and 24h service.",
        pkg_vip_price: "Starting from 5000 SAR",
        pkg_eco_title: "Economy Package",
        pkg_eco_desc: "Comfortable accommodation near the Haram with 24h shuttle buses.",
        pkg_eco_price: "Starting from 1500 SAR",
        hotels_hero_title: "Our Featured Hotels",
        hotels_hero_desc: "Choose from the best hotels near the Holy Mosque",
        hotels_list_title: "Hotel List",
        hotels_list_desc: "We offer you the best options for a comfortable stay",
        btn_back_hotels: "Back to Hotels",
        sec_contact: "Contact Information",
        lbl_phones: "Phone Numbers",
        lbl_emails: "Email Addresses",
        sec_gallery: "Photo Gallery",
        sec_services: "Available Services",
        sec_reviews: "Guest Reviews",
        footer_desc: "Your trusted platform for organizing Umrah and visitation trips.",
        footer_links: "Quick Links",
        link_faq: "FAQ",
        link_privacy: "Privacy Policy",
        link_terms: "Terms & Conditions",
        footer_contact: "Contact Us",
        copyright: "All Rights Reserved © 2026 My Umrah Journey",
        lbl_rating: "Rating",
        lbl_reviews: "Reviews",
        lbl_based_on: "Based on",
        btn_view_details: "View Details",
        contact_desc: "We are here to help you anytime",
        contact_address: "Makkah, Saudi Arabia",
        form_title: "Send Us a Message",
        form_name: "Full Name",
        form_email: "Email Address",
        form_phone: "Phone Number",
        form_message: "Your Message",
        form_send: "Send Message",
        guide_1_title: "Visa & Procedures",
        guide_1_desc: "Learn about visa requirements and documents needed for Umrah",
        guide_2_title: "Umrah Rituals",
        guide_2_desc: "Complete guide for performing Umrah rituals step by step",
        guide_3_title: "What to Bring",
        guide_3_desc: "List of essential items you need for your journey"
    }
};

// ==========================================
// بيانات 10 فنادق كاملة
// ==========================================
const hotelsData = [
    {
        id: 1,
        name: { ar: "فندق برج الساعة فيرمونت", en: "Fairmont Clock Tower" },
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        description: { ar: "فندق 5 نجوم مقابل المسجد الحرام مباشرة", en: "5-star hotel directly opposite the Holy Mosque" },
        location: { ar: "أبراج البيت، مكة - 100م من الحرم", en: "Abraj Al-Bait, Makkah - 100m from Haram" },
        phones: ["+966 12 567 8888", "+966 50 123 4567"],
        emails: ["info@fairmont-makkah.com"],
        gallery: [
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
            "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800"
        ],
        services: { ar: ["واي فاي", "مطاعم", "سبا", "مواقف", "خدمة غرف 24س"], en: ["WiFi", "Restaurants", "Spa", "Parking", "24h Room Service"] },
        rating: 4.8,
        totalReviews: 2547,
        ratingBreakdown: { 5: 1890, 4: 512, 3: 98, 2: 32, 1: 15 },
        reviews: [
            { name: "محمود حساني", date: "15 فبراير 2026", stars: 5, text: { ar: "فندق ممتاز، الموقع مثالي", en: "Excellent hotel, perfect location" } },
            { name: "John Doe", date: "10 Feb 2026", stars: 5, text: { ar: "Amazing experience", en: "Amazing experience" } }
        ]
    },
    {
        id: 2,
        name: { ar: "فندق سويس أوتيل مقام", en: "Swissotel Makkah" },
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
        description: { ar: "فندق راقي على بعد خطوات من الحرم", en: "Elegant hotel steps away from Haram" },
        location: { ar: "شارع إبراهيم الخليل - 200م من الحرم", en: "Ibrahim Al-Khalil St - 200m from Haram" },
        phones: ["+966 12 554 5544"],
        emails: ["info@swissotel-makkah.com"],
        gallery: ["https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800", "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800"],
        services: { ar: ["واي فاي", "مطعم إيطالي", "كافيه", "موقف"], en: ["WiFi", "Italian Restaurant", "Cafe", "Parking"] },
        rating: 4.6,
        totalReviews: 1823,
        ratingBreakdown: { 5: 1200, 4: 478, 3: 98, 2: 32, 1: 15 },
        reviews: [{ name: "سارة أحمد", date: "12 فبراير 2026", stars: 5, text: { ar: "موقع ممتاز وخدمة رائعة", en: "Great location and service" } }]
    },
    {
        id: 3,
        name: { ar: "فندق هيلتون مكة", en: "Hilton Makkah" },
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
        description: { ar: "فندق عالمي بإطلالات بانورامية", en: "Global hotel with panoramic views" },
        location: { ar: "العزيزية - 500م من الحرم", en: "Aziziyah - 500m from Haram" },
        phones: ["+966 12 567 1234"],
        emails: ["makkah@hilton.com"],
        gallery: ["https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800"],
        services: { ar: ["واي فاي", "مسبح", "سبا"], en: ["WiFi", "Pool", "Spa"] },
        rating: 4.7,
        totalReviews: 2156,
        ratingBreakdown: { 5: 1567, 4: 445, 3: 98, 2: 32, 1: 14 },
        reviews: [{ name: "عبدالله", date: "2026", stars: 5, text: { ar: "تجربة لا تُنسى", en: "Unforgettable experience" } }]
    },
    {
        id: 5,
        name: { ar: "فندق إنتركونتيننتال", en: "InterContinental" },
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
        description: { ar: "فندق فاخر 5 نجوم في قلب مكة", en: "Luxury 5-star hotel in heart of Makkah" },
        location: { ar: "أبراج Clock - 150م من الحرم", en: "Clock Towers - 150m from Haram" },
        phones: ["+966 12 567 9999"],
        emails: ["makkah@ihg.com"],
        gallery: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800"],
        services: { ar: ["واي فاي", "سبا", "مسبح"], en: ["WiFi", "Spa", "Pool"] },
        rating: 4.9,
        totalReviews: 3102,
        ratingBreakdown: { 5: 2678, 4: 312, 3: 78, 2: 22, 1: 12 },
        reviews: [{ name: "ياسر", date: "2026", stars: 5, text: { ar: "أفضل فندق", en: "Best hotel" } }]
    },
    {
        id: 6,
        name: { ar: "فندق بولمان زمزم", en: "Pullman Zamzam" },
        image: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=800",
        description: { ar: "فندق حديث في برج زمزم", en: "Modern hotel in Zamzam Tower" },
        location: { ar: "برج زمزم - 300م من الحرم", en: "Zamzam Tower - 300m from Haram" },
        phones: ["+966 12 555 7777"],
        emails: ["h9876@accor.com"],
        gallery: ["https://images.unsplash.com/photo-1549294413-26f195200c16?w=800"],
        services: { ar: ["واي فاي", "مطعم"], en: ["WiFi", "Restaurant"] },
        rating: 4.5,
        totalReviews: 1678,
        ratingBreakdown: { 5: 1023, 4: 512, 3: 98, 2: 32, 1: 13 },
        reviews: [{ name: "منى", date: "2026", stars: 5, text: { ar: "موقع ممتاز", en: "Excellent location" } }]
    },
    {
        id: 7,
        name: { ar: "فندق دار التوحيد", en: "Dar Al Tawheed" },
        image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
        description: { ar: "فندق تاريخي تم تجديده", en: "Historic renovated hotel" },
        location: { ar: "المنطقة المركزية - 400م من الحرم", en: "Central Area - 400m from Haram" },
        phones: ["+966 12 567 5555"],
        emails: ["contact@daraltawheed.com"],
        gallery: ["https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800"],
        services: { ar: ["واي فاي", "مطعم تقليدي"], en: ["WiFi", "Traditional Restaurant"] },
        rating: 4.3,
        totalReviews: 987,
        ratingBreakdown: { 5: 567, 4: 312, 3: 78, 2: 22, 1: 8 },
        reviews: [{ name: "علي", date: "2026", stars: 4, text: { ar: "فندق جميل", en: "Beautiful hotel" } }]
    },
    {
        id: 8,
        name: { ar: "فندق كراون بلازا", en: "Crowne Plaza" },
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
        description: { ar: "فندق أعمال وسياحة", en: "Business and tourism hotel" },
        location: { ar: "العزيزية - 800م من الحرم", en: "Aziziyah - 800m from Haram" },
        phones: ["+966 12 555 4444"],
        emails: ["info@crowneplaza.com"],
        gallery: ["https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800"],
        services: { ar: ["واي فاي", "مركز أعمال"], en: ["WiFi", "Business Center"] },
        rating: 4.2,
        totalReviews: 1234,
        ratingBreakdown: { 5: 678, 4: 412, 3: 98, 2: 32, 1: 14 },
        reviews: [{ name: "سامي", date: "2026", stars: 4, text: { ar: "جيد للأعمال", en: "Good for business" } }]
    },
    {
        id: 9,
        name: { ar: "فندق رمادا مكة", en: "Ramada Makkah" },
        image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800",
        description: { ar: "فندق اقتصادي مريح", en: "Comfortable economy hotel" },
        location: { ar: "الشارع العام - 1كم من الحرم", en: "Main St - 1km from Haram" },
        phones: ["+966 12 555 3333"],
        emails: ["ramada@wyndham.com"],
        gallery: ["https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800"],
        services: { ar: ["واي فاي", "إفطار"], en: ["WiFi", "Breakfast"] },
        rating: 4.0,
        totalReviews: 876,
        ratingBreakdown: { 5: 456, 4: 312, 3: 78, 2: 22, 1: 8 },
        reviews: [{ name: "هدى", date: "2026", stars: 4, text: { ar: "اقتصادي جيد", en: "Good economy" } }]
    },
    {
        id: 10,
        name: { ar: "فندق مكة كلوك", en: "Makkah Clock Hotel" },
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
        description: { ar: "فندق جديد في موقع مميز", en: "New hotel in prime location" },
        location: { ar: "المنطقة المركزية - 600م من الحرم", en: "Central Area - 600m from Haram" },
        phones: ["+966 12 555 2222"],
        emails: ["info@makkahclock.com"],
        gallery: ["https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800"],
        services: { ar: ["واي فاي", "مصعد"], en: ["WiFi", "Elevator"] },
        rating: 4.4,
        totalReviews: 1567,
        ratingBreakdown: { 5: 923, 4: 512, 3: 98, 2: 24, 1: 10 },
        reviews: [{ name: "كريم", date: "2026", stars: 5, text: { ar: "جديد ونظيف", en: "New and clean" } }]
    }
];

// ==========================================
// المتغيرات العامة
// ==========================================
let currentLang = 'ar';
const themeBtn = document.getElementById('themeBtn');
const body = document.body;
const savedTheme = localStorage.getItem('theme');
const savedLang = localStorage.getItem('lang') || 'ar';

// ==========================================
// تهيئة اللغة
// ==========================================
function initLanguage() {
    changeLanguage(savedLang);
}

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    if (document.getElementById('page-hotels') && document.getElementById('page-hotels').classList.contains('active')) {
        displayHotels();
    }
    if (document.getElementById('page-hotel-details') && document.getElementById('page-hotel-details').classList.contains('active')) {
        displayHotelDetails();
    }
}

// ==========================================
// الوضع الليلي
// ==========================================
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme === 'dark');
}

if (themeBtn) {
    themeBtn.addEventListener('click', function() {
        const isDark = body.getAttribute('data-theme') === 'dark';
        const newTheme = isDark ? 'light' : 'dark';
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(!isDark);
    });
}

function updateThemeIcon(isDark) {
    if (!themeBtn) return;
    if (isDark) {
        themeBtn.classList.remove('fa-moon');
        themeBtn.classList.add('fa-sun');
    } else {
        themeBtn.classList.remove('fa-sun');
        themeBtn.classList.add('fa-moon');
    }
}

// ==========================================
// التنقل بين الصفحات
// ==========================================
function showPage(pageName) {
    document.querySelectorAll('.page').forEach(function(page) {
        page.classList.remove('active');
    });
    
    const targetPage = document.getElementById('page-' + pageName);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    window.history.pushState({page: pageName}, '', pageName === 'home' ? '#' : '#' + pageName);
    window.scrollTo(0, 0);
    
    if (pageName === 'hotels') displayHotels();
    if (pageName === 'hotel-details') displayHotelDetails();
}

window.addEventListener('popstate', function(e) {
    if (e.state && e.state.page) {
        showPage(e.state.page);
    } else {
        showPage('home');
    }
});

// ==========================================
// التمرير السلس
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href === '#' || href === '#home') {
            e.preventDefault();
            showPage('home');
            return;
        }
        
        if (href.includes('contact-section') || href.includes('guide') || href.includes('programs')) {
            e.preventDefault();
            showPage('home');
            setTimeout(function() {
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
            return;
        }
        
        const target = document.querySelector(href);
        if (target && !href.includes('page-')) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ==========================================
// توليد النجوم
// ==========================================
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) stars += '<i class="fas fa-star"></i>';
        else if (i - 0.5 <= rating) stars += '<i class="fas fa-star-half-alt"></i>';
        else stars += '<i class="far fa-star"></i>';
    }
    return stars;
}

// ==========================================
// عرض 10 فنادق
// ==========================================
function displayHotels() {
    const container = document.getElementById('hotelsContainer');
    if (!container) return;
    
    let html = '';
    for (let i = 0; i < hotelsData.length; i++) {
        const hotel = hotelsData[i];
        const name = hotel.name[currentLang];
        const desc = hotel.description[currentLang];
        const loc = hotel.location[currentLang].split('-')[0];
        const btnText = translations[currentLang].btn_view_details;
        const arrowDir = currentLang === 'ar' ? 'left' : 'right';
        const marginSide = currentLang === 'ar' ? 'right' : 'left';
        
        html += '<div class="hotel-card">';
        html += '<img src="' + hotel.image + '" alt="' + name + '" class="hotel-card-image">';
        html += '<div class="hotel-card-content">';
        html += '<h3 class="hotel-card-title">' + name + '</h3>';
        html += '<p class="hotel-card-location"><i class="fas fa-map-marker-alt"></i> ' + loc + '</p>';
        html += '<p class="hotel-card-description">' + desc + '</p>';
        html += '<div class="hotel-card-rating">';
        html += '<div class="stars">' + generateStars(hotel.rating) + '</div>';
        html += '<span class="rating-number">' + hotel.rating + '/5</span>';
        html += '<span>(' + hotel.totalReviews + ' ' + translations[currentLang].lbl_reviews + ')</span>';
        html += '</div>';
        html += '<button class="btn-gold btn-full" onclick="viewHotelDetails(' + hotel.id + ')">';
        html += btnText + ' <i class="fas fa-arrow-' + arrowDir + '" style="margin-' + marginSide + ': 8px;"></i>';
        html += '</button>';
        html += '</div></div>';
    }
    
    container.innerHTML = html;
    initCardAnimations();
}

// ==========================================
// عرض تفاصيل الفندق
// ==========================================
function viewHotelDetails(hotelId) {
    localStorage.setItem('selectedHotelId', hotelId);
    showPage('hotel-details');
}

function displayHotelDetails() {
    let hotelId = localStorage.getItem('selectedHotelId');
    if (!hotelId) { showPage('hotels'); return; }
    
    let hotel = null;
    for (let i = 0; i < hotelsData.length; i++) {
        if (hotelsData[i].id === parseInt(hotelId)) {
            hotel = hotelsData[i];
            break;
        }
    }
    
    if (!hotel) { showPage('hotels'); return; }
    
    // 1. صورة واسم الفندق
    document.getElementById('hotelMainImage').src = hotel.image;
    document.getElementById('hotelName').textContent = hotel.name[currentLang];
    document.querySelector('#hotelLocation span').textContent = hotel.location[currentLang];
    
    // التقييم
    document.getElementById('hotelRatingDisplay').innerHTML = 
        '<div class="stars">' + generateStars(hotel.rating) + '</div>' +
        '<span class="rating-number">' + hotel.rating + '/5</span>' +
        '<span>(' + hotel.totalReviews + ' ' + translations[currentLang].lbl_reviews + ')</span>';
    
    // 2 & 3 & 4. الموقع وأرقام التواصل والإيميلات
    let phonesHtml = '';
    for (let i = 0; i < hotel.phones.length; i++) {
        phonesHtml += '<a href="tel:' + hotel.phones[i].replace(/\s/g, '') + '">' + hotel.phones[i] + '</a>';
        if (i < hotel.phones.length - 1) phonesHtml += '<br>';
    }
    document.getElementById('hotelPhones').innerHTML = phonesHtml;
    
    let emailsHtml = '';
    for (let i = 0; i < hotel.emails.length; i++) {
        emailsHtml += '<a href="mailto:' + hotel.emails[i] + '">' + hotel.emails[i] + '</a>';
        if (i < hotel.emails.length - 1) emailsHtml += '<br>';
    }
    document.getElementById('hotelEmails').innerHTML = emailsHtml;
    
    // 5. صور الفندق
    const galleryContainer = document.getElementById('hotelGallery');
    let galleryHtml = '';
    for (let i = 0; i < hotel.gallery.length; i++) {
        galleryHtml += '<img src="' + hotel.gallery[i] + '" onclick="openLightbox(\'' + hotel.gallery[i] + '\')">';
    }
    galleryContainer.innerHTML = galleryHtml;
    
    // 6. خدمات الفندق
    const servicesContainer = document.getElementById('hotelServices');
    let servicesHtml = '';
    const servicesList = hotel.services[currentLang];
    for (let i = 0; i < servicesList.length; i++) {
        servicesHtml += '<div class="service-item"><i class="fas fa-check-circle"></i><span>' + servicesList[i] + '</span></div>';
    }
    servicesContainer.innerHTML = servicesHtml;
    
    // 7. تقييم الفندق
    displayRatingSummary(hotel);
    displayReviews(hotel);
}

function displayRatingSummary(hotel) {
    const container = document.getElementById('ratingSummary');
    const t = translations[currentLang];
    
    let barsHtml = '';
    const keys = ['1', '2', '3', '4', '5'];
    for (let i = keys.length - 1; i >= 0; i--) {
        const stars = keys[i];
        const count = hotel.ratingBreakdown[stars];
        const percentage = (count / hotel.totalReviews) * 100;
        barsHtml += '<div class="rating-bar"><span class="stars-num">' + stars + ' <i class="fas fa-star"></i></span>';
        barsHtml += '<div class="bar"><div class="bar-fill" style="width: ' + percentage + '%"></div></div>';
        barsHtml += '<span class="count">' + count + '</span></div>';
    }
    
    container.innerHTML = '<div class="big-rating">' + hotel.rating + '</div>' +
        '<div class="stars">' + generateStars(hotel.rating) + '</div>' +
        '<p class="total-reviews">' + t.lbl_based_on + ' ' + hotel.totalReviews + ' ' + t.lbl_reviews + '</p>' +
        '<div class="rating-bars">' + barsHtml + '</div>';
}

function displayReviews(hotel) {
    const container = document.getElementById('hotelReviews');
    let html = '';
    for (let i = 0; i < hotel.reviews.length; i++) {
        const r = hotel.reviews[i];
        html += '<div class="review-card"><div class="review-header"><div>';
        html += '<div class="reviewer-name">' + r.name + '</div>';
        html += '<div class="review-stars">' + generateStars(r.stars) + '</div></div>';
        html += '<div class="review-date">' + r.date + '</div></div>';
        html += '<p class="review-text">' + r.text[currentLang] + '</p></div>';
    }
    container.innerHTML = html;
}

function openLightbox(src) {
    window.open(src, '_blank');
}

function initCardAnimations() {
    const cards = document.querySelectorAll('.card, .hotel-card');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.opacity = '0';
            cards[i].style.transform = 'translateY(20px)';
            cards[i].style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(cards[i]);
        }
    }
}

// ==========================================
// ✅ إدارة القائمة الجانبية (الجديد)
// ==========================================
function setupSidebar() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const closeSidebarBtn = document.getElementById('closeSidebarBtn');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    
    // دالة فتح القائمة
    function openSidebar() {
        if (sidebar) sidebar.classList.add('active');
        if (sidebarOverlay) sidebarOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // دالة إغلاق القائمة
    function closeSidebar() {
        if (sidebar) sidebar.classList.remove('active');
        if (sidebarOverlay) sidebarOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // فتح القائمة عند الضغط على أيقونة الهامبرجر
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openSidebar();
        });
    }
    
    // إغلاق القائمة عند الضغط على زر الإغلاق
    if (closeSidebarBtn) {
        closeSidebarBtn.addEventListener('click', closeSidebar);
    }
    
    // إغلاق القائمة عند الضغط على الطبقة المعتمة
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeSidebar);
    }
    
    // التعامل مع روابط القائمة الجانبية
    sidebarLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const pageName = this.getAttribute('data-page');
            const href = this.getAttribute('href');
            
            // إذا كان رابط تنقل بين الصفحات
            if (pageName) {
                e.preventDefault();
                showPage(pageName);
                closeSidebar();
            }
            // إذا كان رابط تمرير داخل الصفحة
            else if (href && href.startsWith('#') && href !== '#') {
                e.preventDefault();
                closeSidebar();
                setTimeout(function() {
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 300);
            }
        });
    });
    
    // إغلاق القائمة عند الضغط على زر ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && sidebar && sidebar.classList.contains('active')) {
            closeSidebar();
        }
    });
}

// ==========================================
// التشغيل عند التحميل
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme === 'dark');
    }
    
    // تهيئة اللغة
    initLanguage();
    
    // ✅ إعداد القائمة الجانبية
    setupSidebar();
    
    // عرض الصفحة بناءً على الرابط
    const hash = window.location.hash.replace('#', '');
    if (hash === 'hotels' || hash === 'hotel-details') {
        showPage(hash);
    } else {
        showPage('home');
    }
    
    initCardAnimations();
});