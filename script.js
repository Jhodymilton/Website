// JavaScript untuk membuat smooth scrolling saat klik navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 56, // Kurangi 56px untuk navbar fixed
                behavior: 'smooth'
            });
        }
    });
});

// Tambahkan interaksi sederhana pada tombol "Lihat Menu"
document.querySelector('.hero-section .btn-warning').addEventListener('click', function() {
    alert('Anda akan dialihkan ke halaman Menu!');
    // Di sini Anda bisa menambahkan kode untuk mengarahkan pengguna ke halaman pemesanan, dll.
});
