var fs = require('fs');
var contactInfo = JSON.parse(fs.readFileSync('./data/contactInfo.json', 'utf8'));

/* GET contact view */
const contact = (req, res) => {
    res.render('contact', {title: 'Travlr Getaways', activeTabContact: true, contactInfo });
};
module.exports = {
    contact
};