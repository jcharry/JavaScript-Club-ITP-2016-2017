var link = document.getElementById('unclickable');
console.log(link);

link.addEventListener('mouseover', function() {
    console.log('mouseover');
    link.style.top = Math.random() * window.innerWidth + 'px';
    link.style.left = Math.random() * window.innerHeight + 'px';
});
