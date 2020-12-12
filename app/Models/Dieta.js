'use strict'

const Model = use('Model')

class Dieta extends Model {
    user(){
        return this.belongsTo("App/Models/User")
    }
}

module.exports = Dieta
