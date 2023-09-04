window.addEventListener('resize', () => {
    const img = document.getElementById('kuva');
    const parentWidth = img.parentElement.clientWidth;
    img.style.maxWidth = parentWidth + 'px';
});
