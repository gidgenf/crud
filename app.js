document.addEventListener('DOMContentLoaded', () => {
    let buttonSearch = document.getElementById('buttonSearch');
    let buttonDelete = document.getElementById('buttonDelete');


    buttonDelete.addEventListener('click', () => {
        let deleteId = document.getElementById('deleteId');
        fetch('http://localhost:3000/listado/' + deleteId.value, {
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
    });


    buttonSearch.addEventListener('click', () => {
        let searchId = document.getElementById('searchId');
        window.location.href = 'http://localhost:3000/listado/' + searchId.value;
    });
});