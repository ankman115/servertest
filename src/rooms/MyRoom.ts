import { Room, Client } from "@colyseus/core";
import { MyRoomState, Player } from "./schema/MyRoomState";

export class MyRoom extends Room<MyRoomState> {

    maxClients = 8;

    onCreate(options: any) {
        this.setState(new MyRoomState());

        this.onMessage("updatePosition", (client, data) => {
            console.log("update received -> ");
            console.debug(JSON.stringify(data));
            const player = this.state.players.get(client.sessionId);
            player.x = data["x"];
            player.y = data['y'];
            player.z = data["z"];

          
            player.nickname = data["nickname"];
          
            player.fbutton = data["fbutton"];
          
            player.xchar = data["xchar"];
            player.ychar = data['ychar'];
            player.zchar = data["zchar"];
          
            player.xcharmain = data["xcharmain"];
            player.ycharmain = data['ycharmain'];
            player.zcharmain = data["zcharmain"];
          
            player.xcharteker1 = data["xcharteker1"];
            player.ycharteker1 = data['ycharteker1'];
            player.zcharteker1 = data["zcharteker1"];
          
            player.xcharteker2 = data["xcharteker2"];
            player.ycharteker2 = data['ycharteker2'];
            player.zcharteker2 = data["zcharteker2"];
          
            player.xcharteker3 = data["xcharteker3"];
            player.ycharteker3 = data['ycharteker3'];
            player.zcharteker3 = data["zcharteker3"];
          
            player.xcharteker4 = data["xcharteker4"];
            player.ycharteker4 = data['ycharteker4'];
            player.zcharteker4 = data["zcharteker4"];
          
            player.playerx = data["playerx"];
            player.playery = data['playery'];
            player.playerz = data["playerz"];
          
            player.playerxrot = data["playerxrot"];
            player.playeryrot = data['playeryrot'];
            player.playerzrot = data["playerzrot"];
          
            player.playerxpos = data["playerxpos"];
            player.playerzpos = data["playerzpos"];
          
          player.numcar = data["numcar"];
            player.numcar = data["colorcar"];
        });
    }

    onJoin(client: Client, options: any) {
        // Randomize player position on initializing.
        const newPlayer = new Player();
        
        this.state.players.set(client.sessionId, newPlayer);
        console.log(client.sessionId, "joined!");
    }

    onLeave(client: Client, consented: boolean) {
        this.state.players.delete(client.sessionId);
        console.log(client.sessionId, "left!");
    }

    onDispose() {
        console.log("room", this.roomId, "disposing...");
    }
}
