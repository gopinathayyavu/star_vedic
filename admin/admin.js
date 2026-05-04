// ========== MOCK DATA ==========
const ALL_COURSES = [
    { name: "Yoga", cat: "Health & Wellness", time: "5:00 AM", students: 82, instructor: "Swami Sivananda" },
    { name: "Pranayama Yoga Mudras", cat: "Health & Wellness", time: "6:00 AM", students: 45, instructor: "Yogini Meera" },
    { name: "Zumba", cat: "Health & Wellness", time: "6:00 AM", students: 74, instructor: "Rita Mash" },
    { name: "Zumba", cat: "Health & Wellness", time: "10:00 AM", students: 68, instructor: "Rita Mash" },
    { name: "Flower Therapy For Emotional Healing", cat: "Health & Wellness", time: "1:00 PM", students: 38, instructor: "Dr. Karuna" },
    { name: "5×5×5 Weight Loss Methods", cat: "Health & Wellness", time: "11:00 AM", students: 52, instructor: "Nutritionist Riya" },
    { name: "PCOD Reverse", cat: "Health & Wellness", time: "10:00 AM", students: 41, instructor: "Dr. Anjali" },
    { name: "Annamacharya Keerthanalu", cat: "Arts & Culture", time: "11:00 AM", students: 28, instructor: "Kasturi" },
    { name: "Bharatanatyam", cat: "Arts & Culture", time: "12:00 PM", students: 61, instructor: "Smriti" },
    { name: "Thyagaraja Keerthanalu Class", cat: "Arts & Culture", time: "3:00 PM", students: 33, instructor: "Vijay" },
    { name: "Kuchipudi", cat: "Arts & Culture", time: "6:00 PM", students: 44, instructor: "Bhavana" },
    { name: "Chess Basics", cat: "Arts & Culture", time: "6:00 PM", students: 56, instructor: "GM Harikrishna" },
    { name: "Chess Advance", cat: "Arts & Culture", time: "6:00 PM", students: 29, instructor: "GM Harikrishna" },
    { name: "One Stroke Painting", cat: "Arts & Culture", time: "12:00 PM", students: 37, instructor: "Anu" },
    { name: "Kerala Mural", cat: "Arts & Culture", time: "6:00 PM", students: 24, instructor: "Raja" },
    { name: "Numerology", cat: "Arts & Culture", time: "12:00 PM", students: 42, instructor: "Mohan" },
    { name: "AI Tools & Graphics", cat: "Arts & Culture", time: "7:00 PM", students: 48, instructor: "Sai" },
    { name: "Spoken English", cat: "Languages", time: "3:00 PM", students: 39, instructor: "Lakshmi" },
    { name: "Telugu Basics, Padayalu, Kathalu", cat: "Languages", time: "11:00 AM", students: 31, instructor: "Prakash" },
    { name: "Saree Pre Pleating", cat: "Ladies Special", time: "3:00 PM", students: 46, instructor: "Rekha" },
    { name: "Saree Tassels", cat: "Ladies Special", time: "4:00 PM", students: 33, instructor: "Rekha" },
    { name: "Chocolate Making & Baking Class", cat: "Ladies Special", time: "1:00 PM", students: 55, instructor: "Priya" },
    { name: "Beautician Course", cat: "Ladies Special", time: "10:00 AM", students: 48, instructor: "Kavita" },
    { name: "Millet Recipes", cat: "Ladies Special", time: "3:00 PM", students: 41, instructor: "Neeraja" },
    { name: "Carnatic Music", cat: "Kids Classes", time: "3:00 PM", students: 38, instructor: "Vani" },
    { name: "Drawing Class", cat: "Kids Classes", time: "2:00 PM", students: 55, instructor: "Geeta" },
    { name: "Kuchipudi", cat: "Kids Classes", time: "6:00 PM", students: 42, instructor: "Bhavana" },
    { name: "Bharatanatyam", cat: "Kids Classes", time: "12:00 PM", students: 49, instructor: "Smriti" },
    { name: "Doodle Art", cat: "Kids Classes", time: "4:00 PM", students: 44, instructor: "Neha" },
    { name: "Melody Mind Camp", cat: "Kids Classes", time: "5:00 PM", students: 36, instructor: "Sowmya" },
    { name: "Chess Basics", cat: "Kids Classes", time: "6:00 PM", students: 52, instructor: "GM Harikrishna" },
    { name: "Chess Advance", cat: "Kids Classes", time: "6:00 PM", students: 28, instructor: "GM Harikrishna" },
    { name: "English Motivational Stories", cat: "Kids Classes", time: "4:00 PM", students: 40, instructor: "Nandini" },
    { name: "Cursive Writing", cat: "Kids Classes", time: "7:00 PM", students: 35, instructor: "Radha" }
];

