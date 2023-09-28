// Función para obtener los colores según el tipo de Pokémon
function getColorsForType(type) {
    const typeColors = {
        normal: {
            border: '#A8A77A',
            gradient: {
                light: '#D2CFC5',
                dark: '#A9A378'
            }
        },
        fire: {
            border: '#EE8130',
            gradient: {
                light: '#FFA49A',
                dark: '#F7776A'
            }
        },
        water: {
            border: '#6390F0',
            gradient: {
                light: '#8BB8EA',
                dark: '#5596E6'
            }
        },
        electric: {
            border: '#F7D02C',
            gradient: {
                light: '#FFF163',
                dark: '#E6C036'
            }
        },
        grass: {
            border: '#7AC74C',
            gradient: {
                light: '#A8E68D',
                dark: '#71C55E'
            }
        },
        ice: {
            border: '#96D9D6',
            gradient: {
                light: '#BFF6F5',
                dark: '#86E2E1'
            }
        },
        fighting: {
            border: '#C22E28',
            gradient: {
                light: '#E5615C',
                dark: '#D1312A'
            }
        },
        poison: {
            border: '#A33EA1',
            gradient: {
                light: '#C75BC7',
                dark: '#962A91'
            }
        },
        ground: {
            border: '#E2BF65',
            gradient: {
                light: '#EBD59E',
                dark: '#D6A855'
            }
        },
        flying: {
            border: '#A98FF3',
            gradient: {
                light: '#C7BAF8',
                dark: '#967BE5'
            }
        },
        psychic: {
            border: '#F95587',
            gradient: {
                light: '#FF85A6',
                dark: '#F63E76'
            }
        },
        bug: {
            border: '#A6B91A',
            gradient: {
                light: '#CDD64B',
                dark: '#9CA818'
            }
        },
        rock: {
            border: '#B6A136',
            gradient: {
                light: '#D8C469',
                dark: '#AE922D'
            }
        },
        ghost: {
            border: '#735797',
            gradient: {
                light: '#9D8ABF',
                dark: '#5E468C'
            }
        },
        dragon: {
            border: '#6F35FC',
            gradient: {
                light: '#957EFD',
                dark: '#5B28D9'
            }
        },
        dark: {
            border: '#705746',
            gradient: {
                light: '#8E8271',
                dark: '#5B463D'
            }
        },
        steel: {
            border: '#B7B7CE',
            gradient: {
                light: '#D8D8E9',
                dark: '#A0A0BE'
            }
        },
        fairy: {
            border: '#D685AD',
            gradient: {
                light: '#EDB4CE',
                dark: '#C4638F'
            }
        }
    };
    return typeColors[type] || {
        border: '#FFFFFF',
        gradient: {
            light: '#FFFFFF',
            dark: '#DDDDDD'
        }
    };
}

// ... [Resto de tu código JS]

function showPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(pokeData => {
        const pokemonImage = document.getElementById('pokemonImage');
        pokemonImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
        pokemonImage.alt = pokeData.name;

        const primaryType = pokeData.types[0].type.name;
        const colorsForType = getColorsForType(primaryType);

        const pokedexDisplay = document.querySelector('.pokedex-display');
        pokedexDisplay.style.borderColor = colorsForType.border;
        pokedexDisplay.style.backgroundImage = `
            repeating-linear-gradient(
                0deg,
                transparent,
                transparent 20px,
                ${colorsForType.gradient.light} 20px,
                ${colorsForType.gradient.dark} 40px
            )
        `;
    });
}

// ... [Resto de tu código JS]








// Función para mostrar un Pokémon en el pokedex-display
function showPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(pokeData => {
        const pokemonImage = document.getElementById('pokemonImage');
        pokemonImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
        pokemonImage.alt = pokeData.name;

        const primaryType = pokeData.types[0].type.name;
        const colorsForType = getColorsForType(primaryType);

        const pokedexDisplay = document.querySelector('.pokedex-display');
        pokedexDisplay.style.borderColor = colorsForType.border;
        pokedexDisplay.style.backgroundImage = `
            repeating-linear-gradient(
                0deg,
                transparent,
                transparent 20px,
                ${colorsForType.gradient.light} 20px,
                ${colorsForType.gradient.dark} 40px
            )
        `;
    });
}

// Función para centrar el elemento seleccionado
function centerSelectedItem(listItemId) {
    const container = document.querySelector('.pokedex-list');
    const item = document.getElementById(listItemId);
    const containerHeight = container.offsetHeight;
    const itemHeight = item.offsetHeight;
    const itemOffsetTop = item.offsetTop;
    const newScrollTop = itemOffsetTop - (containerHeight / 2) + (itemHeight / 2);
    container.scrollTop = newScrollTop;
}

// Función para crear la lista de Pokémon
function createPokemonList() {
    const pokemonList = document.getElementById('pokemonList');
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(data => {
        data.results.forEach(pokemon => {
            fetch(pokemon.url)
            .then(response => response.json())
            .then(pokeData => {
                let listItem = document.createElement('li');
                listItem.className = 'pokemon-item';
                listItem.id = `pokemon-${pokeData.id}`;

                let pokemonIcon = document.createElement('img');
                pokemonIcon.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeData.id}.png`;
                pokemonIcon.alt = pokeData.name;
                pokemonIcon.className = 'pokemon-icon';

                let pokemonNumber = document.createElement('span');
                pokemonNumber.textContent = `N.° ${pokeData.id.toString().padStart(3, '0')}`;
                pokemonNumber.className = 'pokemon-number';

                let pokemonName = document.createElement('span');
                pokemonName.textContent = pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1);
                pokemonName.className = 'pokemon-name';

                listItem.appendChild(pokemonIcon);
                listItem.appendChild(pokemonNumber);
                listItem.appendChild(pokemonName);

                listItem.addEventListener('click', () => {
                    document.querySelectorAll('.pokemon-item.selected').forEach(el => {
                        el.classList.remove('selected');
                    });
                    listItem.classList.add('selected');
                    showPokemon(pokeData.id);
                    smoothScroll(listItem, document.querySelector('.pokedex-list'));
                });
                pokemonList.appendChild(listItem);
            });
        });
    });
}

createPokemonList();

document.getElementById('numberSearch').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        showPokemon(e.target.value);
    }
});

function smoothScroll(target, container) {
    const itemHeight = target.offsetHeight;
    const itemOffsetTop = target.offsetTop;
    const containerHeight = container.offsetHeight;
    const scrollTarget = itemOffsetTop - (containerHeight / 2) + (itemHeight / 2);
    let start = container.scrollTop;
    let change = scrollTarget - start;
    let duration = 600;
    let startTime = null;

    function animateScroll(currentTime) {
        if (startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let progress = Math.min(timeElapsed / duration, 1);
        container.scrollTop = start + (change * progress);
        if (progress < 1) {
            requestAnimationFrame(animateScroll);
        }
    }
    requestAnimationFrame(animateScroll);
}
