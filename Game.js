class Game{
constructor() {
}
getState(){
var gameStateref=database.ref('gameState');
gameStateref.on("value",function(data){
gameState=data.val();

})
}
update(state) {
database.ref('/').update({
gameState:state
})
}

async start(){
if(gameState===0){
player=new Player();
var countref =await database.ref('playerCount').once("value");
console.log(countref);
if (countref.exists()){
playerCount = countref.val();
player.getCount();
console.log(player.getCount());
}

form=new Form();
form.display();
}
car1 = createSprite(100,200);
car2 = createSprite(300,200);
car3 = createSprite(500,200);
car4 = createSprite(700,200);
cars = [car1,car2,car3,car4]

}
play (){
form.hide();
textSize (30);
text("gamestart",120,100)
Player.getplayerinfo();
if (allplayers!= undefined){
var index = 0;
var x = 0;
var y;
//var display = 130;
for (var plr in allplayers){
index = index+1;
x = x+200;
y = displayHeight - allplayers[plr].distance;
cars[index-1].x=x;
cars[index-1].y=y;
if (index ===player.index){
cars[index-1].shapeColor = "red"; 
camera.position.x =displayWidth/2;
camera.position.y= cars[index-1].y;
}
 /*if(plr === "player" + player.index){
   fill ( "red") ;
 }
 else {
     fill("black")
 }
display += 20;
textSize(13);
console.log(display);
text(allplayers[plr].name+": "+allplayers[plr].distance,120,display);*/
}
}
if (keyIsDown(UP_ARROW) && player.index !== null  ) {
player.distance += 50;
player.update();
}
drawSprites();
}
}