const STUDENTS = [
    { id: 1, name: "Priya Sharma", phone: "9876543210", enrolled: ["Yoga", "Bharatanatyam", "Spoken English"], paid: true, joined: "May 2026" },
    { id: 2, name: "Ananya Reddy", phone: "9988776655", enrolled: ["Zumba", "Saree Pre Pleating"], paid: true, joined: "May 2026" },
    { id: 3, name: "Kavitha Rao", phone: "9123456789", enrolled: ["Carnatic Music", "Drawing Class"], paid: false, joined: "May 2026" },
    { id: 4, name: "Meera Krishnan", phone: "8765432109", enrolled: ["PCOD Reverse", "Millet Recipes"], paid: true, joined: "April 2026" },
    { id: 5, name: "Sita Devi", phone: "9000123456", enrolled: ["Kerala Mural", "Numerology"], paid: true, joined: "April 2026" },
    { id: 6, name: "Lakshmi Prasad", phone: "9876501234", enrolled: ["Yoga", "Pranayama Yoga Mudras"], paid: false, joined: "May 2026" },
    { id: 7, name: "Durga Patel", phone: "8900012345", enrolled: ["AI Tools & Graphics", "Chess Basics"], paid: true, joined: "May 2026" },
    { id: 8, name: "Radha Nair", phone: "7890123456", enrolled: ["Chocolate Making & Baking Class"], paid: true, joined: "March 2026" }
];

const catColors = {
    "Health & Wellness": "badge-green",
    "Arts & Culture": "badge-blue",
    "Languages": "badge-gold",
    "Ladies Special": "badge-red",
    "Kids Classes": "badge-blue"
};

// ========== GLOBAL HELPER ==========
function showToast(msg, type = 'success') {
    const t = document.createElement('div');
    t.style.cssText = `position:fixed; bottom:24px; right:24px; z-index:9999; background:${type === 'error' ? '#C62828' : '#2D2A5E'}; color:#fff; padding:14px 22px; border-radius:12px; font-size:14px; display:flex; align-items:center; gap:10px; box-shadow:0 8px 32px rgba(0,0,0,0.25); font-family:'Poppins',sans-serif;`;
    t.innerHTML = `<i class="fas ${type === 'error' ? 'fa-exclamation-circle' : 'fa-check-circle'}"></i> ${msg}`;
    document.body.appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity .3s'; setTimeout(() => t.remove(), 300); }, 3500);
}

// ========== SIDEBAR & PAGE ACTIVE LINK ==========
function setActiveLink() {
    const current = window.location.pathname.split('/').pop();
    document.querySelectorAll('.sidebar a').forEach(link => {
        const href = link.getAttribute('href');
        if (href && href === current) link.classList.add('active');
        else link.classList.remove('active');
    });
}
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('sidebarOverlay').classList.toggle('open');
}
function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebarOverlay').classList.remove('open');
}

// ========== DASHBOARD SPECIFIC ==========
function renderRecentStudents() {
    const tbody = document.getElementById('recentStudentsTbody');
    if (!tbody) return;
    tbody.innerHTML = STUDENTS.slice(0, 5).map(s => `
        <tr><td><strong>${s.name}</strong></td><td>${s.phone}</td>
        <td>${s.enrolled.slice(0, 2).join(', ')}${s.enrolled.length > 2 ? '…' : ''}</td>
        <td><span class="badge ${s.paid ? 'badge-green' : 'badge-red'}">${s.paid ? 'Paid' : 'Pending'}</span></td>
        <td>${s.joined}</td></tr>
    `).join('');
}

// ========== CLASSES PAGE ==========
let currentCategoryFilter = "";
let currentSearchQuery = "";

