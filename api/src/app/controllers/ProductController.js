const Product = require('../models/Product');

class ProductController {
  async index(req, res) {
    const ProjectItem = await Product.find({ code: req.params.code });

    if (ProjectItem === undefined || ProjectItem.length == 0) {
      res.json({ error: 'Data not found!' });
    }

    return res.json(ProjectItem);
  }

  async indexAll(req, res) {
    const notifications = await Product.find()
      .sort({ createdAt: 'desc' })
      .limit(100);

    return res.json(notifications);
  }

  // async store(req, res) {
  //   const {
  //     code,
  //     barcode,
  //     status,
  //     imported_t,
  //     url,
  //     product_name,
  //     quantity,
  //     categories,
  //     packaging,
  //     brands,
  //     image_url,
  //   } = req.body;

  //   const addGreen = await Product.create({
  //     code,
  //     barcode,
  //     status,
  //     imported_t,
  //     url,
  //     product_name,
  //     quantity,
  //     categories,
  //     packaging,
  //     brands,
  //     image_url,
  //   });

  //   return res.json(addGreen);
  // }
}

module.exports = new ProductController();
