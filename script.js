// Adds a small interactive pop animation to the skill badges when clicked
document.addEventListener('DOMContentLoaded', () => {
    const badges = document.querySelectorAll('.skill-badge');

    badges.forEach(badge => {
        badge.addEventListener('click', () => {
            badge.style.transform = 'scale(0.9)';
            
            setTimeout(() => {
                badge.style.transform = 'scale(1)';
                // Reset translation applied by CSS hover
                badge.style.transform = ''; 
            }, 150);
        });
    });
});