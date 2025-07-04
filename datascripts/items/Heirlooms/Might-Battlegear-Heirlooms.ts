import { std } from "wow/wotlk";
import { ScalingStatDistributionDBCFile } from "wow/wotlk/dbc/ScalingStatDistribution";
import { ScalingStatValuesDBCFile } from "wow/wotlk/dbc/ScalingStatValues";

export const Might_Helm = std.Items.create('default', 'heirloom-might-helm')
    .Name.enGB.set('Burnished Helmet of Might')
    .Bonding.BINDS_ON_PICKUP.set()
    .Quality.set(7)
    .Socket.addYellow()
    .Socket.addRed()
    .Class.MAIL_EQUIP.set()
    .InventoryType.HEAD.set()
    .Armor.set(60)
    .DisplayInfo.modRefCopy('mod','id_display',x=>x
        .Icon.set('INV_Helmet_09')
        .Models.set(0,'Helm_Plate_RaidWarrior_A_01.mdx','Helm_Plate_RaidWarrior_A_01Blue')
        .HelmGeosetVis.setIndex(0,247)
        .HelmGeosetVis.setIndex(1,369)
        .GroupSoundIndex.set(11)
    )
    .Spells.addMod(x=>x
        .Spell.set(57353)
        .CategoryCooldown.set(-1)
        .Cooldown.set(-1)
        .Trigger.ON_EQUIP.set()
    )
    .Flags.set(["HEROIC", "BIND_TO_ACCOUNT"])
    .ScalingStats.Distribution.set(372)
    .ScalingStatValue.set(8388616)
    .ItemLevel.set(264)
    .Material.set(6)

export const Might_Shoulder = std.Items.create('default', 'heirloom-might-shoulder')
    .Name.enGB.set('Burnished Pauldron of Might')
    .Bonding.BINDS_ON_PICKUP.set()
    .Quality.set(7)
    .Socket.addYellow()
    .Socket.addRed()
    .Class.MAIL_EQUIP.set()
    .InventoryType.SHOULDER.set()
    .Armor.set(60)
    .DisplayInfo.set(31024)
    .Spells.addMod(x=>x
        .Spell.set(57353)
        .CategoryCooldown.set(-1)
        .Cooldown.set(-1)
        .Trigger.ON_EQUIP.set()
    )
    .Flags.set(["HEROIC", "BIND_TO_ACCOUNT"])
    .ScalingStats.Distribution.set(372)
    .ScalingStatValue.set(8388616)
    .ItemLevel.set(264)
    .Material.set(6)

export const Might_Chest = std.Items.create('default', 'heirloom-might-chest')
    .Name.enGB.set('Burnished Breastplate of Might')
    .Bonding.BINDS_ON_PICKUP.set()
    .Quality.set(7)
    .Socket.addYellow()
    .Socket.addRed()
    .Class.MAIL_EQUIP.set()
    .InventoryType.CHEST.set()
    .Armor.set(60)
    .DisplayInfo.set(31021)
    .Spells.addMod(x=>x
        .Spell.set(57353)
        .CategoryCooldown.set(-1)
        .Cooldown.set(-1)
        .Trigger.ON_EQUIP.set()
    )
    .Flags.set(["HEROIC", "BIND_TO_ACCOUNT"])
    .ScalingStats.Distribution.set(372)
    .ScalingStatValue.set(8388616)
    .ItemLevel.set(264)
    .Material.set(6)

export const Might_Wrist = std.Items.create('default', 'heirloom-might-wrist')
    .Name.enGB.set('Burnished Bracers of Might')
    .Bonding.BINDS_ON_PICKUP.set()
    .Quality.set(7)
    .Socket.addYellow()
    .Socket.addRed()
    .Class.MAIL_EQUIP.set()
    .InventoryType.WRISTS.set()
    .Armor.set(60)
    .DisplayInfo.set(31020)
    .Spells.addMod(x=>x
        .Spell.set(57353)
        .CategoryCooldown.set(-1)
        .Cooldown.set(-1)
        .Trigger.ON_EQUIP.set()
    )
    .Flags.set(["HEROIC", "BIND_TO_ACCOUNT"])
    .ScalingStats.Distribution.set(372)
    .ScalingStatValue.set(8388616)
    .ItemLevel.set(264)
    .Material.set(6)

