import { v4 as uuidv4 } from "uuid";

import sword1 from "./assets/items/weapons/swords/11th-century-viking-sword-with-scabbard.png";
import sword2 from "./assets/items/weapons/swords/14th-century-medieval-sword-with-scabbard-and-belt.png";
import sword3 from "./assets/items/weapons/swords/16th-century-two-handed-sword-with-scabbard.png";
import sword4 from "./assets/items/weapons/swords/black-prince-dagger.png";
import sword5 from "./assets/items/weapons/swords/celtic-anthropomorphic-sword-with-scabbard.png";

import axe1 from "./assets/items/weapons/axes/archers-axe.png";
import axe2 from "./assets/items/weapons/axes/bardiche.png";
import axe3 from "./assets/items/weapons/axes/bearded-black-tactical-axe.png";
import axe4 from "./assets/items/weapons/axes/bearded-war-hawk.png";
import axe5 from "./assets/items/weapons/axes/black_legion-war-axe.png";

import flail1 from "./assets/items/weapons/flails/authentics-flail.png";
import flail2 from "./assets/items/weapons/flails/authentics-skull-flail.png";
import flail3 from "./assets/items/weapons/flails/medieval-one-ball-flail.png";

import mace1 from "./assets/items/weapons/maces/16th-century-italian-mace.png";
import mace2 from "./assets/items/weapons/maces/battle-mace.png";
import mace3 from "./assets/items/weapons/maces/flanged-medieval-mace.png";
import mace4 from "./assets/items/weapons/maces/german-mace.png";
import mace5 from "./assets/items/weapons/maces/morning-star.png";

import body1 from "./assets/items/armor/body/leather-brigandine-armor-bird-of-prey-1.jpg";
import body2 from "./assets/items/armor/body/medieval-knight-gothic-cuirass-chest-protection.jpg";
import body3 from "./assets/items/armor/body/polish-hussar-articulated-stainless-steel-cuirass-with-brass-accents.jpg";
import body4 from "./assets/items/armor/body/viking-leather-body-armor-the-evening-star-13.jpg";

import gauntlet1 from "./assets/items/armor/gauntlets/blackened-spring-steel-clamshell-gauntlets-dark-star.jpg";
import gauntlet2 from "./assets/items/armor/gauntlets/hourglass-finger-gauntlets-kings-guard-medieval-armor-sca.jpg";
import gauntlet3 from "./assets/items/armor/gauntlets/hourglass-finger-gauntlets-the-wayward-knight.jpg";
import gauntlet4 from "./assets/items/armor/gauntlets/hourglasses-sca-finger-gauntlets-1.jpg";
import gauntlet5 from "./assets/items/armor/gauntlets/kingmaker-finger-gauntlets.jpg";
import gauntlet6 from "./assets/items/armor/gauntlets/medieval-reenactment-armor-gauntlets-9.jpg";

import helmet1 from "./assets/items/armor/helmets/blackened-spring-steel-sallet-the-dark-star.jpg";
import helmet2 from "./assets/items/armor/helmets/fantasy-functional-armor-barbuta-helmet.jpg";
import helmet3 from "./assets/items/armor/helmets/italian-bascinet-etched-late-xiv-century.jpg";
import helmet4 from "./assets/items/armor/helmets/medieval-helmet-bascinet-of-german-origin-xiv-1.jpg";
import helmet5 from "./assets/items/armor/helmets/stainless-steel-coolus-roman-helmet-for-sca-cassius.jpg";
import helmet6 from "./assets/items/armor/helmets/the-wayward-knight-blackened-sugarloaf-helmet-knightly-xiv-century-helmet-5.jpg";
import helmet7 from "./assets/items/armor/helmets/viking-style-helmet-ragnvaldur-the-traveller.jpg";
import helmet8 from "./assets/items/armor/helmets/visored-barbuta-helmet.jpg";
import helmet9 from "./assets/items/armor/helmets/medieval-italian-bascinet-helmet.jpg";

import leg1 from "./assets/items/armor/leg/articulated-xv-century-gothic-cuisses-upper-leg-protection-3.jpg";
import leg2 from "./assets/items/armor/leg/errant-squire-leg-harness-from-paladin-collection.jpg";
import leg3 from "./assets/items/armor/leg/full-paladin-leg-armour-with-greaves-etched-stainless.jpg";
import leg4 from "./assets/items/armor/leg/xiv-xv-century-leg-harness-the-wayward-knight.jpg";
import leg5 from "./assets/items/armor/leg/xv-century-gothic-articulated-cuisses-with-greaves.jpg";

