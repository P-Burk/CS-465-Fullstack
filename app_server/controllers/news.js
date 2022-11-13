/* GET news view */
const news = (req, res) => {
    res.render('news', {title: 'Travlr Getaways', activeTabNews: true });
};
module.exports = {
    news
};