export const Might_Hands = std.Items.create('default', 'heirloom-might-hand')
    .Name.enGB.set('Burnished Gauntlets of Might')
    .Bonding.BINDS_ON_PICKUP.set()
    .Quality.set(7)
    .Socket.addYellow()
    .Socket.addRed()
    .Class.MAIL_EQUIP.set()
    .InventoryType.HANDS.set()
    .Armor.set(60)
    .DisplayInfo.set(31022)
    .Spells.addMod(x=>x
        .Spell.set(57353)
        .CategoryCooldown.set(-1)
        .Cooldown.set(-1)
        .Trigger.ON_EQUIP.set()
    )
    .Flags.set(["HEROIC", "BIND_TO_ACCOUNT"])
    .ScalingStats.Distribution.set(372)
    .ScalingStatValue.set(8388616)
    .ItemLevel.set(264)
    .Material.set(6)

export const Might_Belt = std.Items.create('default', 'heirloom-might-waist')
    .Name.enGB.set('Burnished Belt of Might')
    .Bonding.BINDS_ON_PICKUP.set()
    .Quality.set(7)
    .Class.MAIL_EQUIP.set()
    .Socket.addYellow()
    .Socket.addRed()
    .InventoryType.WAIST.set()
    .Armor.set(60)
    .DisplayInfo.set(31019)
    .Spells.addMod(x=>x
        .Spell.set(57353)
        .CategoryCooldown.set(-1)
        .Cooldown.set(-1)
        .Trigger.ON_EQUIP.set()
    )
    .Flags.set(["HEROIC", "BIND_TO_ACCOUNT"])
    .ScalingStats.Distribution.set(372)
    .ScalingStatValue.set(8388616)
    .ItemLevel.set(264)
    .Material.set(6)

export const Might_Legs = std.Items.create('default', 'heirloom-might-legs')
    .Name.enGB.set('Burnished Legplates of Might')
    .Bonding.BINDS_ON_PICKUP.set()
    .Quality.set(7)
    .Socket.addYellow()
    .Socket.addRed()
    .Class.MAIL_EQUIP.set()
    .InventoryType.LEGS.set()
    .Armor.set(60)
    .DisplayInfo.set(31023)
    .Spells.addMod(x=>x
        .Spell.set(57353)
        .CategoryCooldown.set(-1)
        .Cooldown.set(-1)
        .Trigger.ON_EQUIP.set()
    )
    .Flags.set(["HEROIC", "BIND_TO_ACCOUNT"])
    .ScalingStats.Distribution.set(372)
    .ScalingStatValue.set(8388616)
    .ItemLevel.set(264)
    .Material.set(6)

export const Might_Boots = std.Items.create('default', 'heirloom-might-feet')
    .Name.enGB.set('Burnished Sabatons of Might')
    .Bonding.BINDS_ON_PICKUP.set()
    .Quality.set(7)
    .Socket.addYellow()
    .Socket.addRed()
    .Class.MAIL_EQUIP.set()
    .InventoryType.FEET.set()
    .DisplayInfo.set(31025)
    .Spells.addMod(x=>x
        .Spell.set(57353)
        .CategoryCooldown.set(-1)
        .Cooldown.set(-1)
        .Trigger.ON_EQUIP.set()
    )
    .Flags.set(["HEROIC", "BIND_TO_ACCOUNT"])
    .ScalingStats.Distribution.set(372)
    .ScalingStatValue.set(8388616)
    .ItemLevel.set(264)


const MIGHT_HEIRLOOM_SET = std.ItemSet.create('default', 'Heirloom-Might-Set')
    .Name.enGB.set('Heirlooms of Might')
    .Items.addId(60002)
    .Items.addId(60003)
    .Items.addId(60004)
    .Items.addId(60005)
    .Items.addId(60006)
    .Items.addId(60007)
    .Items.addId(60008)
    .Items.addId(60009)
    .Spells.addMod(x=>x
        .Spell.set(23562)
        .Threshold.set(3)
    )
    .Spells.addMod(x=>x
        .Spell.set(21838)
        .Threshold.set(5)
    )
    .Spells.addMod(x=>x
        .Spell.set(23561)
        .Threshold.set(8)
    )

