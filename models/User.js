const fs = require('fs')
const path = require('path')

const userFilePath = path.join(__dirname, '..', 'users.json')

class User {

    constructor(email, name) {
        this.id = Date.now()
        this.email = email
        this.name = name

    }

    static getAll(){
        const content = fs.readFileSync(userFilePath, "utf-8")
        return JSON.parse(content)
    }

    static findById(id){
        return User.getAll().filter(user => user.id == id)[0]
    }

    save(){
        const users = User.getAll()
        users.push({...this})

        fs.writeFileSync(userFilePath, JSON.stringify(users))
    }
}

module.exports = User