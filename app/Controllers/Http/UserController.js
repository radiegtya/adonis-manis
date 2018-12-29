'use strict'

const User = use('App/Models/User')

class UserController {

    async register({ request, auth }){
        //#TODO validation

        const user = await User.create({
            ...request.all(),
            username: request.input('email')
        })

        const token = await auth.generate(user)

        return {
            user,
            ...token
        }
    }

    async login({ request, auth }){
        //#TODO validation

        const email = request.input('email')
        const password = request.input('password')

        const authCheck = await auth.attempt(email, password)
        const user = await User.findBy('email', email)

        return {
            ...authCheck,
            user
        }           
    }
}

module.exports = UserController
