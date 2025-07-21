import { std } from "wow/wotlk";

std.Items.create('mod', 'impro-seaf-pace')
    .Name.set({"enGB":"Improvised Seaforium Pacemaker", "deDE":"Improvisierter Zephyriumschrittmacher"})
    .Description.set({"enGB":"It's just crazy enough to work...", "deDE":"Das ist verrückt genug, dass es klappen könnte..."})
    .Quality.PURPLE.set()
    .ItemLevel.set(681)
    .InventoryType.TRINKET.set()
    .DisplayInfo.setSimpleIcon('mod', 'pacemaker-icon', 'ability_blackhand_attachedslagbombs')
    .Flags.set(["HEROIC", "NO_EQUIP_COOLDOWN", "UNIQUE_EQUIPPED", "REFUNDABLE"])
    .Stats.add("AGILITY", 3508)
    .Stats.add("STRENGTH", 3508)
    .Spells.addMod((spell) => {
        spell.Spell.set(80916)
        .ProcsPerMinute.set(60)
        .Trigger.CHANCE_ON_HIT.set()
    })
