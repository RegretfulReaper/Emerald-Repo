import { std } from "wow/wotlk";
import { HEIRLOOM_VENDOR } from "./Heirloom-Vendor";

const TEST = std.CreatureTemplates.create('mod', 'testing')
    .Name.enGB.set('tester')
    .NPCFlags.GOSSIP.set(1)
    .Gossip.set(65001)
    .Models.addIds(HEIRLOOM_VENDOR.ID)
    .Type.HUMANOID.set()
    .UnitClass.MAGE.set()
    .FlagsExtra.CIVILIAN.set(1)