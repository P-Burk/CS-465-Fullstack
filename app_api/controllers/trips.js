const mongoose = require('mongoose'); //.set('debug', true)
const Model = mongoose.model('trips');
const User = mongoose.model('users');

//GET: /trips - list all of the trips
const tripsList = async (req, res) => {
    Model
        .find({})   //empty filter for all
        .exec((err, trips) => {
            if (!trips) {
                return res.status(404).json({"message": "trips not found"});
            } else if (err) {
                return res.status(404).json(err);
            } else {
                return res.status(200).json(trips);
            }
        });
};

//GET: /trips/:tripCode - returns a single trip
const tripsFindCode = async (req, res) => {
    Model
        .find({ 'code': req.params.tripCode })
        .exec((err, trip) => {
            if (!trip) {
                return res.status(404).json({"message": "trips not found"})
            } else if (err) {
                return res.status(404).json(err);
            } else {
                return res.status(200).json(trip);
            }
        });
};

const tripsAddTrip = async (req, res) => {
    getUser(req, res,
        (req, res) => {
            Model.create({
                code: req.body.code,
                name: req.body.name,
                length: req.body.length,
                start: req.body.start,
                resort: req.body.resort,
                perPerson: req.body.perPerson,
                image: req.body.perPerson,
                image: req.body.image,
                description: req.body.description
            },
                (err, trip) => {
                    if (err) {
                        return res
                            .status(400) // bad request, invalid content
                            .json(err);
                    } else {
                        return res  
                            .status(201) // created
                            .json(trip);
                    }
                });
        }
    );
}

const tripsUpdateTrip = async (req, res) => {
    getUser(req, res, (req, res) => {
        Model.findOneAndUpdate({ 'code': req.params.tripCode }, {
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        }, { new: true })
        .then(trip => {
            if (!trip) {
                return res
                    .status(404)
                    .send({ message: "Trip not found with code " + req.params.tripCode });
            }

            res.send(trip);

        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res
                    .status(404)
                    .send({ message: "Trip not found with code " + req.params.tripCode });
            }
            return res
                .status(500) // server error
                .json(err);
        });
    });
}

const tripsDeleteTrip = async (req, res) => {
    console.log("Inside trips.js controller in backend API #tripsDeleteTrip");
    Model
    .findOneAndDelete({ 'code': req.params.tripCode })
    .then(trip => {
        if (!trip) {
            return res
                .status(404)
                .send({ message: "Trip not found with code " + req.params.tripCode });
        }

        res.send(trip);

    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res
                .status(404)
                .send({ message: "Trip not found with code " + req.params.tripCode });
        }
        return res
            .status(500) // server error
            .json(err);
    });
}

const getUser = (req, res, callback) => {
    //console.log(req);
    if (req.auth && req.auth.email) {
        User
            .findOne({ email : req.auth.email })
            .exec((err, user) => {
                if (!user) {
                    return res.status(404).json({"message": "Email not found"});
                } else if (err) {
                    console.log(err);
                    return res.status(404).json(err);
                }
                callback(req, res, user.name);
            });
    } else {
        return res
            .status(404)
            .json({"message": "User not found."});   
    }
};
       

module.exports = {
    tripsList,
    tripsFindCode,
    tripsAddTrip,
    tripsUpdateTrip,
    tripsDeleteTrip,
    getUser
};