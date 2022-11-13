/* GET meals view */
const meals = (req, res) => {
    res.render('meals', {title: 'Travlr Getaways', activeTabMeals: true });
};
module.exports = {
    meals
};