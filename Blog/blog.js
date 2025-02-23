// Função para adicionar um comentário
document.getElementById('comment-form').addEventListener('submit', function (event) {
    // Impede o envio do formulário (para não recarregar a página)
    event.preventDefault();

    // Pega o nome e o texto do comentário
    const name = document.getElementById('comment-name').value;
    const text = document.getElementById('comment-text').value;

    // Verifica se o nome e o comentário não estão vazios
    if (name && text) {
        // Seleciona a lista de comentários
        const commentList = document.querySelector('.comment-list');

        // Cria o novo comentário
        const comment = document.createElement('div');
        comment.classList.add('comment');
        
        // Cria e adiciona o nome do autor do comentário
        const commentHeader = document.createElement('h5');
        commentHeader.textContent = name;
        
        // Cria e adiciona o texto do comentário
        const commentText = document.createElement('p');
        commentText.textContent = text;

        // Adiciona o nome e o comentário ao novo elemento
        comment.appendChild(commentHeader);
        comment.appendChild(commentText);

        // Adiciona o novo comentário à lista de comentários
        commentList.appendChild(comment);

        // Limpa os campos do formulário
        document.getElementById('comment-name').value = '';
        document.getElementById('comment-text').value = '';
    }
});
// Obtém todos os botões "Ler mais"
const readMoreButtons = document.querySelectorAll('.read-more');

// Função para alternar o conteúdo
readMoreButtons.forEach(button => {
    button.addEventListener('click', function() {
        const post = button.closest('.post'); // Encontra o post correspondente ao botão clicado
        const content = post.querySelector('.post-content'); // Encontra o conteúdo do post
        const isVisible = content.style.display === 'block';

        // Alterna entre mostrar e esconder o conteúdo
        if (isVisible) {
            content.style.display = 'none'; // Esconde o conteúdo
            button.textContent = 'Ler mais'; // Altera o texto do botão
        } else {
            content.style.display = 'block'; // Exibe o conteúdo
            button.textContent = 'Ler menos'; // Altera o texto do botão
        }
    });
});

