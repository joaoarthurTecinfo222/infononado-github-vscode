const stars = document.querySelectorAll('.rating input');
const clearBtn = document.getElementById('clearBtn');
const submitBtn = document.getElementById('submitBtn');
const clearCommentBtn = document.getElementById('clearCommentBtn');
const submitCommentBtn = document.getElementById('submitCommentBtn');
const result = document.getElementById('result');
const phone = document.getElementById('phone');
const comment = document.getElementById('comment');

clearBtn.addEventListener('click', () => {
    clearRating();
});

submitBtn.addEventListener('click', () => {
    const selectedRating = document.querySelector('.rating input:checked');
    if (selectedRating) {
        const rating = selectedRating.value;
        result.innerHTML = `Obrigado pela avaliação de ${rating} estrelas!<br>Telefone: ${phone.value}<br>Comentário: ${comment.value}`;
        clearRating();
        clearComment();
    } else {
        result.innerText = "Por favor, selecione uma avaliação antes de enviar.";
    }
});

clearCommentBtn.addEventListener('click', () => {
    clearComment();
});

submitCommentBtn.addEventListener('click', () => {
    result.innerHTML = `Comentário: ${comment.value}`;
    clearComment();
});

function clearRating() {
    stars.forEach((star) => {
        star.checked = false;
    });
    result.innerText = "";
}

function clearComment() {
    comment.value = "";
    result.innerText = "";
}
