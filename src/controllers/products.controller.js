import productDAO from "../dao/products.dao.js";
 export const getAll=(req,res)=>{
    productDAO.getAll()
        .then(products=> res.render('../src/views/index',{products}))
        .catch(err=> res.json({status:"Server not available"}))
 }
 export const getOne=(req,res)=>{

    productDAO.getOne(req.params.barcode)
        .then(result=> res.render('../src/views/edit',{result}))
        .catch(err=> res.json({
            status:"Server not available"
        }))
 }

 export const insertOne=(req,res)=>{

    // {
    //     nombre: req.body.nombre,
    //     barcode: req.body.barcode,
    //     brand: req.body.brand,
    //     price: parseInt(req.body.price),
    //     cost: parseInt(req.body.cost),
    //     expiredDte:req.body.expiredDate,
    //     status:parseInt(req.body.status)

    // };
    console.log(req.body)
    productDAO.insertOne(req.body)
    .then(result=> 
        res.redirect('/'))
    .catch(err=> res.json({ status:"Product not saved"}))
 }

 export const updateOne = (req,res)=>{
    productDAO.updateOne(req.params.barcode, req.body)
        .then(result => {
            !result ? res.json({
                message:"Product not found"
            }) : res.redirect('/')
        })
        .catch(err=> res.status(500).json({ error: err }))
 }
 export const deleteOne = (req,res)=>{
    productDAO.deleteOne(req.params.barcode)
        .then(result => {
            !result ? res.json({
                message:"Product not found"
            }) : res.redirect('/')
        })
        .catch(err=> res.json({ status:"Product not deleted"}))
 }

