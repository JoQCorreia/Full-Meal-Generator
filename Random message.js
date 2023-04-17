// the parts of the meal to be generated
const appt = ["charcuterie board", "guacamole and chips", "pork sliders", "cheese biscuits", "scones", "pretzel bites", "rissois", "fried shrimp", "chilli fries"];
const main = ["lamb shanks", "lasagna", "ham pizza", "tuna casserole", "deep fried steak", "swedish meatballs", "sauteed salmon", "fried fish", "grilled sardines", "cheeseburger", "baked tilapia"];
const side = ["fried rice", "spaghetti", "white rice", "boiled potatoes", "coleslaw", "country fries", "grilled green beans", "onion rings", "baked sweet potato", "roasted jalapeño peppers", "risotto"];
const dessrt = ["cheesecake","chocolate bundt cake", "crepes", "churro bites", "frosted cupcakes", "brownies", "chunky chocolate chip cookies", "oreo mousse", "pancakes", "pumpkin pie"];

//generates a random number to access each array
const yourMeal = () => {
    const randomAppt = Math.floor(Math.random() * (appt.length + 1));
    const randomMain = Math.floor(Math.random() * (main.length + 1));
    const randomSide = Math.floor(Math.random() * (side.length + 1));
    const randomDessert = Math.floor(Math.random() * (dessrt.length + 1));

    



};

yourMeal();