import { std } from "wow/wotlk";
import { LICH_BOLT_TEMPLATE } from "./Lich-Class/necrosis-spells/lich-bolt";
import { LICH_CLASS } from "./Lich-Class/lich-class";

std.SQL.spell_area.query({ area: 616, spell: 42202 }).delete();

std.GMTeleports.createSimple('stranglekeep', {map:0,x:-13755.807617,y:628.857483,z:26.282263,o:2.772833},)
    .Name.set("StrangledKeep")

std.Areas.create('mod', 'strangled-keep')
    .Map.set(0)
    .Name.set({"enGB":"The Strangled Keep", "deDE":"Das Schlingen Fort", "zhCN":"被扼杀的要塞"})
    .ExplorationLevel.set(41)
    .Flags.set(["IS_TOWN"])

std.Spells.load(20792).CastTime.setSimple(1800)
std.Spells.load(12748).Cooldown.mod((cd) => {
    cd.set(900000)
})

std.DBC.ChrRaces.findById(10).Required_Expansion.set(3)
std.DBC.ChrRaces.findById(11).Required_Expansion.set(3)
std.DBC.ChrClasses.findById(6).Required_Expansion.set(3)
// std.DBC.ChrClasses.findById(LICH_CLASS.ID).Required_Expansion.set(2)