const book = document.getElementById('magicBook');
const loginForm = document.getElementById('loginForm');

// বই খোলার লজিক
book.addEventListener('click', function(e) {
    if (!this.classList.contains('open')) {
        this.classList.add('open');
    }
});

// ফর্মের ভেতরে ক্লিক করলে যাতে বই হুট করে বন্ধ না হয়
loginForm.addEventListener('click', function(e) {
    e.stopPropagation();
});

// সাবমিট করলে বই বন্ধ হবে
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // জাদুকরী এলার্ট
    alert("Alohomora! Access Granted.");
    
    // ০.৫ সেকেন্ড পর বই বন্ধ হবে
    setTimeout(() => {
        book.classList.remove('open');
    }, 500);
});