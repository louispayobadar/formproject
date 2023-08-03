const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Validate form data and perform any necessary actions here
    // For example, you can send the form data to a server using AJAX or fetch API.
    // Or, you can just log the form data to the console.
    const formData = new FormData(form);
    console.log({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
    });
});
