import { interfaces } from "mocha";
import { Edit } from "wow/data/luaxml/TextFile";
import { std } from "wow/wotlk";
import { ItemDisplayInfo } from "wow/wotlk/std/Item/ItemDisplayInfo";
import { CharacterCreationUI } from "wow/wotlk/std/UI/CharacterCreation";
{}

std.SQL.spell_area.query({ area: 616, spell: 42202 }).delete();

 //console.log(std.Spells.load(53908).codify({}))

std.Spells.load(53908)
    .Duration.modRefCopy(x => x
        .Duration.set(900000)
        .MaxDuration.set(900000)
    )

std.Spells.load(53450)
    .Effects.mod(0, (effect) => {
        effect.PointsBase.set(2)
    })

std.Spells.load(53451)
    .Effects.mod(0, (effect) => {
        effect.PointsBase.set(5)
    })


std.Spells.load(14983)
    .Effects.mod(0, (effect) =>{
        effect.PointsBase.set(49)
        effect.PointsDieSides.set(1)
        effect.BonusMultiplier.set(2)
    })

// std.Classes.forEach((entity) => {
//     std.Classes.load(entity.ID).Races.add(["BLOODELF", "DRAENEI", "DWARF", "GNOME", "HUMAN", "NIGHTELF", "ORC", "TAUREN", "TROLL", "UNDEAD"]);
// });

std.Classes.load("SHAMAN")
    .Races.add("DWARF")

std.Classes.load("DRUID")
    .Races.add("TROLL")

std.Classes.load("MAGE")
    .Races.add("TAUREN")

std.Classes.load("HUNTER")
    .Races.add(["UNDEAD", "HUMAN"])

std.EquipSkills.Bows.enableAutolearnClass("HUNTER", ["HUMAN", "UNDEAD"])
std.EquipSkills.Crossbows.enableAutolearnClass("HUNTER", ["HUMAN", "UNDEAD"])
std.EquipSkills.Guns.enableAutolearnClass("HUNTER", ["HUMAN", "UNDEAD"])
std.EquipSkills.Polearms.enableAutolearnClass("HUNTER", ["HUMAN", "NIGHTELF", "ORC", "UNDEAD", "DWARF", "TAUREN", "TROLL"])
std.EquipSkills.Mail.enableAutolearnClass(["SHAMAN"], ["DWARF", "TROLL", "ORC", "TAUREN"])
std.EquipSkills.Mail.enableAutolearnClass(["HUNTER"], ["HUMAN", "NIGHTELF", "ORC", "UNDEAD", "DWARF", "TAUREN", "TROLL"])

std.Classes.load("PRIEST")
    .Races.add(["GNOME"])

std.Classes
    .load("PALADIN")
    .Races.add(["UNDEAD"])
    std.EquipSkills.Daggers.enableAutolearnClass("PALADIN")
    std.EquipSkills.Maces2H.enableAutolearnClass("PALADIN")
export const CRUSADER_STRIKE = std.Spells.load(35395)
        .AutoLearn.add(1, "PALADIN", ["HUMAN", "BLOODELF", "UNDEAD", "DWARF", "DRAENEI"])

std.DBC.ScalingStatDistribution.add(372)
    .Maxlevel.set(80)
    .StatID.setIndex(0, 4)
    .StatID.setIndex(1, 7)
    .StatID.setIndex(2, 32)
    .StatID.setIndex(3, 31)
    .StatID.setIndex(4, 38)

std.DBC.ScalingStatDistribution.add(374)
    .Maxlevel.set(80)
    .StatID.setIndex(0, 3)
    .StatID.setIndex(1, 7)
    .StatID.setIndex(2, 32)
    .StatID.setIndex(3, 31)
    .StatID.setIndex(4, 38)
    .StatID.setIndex(5, 36)

std.DBC.ScalingStatDistribution.add(375)
    .Maxlevel.set(80)
    .StatID.setIndex(0, 5)
    .StatID.setIndex(1, 7)
    .StatID.setIndex(2, 32)
    .StatID.setIndex(3, 31)
    .StatID.setIndex(4, 45)
    .StatID.setIndex(5, 6)
    .StatID.setIndex(6, 36)

std.DBC.ScalingStatDistribution.add(376)
    .Maxlevel.set(80)
    .StatID.setIndex(0, 3)
    .StatID.setIndex(1, 5)
    .StatID.setIndex(2, 7)
    .StatID.setIndex(3, 32)
    .StatID.setIndex(4, 37)
    .StatID.setIndex(5, 38)

