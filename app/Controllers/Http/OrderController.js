'use strict'

const Order = use('App/Models/Order')

class OrderController {
  
  async index(){
    return await Order.query().with('product').fetch()
  }

  async store({ request }){
    const order = await Order.create(request.all())

    return order
  }

  async update({ request, params }){
    const order = await Order.find(params.id)
    order.qty = request.input('qty')
    order.save()

    return order
  }

  async delete({ request, params }){
    const order = await Order.find(params.id)
    order.delete()

    return {success: true}
  }


}

module.exports = OrderController
