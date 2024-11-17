const Product = require("../models/productModel")
const CatchError = require("../resources/catcherror")
const tryCatcherror=require('../Middleware/tryCatcherror')

exports.createProduct = tryCatcherror(async (req, res, next) => {
  const product = await Product.create(req.body)
  
  res.status(201).json({
    success: true,
    product
})
})

exports.findAllProduct=tryCatcherror(async(req,res)=>{
  const product = await Product.find()
  res.status(200).json({
    success:true,
    product
  })
})

exports.updateProduct=tryCatcherror(async(req,res,next)=>{
  const updateProduct=await Product.updateOne(
  req.params,
  {
      $set:req.body
  }
)
if(!updateProduct){
  return next(new CatchError("product not found",404))
}
res.status(200).json({
  success:true,
  message:"Product updated successfully"
})
})

exports.deleteProduct=tryCatcherror(async(req,res,next)=>{
  const deleteProduct=await Product.deleteOne(req.params)
  if(!deleteProduct){
    return next(new CatchError("product not found",404))
  }
  res.status(200).json({
    success:true,
    message:"Product deleted successfully"
  })
})

exports.findProduct = tryCatcherror(async(req, res,next) => {
  const product=await Product.findById(req.params.id)
  if(!product){
    return next(new CatchError("product not found",404))
  }
  res.status(200).json({
    success:true,
    product
  })
})

exports.productReview = tryCatcherror(async(req, res,next) => {
  const {rating,comment,productId} = req.body
  const review = {
    user:req.user._id,
    name:req.user.name,
    rating:Number(rating),
    comment
  }
  const product = await Product.findById(productId)
  const isReviewed = product.reviews.find(rev=>rev.user.toString()===req.user.id.toString())
  if(isReviewed){
    product.reviews.forEach((rev)=>{
      if(rev.user.toString()===req.user.id.toString())
      (rev.rating=rating),(rev.comment=comment)
    })
  }else{
    product.reviews.push(review)
    product.numberOfReviews = product.reviews.length
  }
  const average = 0
  product.ratings = product.reviews.forEach((rev)=>{
    average+=rev.rating
  })/product.reviews.length;
  await product.save({validateBeforeSave:false})
  res.status(200).json({
    success:true
  })
})

