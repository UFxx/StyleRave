const deleteButtons = document.querySelectorAll('.fa-trash');
deleteButtons.forEach(el => {
    el.addEventListener('click', () => {
        el.parentElement.parentElement.parentElement.remove();
        totalSum.textContent = totalSum.textContent - el.parentElement.parentElement.children[2].children[0].textContent/1
    })
})