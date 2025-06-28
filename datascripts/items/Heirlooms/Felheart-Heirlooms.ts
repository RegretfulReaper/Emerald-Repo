import { std } from "wow/wotlk";
import { effectToPath } from "wow/wotlk/std/Item/ItemVisualEffect";

std.Items.create('default', 'cursed-head')
    .Name.enGB.set('Cursed Felheart Horns')
    .Quality.HEIRLOOM.set()
    .Bonding.BINDS_ON_PICKUP.set()
    .DisplayInfo.set(31987)
    .Class.CLOTH_EQUIP.set()
    .InventoryType.set("HEAD")
    .Flags.set(["HEROIC", "BIND_TO_ACCOUNT"])
    .ScalingStats.set(375, 8388616)
    .Spells.addMod(x=>x
        .Spell.set(57353)
        .CategoryCooldown.set(-1)
        .Cooldown.set(-1)
        .Trigger.ON_EQUIP.set()
    )

std.Items.create('default', 'cursed-shoulders')
    .Name.enGB.set('Cursed Felheart Shoulderpads')
    .Quality.HEIRLOOM.set()
    .Bonding.BINDS_ON_PICKUP.set()
    .DisplayInfo.set(31974)
    .Class.CLOTH_EQUIP.set()
    .InventoryType.set("SHOULDER")
    .Flags.set(["HEROIC", "BIND_TO_ACCOUNT"])
    .ScalingStats.set(375, 8388616)
    .Spells.addMod(x=>x
        .Spell.set(57353)
        .CategoryCooldown.set(-1)
        .Cooldown.set(-1)
        .Trigger.ON_EQUIP.set()
    )

std.Items.create('default', 'cursed-chest')
    .Name.enGB.set('Cursed Felheart Robes')
    .Quality.HEIRLOOM.set()
    .Bonding.BINDS_ON_PICKUP.set()
    .DisplayInfo.set(31973)
    .Class.CLOTH_EQUIP.set()
    .InventoryType.set("CHEST")
    .Flags.set(["HEROIC", "BIND_TO_ACCOUNT"])
    .ScalingStats.set(375, 8388616)
    .Spells.addMod(x=>x
        .Spell.set(57353)
        .CategoryCooldown.set(-1)
        .Cooldown.set(-1)
        .Trigger.ON_EQUIP.set()
    )

std.Items.create('default', 'cursed-wrists')
    .Name.enGB.set('Cursed Felheart Bracers')
    .Quality.HEIRLOOM.set()
    .Bonding.BINDS_ON_PICKUP.set()
    .DisplayInfo.set(31970)
    .Class.CLOTH_EQUIP.set()
    .InventoryType.set("WRISTS")
    .Flags.set(["HEROIC", "BIND_TO_ACCOUNT"])
    .ScalingStats.set(375, 8388616)
    .Spells.addMod(x=>x
        .Spell.set(57353)
        .CategoryCooldown.set(-1)
        .Cooldown.set(-1)
        .Trigger.ON_EQUIP.set()
    )

std.Items.create('default', 'cursed-hands')
    .Name.enGB.set('Cursed Felheart Gloves')
    .Quality.HEIRLOOM.set()
    .Bonding.BINDS_ON_PICKUP.set()
    .DisplayInfo.set(31971)
    .Class.CLOTH_EQUIP.set()
    .InventoryType.set("HANDS")
    .Flags.set(["HEROIC", "BIND_TO_ACCOUNT"])
    .ScalingStats.set(375, 8388616)
    .Spells.addMod(x=>x
        .Spell.set(57353)
        .CategoryCooldown.set(-1)
        .Cooldown.set(-1)
        .Trigger.ON_EQUIP.set()
    )

std.Items.create('default', 'cursed-waist')
    .Name.enGB.set('Cursed Felheart Belt')
    .Quality.HEIRLOOM.set()
    .Bonding.BINDS_ON_PICKUP.set()
    .DisplayInfo.set(31969)
    .Class.CLOTH_EQUIP.set()
    .InventoryType.set("WAIST")
    .Flags.set(["HEROIC", "BIND_TO_ACCOUNT"])
    .ScalingStats.set(375, 8388616)
    .Spells.addMod(x=>x
        .Spell.set(57353)
        .CategoryCooldown.set(-1)
        .Cooldown.set(-1)
        .Trigger.ON_EQUIP.set()
    )

std.Items.create('default', 'cursed-legs')
    .Name.enGB.set('Cursed Felheart Pants')
    .Quality.HEIRLOOM.set()
    .Bonding.BINDS_ON_PICKUP.set()
    .DisplayInfo.set(31972)
    .Class.CLOTH_EQUIP.set()
    .InventoryType.set("LEGS")
    .Flags.set(["HEROIC", "BIND_TO_ACCOUNT"])
    .ScalingStats.set(375, 8388616)
    .Spells.addMod(x=>x
        .Spell.set(57353)
        .CategoryCooldown.set(-1)
        .Cooldown.set(-1)
        .Trigger.ON_EQUIP.set()
    )

std.Items.create('default', 'cursed-feet')
    .Name.enGB.set('Cursed Felheart Slippers')
    .Quality.HEIRLOOM.set()
    .Bonding.BINDS_ON_PICKUP.set()
    .DisplayInfo.set(31975)
    .Class.CLOTH_EQUIP.set()
    .InventoryType.set("FEET")
    .Flags.set(["HEROIC", "BIND_TO_ACCOUNT"])
    .ScalingStats.set(375, 8388616)
    .Spells.addMod(x=>x
        .Spell.set(57353)
        .CategoryCooldown.set(-1)
        .Cooldown.set(-1)
        .Trigger.ON_EQUIP.set()
)

std.Items.create('default', 'Cursed-Cloak-of-Flames')
    .Name.enGB.set('Cursed Cloak of Flames')
    .Armor.set(60)
    .InventoryType.BACK.set()
    .Quality.HEIRLOOM.set()
    .Bonding.BINDS_ON_PICKUP.set()
    .Flags.set(["HEROIC", "BIND_TO_ACCOUNT"])
    .DisplayInfo.set(23421)
    .Spells.addMod(x => x
        .Spell.set(57353)
        .CategoryCooldown.set(-1)
        .Cooldown.set(-1)
        .Trigger.ON_EQUIP.set()
    )
    .ScalingStats.set(375, 8388616)
    .ItemLevel.set(264)

std.ItemSet.create('default', 'Felheart-Heirloom')
    .Name.enGB.set('Cursed Felheart Set')
    .Items.addId(60048) // Head
    .Items.addId(60049) // Shoulders
    .Items.addId(60050) // Chest
    .Items.addId(60051) // Wrists
    .Items.addId(60052) // Hands
    .Items.addId(60053) // Waist
    .Items.addId(60054) // Legs
    .Items.addId(60055) // Feet
    .Spells.addMod(x => x
        .Spell.set(23554) // 3pc Bonus
        .Threshold.set(3)
    )
    .Spells.addMod(x => x
        .Spell.set(21741) // 5pc Bonus
        .Threshold.set(5)
    )
    .Spells.addMod(x => x
        .Spell.set(23553) // 8pc Bonus
        .Threshold.set(8)
    )