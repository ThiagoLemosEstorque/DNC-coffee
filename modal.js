let cardModal;

function showModal(i) {
    cardModal = document.getElementById(i);
    cardModal.style.display = 'flex';
}

function closeModal() {
    cardModal.style.display = 'none';
}