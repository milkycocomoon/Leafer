const plantID = localStorage.getItem('plantID');
import houseplantList from './data.js';

const main = document.querySelector('main');

let plantFileName = houseplantList[plantID].name.toLowerCase().replace("'", '').split(" ").join('_');

window.onload = function() {
    fetch(`./assets/content/${plantFileName}.txt`)
    .then(response => response.text())
    .then(fileContent => {
        document.querySelector('#html').innerHTML = fileContent;
    })
    .catch(error => console.error('Error:', error));
};

function buildPage(index) {
    main.innerHTML =
    `
    <h2><a href="./index.html#encyclopedia">Encyclopedia</a> > ${houseplantList[plantID].name}</h2>
    <div class="flex align-start encyclopedia">
        <div class="flex box-shadow-container plant-description">
            <div class="flex height-100 box-shadow-container-img">
                <div class="card-image" id="image"></div>
            </div>

            <div class="height-100">
                <h4>${houseplantList[plantID].botanical_name}</h4>
                <h1>${houseplantList[plantID].name}</h1>

                <ul class="paddings-0 plant-description-info">
                    <li>
                        <p>Origin</p>
                        <span>${houseplantList[plantID].origin}</span>
                    </li>
                    <li>
                        <p>Plant type</p>
                        <span>${houseplantList[plantID].type}</span>
                    </li>
                    <li>
                        <p>Watering</p>
                        <span>${houseplantList[plantID].watering}</span>
                    </li>
                    <li>
                        <p>Soil</p>
                        <span>${houseplantList[plantID].soil}</span>
                    </li>

                    <li>
                        <p>Propagation</p>
                        <span>${houseplantList[plantID].propagation}</span>
                    </li>
                    <li>
                        <p>Height</p>
                        <span>${houseplantList[plantID].height}</span>
                    </li>
                    <li>
                        <p>Temperature</p>
                        <span>${houseplantList[plantID].temperature}</span>
                    </li>
                    <li>
                        <p>Humidity</p>
                        <span>${houseplantList[plantID].humidity}</span>
                    </li>
                </ul>
            </div>
        </div>

        <div class="width-100">
            <div id="bgImage"></div>
            <div id="html"></div>
        </div>
    </div>
    `
};

buildPage(plantID);

document.title = `Encyclopedia - ${houseplantList[plantID].name}`;

const image = document.querySelector('#image');
const bgImage = document.querySelector('#bgImage');

image.style.backgroundImage = `url(./assets/images/all_plants_webp/${plantFileName}.webp)`;
bgImage.style.backgroundImage = `url(./assets/images/all_plants_webp/${plantFileName}_background.webp)`;