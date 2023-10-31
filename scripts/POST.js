document.addEventListener('DOMContentLoaded', () => {

    const mockapi = "https://654100a845bedb25bfc30be2.mockapi.io/users";
    const pushInfoButton = document.getElementById('btnPost');



    pushInfoButton.addEventListener('click', () => {
        const firstName = document.getElementById('inputPostNombre').value;
        const lastName = document.getElementById('inputPostApellido').value;

        const userData = {
            name: firstName,
            lastname: lastName,
        };

        fetch(mockapi, {
            method: 'POST',
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
});