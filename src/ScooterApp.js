const User = require('./User')
const Scooter = require('./Scooter')
const User = require('./User')

class ScooterApp {
  // ScooterApp code here
  constructor(stations,registeredUsers){
    this.stations = stations
    this.registeredUsers = registeredUsers
  }
  registerUser(username,password,age){
    const result = this.registeredUsers.some(obj => obj[username] === password)
    if(result){
      throw Error('User is already registered')
    }else if(age<18){
      throw Error('User is under 18 and cannot register')
    }
    }
    loginUser(username,password){
      const result = this.registeredUsers.some(obj => obj[username] === password)
      const User = new User()
      User.login(result)

    }


    logoutUser(username){
      const result = this.registeredUsers.some(obj => obj[username] === password)

    }


  }


module.exports = ScooterApp
