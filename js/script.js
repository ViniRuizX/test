function salvarDados(event) {
    event.preventDefault();
    const nome = document.getElementById('idNome').value;
    localStorage.setItem('nome', nome);

    const email = document.getElementById('idEmail').value;
    localStorage.setItem('email', email);

    const tel = document.getElementById('idTel').value;
    localStorage.setItem('tel', tel);

    window.location.href = 'curriculo.html';
  }