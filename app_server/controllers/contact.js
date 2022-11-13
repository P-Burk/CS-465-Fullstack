/* GET contact view */
const contact = (req, res) => {
    res.render('contact', {title: 'Travlr Getaways', activeTabContact: true });
};
module.exports = {
    contact
};