std.Items.create('default', 'Heirloom-Might-Back')
    .Name.enGB.set('Burnished Stoneshield Cloak')
    .Flags.set(["HEROIC", "BIND_TO_ACCOUNT"])
    .Bonding.BINDS_ON_PICKUP.set()
    .DisplayInfo.set(28695)
    .Quality.HEIRLOOM.set()
    .ScalingStats.set(372, 8388616)
    .Armor.set(60)
    .InventoryType.BACK.set()
    .Spells.addMod(x=>x
        .Spell.set(57353)
        .CategoryCooldown.set(-1)
        .Cooldown.set(-1)
        .Trigger.ON_EQUIP.set()
    )





    std.Spells.create('default','change item')
    // =================================================
    //
    // - Basic Properties -
    //
    // =================================================
    .Name.set({"enGB":"Call Bloodied Ravager"})
    .Description.set({"enGB":"Calls forth Bloodied Ravager."})
    .AuraDescription.set({})
    .Subtext.set({})
    .Icon.setFullPath("Interface\\Icons\\inv_weapon_halberd_05")
    .Attributes.set([])
    .InterruptFlags.set(['ON_MOVEMENT','ON_PUSHBACK','ON_INTERRUPT_CAST','ON_INTERRUPT'])
    .SchoolMask.set(['PHYSICAL',0x1])
    .Category.set(1160)
    .Family.set(0)
    .ClassMask.set(0,0,0)
    .ItemEquips.set(-1,0,0)
    .Levels.set(0,0,0)
    .CastTime.modRefCopy(x=>x
        .Base.set(1000)
        .Minimum.set(1000)
    )
    .Cooldown.mod(x=>x
        .CategoryTime.set(1800000)
        .Category.set(1160)
    )
    .Power.mod(x=>x
        .Type.MANA.set()
    )
    .Range.modRefCopy(x=>x
        .Name.set({"enGB":"Self Only"})
        .NameShort.set({"enGB":"Self"})
    )
    // =================================================
    //
    // - Effects -
    //
    // =================================================
    .Effects.addMod(x=>x
        .Type.SUMMON_CHANGE_ITEM.set()
        .ItemType.set(60045)
        .Mechanic.NONE.set()
        .PointsBase.set(1)
        .PointsDieSides.set(0)
        .PointsPerLevel.set(0)
        .PointsPerCombo.set(0)
        .ImplicitTargetA.set(0)
        .ImplicitTargetB.set(0)
        .AuraPeriod.set(0)
        .MultipleValue.set(0)
        .ChainTarget.set(0)
        .MiscValueA.set(0)
        .MiscValueB.set(0)
        .TriggerSpell.set(0)
        .ChainAmplitude.set(1)
        .BonusMultiplier.set(1)
    )
    

std.Items.create('default', 'Bloodied-Ravager', 7717)
    .Name.enGB.set('Bloodied Ravager')
    .Quality.HEIRLOOM.set()
    .Flags.set(["HEROIC", "BIND_TO_ACCOUNT"])
    .ScalingStats.set(1, 1032)
    .RequiredLevel.set(0)

std.Items.load(42943)
    .Spells.addGet()
        .Spell.set(80902)

        std.Spells.create('default','change-back')
        // =================================================
        //
        // - Basic Properties -
        //
        // =================================================
        .Name.set({"enGB":"Call Bloodied Arcanite Reaper"})
        .Description.set({"enGB":"Calls forth Bloodied Arcanite Reaper."})
        .AuraDescription.set({})
        .Subtext.set({})
        .Icon.setFullPath("Interface\\Icons\\inv_axe_09")
        .Attributes.set([])
        .InterruptFlags.set(['ON_MOVEMENT','ON_PUSHBACK','ON_INTERRUPT_CAST','ON_INTERRUPT'])
        .SchoolMask.set(['PHYSICAL',0x1])
        .Category.set(1160)
        .Family.set(0)
        .ClassMask.set(0,0,0)
        .ItemEquips.set(-1,0,0)
        .Levels.set(0,0,0)
        .CastTime.modRefCopy(x=>x
            .Base.set(1000)
            .Minimum.set(1000)
        )
        .Cooldown.mod(x=>x
            .CategoryTime.set(1800000)
            .Category.set(1160)
        )
        .Power.mod(x=>x
            .Type.MANA.set()
        )
        .Range.modRefCopy(x=>x
            .Name.set({"enGB":"Self Only"})
            .NameShort.set({"enGB":"Self"})
        )
        // =================================================
        //
        // - Effects -
        //
        // =================================================
        .Effects.addMod(x=>x
            .Type.SUMMON_CHANGE_ITEM.set()
            .ItemType.set(42943)
            .Mechanic.NONE.set()
            .PointsBase.set(0)
            .PointsDieSides.set(0)
            .PointsPerLevel.set(0)
            .PointsPerCombo.set(0)
            .ImplicitTargetA.set(0)
            .ImplicitTargetB.set(0)
            .AuraPeriod.set(0)
            .MultipleValue.set(0)
            .ChainTarget.set(0)
            .MiscValueA.set(0)
            .MiscValueB.set(0)
            .TriggerSpell.set(0)
            .ChainAmplitude.set(1)
            .BonusMultiplier.set(1)
        )

std.Items.load(60045)
    .Spells.addGet()
        .Spell.set(80903)

std.Items.create('default', "Might-Shield", 10767)
    .Name.enGB.set("Mighty Boar's Shield")
    .Quality.HEIRLOOM.set()
    .Flags.set(["HEROIC", "BIND_TO_ACCOUNT"])
    .ScalingStats.set(1, 1032)
    .RequiredLevel.set(0)