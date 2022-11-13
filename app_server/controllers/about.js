/* GET about view */
const about = (req, res) => {
    res.render('about', {title: 'Travlr Getaways', activeTabAbout: true });
};
module.exports = {
    about
};