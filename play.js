class Player {
constructor() {
this.index = null;
this.distance = 0;
this.name = null;

}

getCount() {
var playercountref = database.ref ('playerCount');
playercountref.on("value",(data)=>{
playerCount = data.val();

})
}
updatecount(count){
database.ref('/').update({
playerCount:count
})
}

update(){
var playerindex = "players/player"+this.index;
database.ref(playerindex).set({
name:this.name,
distance:this.distance

})


}

static getplayerinfo () {
 var playerinforef = database.ref('players');
playerinforef.on ("value",(data)=>{
allplayers = data.val();

})

}

}



