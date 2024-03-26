const Product = require("../models/product.model");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.json(200).json(product);
  } catch (error) {
    res.json(500).json({ message: error.message });
  }
};

const creatProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "Product Not Found " });
    }

    const updatedProduct = await product.findById(id);
    res.json(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Product Not Found " });
    }

    res.json(200).json({ message: "Product delete successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getProduct,
  creatProduct,
  updateProduct,
  deleteProduct,
};
