// ============================================================
// Star Vedic Academy – Shared Data & Utilities
// ============================================================

const ACADEMY = {
  name: "Star Vedic Academy",
  tagline: "Learn, Grow & Shine with Ancient Wisdom",
  fee: 280,
  upi: "8309747374",
  contact: "9155558584",
  whatsapp: "https://wa.me/919155558584"
};

const COURSES = {
  health: [
    { id: 1, name: "Yoga", time: "5:00 AM", icon: "fa-person-praying", color: "#4CAF50" },
    { id: 2, name: "Pranayama Yoga Mudras", time: "6:00 AM", icon: "fa-wind", color: "#26C6DA" },
    { id: 3, name: "Zumba", time: "6:00 AM", icon: "fa-music", color: "#FF7043" },
    { id: 4, name: "Zumba", time: "10:00 AM", icon: "fa-music", color: "#FF7043" },
    { id: 5, name: "Flower Therapy For Emotional Healing", time: "1:00 PM", icon: "fa-spa", color: "#EC407A" },
    { id: 6, name: "5×5×5 Weight Loss Methods", time: "11:00 AM", icon: "fa-apple-whole", color: "#66BB6A" },
    { id: 7, name: "PCOD Reverse", time: "10:00 AM", icon: "fa-heart-pulse", color: "#AB47BC" }
  ],
  arts: [
    { id: 8, name: "Annamacharya Keerthanalu", time: "11:00 AM", icon: "fa-music", color: "#F5A623" },
    { id: 9, name: "Bharatanatyam", time: "12:00 PM", icon: "fa-person-dancing", color: "#FF6B6B" },
    { id: 10, name: "Thyagaraja Keerthanalu Class", time: "3:00 PM", icon: "fa-music", color: "#F5A623" },
    { id: 11, name: "Kuchipudi", time: "6:00 PM", icon: "fa-person-dancing", color: "#E91E63" },
    { id: 12, name: "Chess Basics", time: "6:00 PM", icon: "fa-chess", color: "#5C6BC0" },
    { id: 13, name: "Chess Advance", time: "6:00 PM", icon: "fa-chess-king", color: "#3949AB" },
    { id: 14, name: "One Stroke Painting", time: "12:00 PM", icon: "fa-paintbrush", color: "#FF8A65" },
    { id: 15, name: "Kerala Mural", time: "6:00 PM", icon: "fa-paint-roller", color: "#D84315" },
    { id: 16, name: "Numerology", time: "12:00 PM", icon: "fa-star", color: "#7B1FA2" },
    { id: 17, name: "AI Tools & Graphics", time: "7:00 PM", icon: "fa-robot", color: "#00897B" }
  ],
  languages: [
    { id: 18, name: "Spoken English", time: "3:00 PM", icon: "fa-language", color: "#1565C0" },
    { id: 19, name: "Telugu Basics, Padayalu, Kathalu", time: "11:00 AM", icon: "fa-book-open", color: "#E65100" }
  ],
  ladies: [
    { id: 20, name: "Saree Pre Pleating", time: "3:00 PM", icon: "fa-shirt", color: "#AD1457" },
    { id: 21, name: "Saree Tassels", time: "4:00 PM", icon: "fa-scissors", color: "#C2185B" },
    { id: 22, name: "Chocolate Making & Baking Class", time: "1:00 PM", icon: "fa-cake-candles", color: "#6D4C41" },
    { id: 23, name: "Beautician Course", time: "10:00 AM", icon: "fa-face-smile", color: "#F06292" },
    { id: 24, name: "Millet Recipes", time: "3:00 PM", icon: "fa-bowl-food", color: "#8BC34A" }
  ],
  kids: [
    { id: 25, name: "Carnatic Music", time: "3:00 PM", icon: "fa-music", color: "#F5A623" },
    { id: 26, name: "Drawing Class", time: "2:00 PM", icon: "fa-pencil", color: "#29B6F6" },
    { id: 27, name: "Kuchipudi", time: "6:00 PM", icon: "fa-person-dancing", color: "#E91E63" },
    { id: 28, name: "Bharatanatyam", time: "12:00 PM", icon: "fa-person-dancing", color: "#FF6B6B" },
    { id: 29, name: "Doodle Art", time: "4:00 PM", icon: "fa-paintbrush", color: "#FF7043" },
    { id: 30, name: "Melody Mind Camp", time: "5:00 PM", icon: "fa-headphones", color: "#9C27B0" },
    { id: 31, name: "Chess Basics", time: "6:00 PM", icon: "fa-chess", color: "#5C6BC0" },
    { id: 32, name: "Chess Advance", time: "6:00 PM", icon: "fa-chess-king", color: "#3949AB" },
    { id: 33, name: "English Motivational Stories", time: "4:00 PM", icon: "fa-book", color: "#1976D2" },
    { id: 34, name: "Cursive Writing", time: "7:00 PM", icon: "fa-pen-nib", color: "#455A64" }
  ]
};

const MOCK_STUDENTS = [
  { id: 1, name: "Priya Sharma", phone: "9876543210", enrolled: ["Yoga", "Bharatanatyam", "Spoken English"], paid: true, joined: "May 2026" },
  { id: 2, name: "Ananya Reddy", phone: "9988776655", enrolled: ["Zumba", "Saree Pre Pleating"], paid: true, joined: "May 2026" },
  { id: 3, name: "Kavitha Rao", phone: "9123456789", enrolled: ["Carnatic Music", "Drawing Class"], paid: false, joined: "May 2026" },
  { id: 4, name: "Meera Krishnan", phone: "8765432109", enrolled: ["PCOD Reverse", "Millet Recipes"], paid: true, joined: "April 2026" },
  { id: 5, name: "Sita Devi", phone: "9000123456", enrolled: ["Kerala Mural", "Numerology"], paid: true, joined: "April 2026" },
  { id: 6, name: "Lakshmi Prasad", phone: "9876501234", enrolled: ["Yoga", "Pranayama Yoga Mudras"], paid: false, joined: "May 2026" },
  { id: 7, name: "Durga Patel", phone: "8900012345", enrolled: ["AI Tools & Graphics", "Chess Basics"], paid: true, joined: "May 2026" },
  { id: 8, name: "Radha Nair", phone: "7890123456", enrolled: ["Chocolate Making & Baking Class"], paid: true, joined: "March 2026" }
];

function showToast(msg, type = "success") {
  const existing = document.querySelector('.toast-notification');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'info' ? 'fa-info-circle' : 'fa-exclamation-circle'}"></i> ${msg}`;
  toast.style.cssText = `
    position:fixed;bottom:24px;right:24px;z-index:9999;
    background:${type === 'success' ? '#2D2A5E' : type === 'info' ? '#1565C0' : '#E53935'};
    color:#fff;padding:14px 22px;border-radius:12px;font-size:14px;
    display:flex;align-items:center;gap:10px;
    box-shadow:0 8px 32px rgba(0,0,0,0.25);
    animation:slideInToast .3s ease;font-family:'Poppins',sans-serif;
  `;
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.opacity='0'; toast.style.transform='translateY(20px)'; toast.style.transition='all .3s'; setTimeout(()=>toast.remove(),300); }, 3000);
}