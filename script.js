const $form = $('.new-form');
const $field = $('.new-form-text-field');
const $items = $('.items');
const $delete = $('.item-delete');
let count = $items.children().length;

// -------------------------- Events -------------------------
$form.submit( function(e) {
    e.preventDefault();

    const value = $field.val();
    if(value) addItem(value);
    $field.val('');
});

$('.items').on('click', '.item-delete', function(e) {
    const item = $(e.target).parent()[0];
    deleteItem(item);
});

// ------------------------ Functions ------------------------
function addItem(value) {
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

function deleteItem(item) {
    if(confirm('Remove this item?'),item.remove());
}