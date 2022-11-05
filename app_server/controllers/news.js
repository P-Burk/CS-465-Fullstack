/* GET news view */
const travel = (req, res) => {
    res.render('news', {title: 'Travlr Getaways'});
};
module.exports = {
    news
};