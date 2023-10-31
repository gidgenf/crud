
document.addEventListener('DOMContentLoaded', () => {

    const btnDelete = document.getElementById('btnDelete')

    btnDelete.addEventListener('click', () => {

        let deleteId = document.getElementById('inputDelete').value

        fetch('https://654100a845bedb25bfc30be2.mockapi.io/users/' + deleteId, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.status === 200) {
                    console.log('Usuario eliminado con éxito');
                } else {
                    console.error('Error al eliminar el usuario');
                }
            })
            .catch(error => {
                console.error('Error en la solicitud:', error);
            });

    })
});

