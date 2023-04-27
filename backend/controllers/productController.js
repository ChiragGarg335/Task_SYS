const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

const getProduct = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

const createProduct = asyncHandler(async (req, res) => {
  const { title, description, price, image } = req.body;

  if (!title || !description || !image || !price) {
    res.status(400);
    throw new Error("Please Fill all the feilds");
    return;
  } else {
    const product = new Product({ title, description, image, price });

    const createdProduct = await product.save();

    res.json(createdProduct);
  }
});

const update = asyncHandler(async (req, res) => {
  const { title, description, image, price } = req.body;
  console.log(req.params.id);
  const product = await Product.findById(req.params.id);

  if (product) {
    product.title = title;
    product.description = description;
    product.image = image;
    product.price = price;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Note not found");
  }
});
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  console.log(product);
  if (product) {
    await product.deleteOne();
    res.json({ message: "Product Removed" });
  } else {
    res.status(404);
    throw new Error("Product not Found");
  }
});

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
});
module.exports = {
  getProduct,
  createProduct,
  update,
  deleteProduct,
  getProductById,
};
