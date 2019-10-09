if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready(){

var removeCartItemButtons = document.getElementsByClassName('btn-dark')
console.log(removeCartItemButtons)

// removes content from the cart
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
    })
}
}

// updates the total of the cart
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]

        console.log(cartRow)
    //     var priceElement = cartRow.getElementsByClassName('cart-price')[0]
    //     var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]

    //     console.log(priceElement, quantityElement)
    }
}