function renderClasses() {
    const tbody = document.getElementById('classesTbody');
    if (!tbody) return;
    let filtered = [...ALL_COURSES];
    if (currentCategoryFilter) filtered = filtered.filter(c => c.cat === currentCategoryFilter);
    if (currentSearchQuery) filtered = filtered.filter(c => c.name.toLowerCase().includes(currentSearchQuery) || c.cat.toLowerCase().includes(currentSearchQuery));
    tbody.innerHTML = filtered.map((c, idx) => `
        <tr>
            <td><strong>${c.name}</strong></td>
            <td><span class="badge ${catColors[c.cat]}">${c.cat}</span></td>
            <td><i class="fas fa-clock" style="color:var(--gold)"></i> ${c.time}</td>
            <td>${c.students}</td>
            <td><span class="badge badge-green">Active</span></td>
            <td><div class="action-btns">
                <button class="btn-sm btn-edit-sm" onclick="openEditClassModal(${idx})"><i class="fas fa-edit"></i></button>
                <button class="btn-sm btn-danger-sm" onclick="confirmDeleteClass('${c.name}', ${idx})"><i class="fas fa-trash"></i></button>
            </div></td>
        </tr>
    `).join('');
}
function filterByCategory() {
    currentCategoryFilter = document.getElementById('categoryFilter')?.value || "";
    renderClasses();
}
function filterClasses(query) {
    currentSearchQuery = query.toLowerCase();
    renderClasses();
}
function openEditClassModal(index) {
    const c = ALL_COURSES[index];
    document.getElementById('editClassName').value = c.name;
    document.getElementById('editClassCat').value = c.cat;
    document.getElementById('editClassTime').value = c.time;
    document.getElementById('editClassInstructor').value = c.instructor || '';
    document.getElementById('editClassIndex').value = index;
    openModal('editClass');
}
function updateClass() {
    const idx = parseInt(document.getElementById('editClassIndex').value);
    if (isNaN(idx)) return;
    const newName = document.getElementById('editClassName').value.trim();
    const newCat = document.getElementById('editClassCat').value;
    const newTime = document.getElementById('editClassTime').value.trim();
    if (!newName || !newTime) { showToast('Please fill all required fields', 'error'); return; }
    ALL_COURSES[idx].name = newName;
    ALL_COURSES[idx].cat = newCat;
    ALL_COURSES[idx].time = newTime;
    ALL_COURSES[idx].instructor = document.getElementById('editClassInstructor').value;
    renderClasses();
    closeModal('editClass');
    showToast(`Class "${newName}" updated.`);
}
function confirmDeleteClass(name, idx) {
    if (confirm(`Delete class "${name}"?`)) {
        ALL_COURSES.splice(idx, 1);
        renderClasses();
        showToast(`Class "${name}" deleted.`);
    }
}
function addClassFromModal() {
    const name = document.getElementById('className').value.trim();
    const cat = document.getElementById('classCat').value;
    const time = document.getElementById('classTime').value.trim();
    if (!name || !cat || !time) { showToast('Please fill all fields', 'error'); return; }
    ALL_COURSES.push({ name, cat, time, students: 0, instructor: '' });
    renderClasses();
    closeModal('addClass');
    showToast(`Class "${name}" added.`);
    document.getElementById('className').value = '';
    document.getElementById('classTime').value = '';
}

// ========== STUDENTS PAGE ==========
let currentStudentSearch = "";
function renderStudents() {
    const tbody = document.getElementById('studentsTbody');
    if (!tbody) return;
    let filtered = STUDENTS;
    if (currentStudentSearch) filtered = filtered.filter(s => s.name.toLowerCase().includes(currentStudentSearch) || s.phone.includes(currentStudentSearch));
    tbody.innerHTML = filtered.map(s => `
        <tr>
            <td><strong>${s.name}</strong></td>
            <td>${s.phone}</td>
            <td>${s.enrolled.slice(0, 2).join(', ')}${s.enrolled.length > 2 ? `+${s.enrolled.length - 2}` : ''}</td>
            <td><span class="badge ${s.paid ? 'badge-green' : 'badge-red'}">${s.paid ? 'Paid' : 'Pending'}</span></td>
            <td>${s.joined}</td>
            <td><div class="action-btns">
                <button class="btn-sm btn-edit-sm" onclick="editStudent(${s.id})"><i class="fas fa-edit"></i></button>
                <button class="btn-sm btn-danger-sm" onclick="deleteStudent(${s.id})"><i class="fas fa-trash"></i></button>
            </div></td>
        </tr>
    `).join('');
}
function filterStudents(q) {
    currentStudentSearch = q.toLowerCase();
    renderStudents();
}
function addStudentFromModal() {
    const name = document.getElementById('stuName').value.trim();
    const phone = document.getElementById('stuPhone').value.trim();
    if (!name || !phone) { showToast('Please fill name and phone', 'error'); return; }
    const newId = STUDENTS.length + 1;
    STUDENTS.push({ id: newId, name, phone, enrolled: [], paid: false, joined: new Date().toLocaleString('en-US', { month: 'short', year: 'numeric' }) });
    renderStudents();
    renderRecentStudents();
    closeModal('addStudent');
    showToast(`Student "${name}" added.`);
    document.getElementById('stuName').value = '';
    document.getElementById('stuPhone').value = '';
}
function editStudent(id) {
    const s = STUDENTS.find(s => s.id === id);
    if (!s) return;
    const newName = prompt('Edit name:', s.name);
    if (newName && newName.trim()) s.name = newName.trim();
    renderStudents();
    renderRecentStudents();
    showToast('Student updated.');
}
function deleteStudent(id) {
    if (confirm('Delete this student?')) {
        const idx = STUDENTS.findIndex(s => s.id === id);
        if (idx !== -1) STUDENTS.splice(idx, 1);
        renderStudents();
        renderRecentStudents();
        showToast('Student deleted.');
    }
}

