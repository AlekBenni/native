import { CityType } from "./02_02";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [{buildetAt:2012, repaired:false, address: {number:15, street: {title:"White street"}}}, 
        {buildetAt:2008, repaired:true, address: {number:18, street: {title:"Red street"}}}, 
        {buildetAt:2015, repaired:false, address: {number:5, street: {title:"Black street"}}}],
        governmentBuilding: [],
        cityzenNumber: 100000
    }
})

test("test city should contains 3 houses", () => {
    expect(city.houses.length).toBe(3);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(15);
})