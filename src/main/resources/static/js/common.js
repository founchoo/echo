document.addEventListener('DOMContentLoaded', (event) => {
    var nav = document.getElementById('navList');
    var list = nav.getElementsByTagName('li');
    for (let i = 0; i < list.length; i++) {
        let cur = list[i];
        if (window.location.href.endsWith(cur.children[0].getAttribute('href'))) {
            cur.classList.add('sidenav-item-active');
        }
    }
});