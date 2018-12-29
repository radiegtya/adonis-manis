'use strict'

const Transaction = use('App/Models/Transaction')

class TransactionController {

    async show({ params }){
        return await Transaction.query().where('id', params.id).with('orders').first()
    }
    
    async store({ request }){
        const transaction = await Transaction.create(request.all())

        return transaction
    }

}

module.exports = TransactionController
