import { std } from "wow/wotlk";

std.SQL.spell_area.query({ area: 616, spell: 42202 }).delete();

std.GMTeleports.createSimple('stranglekeep', {map:0,x:-13755.807617,y:628.857483,z:26.282263,o:2.772833},)
    .Name.set("StrangledKeep")

std.Areas.create('mod', 'strangled-keep')
    .Map.set(0)
    .Name.set({"enGB":"The Strangled Keep", "deDE":"Das Schlingen Fort", "zhCN":"被扼杀的要塞"})
    .ExplorationLevel.set(41)
    .Flags.set(["IS_TOWN"])