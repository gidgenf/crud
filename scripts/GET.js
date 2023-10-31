const searchId = document.getElementById('btnGet1')

pushInfoButton.addEventListener('click', () => {
   const searchIdValue = document.getElementById('inputGet1Id')

    fetch('https://654100a845bedb25bfc30be2.mockapi.io/users', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Mensaje del servidor:', data.message);
            console.log('Usuario agregado:', data.usuario);
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
        });
});
