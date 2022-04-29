// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

Products.hasOne(Category, {
  foreignKey: 'id',
  onDelete: 'CASCADE',
});

// Categories have many Products

Category.hasMany(Products, {
  foreignKey: 'id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
Products.belongsTo(Tag, {
  foreignKey: 'id',
});

// Tags belongToMany Products (through ProductTag)

Tag.belongsTo(Products, {
  foreignKey: 'id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
