// login.js

function login(event) {
  event.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Dummy credentials
  if (username === 'admin' && password === '12345') {
    localStorage.setItem('loggedInUser', username);
    if (document.getElementById('rememberMe').checked) {
      localStorage.setItem('rememberUser', 'yes');
    } else {
      localStorage.removeItem('rememberUser');
    }
    // Go to index.html in the same src folder
    window.location.href = 'index.html';
  } else {
    alert('Invalid username or password!');
  }
}
