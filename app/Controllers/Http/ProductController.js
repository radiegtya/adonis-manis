'use strict'

const Product = use('App/Models/Product')

class ProductController {
  
  async index(){
    return await Product.all()
  }

  async store({ request }){
    const product = await Product.create(request.all())

    return product
  }

}

module.exports = ProductController
