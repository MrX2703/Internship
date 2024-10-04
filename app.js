// Admin login validation
document.getElementById('login-form')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple hardcoded validation (for demonstration)
    if (username === 'admin' && password === 'password') {
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid login details');
    }
});

// Add new internship program
const internships = [];

document.getElementById('internship-form')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const duration = document.getElementById('duration').value;

    const newInternship = { title, description, duration };
    internships.push(newInternship);

    localStorage.setItem('internships', JSON.stringify(internships));

    alert('Internship added successfully!');
});

// Display internships on homepage
window.onload = function () {
    const savedInternships = JSON.parse(localStorage.getItem('internships')) || [];

    const internshipList = document.getElementById('internship-list');

    savedInternships.forEach((internship) => {
        const internshipDiv = document.createElement('div');
        internshipDiv.classList.add('internship');

        internshipDiv.innerHTML = `
            <h3>${internship.title}</h3>
            <p>${internship.description}</p>
            <p><strong>Duration:</strong> ${internship.duration}</p>
        `;

        internshipList.appendChild(internshipDiv);
    });
};
