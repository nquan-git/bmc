document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");

    // Hiệu ứng cuộn mượt
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Hiệu ứng xuất hiện khi cuộn
    function checkVisibility() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                section.style.opacity = 1;
                section.style.transform = "translateY(0)";
            }
        });
    }

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(50px)";
        section.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
    });

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});
