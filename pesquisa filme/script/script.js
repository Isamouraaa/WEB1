const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const resultsGrid = document.getElementById('results-grid');

async function searchShows() {
    const query = searchInput.value.trim();
    if (!query) return;

    resultsGrid.innerHTML = `
        <div class="col-12 text-center my-5">
            <div class="spinner-border text-danger" role="status">
                <span class="visually-hidden">Carregando...</span>
            </div>
        </div>`;

    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
        const data = await response.json();
        
        renderCards(data);
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        resultsGrid.innerHTML = `
            <div class="col-12 text-center my-5">
                <div class="alert alert-danger d-inline-block" role="alert">
                    Erro ao carregar os dados. Tente novamente mais tarde.
                </div>
            </div>`;
    }
}

function renderCards(results) {
    resultsGrid.innerHTML = '';

    if (results.length === 0) {
        resultsGrid.innerHTML = `
            <div class="col-12 text-center my-5">
                <p class="fs-5 text-muted">Nenhum resultado encontrado.</p>
            </div>`;
        return;
    }

    results.forEach(item => {
        const show = item.show;

        const imageUrl = show.image ? show.image.medium : 'https://via.placeholder.com/210x295/333/fff?text=Sem+Imagem';
        const genres = show.genres && show.genres.length > 0 ? show.genres.join(', ') : 'Não informado';
        const summary = show.summary ? show.summary.replace(/<\/?[^>]+(>|$)/g, "") : 'Sem resumo disponível.';

        const col = document.createElement('div');
        col.classList.add('col');

        col.innerHTML = `
            <div class="card h-100 bg-dark text-white border-secondary shadow-sm">
                <img src="${imageUrl}" class="card-img-top" alt="${show.name}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title text-truncate fw-bold">${show.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted small">Gênero: ${genres}</h6>
                    <p class="card-text text-secondary small flex-grow-1">${summary}</p>
                </div>
            </div>
        `;

        resultsGrid.appendChild(col);
    });
}

searchButton.addEventListener('click', searchShows);

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchShows();
    }
});