// console.log(std.Spells.load(5277).stringify())
std.Spells.load(12296)
    .Effects.mod(0, (effect) =>{
        effect.PointsBase.set(17)
        effect.PointsDieSides.set(1)
    })


std.Loot.GameObject.create()
    .addItem(60002, 100, 1, 1, false, 0, 0)
    .addItem(60003, 100, 1, 1, false, 0, 0)
    .addItem(60004, 100, 1, 1, false, 0, 0)
    .addItem(60005, 100, 1, 1, false, 0, 0)
    .addItem(60006, 100, 1, 1, false, 0, 0)
    .addItem(60007, 100, 1, 1, false, 0, 0)
    .addItem(60008, 100, 1, 1, false, 0, 0)
    .addItem(60009, 100, 1, 1, false, 0, 0)
    .addItem(42943, 100, 1, 1, false, 0, 0)
    .addItem(42991, 100, 2, 2, false, 0, 0)



const PALI_TRAINER = std.CreatureTemplates.load(20406)

const PT_SPAWNS = [
    { map: 0, x: 1848.347046, y: 1631.857666, z: 96.934525, o: 3.279774 },
    { map: 0, x: 2262.168945, y: 278.307312, z: 34.874516, o: 1.840172 },
]

PALI_TRAINER.Spawns.addMod('default', 'p-trainer', PT_SPAWNS, (spawn) => {
    spawn
        .MovementType.IDLE.set()
})

const H_TRAINER = std.CreatureTemplates.load(3352)

const H_SPAWNS = [
    { map: 0, x: 1837.543091, y: 1628.441650, z: 96.934715, o: 0.381146 },
    { map: 0, x: 2239.112549, y: 234.444397, z: 34.116589, o: 2.325747 },
]

H_TRAINER.Spawns.addMod('default', 'H-trainer', H_SPAWNS, (spawn) => {
    spawn
        .MovementType.IDLE.set()
})

std.ItemDisplayInfo.create('default', 'mace-retroport')
    .Icon.set('INV_Hammer_04')
    .Models.set(0, 'mace_2h_earthendungeon_c_02.mdx', 'mace_2h_earthendungeon_c_02_5367184')
    .GroupSoundIndex.set(9)

std.ItemDisplayInfo.create('default', 'Calahad')
    .Icon.set('INV_Sword_39')
    .Models.set(0, 'sword_2h_raid_d_04.mdx', 'sword_2h_raid_d_04')
    .GroupSoundIndex.set(9)

std.Spells.load(21975).Effects.mod(0, (effects) => {
        effects.PointsBase.set(49)
    })
std.Spells.load(23582).Effects.mod(1, (effects)=>{
        effects.Aura.PERIODIC_HEAL.set()
        .HealBase.set(79)
        .HealDieSides.set(5)
        .HealPeriod.set(0)
        .ImplicitTargetA.UNIT_CASTER.set()
        .ChainAmplitude.set(1)
    })

std.Spells.load(13732).Effects.mod(0, (effects)=>{
    effects.PointsBase.set(-6)
})
std.Spells.load(13863).Effects.mod(0, (effects)=>{
    effects.PointsBase.set(-11)
})

// console.log(std.Spells.load(34090).codify({}))


std.Items.create('default', 'Aged Coin')
    .Name.enGB.set('Aged Coin')
    .DisplayInfo.setSimpleIcon('default', 'Aged Coin', 'inv_misc_coin_16')
    .Quality.ORANGE.set()
    .MaxCount.set(1)

export const SET_CURRENCY = std.Currency.create('default', 'Soul-Coin')
    .Name.enGB.set("Aged Coins")
    .Item.set(60043)
    .Category.set(1)
    .Description.enGB.set("I think I've seen someone that took these coins from my days as a level 1")

std.ExtendedCost.create()
    .Items.add(60043, 1)

std.Classes.load("DEATH_KNIGHT").Races.delete(['BLOODELF', 'DRAENEI', 'DWARF', 'GNOME', 'HUMAN', 'NIGHTELF', 'ORC', 'TAUREN', 'TROLL', 'UNDEAD']);

std.CreatureTemplates.load(16378).delete()
std.CreatureTemplates.load(11102).delete()

std.Spells.load(46699)
    .Description.enGB.set('This Bow comes equipped with a state of the Art magic string, creating arrows, without having to buy them!')

std.Spells.load(29175)
    .Effects.mod(0, (effect) => {
        effect
            .PointsBase.set(49)
    })

std.GameObjectTemplates.Generic.create('mod', 'anvilus', 123244)
    .Spawns.add('mod', 'id', { map: 0, x: 2235.665771, y: -5303.415039, z: 83.576706, o: 1.214378 },)