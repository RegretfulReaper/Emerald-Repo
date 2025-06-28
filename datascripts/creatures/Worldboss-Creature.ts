import { std } from "wow/wotlk";

const MODEL = std.CreatureOutfits.create().fromString(
    `
    Character\Scourge\male\scourgemale.m2
    5 0
    4 1 9 9 2 0 1
    16908
    0
    16832
    16906
    16910
    0
    16909
    16905
    16911
    16907
    47461
    44736
    34241
    0
    0
    `)

export const WORLDBOSS = std.CreatureTemplates.create('default', 'wb-main')
    .Name.enGB.set('Boss Mob')
    .Subname.enGB.set('Bloodfang Rogue Mob')
    .UnitClass.ROGUE.set()
    .FactionTemplate.NEUTRAL_HOSTILE.set()
    .Models.addIds(MODEL.ID)
    .Level.set(80, 80)
    .Scale.set(1.5)
    .Stats.ArmorMod.set(1000)
    .MovementSpeed.set(1.5, 1.5)
    .MechanicImmunity.set(["BANISH", "CHARM", "DAZE", "DISARM", "FEAR", "SLEEP", "STUN"])