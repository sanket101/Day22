let router = require('express').Router();
let MoviesController = require('./moviesController');

router.get('/', (req,res)=>{
    res.json({
        status : 'API is wroking',
        message : 'MoviesApp rest api'
    })
});

router.route('/movies')
      .get(MoviesController.listAll)
      .post(MoviesController.create);

router.route('/movies/:id')
    .get(MoviesController.findById)
    .put(MoviesController.update)
    .delete(MoviesController.delete);

module.exports = router;