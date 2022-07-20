class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
    this.score=0
    this.rank=0
    this.life=100
    this.fuel=100
  }

  addPlayer() {
    if (this.index === 1) {
      this.positionX = width / 2 - 100;
    } else {
      this.positionX = width / 2 + 100;
    }

    database.ref("players/player" + this.index).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY,
      rank:this.rank,
      score:this.score,
      life:this.life,
      fuel:this.fuel
    });
  }
// collect playerCount from the database
  getCount() {
    database.ref("playerCount").on("value", data => {
      playerCount = data.val();
    });
  }
// update the playerCount  in the database
  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }

  getCarsAtEnd() {
    database.ref("CarsAtEnd").on("value", data => {
      this.rank = data.val();
    });
  }
  static updateCarsAtEnd(count) {
    database.ref("/").update({
      CarsAtEnd: count
    });
  }

  
// collect positions of the cars from the database
  getDistance() {
    database.ref("players/player"+this.index).on("value", data => {
     var  distance = data.val();
     this.positionX= distance.positionX
     this.positionY= distance.positionY
    });
  }
// update the new X, Y positions of the car in the database
  updateDistance() {
    database.ref("players/player"+this.index).update({
      positionX: this.positionX,
      positionY: this.positionY,
      rank:this.rank,
      score:this.score,
      life:this.life,
      fuel:this.fuel
    });
  }


  static getPlayersInfo() {
    database.ref("players").on("value",data=>{
      allPlayers=data.val()
    })
  }
}
