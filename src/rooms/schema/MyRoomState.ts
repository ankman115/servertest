import { MapSchema, Schema, type } from "@colyseus/schema";

export class Player extends Schema {

  @type("number") x: number;
  @type("number") y: number;
  @type("number") z: number;


  @type("number") xchar: number;
  @type("number") ychar: number;
  @type("number") zchar: number;

  @type("string") nickname: string;

  @type("string") fbutton: string;


  @type("number") xcharmain: number;
  @type("number") ycharmain: number;
  @type("number") zcharmain: number;

  @type("number") xcharteker1: number;
  @type("number") ycharteker1: number;
  @type("number") zcharteker1: number;

  @type("number") xcharteker2: number;
  @type("number") ycharteker2: number;
  @type("number") zcharteker2: number;

  @type("number") xcharteker3: number;
  @type("number") ycharteker3: number;
  @type("number") zcharteker3: number;

  @type("number") xcharteker4: number;
  @type("number") ycharteker4: number;
  @type("number") zcharteker4: number;

  @type("number") playerx: number;
  @type("number") playery: number;
  @type("number") playerz: number;

  @type("number") playerxrot: number;
  @type("number") playeryrot: number;
  @type("number") playerzrot: number;

  @type("number") playerxpos: number;
  @type("number") playerzpos: number;

  @type("number") numcar: number;
  @type("number") colorcar: number;
  @type("string") myid: string;
  @type("number") redorgreen: number;
}

export class MyRoomState extends Schema {
  @type({ map: Player }) players = new MapSchema<Player>();
}
