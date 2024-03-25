let plantID = 0;

const cards = document.querySelector('#cards');
import houseplantList from './data.js';
let plants = houseplantList.sort((a, b) => a.name.localeCompare(b.name));

// Search
const search = document.querySelector('#search');
const abcButton = document.querySelectorAll('.abc');
const typeButton = document.querySelectorAll('.type');

search.addEventListener('keyup', (e) => {
    abcButton.forEach((button) => {
        button.classList.remove('active');
    });
    typeButton.forEach((button) => {
        button.classList.remove('active');
    });

    const searchString = e.target.value.toLowerCase();
    const filteredItemsArray = houseplantList.filter( item => {
        return (item.name.toLowerCase().includes(searchString));
    });
    plants = filteredItemsArray;
    genCards(plants);

    if (e.key === 'Enter' || e.key === '13'){
        return window.location.href = '#filters';
    }
});

const searchButton = document.querySelector('#searchButton');
searchButton.addEventListener('click', () => {
    return window.location.href = '#filters';
});

// Filters
let currentFilters = {
    abcFilter: null,
    typeFilter: null
};

function applyFilters() {
    const filtered = plants.filter( a =>
        (!currentFilters.abcFilter || a.name.toLowerCase().startsWith(currentFilters.abcFilter.toLowerCase())) &&
        (!currentFilters.typeFilter || a.type === currentFilters.typeFilter));
    genCards(filtered);
};

function toggleFilter(property, filterValue) {
    if (currentFilters[property] === filterValue) {
        currentFilters[property] = null;
    } else {
        currentFilters[property] = filterValue;
    }
    applyFilters();
};

abcButton.forEach((a) => {
    a.addEventListener('click', function() {
        const filterValue = a.getAttribute('id');
        const isActive = a.classList.contains('active');

        abcButton.forEach((button) => {
            button.classList.remove('active');
        });

        // Toggle the filter and set 'active' class based on the current state
        toggleFilter('abcFilter', isActive ? null : filterValue);

        // If not active, add 'active' class to the clicked button
        if (!isActive) {
            a.classList.add('active');
        }
    });
});

typeButton.forEach((a) => {
    a.addEventListener('click', function() {
        const filterValue = a.getAttribute('id');
        const isActive = a.classList.contains('active');

        typeButton.forEach((button) => {
            button.classList.remove('active');
        });

        toggleFilter('typeFilter', isActive ? null : filterValue);

        if (!isActive) {
            a.classList.add('active');
        }
    });
});

// Generate and render plant's cards
const genCards = (plants) => {
    const htmlString = plants.map((houseplantList) => {
        return `
                <a class="card flex column ${houseplantList.type}" href="./encyclopedia.html" id="${houseplantList.i}">
                    <div class="card-image" style="background-image: url(./assets/images/all_plants_webp/${houseplantList.name.toLowerCase().replace("'", '').split(" ").join('_')}.webp), var(--radial-gradient)"></div>
                    <h4>${houseplantList.name}</h4>
                </a>
               `;
    }).join('');
    cards.innerHTML = htmlString;

    if (!cards.hasChildNodes()) {
        cards.style.display = 'flex';
        cards.innerHTML = `
                          <p id="popup" style="width: 100%; padding: 0.5rem; color: var(--color-error-500); background-color: var(--color-error-200)">Plants are not found</p>
                          `;
        return;
    } else {
        cards.style.display = 'grid';
    };

    // Get plantID
    const card = document.querySelectorAll('.card');
    card.forEach((a) =>
    a.addEventListener('click', function() {
        plantID = a.getAttribute('id');
        localStorage.setItem('plantID', a.getAttribute('id'));
    })
);
}
genCards(plants);