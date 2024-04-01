function showInfo(tileNumber) {
    var info = document.getElementById('tile-info-' + tileNumber);
    info.style.display = 'block';

    // Scroll to align the hovered tile with the top of the viewport
    var tile = document.getElementById('tile-' + tileNumber);
    var offsetTop = tile.offsetTop;
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
}
function hideInfo(tileNumber) {
    var info = document.getElementById('tile-info-' + tileNumber);
    info.style.display = 'none';
}