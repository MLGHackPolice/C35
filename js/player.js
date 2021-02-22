class Player{
    constructor(){
        
    }
    getCount(){
        var playercountref = database.ref("playercount");
        playercountref.on("value", function(data){
            playerCount = data.val();
        });
    }

    updateCount(count){
        database.ref("/").update({
            playercount:count
        });
    }

    update(name){
        var playerIndex = "player" + playerCount
        database.ref(playerIndex).set({
            name:name
        });
    }
}