/* GET 'home' page */
module.exports.pizzaList = function(req, res) {
    res.render('pizza-list', {
        title: 'PizzaFinder - find a place to find Pizza',
        pageHeader: {
            title: 'PizzaLocater',
            strapline: 'Find Pizza'
        },
        sidebar: "Pizza is Delicious.",
        locations: [{
            name: 'Pizza Hut',
            address: '110 23rd St, Canyon, TX 79015',
            rating: 3,
            facilities: ['Cool drinks', 'Food', 'Premium wifi'],
            distance: '100m'
        }, {
            name: 'Dominos Pizza',
            address: '2310 9th Ave, Canyon, TX 79015',
            rating: 4,
            facilities: ['Cool drinks', 'Food', 'Premium wifi'],
            distance: '200m'
        }, {
            name: 'La Bella Pizza',
            address: '700 23rd St, Canyon, TX 79015',
            rating: 2,
            facilities: ['Cool', 'Premium wifi'],
            distance: '250m'
        }]
    });
};

/* GET 'Location info' page */
module.exports.pizzaLocationInfo = function(req, res) {
    res.render('pizza-info', {
        title: 'Pizza Hut',
        pageHeader: {
            title: 'Pizza Hut'
        },
        sidebar: {
            context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Pizza Hut',
            address: '110 23rd St, Canyon, TX 79015',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            coords: {
                lat: 34.982300,
                lng: -101.920045
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '11:00am',
                closing: '10:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '11:00am',
                closing: '10:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Mary Mata',
                rating: 5,
                timestamp: '14 September 2016',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }, {
                author: 'Charlie Chaplin',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
            }]
        }
    });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res) {
    res.render('location-review-form', {
        title: 'Review Starcups on Loc8r',
        pageHeader: {
            title: 'Review Starcups'
        }
    });
};