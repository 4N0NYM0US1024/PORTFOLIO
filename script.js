function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function openModal(projectId) {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('modalTitle').innerHTML = 'Project ' + projectId.charAt(projectId.length - 1);
    document.getElementById('modalDescription').innerHTML = 'This is a brief description of Project ' + projectId.charAt(projectId.length - 1);
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    alert(`Thank you, ${name}! Your message has been sent successfully.`);
    document.getElementById('contactForm').reset();
}