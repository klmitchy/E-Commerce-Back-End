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

router.get('/:id', (req, res) => {
  try{
    const onecategory = Product.findByPk({
      //req, res research, how to grab url params and then store in variable
    });
if (project === null) {
  console.log('Not found!');
} else {
  console.log(project instanceof Project); // true
  // Its primary key is 123
}
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
