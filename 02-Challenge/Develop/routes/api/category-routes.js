const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  try{
    const allcategorydata = Category.findAll({
      include: [{Model: Product}],
    })
    res.status(200).json(allcategorydata);
  }
  // find all categories
  // be sure to include its associated Products
 
  catch (err) {
  res.status(500).json(err);
}
});


router.get('/:id', async (req, res) => {
  try {
    const oneCategory = await User.findByPk(req.params.id);
    if (!oneCategory) {
      res.status(404).json({ message: 'No book with this id!' });
      return;
    }
    res.status(200).json(oneCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    // 400 status code means the server could not understand the request
    res.status(400).json(err);
  }
});
  // create a new category
  router.put('/:id', (req, res) => {
    // Calls the update method on the category id
    Category.update(
      {
        // All the fields you can update and the data attached to the request body.
        id: req.body.id,
        category_name: req.body.ccategory_name,
      },
      {
        // Gets the books based on the isbn given in the request parameters
        where: {
          id: req.params.id,
        },
      }
    )
      .then((updatedCategory) => {
        // Sends the updated book as a json response
        res.json(updatedCategory);
      })
      .catch((err) => res.json(err));
  });

router.delete('/:id', (req, res) => {
    // Looks for the books based on isbn given in the request parameters and deletes the instance from the database
    Category.destroy({
      where: {
        id: req.params.isbn,
      },
    })
      .then((deletedCategory) => {
        res.json(deletedCategory);
      })
      .catch((err) => res.json(err));
  });



module.exports = router;
