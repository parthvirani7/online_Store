const { productService } = require("../services");

// GET product

const getproduct = async (req, res) => {
  const product = await productService.getproduct();
  console.log(product, "product get");


  res.status(200).json({
    message: "product get success",
    data: product,
  });
};

// ADD product

const addproduct = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    const product = await productService.addproduct(body);

    if (!product) {
      throw new Error("Something went wrong");
    }


    res.status(201).json({
      message: "product Created success",
      data: product,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// UPDATE product

const updateproduct = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    console.log(id, body);
    const product = await productService.updateproduct(id, body);
    res.status(200).json({
      message: "product updated success",
      data: product,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// DELETE product
const deleteproduct = async (req, res) => {
  try {
    console.log(req.params);
    const id = req.params.id;

    const product = await productService.deleteproduct(id);
    if (!product) {
      throw new Error("something went wrong");
    }

    res.status(200).json({
      message: "product delete success",
      data: product,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

module.exports = {
  getproduct,
  addproduct,
  updateproduct,
  deleteproduct,
};
