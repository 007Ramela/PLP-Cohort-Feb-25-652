// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// For handling the Q&A form submission
document.querySelector('.qa-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.querySelector('input[name="name"]').value;
    const question = this.querySelector('textarea[name="question"]').value;

    const newComment = document.createElement('div');
    newComment.classList.add('qa-item');
    newComment.innerHTML = `<p><strong>${name}:</strong> ${question}</p>`;

    document.querySelector('.qa-list').appendChild(newComment);

    this.reset(); // Reset form after submission
});
