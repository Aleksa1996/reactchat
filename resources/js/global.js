window.onscroll = function() {
    if (document.documentElement.scrollTop > 10) {
        document.getElementById('main-nav').classList.add('main-nav-add-bg');
    } else {
        document.getElementById('main-nav').classList.remove('main-nav-add-bg');
    }
};
