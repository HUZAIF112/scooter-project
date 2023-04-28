const { createTestScheduler } = require("jest")
const ScooterApp = require("./ScooterApp")

class User extends ScooterApp {
  // User code here
  constructor(username,password,age,loggedIn){
    this.username = username
    this.password = password
    this.age = age
    this.loggedIn = loggedIn
  }
  login(password){
    if (password){
      this.loggedIn = true
    }else{
      throw Error('Incorrect password')
    }
}

  logout(result){
    if(result){
      this.loggedIn = false
    } else{
      
    }

  }

}

module.exports = User
