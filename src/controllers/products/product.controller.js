import {
  getAllProducts as getAllProductsService,
  getProductById as getProductByIdService,
  createProduct as createProductService,
  updateProduct as updateProductService,
  deleteProduct as deleteProductService,
} from "../../services/products/product.service.js";

const handleServiceError = (error, defaultMessage = 'Error en el servicio') => {
  if (!error.statusCode) error.statusCode = 500;
  if (!error.message) error.message = defaultMessage;
  throw error;
};

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await getAllProductsService();
    res.json({ 
      success: true, 
      count: products.length,
      data: products 
    });
  } catch (error) {
    handleServiceError(error, 'Error al obtener los productos');
    next(error);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await getProductByIdService(id);
    
    if (!product) {
      const error = new Error("Producto no encontrado");
      error.statusCode = 404;
      throw error;
    }

    res.json({ success: true, data: product });
  } catch (error) {
    handleServiceError(error, 'Error al obtener el producto');
    next(error);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const productData = req.body;
    const newProduct = await createProductService(productData);
    
    res.status(201).json({
      success: true,
      message: 'Producto creado exitosamente',
      data: newProduct,
    });
  } catch (error) {
    handleServiceError(error, 'Error al crear el producto');
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const productData = req.body;
    
    const updatedProduct = await updateProductService(id, productData);
    
    if (!updatedProduct) {
      const error = new Error("Producto no encontrado");
      error.statusCode = 404;
      throw error;
    }

    res.json({
      success: true,
      message: 'Producto actualizado exitosamente',
      data: updatedProduct,
    });
  } catch (error) {
    handleServiceError(error, 'Error al actualizar el producto');
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await deleteProductService(id);
    
    if (!result) {
      const error = new Error("Producto no encontrado");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      success: true,
      message: 'Producto eliminado exitosamente'
    });
  } catch (error) {
    handleServiceError(error, 'Error al eliminar el producto');
    next(error);
  }
};