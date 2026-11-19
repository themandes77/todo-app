const modal = document.getElementById('boardModal');
const closeModal = document.getElementById('cancel');
const createBoard = document.getElementById('createBoard');

const boardName = document.getElementById('boardName');

function addNewBoard() {
    if (boardName.value.trim() == '') return;

    const newBoard = document.createElement('button');
    newBoard.textContent = boardName.value.trim();
    document.querySelector('.boardGrid').appendChild(newBoard);
    modal.close();

    boardName.value = '';
}

createBoard.addEventListener("click", function() {
    addNewBoard();
})

closeModal.addEventListener("click", function() {
    modal.close();
})

const addBoard = document.getElementById("addBoard");
addBoard.addEventListener("click", function() {
    modal.showModal();
});
