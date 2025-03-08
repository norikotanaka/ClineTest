document.addEventListener('DOMContentLoaded', function() {
    const videoPlayer = document.getElementById('video-player');
    const commentaryText = document.getElementById('commentary-text');

    // Example: Update commentary when video time updates
    videoPlayer.addEventListener('timeupdate', function() {
        const currentTime = videoPlayer.currentTime;
        // Replace this with your actual commentary logic
        if (currentTime > 5 && currentTime < 10) {
            commentaryText.textContent = 'This is the first commentary section.';
        } else if (currentTime > 15 && currentTime < 20) {
            commentaryText.textContent = 'This is the second commentary section.';
        } else {
            commentaryText.textContent = '';
        }
    });
});
