export const deleteProduct = (req, res) => {
    res.json({ message: `Producto con ID: ${req.params.id} eliminado correctamente` });
}