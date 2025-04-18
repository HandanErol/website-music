document.addEventListener('DOMContentLoaded', () => {
    // Initial fade-in animation
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    
    setTimeout(() => {
        container.style.transition = 'opacity 1s ease-in-out';
        container.style.opacity = '1';
    }, 100);

    // Add 3D hover effect to video container
    const videoContainer = document.querySelector('.video-container');
    videoContainer.addEventListener('mousemove', (e) => {
        const rect = videoContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const rotateX = (y / rect.height - 0.5) * 10;
        const rotateY = (x / rect.width - 0.5) * 10;
        
        videoContainer.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    videoContainer.addEventListener('mouseleave', () => {
        videoContainer.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });

    // Add ripple effect to music info
    const musicInfo = document.querySelector('.music-info');
    musicInfo.addEventListener('click', (e) => {
        const ripple = document.createElement('div');
        ripple.classList.add('ripple');
        ripple.style.left = `${e.clientX - musicInfo.offsetLeft}px`;
        ripple.style.top = `${e.clientY - musicInfo.offsetTop}px`;
        musicInfo.appendChild(ripple);

        setTimeout(() => ripple.remove(), 1000);
    });

    // Add dynamic text shadow to title
    const title = document.querySelector('.title');
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        
        title.style.textShadow = `
            ${x * 20}px ${y * 20}px 15px rgba(255, 215, 0, 0.4),
            ${-x * 20}px ${-y * 20}px 15px rgba(255, 255, 255, 0.4)
        `;
    });
});