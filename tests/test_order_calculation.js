import { calculateCostBreakdown } from "../scripts/checkout_functions.js";

const test_cart = [{
    name: "Intermediate Size Basketball",
    picture:"http://127.0.0.1:5500/images/products/intermediate-composite-basketball.jpg",
    price:2095,
    quantity:"1",
    shipping_cost:999
}]

const expected_breakdown = {
    gross_cost: 2095,
    shipping_cost: 999,
    total_before_tax: 3094,
    tax: 309,
    order_total: 3403,
}
const actual_breakdown = calculateCostBreakdown(test_cart);

if (
    actual_breakdown.gross_cost === expected_breakdown.gross_cost &&
    actual_breakdown.shipping_cost === expected_breakdown.shipping_cost &&
    actual_breakdown.total_before_tax === expected_breakdown.total_before_tax &&
    actual_breakdown.tax === expected_breakdown.tax &&
    actual_breakdown.order_total === expected_breakdown.order_total
){
    console.log("SUCCESS");
}
else{
    console.log("Test Failed");
}