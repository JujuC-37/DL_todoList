const $form = $('.new-form');
const $field = $('.new-form-text-field');
const $items = $('.items');
const $delete = $('.item-delete');
let count = $items.children().length;

const items = loadStorage();
//items.forEach(addItemToList);
for (let item of items) {
    addItemToList(item);
}

// -------------------------- Events -------------------------
$form.submit( function(e) {
    e.preventDefault();

    const value = $field.val();
    if(value) addItemToList(value);
    addToStorage(value);
    $field.val('');
});

$('.items').on('click', '.item-delete', function(e) {
    const item = $(e.target).parent();

    deleteItem(item);
});

// ------------------------ Functions ------------------------
function loadStorage() {
    try {
        console.log(localStorage.items);
        return JSON.parse(localStorage.items) || [];
    }
    catch(err) {
        console.warn('Error while loading data: ', err);
        return [];
    }
}

function addItemToList(value) {
    let i = count++;
    $('.items')
        .append(`
            <li class="item">
                <input type="checkbox" class="item-check" id="item-${i}">
                <label for="item-${i}" class="item-text">${value}</label>
                <button type="button" class="item-delete">X</button>
            </li>
        `);
};

function addToStorage(value) {
    items.push(value);
    localStorage.items = JSON.stringify(items);
}

function deleteItem(item) {
    if(confirm('Remove this item?')) {
        const index = item.index();
        removeFromStorage(index);
        item.remove();
    }
}

function removeFromStorage(index) {
    console.log('index', index);
    items.splice(index, 1);
    localStorage.items = JSON.stringify(items);
}