import Product from '../models/products.model.js';
const productDAO = {};
productDAO.getAll = async() =>{
    const products = await Product.find();
    return products;
};
productDAO.getOne = async(barcode) =>{
    const product = await Product.findOne({barcode: barcode});
    return product;
};
productDAO.insertOne = async(product) =>{ 
    console.log("hola estás en insertOne")
    console.log(product)
    return await Product.create(product);
};
productDAO.updateOne= async(barcode,product) =>{ 
    console.log("hola bb")
    const actualizar = await Product.findOneAndUpdate({barcode:barcode},product)
    console.log(actualizar)
    return actualizar
    
     
};
productDAO.deleteOne= async(barcode) =>{ 
    return await Product.findOneAndDelete({barcode:barcode})
     
};
export default productDAO;