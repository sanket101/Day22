let Movie = require('./movieModel');

exports.create = function(req, res){
    
    console.log("Came inside save method");
    let movie = new Movie();
    movie.name = req.body.name;
    movie.save(function(err){
        res.json({
            status:'SUCCESS',
            data: movie
        });
    })
    
};

exports.listAll = function(req,res){
    console.log("Came inside listAll method");
    Movie.get(function (err, movie) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Messages retrieved successfully",
            data: movie
        });
    });
};

exports.findById = function(req, res){
    console.log("Came inside listAll method");

    Movie.findById(req.params.id, function (err, movie) {
        if (err)
            res.send(err);
        res.json({
            message: 'Movie details loading..',
            data: movie
        });
    });
};

exports.update = function (req, res) {
    Movie.findById(req.params.id, function (err, movie) {
            if (err)
                res.send(err);
                movie.name = req.body.name ? req.body.name : movie.name;
                // save the contact and check for errors
                movie.save(function (err) {
                    if (err)
                        res.json(err);
                        res.json({
                            message: 'Movie Info updated',
                            data: movie
                        });
                });
        });
};

exports.delete = function (req, res) {
    Movie.remove({
        _id: req.params.id
    }, function (err, movie) {
        if (err)
            res.send(err);
            res.json({
                status: "success",
                message: 'Movie deleted'
            });
    });
};