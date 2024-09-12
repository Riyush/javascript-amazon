// Create tests in Jasmine syntax
// To run this test simply run the html file that links this script in live server
import { calculateCostBreakdown } from "../scripts/checkout_functions.js";
// Create a test suite with describe function
describe("test_suite: order_breakdown_calculation", () => {
    it("first_breakdown", () => {
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
        
        expect(actual_breakdown.gross_cost).toEqual(expected_breakdown.gross_cost);
        expect(actual_breakdown.shipping_cost).toEqual(expected_breakdown.shipping_cost);
        expect(actual_breakdown.total_before_tax).toEqual(expected_breakdown.total_before_tax);
        expect(actual_breakdown.tax).toEqual(expected_breakdown.tax);
        expect(actual_breakdown.order_total).toEqual(expected_breakdown.order_total);

    });
    it("2nd Cost Breakdown", () => {
        const test_cart = [{
            name: "Intermediate Size Basketball",
            picture:"http://127.0.0.1:5500/images/products/intermediate-composite-basketball.jpg",
            price:2095,
            quantity:"1",
            shipping_cost:999
        }]
        
        const expected_breakdown = {
            gross_cost: 3000,
            shipping_cost: 999,
            total_before_tax: 3094,
            tax: 309,
            order_total: 3403,
        }
        const actual_breakdown = calculateCostBreakdown(test_cart);
        
        expect(actual_breakdown.gross_cost).toEqual(expected_breakdown.gross_cost);
        expect(actual_breakdown.shipping_cost).toEqual(expected_breakdown.shipping_cost);
        expect(actual_breakdown.total_before_tax).toEqual(expected_breakdown.total_before_tax);
        expect(actual_breakdown.tax).toEqual(expected_breakdown.tax);
        expect(actual_breakdown.order_total).toEqual(expected_breakdown.order_total);

    });
});