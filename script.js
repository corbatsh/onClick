const childDiv = document.createElement('div');
childDiv.classList.add('childdiv');

const wierszyki = document.createElement('div');
wierszyki.classList.add('childdiv');

const wierszykiChild = document.createElement('div');
wierszykiChild.classList.add('wierszykiChild');
wierszyki.append(wierszykiChild);

const maindiv = document.createElement('div');
maindiv.classList.add('maindiv');
maindiv.append(childDiv, wierszyki);
document.body.append(maindiv);

// tworzenie elementu ze zdjeciem i dodanie go do childDiva
const createImgBlock = (imgSrc, alt) => {
    const textBlock = document.createElement('div');
    textBlock.classList.add('textblock');
    textBlock.innerHTML = `<img src="${imgSrc}" alt="${alt}">`;
    childDiv.append(textBlock);
}

// wywolywanie funkcji - tworzenie blockow ze zdjeciami
createImgBlock('pitbull.jpg', 'Pitbull');
createImgBlock('buldog.jpg', 'Buldog francuski');
createImgBlock('mops.jpg', 'Mops');
createImgBlock('corgi.jpg', 'Corgi');

// Pobranie wszystkich blockow ze zdjeciami
const textBlocks = document.querySelectorAll('.textblock');

// dodanie ewentu onClick do wszystkich textBlocków
textBlocks.forEach(element => {
    element.addEventListener('click', (event) => {
        // usuwanie klasy 'active' wszystkich elementów które mają klasę textblock i active
        document.querySelectorAll('.textblock.active').forEach(element => {
            element.classList.remove('active');
        });

        // rodzic elementu który został nacisnięty dostaje klase 'active'
        event.target.classList.add('active');

        // do stalej wpisuje alt z img które zostało naciśnięte
        const dogName = event.target.children[0].alt;
        wierszykiChild.innerHTML = dogName;

        // dopisywanie opisu
        switch(dogName) {
            case 'Pitbull':
                wierszykiChild.innerHTML += ` - to muskularny, korpulentny pies,
                 który osiąga do 53 cm wysokości w kłębie oraz wagę do 27 kg. W oczy rzuca się muskularna głowa z półstojącymi uszami`;
                break;

            case 'Buldog francuski':
                wierszykiChild.innerHTML += ` - jedna z ras psów, należąca do grupy psów do towarzystwa,
                    zaklasyfikowana do sekcji małych psów molosowatych. Typ dogowaty.`;
                break;
            case 'Mops': 
                wierszykiChild.innerHTML += ` - rasa psa należąca do grupy psów do towarzystwa,
                 zaklasyfikowana do sekcji małych psów molosowatych. Typ dogowaty`;
                break    

            case 'Corgi':
                wierszykiChild.innerHTML += ` - jedna z ras psów, należąca do grupy psów pasterskich i zaganiających,
                    zaklasyfikowana do sekcji psów pasterskich. Typ jamnikowaty`;
                break;    
        }
    });
})
