/* GET about view */
const travel = (req, res) => {
    res.render('about', {title: 'Travlr Getaways'});
};
module.exports = {
    about
};