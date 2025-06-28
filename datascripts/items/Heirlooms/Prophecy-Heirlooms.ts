import { std } from "wow/wotlk";
import { effectToPath } from "wow/wotlk/std/Item/ItemVisualEffect";

std.Items.create('default', 'blessed-prophecy-head')
    .Name.enGB.set('Blessed Prophecy Circlet')
    .Quality.HEIRLOOM.set()
    .Bonding.BINDS_ON_PICKUP.set()
    .DisplayInfo.set(31371) // Prophecy Head
    .Class.CLOTH_EQUIP.set()
    .InventoryType.set("HEAD")
    .Flags.set(["HEROIC", "BIND_TO_ACCOUNT"])
    .ScalingStats.set(375, 8388616)
    .Spells.addMod(x => x
        .Spell.set(57353)
        .CategoryCooldown.set(-1)
        .Cooldown.set(-1)
        .Trigger.ON_EQUIP.set()
    )

std.Items.create('default', 'blessed-prophecy-shoulders')
    .Name.enGB.set('Blessed Prophecy Mantle')
    .Quality.HEIRLOOM.set()
    .Bonding.BINDS_ON_PICKUP.set()
    .DisplayInfo.set(30623) // Prophecy Shoulders
    .Class.CLOTH_EQUIP.set()
    .InventoryType.set("SHOULDER")
    .Flags.set(["HEROIC", "BIND_TO_ACCOUNT"])
    .ScalingStats.set(375, 8388616)
    .Spells.addMod(x => x
        .Spell.set(57353)
        .CategoryCooldown.set(-1)
        .Cooldown.set(-1)
        .Trigger.ON_EQUIP.set()
    )

std.Items.create('default', 'blessed-prophecy-chest')
    .Name.enGB.set('Blessed Prophecy Robes')
    .Quality.HEIRLOOM.set()
    .Bonding.BINDS_ON_PICKUP.set()
    .DisplayInfo.set(31490) // Prophecy Chest
    .Class.CLOTH_EQUIP.set()
    .InventoryType.set("CHEST")
    .Flags.set(["HEROIC", "BIND_TO_ACCOUNT"])
    .ScalingStats.set(375, 8388616)
    .Spells.addMod(x => x
        .Spell.set(57353)
        .CategoryCooldown.set(-1)
        .Cooldown.set(-1)
        .Trigger.ON_EQUIP.set()
    )

std.Items.create('default', 'blessed-prophecy-wrists')
    .Name.enGB.set('Blessed Prophecy Bindings')
    .Quality.HEIRLOOM.set()
    .Bonding.BINDS_ON_PICKUP.set()
    .DisplayInfo.set(30617) // Prophecy Wrists
    .Class.CLOTH_EQUIP.set()
    .InventoryType.set("WRISTS")
    .Flags.set(["HEROIC", "BIND_TO_ACCOUNT"])
    .ScalingStats.set(375, 8388616)
    .Spells.addMod(x => x
        .Spell.set(57353)
        .CategoryCooldown.set(-1)
        .Cooldown.set(-1)
        .Trigger.ON_EQUIP.set()
    )

std.Items.create('default', 'blessed-prophecy-hands')
    .Name.enGB.set('Blessed Prophecy Gloves')
    .Quality.HEIRLOOM.set()
    .Bonding.BINDS_ON_PICKUP.set()
    .DisplayInfo.set(30620) // Prophecy Hands
    .Class.CLOTH_EQUIP.set()
    .InventoryType.set("HANDS")
    .Flags.set(["HEROIC", "BIND_TO_ACCOUNT"])
    .ScalingStats.set(375, 8388616)
    .Spells.addMod(x => x
        .Spell.set(57353)
        .CategoryCooldown.set(-1)
        .Cooldown.set(-1)
        .Trigger.ON_EQUIP.set()
    )

std.Items.create('default', 'blessed-prophecy-waist')
    .Name.enGB.set('Blessed Prophecy Belt')
    .Quality.HEIRLOOM.set()
    .Bonding.BINDS_ON_PICKUP.set()
    .DisplayInfo.set(30621) // Prophecy Waist
    .Class.CLOTH_EQUIP.set()
    .InventoryType.set("WAIST")
    .Flags.set(["HEROIC", "BIND_TO_ACCOUNT"])
    .ScalingStats.set(375, 8388616)
    .Spells.addMod(x => x
        .Spell.set(57353)
        .CategoryCooldown.set(-1)
        .Cooldown.set(-1)
        .Trigger.ON_EQUIP.set()
    )

std.Items.create('default', 'blessed-prophecy-legs')
    .Name.enGB.set('Blessed Prophecy Pants')
    .Quality.HEIRLOOM.set()
    .Bonding.BINDS_ON_PICKUP.set()
    .DisplayInfo.set(28198) // Prophecy Legs
    .Class.CLOTH_EQUIP.set()
    .InventoryType.set("LEGS")
    .Flags.set(["HEROIC", "BIND_TO_ACCOUNT"])
    .ScalingStats.set(375, 8388616)
    .Spells.addMod(x => x
        .Spell.set(57353)
        .CategoryCooldown.set(-1)
        .Cooldown.set(-1)
        .Trigger.ON_EQUIP.set()
    )

std.Items.create('default', 'blessed-prophecy-feet')
    .Name.enGB.set('Blessed Prophecy Slippers')
    .Quality.HEIRLOOM.set()
    .Bonding.BINDS_ON_PICKUP.set()
    .DisplayInfo.set(31718) // Prophecy Feet
    .Class.CLOTH_EQUIP.set()
    .InventoryType.set("FEET")
    .Flags.set(["HEROIC", "BIND_TO_ACCOUNT"])
    .ScalingStats.set(375, 8388616)
    .Spells.addMod(x => x
        .Spell.set(57353)
        .CategoryCooldown.set(-1)
        .Cooldown.set(-1)
        .Trigger.ON_EQUIP.set()
    )

std.Items.create('default', 'Blessed-Cloak-of-Grace')
    .Name.enGB.set('Blessed Cloak of Grace')
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

std.ItemSet.create('default', 'Prophecy-Heirloom')
    .Name.enGB.set('Blessed Vestments of Prophecy')
    .Items.addId(60058) // Head
    .Items.addId(60059) // Shoulders
    .Items.addId(60060) // Chest
    .Items.addId(60061) // Wrists
    .Items.addId(60062) // Hands
    .Items.addId(60063) // Waist
    .Items.addId(60064) // Legs
    .Items.addId(60065) // Feet
    .Spells.addMod(x => x
        .Spell.set(21973) // 3pc Bonus
        .Threshold.set(3)
    )
    .Spells.addMod(x => x
        .Spell.set(21092) // 5pc Bonus
        .Threshold.set(5)
    )
    .Spells.addMod(x => x
        .Spell.set(23550) // 8pc Bonus
        .Threshold.set(8)
)

std.Items.create('default', 'blessed-light-binder-staff')
    .Name.enGB.set('Blessed Light Binder Staff')
    .Quality.HEIRLOOM.set()
    .Bonding.BINDS_ON_PICKUP.set()
    .DisplayInfo.set(54100) // Staff DisplayInfo
    .Class.STAFF.set()
    .InventoryType.set("WEAPON")
    .Flags.set(["HEROIC", "BIND_TO_ACCOUNT"])
    .ScalingStats.set(375, 8388616)
    .ItemLevel.set(264)
    .Sheath.STAFF.set()
    .SheatheType.set(2)