import suit1 from "./assets/items/armor/suits/black-armor-kit-the-wayward-knight-22.jpg";
import suit2 from "./assets/items/armor/suits/medieval-knight-gothic-plate-armour-kit-31.jpg";
import suit3 from "./assets/items/armor/suits/medieval-lamellar-stainless-steel-armor-body-suit.jpg";
import suit4 from "./assets/items/armor/suits/medieval-western-knights-armor-kit-the-kings-guard.jpg";

const items = {
  weapons: {
    Swords: [
      {
        id: uuidv4(),
        image: sword1,
        title: "Paladin's blade",
        price: "1500",
        description: "Reliable and durable. The dream of any warrior.",
      },
      {
        id: uuidv4(),
        image: sword2,
        title: "Knight's blade",
        price: "1000",
        description: "Reliable and durable. The dream of any warrior.",
      },
      {
        id: uuidv4(),
        image: sword3,
        title: "Sword of Truth",
        price: "1000",
        description: "Reliable and durable. The dream of any warrior.",
      },
      {
        id: uuidv4(),
        image: sword4,
        title: "Black prince dagger",
        price: "750",
        description: "Reliable and durable. The dream of any warrior.",
      },
      {
        id: uuidv4(),
        image: sword5,
        title: "Celtic sword",
        price: "900",
        description: "Reliable and durable. The dream of any warrior.",
      },
    ],
    Axes: [
      {
        id: uuidv4(),
        image: axe1,
        title: "Archer's axe",
        price: "2000",
        description: "Reliable and durable. The dream of any warrior.",
      },
      {
        id: uuidv4(),
        image: axe2,
        title: "Bardiche",
        price: "2000",
        description: "Reliable and durable. The dream of any warrior.",
      },
      {
        id: uuidv4(),
        image: axe3,
        title: "Black tactical axe",
        price: "2000",
        description: "Reliable and durable. The dream of any warrior.",
      },
      {
        id: uuidv4(),
        image: axe4,
        title: "War hawk",
        price: "2000",
        description: "Reliable and durable. The dream of any warrior.",
      },
      {
        id: uuidv4(),
        image: axe5,
        title: "Black legion war axe",
        price: "2000",
        description: "Reliable and durable. The dream of any warrior.",
      },
    ],
    Flails: [
      {
        id: uuidv4(),
        image: flail1,
        title: "Flail",
        price: "2200",
        description: "Reliable and durable. The dream of any warrior.",
      },
      {
        id: uuidv4(),
        image: flail2,
        title: "Skull flail",
        price: "2500",
        description: "Reliable and durable. The dream of any warrior.",
      },
      {
        id: uuidv4(),
        image: flail3,
        title: "One ball flail",
        price: "2000",
        description: "Reliable and durable. The dream of any warrior.",
      },
    ],
    Maces: [
      {
        id: uuidv4(),
        image: mace1,
        title: "Italian mace",
        price: "1100",
        description: "Reliable and durable. The dream of any warrior.",
      },
      {
        id: uuidv4(),
        image: mace2,
        title: "Battle mace",
        price: "1400",
        description: "Reliable and durable. The dream of any warrior.",
      },
      {
        id: uuidv4(),
        image: mace3,
        title: "Flanged mace",
        price: "1300",
        description: "Reliable and durable. The dream of any warrior.",
      },
      {
        id: uuidv4(),
        image: mace4,
        title: "German mace",
        price: "1500",
        description: "Reliable and durable. The dream of any warrior.",
      },
      {
        id: uuidv4(),
        image: mace5,
        title: "Morning star",
        price: "1500",
        description: "Reliable and durable. The dream of any warrior.",
      },
    ],
  },

  armor: {
    Helmets: [
      {
        id: uuidv4(),
        image: helmet1,
        title: "Dark star",
        price: "1000",
        description: "Reliable and durable. The dream of any warrior.",
      },
      {
        id: uuidv4(),
        image: helmet2,
        title: "Knight's gift",
        price: "1000",
        description: "Reliable and durable. The dream of any warrior.",
      },
      {
        id: uuidv4(),
        image: helmet3,
        title: "Paladin's helmet",
        price: "1000",
        description: "Reliable and durable. The dream of any warrior.",
      },
      {
        id: uuidv4(),
        image: helmet4,
        title: "Germanic helmet",
        price: "1000",
        description: "Reliable and durable. The dream of any warrior.",
      },
      {
        id: uuidv4(),
        image: helmet5,
        title: "Ordinary helmet",
        price: "1000",
        description: "Reliable and durable. The dream of any warrior.",
      },
      {
        id: uuidv4(),
        image: helmet6,
        title: "Squire's helmet",
        price: "1000",
        description: "Reliable and durable. The dream of any warrior.",
      },
      {
        id: uuidv4(),
        image: helmet7,
        title: "Viking style helmet",
        price: "1000",
        description: "Reliable and durable. The dream of any warrior.",
      },
      {
        id: uuidv4(),
        image: helmet8,
        title: "Stainless roman helmet",
        price: "1000",
        description: "Reliable and durable. The dream of any warrior.",
      },
      {
        id: uuidv4(),
        image: helmet9,
        title: "Barbuta",
        price: "1000",
        description: "Reliable and durable. The dream of any warrior.",
      },
    ],
    "Body armor": [
      {
        id: uuidv4(),
        image: body1,
        title: "Leather brigandine",
        price: "5000",
        description: "Reliable and durable. The dream of any warrior.",
      },
      {
        id: uuidv4(),
        image: body2,
        title: "Gothic cuirass",
        price: "5200",
        description: "Reliable and durable. The dream of any warrior.",
      },
      {
        id: uuidv4(),
        image: body3,
        title: "Polish hussar",
        price: "5250",
        description: "Reliable and durable. The dream of any warrior.",
      },
      {
        id: uuidv4(),
        image: body4,
        title: "Viking leather body",
        price: "7000",
        description: "Reliable and durable. The dream of any warrior.",
      },
    ],
    Gauntlets: [
      {
        id: uuidv4(),
        image: gauntlet1,
        title: "Dark star",
        price: "1850",
        description: "Reliable and durable. The dream of any warrior.",
      },
      {
        id: uuidv4(),
        image: gauntlet2,
        title: "Guard gauntlets",
        price: "1850",
        description: "Reliable and durable. The dream of any warrior.",
      },
      {
        id: uuidv4(),
        image: gauntlet3,
        title: "Knight gauntlets",
        price: "1850",
        description: "Reliable and durable. The dream of any warrior.",
      },
      {
        id: uuidv4(),
        image: gauntlet4,
        title: "Kingmakers",
        price: "1900",
        description: "Reliable and durable. The dream of any warrior.",
      },
      {
        id: uuidv4(),
        image: gauntlet5,
        title: "Viking fists",
        price: "1900",
        description: "Reliable and durable. The dream of any warrior.",
      },
      {
        id: uuidv4(),
        image: gauntlet6,
        title: "Paladin's gauntlets",
        price: "1900",
        description: "Reliable and durable. The dream of any warrior.",
      },
    ],
    "Leg armor": [
      {
        id: uuidv4(),
        image: leg1,
        title: "Gothic cuisses",
        price: "2100",
        description: "Reliable and durable. The dream of any warrior.",
      },
      {
        id: uuidv4(),
        image: leg2,
        title: "Paladin collection",
        price: "2250",
        description: "Reliable and durable. The dream of any warrior.",
      },
      {
        id: uuidv4(),
        image: leg3,
        title: "Knight's leg armor",
        price: "2000",
        description: "Reliable and durable. The dream of any warrior.",
      },
      {
        id: uuidv4(),
        image: leg4,
        title: "Viking leg armor",
        price: "2100",
        description: "Reliable and durable. The dream of any warrior.",
      },
      {
        id: uuidv4(),
        image: leg5,
        title: "Roman collection",
        price: "2450",
        description: "Reliable and durable. The dream of any warrior.",
      },
    ],
    "Armor suits": [
      {
        id: uuidv4(),
        image: suit1,
        title: "Black armor kit",
        price: "15000",
        description: "Reliable and durable. The dream of any warrior.",
      },
      {
        id: uuidv4(),
        image: suit2,
        title: "Gothic plate armor",
        price: "14500",
        description: "Reliable and durable. The dream of any warrior.",
      },
      {
        id: uuidv4(),
        image: suit3,
        title: "Stainless steel armor body suit",
        price: "12000",
        description: "Reliable and durable. The dream of any warrior.",
      },
      {
        id: uuidv4(),
        image: suit4,
        title: "Western knights armor kit",
        price: "11000",
        description: "Reliable and durable. The dream of any warrior.",
      },
    ],
  },
};

export default items;
