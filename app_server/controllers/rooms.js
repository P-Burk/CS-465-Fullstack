/* GET rooms view */
const travel = (req, res) => {
    res.render('rooms', {title: 'Travlr Getaways'});
};
module.exports = {
    rooms
};