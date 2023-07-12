import { Activity1 } from "./activity1";
import { Activity10 } from "./activity10";
import { Activity11 } from "./activity11";
import { Activity12 } from "./activity12";
import { Activity13 } from "./activity13";
import { Activity14 } from "./activity14";
import { Activity15 } from "./activity15";
import { Activity16 } from "./activity16";
import { Activity17 } from "./activity17";
import { Activity18 } from "./activity18";
import { Activity19 } from "./activity19";
import { Activity2 } from "./activity2";
import { Activity20 } from "./activity20";
import { Activity21 } from "./activity21";
import { Activity22 } from "./activity22";
import { Activity23 } from "./activity23";
import { Activity24 } from "./activity24";
import { Activity25 } from "./activity25";
import { Activity26 } from "./activity26";
import { Activity27 } from "./activity27";
import { Activity28 } from "./activity28";
import { Activity29 } from "./activity29";
import { Activity3 } from "./activity3";
import { Activity30 } from "./activity30";
import { Activity31 } from "./activity31";
import { Activity32 } from "./activity32";
import { Activity33 } from "./activity33";
import { Activity34 } from "./activity34";
import { Activity35 } from "./activity35";
import { Activity36 } from "./activity36";
import { Activity37 } from "./activity37";
import { Activity38 } from "./activity38";
import { Activity39 } from "./activity39";
import { Activity4 } from "./activity4";
import { Activity40 } from "./activity40";
import { Activity41 } from "./activity41";
import { Activity42 } from "./activity42";
import { Activity43 } from "./activity43";
import { Activity44 } from "./activity44";
import { Activity45 } from "./activity45";
import { Activity5 } from "./activity5";
import { Activity6 } from "./activity6";
import { Activity7 } from "./activity7";
import { Activity8 } from "./activity8";
import { Activity9 } from "./activity9";

const activities = [
  Activity1,
  Activity2,
  Activity3,
  Activity4,
  Activity5,
  Activity6,
  Activity7,
  Activity8,
  Activity9,
  Activity10,
  Activity11,
  Activity12,
  Activity13,
  Activity14,
  Activity15,
  Activity16,
  Activity17,
  Activity18,
  Activity19,
  Activity20,
  Activity21,
  Activity22,
  Activity23,
  Activity24,
  Activity25,
  Activity26,
  Activity27,
  Activity28,
  Activity29,
  Activity30,
  Activity31,
  Activity32,
  Activity33,
  Activity34,
  Activity35,
  Activity36,
  Activity37,
  Activity38,
  Activity39,
  Activity40,
  Activity41,
  Activity42,
  Activity43,
  Activity44,
  Activity45,
];

activities.forEach((activity, index) => {
  console.log("\n\n===================================================================================================================")
  console.log(`=========================================== Activity No.${index+1} ==================================================`)
  console.log("===================================================================================================================\n\n")
  activity();
});