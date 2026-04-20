document.addEventListener('DOMContentLoaded', function() {
    const avatarImg = document.querySelector('.avatar img');
    
    if (avatarImg) {
        avatarImg.addEventListener('mouseenter', function() {
            this.src = 'img/avatar-hover.jpg';
        });
        
        avatarImg.addEventListener('mouseleave', function() {
            this.src = 'img/avatar.jpeg';
        });
    }
});