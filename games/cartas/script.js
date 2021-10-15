let allAnimals = [{
    id: 1, image: {
        id: 1,
        parentId: 1,
        media: '../../images/animales/caballo.png',
        type: 'image'
    }, text: {
        id: 2,
        parentId: 1,
        media: 'caballo',
        type: 'text'
    },
}, {
    id: 2, image: {
        id: 3,
        parentId: 2,
        media: '../../images/animales/cabra.png',
        type: 'image'
    }, text: {
        id: 4,
        parentId: 2,
        media: 'cabra',
        type: 'text'
    },
}, {
    id: 3, image: {
        id: 5,
        parentId: 3,
        media: '../../images/animales/canguro.png',
        type: 'image'
    }, text: {
        id: 6,
        parentId: 3,
        media: 'canguro',
        type: 'text'
    },
}, {
    id: 4, image: {
        id: 7,
        parentId: 4,
        media: '../../images/animales/caracol.png',
        type: 'image'
    }, text: {
        id: 8,
        parentId: 4,
        media: 'caracol',
        type: 'text'
    },
}, {
    id: 5, image: {
        id: 9,
        parentId: 5,
        media: '../../images/animales/castor.png',
        type: 'image'
    }, text: {
        id: 10,
        parentId: 5,
        media: 'castor',
        type: 'text'
    },
}, {
    id: 6, image: {
        id: 11,
        parentId: 6,
        media: '../../images/animales/cerdo.png',
        type: 'image'
    }, text: {
        id: 12,
        parentId: 6,
        media: 'cerdo',
        type: 'text'
    },
}, {
    id: 7, image: {
        id: 13,
        parentId: 7,
        media: '../../images/animales/cocodrilo.png',
        type: 'image'
    }, text: {
        id: 14,
        parentId: 7,
        media: 'cocodrilo',
        type: 'text'
    },
}, {
    id: 8, image: {
        id: 15,
        parentId: 8,
        media: '../../images/animales/conejo.png',
        type: 'image'
    }, text: {
        id: 16,
        parentId: 8,
        media: 'conejo',
        type: 'text'
    },
}, {
    id: 9, image: {
        id: 17,
        parentId: 9,
        media: '../../images/animales/gallina.png',
        type: 'image'
    }, text: {
        id: 18,
        parentId: 9,
        media: 'gallina',
        type: 'text'
    },
}, {
    id: 10, image: {
        id: 19,
        parentId: 10,
        media: '../../images/animales/hipopotamo.png',
        type: 'image'
    }, text: {
        id: 20,
        parentId: 10,
        media: 'hipopótamo',
        type: 'text'
    },
}, {
    id: 11, image: {
        id: 21,
        parentId: 11,
        media: '../../images/animales/leon.png',
        type: 'image'
    }, text: {
        id: 22,
        parentId: 11,
        media: 'león',
        type: 'text'
    },
}, {
    id: 12, image: {
        id: 23,
        parentId: 12,
        media: '../../images/animales/leopardo.png',
        type: 'image'
    }, text: {
        id: 24,
        parentId: 12,
        media: 'leopardo',
        type: 'text'
    },
}, {
    id: 13, image: {
        id: 25,
        parentId: 13,
        media: '../../images/animales/loro-2.png',
        type: 'image'
    }, text: {
        id: 26,
        parentId: 13,
        media: 'loro',
        type: 'text'
    },
}, {
    id: 14, image: {
        id: 27,
        parentId: 14,
        media: '../../images/animales/oso-panda.png',
        type: 'image'
    }, text: {
        id: 28,
        parentId: 14,
        media: 'oso\npanda',
        type: 'text'
    },
}, {
    id: 15, image: {
        id: 29,
        parentId: 15,
        media: '../../images/animales/oveja.png',
        type: 'image'
    }, text: {
        id: 30,
        parentId: 15,
        media: 'oveja',
        type: 'text'
    },
}
]
let animals = []
let cache = []
let score = 0
let numberAnimals = 12

$(document).ready(() => {
    allAnimals.sort(() => {
        return Math.random() - 0.5
    });
    for (let i = 0; i < numberAnimals; i++) {
        animals.push(allAnimals[i].text)
        animals.push(allAnimals[i].image)
    }
    animals.sort(() => {
        return Math.random() - 0.5
    });
    createCards(animals);
    refreshScore()
})

const refreshScore = () => {
    $('#score').text(`animales encontrados: ${score}/${animals.length / 2}`)
}

const createCards = (animals) => {
    animals.forEach((animal) => {
        $('#cards-container').append(animal.type === 'image' ? imageCard(animal) : textCard(animal));
        $(`#${animal.id}`).flip({trigger: 'manual'});
    });
}

const imageCard = (animal) => {
    return `<div id="${animal.id}" class="animal-card m-2" onclick="handleClickCard(this)">
            <div class="front animal-card-front d-flex flex-column justify-content-center align-items-center">
                <img src="../../images/escudo-1.ico" class="img-fluid icon-image"  alt="icon">
            </div>
            <div class="back animal-card-back d-flex flex-row justify-content-center">
                <img src="${animal.media}" class="img-fluid animal-image"  alt="${animal.id}">
            </div>
        </div>`
}

const textCard = (animal) => {
    return `<div id="${animal.id}" class="animal-card m-2" onclick="handleClickCard(this)">
            <div class="front animal-card-front d-flex flex-column justify-content-center align-items-center">
                <img src="../../images/escudo-1.ico" class="img-fluid icon-image"  alt="icon">
            </div>
            <div class="back animal-card-back d-flex flex-column justify-content-center">
                <h1 class="text-center animal-card-text">${animal.media.toLowerCase()}</h1>
            </div>
        </div>`
}

const handleClickCard = (e) => {
    const elementId = $(e).attr('id')
    $(`#${elementId}`).flip(true, () => {
        cache.push(getAnimalFromId(elementId))
        if (cache.length === 2) {
            const firstAnimal = cache[0]
            const secondAnimal = cache[1]
            if (firstAnimal.parentId === secondAnimal.parentId) {
                score++
                refreshScore()
                cache = []
                if (score === animals.length / 2) {
                    $('#modal').modal('toggle')
                }
            } else {
                cache.forEach(animal => handleFlipCard(animal.id))
                cache = []
            }
        }
    })
}

const handleFlipCard = (id) => {
    $(`#${id}`).flip(false)
}

const getAnimalFromId = (id) => {
    return animals.filter(e => e.id === Number(id))[0]
}
