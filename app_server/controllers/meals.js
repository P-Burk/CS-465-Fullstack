var fs = require('fs');
var mealItems = JSON.parse(fs.readFileSync('./data/mealItems.json', 'utf8'));

/* GET meals view */
const meals = (req, res) => {
    res.render('meals', {title: 'Travlr Getaways', activeTabMeals: true, mealItems});
};
module.exports = {
    meals
};