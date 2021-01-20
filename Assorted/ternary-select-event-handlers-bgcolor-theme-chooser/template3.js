//** ============================================ Ternary, select, event handler, if-else bgcolor, theme chooser **//
const select = document.querySelector('select');
const html = document.querySelector('html');
document.body.style.padding = '50px';

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.onchange = function() {
  ( select.value === 'black' ) ? update('black','white') : update('white','black');
}

// ========================** long version of the above */
select.onchange = function() {
    if (select.value === 'black') {
        update('black', 'white');
    }   else {
        update('white', 'black');
    }
}