/* GET homepage */
const index = (req, res) => {
    res.render('index', {title: 'Travlr Getaways', activeTabIndex: true });
};
module.exports = {
    index
};