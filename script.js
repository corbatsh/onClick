const childDiv = document.createElement('div');
childDiv.classList.add('childdiv');

const wierszyki = document.createElement('div');
wierszyki.classList.add('childdiv');

const wierszykiChild = document.createElement('div');
wierszykiChild.classList.add('wierszykiChild');
wierszyki.append(wierszykiChild);

const wierszykiChildTag = document.createElement('div');
wierszykiChildTag.classList.add('wierszykiChildTag');
wierszyki.append(wierszykiChildTag);

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
createImgBlock('samoyed.jpg', 'Samoyed');
createImgBlock('husky.jpg', 'Husky');
createImgBlock('chowchow.jpg', 'Chow chow');
createImgBlock('owczarek.jpg', 'Owczarek niemiecki');

// Pobranie wszystkich blockow ze zdjeciami
const textBlocks = document.querySelectorAll('.textblock');
wierszykiChildTag.innerText = `Opis psa`;
        wierszykiChild.innerText = `Nazwa psa`;
// dodanie ewentu onClick do wszystkich textBlocków
textBlocks.forEach(element => {
    element.addEventListener('click', (event) => {
        // usuwanie klasy 'active' wszystkich elementów które mają klasę textblock i active
        document.querySelectorAll('.textblock.active').forEach(element => {
            element.classList.remove('active');
             const dogName = event.target.children[0].alt;
        wierszykiChildTag.innerHTML = dogName;
        });

        // rodzic elementu który został nacisnięty dostaje klase 'active'
        event.target.classList.add('active');

        // do stalej wpisuje alt z img które zostało naciśnięte
        const dogName = event.target.children[0].alt;
        wierszykiChild.innerHTML = dogName;

        const dogDesc1 = ` to muskularny, korpulentny pies,
        który osiąga do 53 cm wysokości w kłębie oraz wagę do 27 kg, 
        W oczy rzuca się muskularna głowa z półstojącymi uszami`;

        const dogDesc2 = ` jedna z ras psów, należąca do grupy psów do towarzystwa,
        zaklasyfikowana do sekcji małych psów molosowatych. Typ dogowaty.`;

        const dogDesc3 = ` rasa psa należąca do grupy psów do towarzystwa,
        zaklasyfikowana do sekcji małych psów molosowatych. Typ dogowaty`;

        const dogDesc4 = ` jedna z ras psów, należąca do grupy psów pasterskich i zaganiających,
        zaklasyfikowana do sekcji psów pasterskich. Typ jamnikowaty`;

        const dogDesc5 = ` rasa psów, należąca do grupy szpiców i psów pierwotnych,
        zaklasyfikowana do sekcji północnych psów zaprzęgowych`;

        const dogDesc6 = ` jedna z ras psów, należąca do grupy szpiców i psów w typie pierwotnym,
        zaklasyfikowana do sekcji północnych psów zaprzęgowych`;

        const dogDesc7 = ` rasa psa należąca do grupy szpiców i psów pierwotnych,
                 zaklasyfikowana do sekcji szpiców azjatyckich i ras pokrewnych. Typ lisowaty`;
        
        const dogDesc8 = ` jedna z ras psów należąca do grupy psów pasterskich,
         sklasyfikowana do sekcji psów pasterskich.
        Według klasyfikacji FCI podlega próbom pracy`;

        
        // dopisywanie opisu
        switch(dogName) {
            case 'Pitbull':
                wierszykiChildTag.innerText = dogDesc1;
                 wierszykiChild.innerText = dogName;
                break;

            case 'Buldog francuski':
                wierszykiChildTag.innerText = dogDesc2;
                 wierszykiChild.innerText = dogName;
                break;
            case 'Mops': 
            wierszykiChildTag.innerText = dogDesc3;
                 wierszykiChild.innerText = dogName;
                break; 

            case 'Corgi':
                wierszykiChildTag.innerText = dogDesc4;
                 wierszykiChild.innerText = dogName;
                break;    

                case 'Samoyed':
                    wierszykiChildTag.innerText = dogDesc5;
                 wierszykiChild.innerText = dogName;
                break;

            case 'Husky':
                wierszykiChildTag.innerText = dogDesc6;
                 wierszykiChild.innerText = dogName;
                break;
            case 'Chow chow': 
            wierszykiChildTag.innerText = dogDesc7;
                 wierszykiChild.innerText = dogName;
                break;

            case 'Owczarek niemiecki':
                wierszykiChildTag.innerText = dogDesc8;
                 wierszykiChild.innerText = dogName;
                break;    
        }
        
    });
})
