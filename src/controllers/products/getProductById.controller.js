export const getProductById = (req, res) => {
   res.json({ message: `Producto con ID: ${req.params.id}` });
};