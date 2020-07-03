// Dados da entidade
function UFs(){
    const ufSelect = document.querySelector('[name=uf]');

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then( states => {
        for(const state of states){
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`;
        }
    } );
}

UFs();

function cities(event){
    const citySelect = document.querySelector('[name=city]');
    const stateInput = document.querySelector('[name=state]');

    const ufValue = event.target.value;

    const indexState = event.target.selectedIndex;
    stateInput.value = event.target.options[indexState].text;

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;

    citySelect.innerHTML = '<option value>Selecione a cidade</option>';
    
    citySelect.disabled = true;

    fetch(url)
    .then( res => res.json() )
    .then( cities => {
        for(const city of cities){
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`;
        }

        citySelect.disabled = false;
    } );

};

document.querySelector("[name=uf]").addEventListener("change", cities);

// Itens de coleta
const itemsToCollect = document.querySelectorAll('.items-grid li');

for(const item of itemsToCollect){
    item.addEventListener("click", handleSelectedItem);
}

const collectedItems = document.querySelector('input[name=items]');

let selectedItems = [];

function handleSelectedItem(event){
    const item = event.target;

    item.classList.toggle('selected');

    const itemId = item.dataset.id;

    //Verificar se existem itens selecionados, se sim, pegá-los
    const alreadySelect = selectedItems.findIndex(item => {
        const itemFound = item == itemId;
        return itemFound;
    });

    //Remover itens
    if(alreadySelect >= 0){
        const filteredItems = selectedItems.filter(item => {
            const itemIsDifferent = item != itemId; //false
            return itemIsDifferent;
        });

        selectedItems = filteredItems;
    }
    //Adicionar itens
    else{
        selectedItems.push(itemId);
    }
    
    console.log(selectedItems);

    //Enviar os itens para o input hidden
    collectedItems.value = selectedItems;

}