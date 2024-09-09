// URL da API do Google Books com uma busca por "programação"
const apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=romance&maxResults=16';

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const bookContainer = document.getElementById('book-container');

        data.items.forEach(item => {
            const book = item.volumeInfo;
            const bookElement = document.createElement('div');
            bookElement.classList.add('book');
            bookElement.innerHTML = `
                <img src="${book.imageLinks ? book.imageLinks.thumbnail : 'https://via.placeholder.com/128x195.png?text=Sem+Imagem'}" alt="${book.title}">
                <h3>${book.title}</h3>
            `;
            bookContainer.appendChild(bookElement);
        });
    })
    .catch(error => {
        console.error('Erro ao buscar livros:', error);
    });
