const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', async (req, res) => {
try {
  const allCategories = await Category.findAll({ include: [{ model: Product}]});
 res.status(200).json(allCategories);
} catch (err) {
  res.status(500).json(err);
 }
});

router.get('/:id', async (req, res) => {
 try {
  const categoryData = await Category.findByPk(req.params.id, { include: [{ model: Product }]});
 res.status(200).json(categoryData);
} catch (err) {
  res.status(500).json(err);
}
});

router.post('/', async (req, res) => {
try {
  const newCategory = await Category.create(req.body);
  res.status(200).json(newTag);
  } catch(err) {
    res.status(500).json(err);
  }});

router.put('/:id', async (req, res) => {
try { 
  const updatedCategory = await Category.update(
    { category_name: req.body.category_name},
    { where: { id: req.params.id}
  }
  )
  res.status(200).json(updatedCategory);
  } catch(err) {
    res.status(500).json(err);
}
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedTag = await Category.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(deletedCategory);
  } catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
