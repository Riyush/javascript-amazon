export let orders = [];
if (localStorage.getItem("orders") !== null){
    orders = JSON.parse(localStorage.getItem("orders"));
    window.orders = orders;
}

export function addOrder(order) {
    orders.unshift(order);
    savetoStorage();
}
function savetoStorage() {
    localStorage.setItem("orders", JSON.stringify(orders));
}