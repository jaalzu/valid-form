document.getElementById('form').addEventListener('submit', function(event) {
    let esValido = true;
  
    // Validar Nombre
    const firstName = document.getElementById('first-name');
    if (firstName.value.trim() === '') {
      mostrarError(firstName, 'First name cannot be empty');
      esValido = false;
    } else {
      ocultarError(firstName);
    }
  
    
    // Validar Apellido
    const lastName = document.getElementById('last-name');
    if (lastName.value.trim() === '') {
      mostrarError(lastName, 'Last name cannot be empty');
      esValido = false;
    } else {
      ocultarError(lastName);
    }
  
    // Validar Email
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      mostrarError(email, 'Looks like this is not an email');
      esValido = false;
    } else {
      ocultarError(email);
    }
  
    // Validar Contraseña
    const password = document.getElementById('password');
    if (password.value.trim() === '') {
      mostrarError(password, 'Password cannot be empty');
      esValido = false;
    } else {
      ocultarError(password);
    }
  
    // Prevenir el envío del formulario si no es válido
    if (!esValido) {
      event.preventDefault();
    }
  });
  
  function mostrarError(input, mensaje) {
    const errorIcon = input.nextElementSibling;
    const errorText = input.parentNode.querySelector('.error');
  
    errorIcon.classList.remove('hidden');
    errorText.classList.remove('hidden');
    errorText.textContent = mensaje;
  }
  
  function ocultarError(input) {
    const errorIcon = input.nextElementSibling;
    const errorText = input.parentNode.querySelector('.error');
  
    errorIcon.classList.add('hidden');
    errorText.classList.add('hidden');
  }
