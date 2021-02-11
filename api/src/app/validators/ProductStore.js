// const Yup = require('yup');

// module.exports = async (req, res, next) => {
//   try {
//     const schema = Yup.object().shape({
//       code: Yup.number().required(),
//       barcode: Yup.string().required(),
//       status: Yup.string().required(),
//       imported_t: Yup.date().required(),
//       url: Yup.string().required(),
//       product_name: Yup.string().required(),
//       quantity: Yup.string().required(),
//       categories: Yup.string().required(),
//       packaging: Yup.string().required(),
//       brands: Yup.string().required(),
//       image_url: Yup.string().required(),
//     });

//     await schema.validate(req.body, { abortEarly: false });

//     return next();
//   } catch (err) {
//     return res
//       .status(400)
//       .json({ error: 'Validation fails.', messages: err.inner });
//   }
// };
