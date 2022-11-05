/* GET meals view */
const travel = (req, res) => {
    res.render('meals', {title: 'Travlr Getaways'});
};
module.exports = {
    meals
};