// ========== REPORTS PAGE ==========
function generateFullReportTable() {
    const tbody = document.getElementById('reportTbody');
    if (!tbody) return;
    const reportData = STUDENTS.map(s => ({
        name: s.name,
        phone: s.phone,
        courses: s.enrolled.join(', '),
        feeStatus: s.paid ? 'Paid' : 'Pending',
        amountPaid: s.paid ? '₹280' : '₹0',
        joinDate: s.joined
    }));
    tbody.innerHTML = reportData.map(r => `
        <tr>
            <td>${r.name}</td><td>${r.phone}</td><td>${r.courses}</td>
            <td><span class="badge ${r.feeStatus === 'Paid' ? 'badge-green' : 'badge-red'}">${r.feeStatus}</span></td>
            <td>${r.amountPaid}</td><td>${r.joinDate}</td>
        </tr>
    `).join('');
    return reportData;
}
function exportFullReport() {
    const reportData = STUDENTS.map(s => ({
        'Student Name': s.name,
        Phone: s.phone,
        'Enrolled Courses': s.enrolled.join(', '),
        'Fee Status': s.paid ? 'Paid' : 'Pending',
        'Amount Paid': s.paid ? '₹280' : '₹0',
        'Join Date': s.joined
    }));
    const ws = XLSX.utils.json_to_sheet(reportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Full_Report');
    XLSX.writeFile(wb, `StarVedic_Report_${new Date().toISOString().slice(0, 19)}.xlsx`);
    showToast('Report exported as Excel');
}

// ========== MODAL CONTROLS ==========
function openModal(id) {
    const modal = document.getElementById('modal-' + id);
    if (modal) modal.classList.add('open');
}
function closeModal(id) {
    const modal = document.getElementById('modal-' + id);
    if (modal) modal.classList.remove('open');
}
window.onclick = function (e) {
    if (e.target.classList && e.target.classList.contains('modal-overlay')) {
        e.target.classList.remove('open');
    }
};

// ========== INITIALIZE BASED ON CURRENT PAGE ==========
document.addEventListener('DOMContentLoaded', () => {
    setActiveLink();
    // Determine which page we are on (by body ID or filename)
    const page = window.location.pathname.split('/').pop();
    if (page === 'index.html') {
        renderRecentStudents();
        // dashboard stats are static in HTML
    } else if (page === 'classes.html') {
        renderClasses();
        // attach filter listeners
        const catFilter = document.getElementById('categoryFilter');
        if (catFilter) catFilter.addEventListener('change', filterByCategory);
        const searchInput = document.getElementById('classSearch');
        if (searchInput) searchInput.addEventListener('input', (e) => filterClasses(e.target.value));
        // add class form
        const addBtn = document.getElementById('addClassBtn');
        if (addBtn) addBtn.onclick = () => openModal('addClass');
        document.getElementById('saveClassBtn')?.addEventListener('click', addClassFromModal);
        document.getElementById('updateClassBtn')?.addEventListener('click', updateClass);
    } else if (page === 'students.html') {
        renderStudents();
        document.getElementById('saveStudentBtn')?.addEventListener('click', addStudentFromModal);
    } else if (page === 'reports.html') {
        generateFullReportTable();
        document.getElementById('exportExcelBtn')?.addEventListener('click', exportFullReport);
    }
});