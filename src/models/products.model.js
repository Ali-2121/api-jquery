import { Schema, model } from 'mongoose';
const productSchema = new Schema({
    nombre: String,
    barcode:{
        type: String,
        unique: true,
        required: true 
    },
    brand:String,
    price: Number,
    cost: Number,
    stock:Number,
    expiredDate:String,
    status:Number
},{
    versionKey:false,
    timestamps:true
})

export default model('product', productSchema)