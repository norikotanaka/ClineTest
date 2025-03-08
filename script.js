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

    const videoUpload = document.getElementById('video-upload');
    const getDescriptionButton = document.getElementById('get-description');

    videoUpload.addEventListener('change', function(event) {
        const file = event.target.files[0];
        const videoURL = URL.createObjectURL(file);
        videoPlayer.src = videoURL;
    });

    getDescriptionButton.addEventListener('click', function() {
        const videoFile = videoUpload.files[0];
        if (!videoFile) {
            alert('Please upload a video first.');
            return;
        }

        const formData = new FormData();
        formData.append('video', videoFile);

        // Replace 'YOUR_BACKEND_API_ENDPOINT' with your actual backend API endpoint
        fetch('YOUR_BACKEND_API_ENDPOINT', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            commentaryText.textContent = data.description;
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while generating the description.');
        });
    });
});
