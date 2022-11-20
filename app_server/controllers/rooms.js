var fs = require('fs');
var roomInfo = JSON.parse(fs.readFileSync('./data/roomInfo.json', 'utf8'));

/* GET rooms view */
const rooms = (req, res) => {
    res.render('rooms', {title: 'Travlr Getaways', activeTabRooms: true, roomInfo });
};
module.exports = {
    rooms
};