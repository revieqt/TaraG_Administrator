const togglePassword = document.getElementById('toggle-password');
  const passwordInput = document.getElementById('password');

  togglePassword.addEventListener('click', () => {
    const isVisible = passwordInput.type === 'text';
    passwordInput.type = isVisible ? 'password' : 'text';
    togglePassword.classList.toggle('fa-eye');
    togglePassword.classList.toggle('fa-eye-slash');
  });