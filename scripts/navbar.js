const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('nav');
    function closeNavOnOutsideClick(e) {
        if (window.innerWidth <= 768 && nav.classList.contains('active')) {
            if (!nav.contains(e.target) && !burger.contains(e.target)) {
                nav.classList.remove('active');
            }
        }
    }
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
    document.addEventListener('click', closeNavOnOutsideClick);

    // Hide nav by default on mobile, show on desktop
    function handleResize() {
        if (window.innerWidth > 768) {
            nav.classList.remove('active');
        }
    }
    window.addEventListener('resize', handleResize);