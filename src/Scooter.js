class Scooter{
  // scooter code here
  constructor(station,user,serial,nextSerial,charge,isBroken){
    this.station = station
    this.user = user
    this.serial = serial
    this.nextSerial = nextSerial
    this.charge = charge
    this.isBroken = isBroken
  }
  rent(user){
    if(this.charge >20 && this.isBroken == false){
      this.station = null
      this.user = user
    } else if(this.charge < 20){
      throw Error('Scooter needs charge')
    }else{
      throw Error('Scooter is broken')
    }
  }

  dock(station){
    this.user = null
    this.station = station

  }
}


module.exports = Scooter
