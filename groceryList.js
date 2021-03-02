const form = document.querySelector('form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const qtyInput = form.elements.qty;
    const productInput = form.elements.product;
    addOrder(qtyInput.value, productInput.value);
    qtyInput.value = '';
    productInput.value = '';
})
    const list = document.querySelector('#list');
    const addOrder = (qty, product) => {
    const newOrder = document.createElement('li');
    newOrder.prepend(`${qty} ${product}`);
    list.appendChild(newOrder);}