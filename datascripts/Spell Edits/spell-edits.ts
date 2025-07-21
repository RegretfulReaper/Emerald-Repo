import { std } from "wow/wotlk";

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

std.Spells.load(12296)
    .Effects.mod(0, (effect) =>{
        effect.PointsBase.set(17)
        effect.PointsDieSides.set(1)
    })

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

std.Spells.load(46699)
    .Description.enGB.set('This Bow comes equipped with a state of the Art magic string, creating arrows, without having to buy them!')

std.Spells.load(29175)
    .Effects.mod(0, (effect) => {
        effect
            .PointsBase.set(49)
    })

std.Spells.load(1680)
    .Cooldown.set(0)

std.Spells.load(11578)
    // =================================================
    //
    // - Basic Properties -
    //
    // =================================================
    .Name.set({"enGB":"Charge"})
    .Description.set({"enGB":"Charge an enemy, generate $/10;s2 rage, and stun it for $7922d."})
    .AuraDescription.set({})
    .Subtext.set({"enGB":"Rank 3"})
    .Icon.setFullPath("Interface\\Icons\\Ability_Warrior_Charge")
    .PreventionType.PACIFY.set()
    .FacingCasterFlags.set(['SPELL_FACING_FLAG_INFRONT'])
    .Attributes.set(['IS_ABILITY','NOT_SHAPESHIFTED','SHEATHE_UNCHANGED','UNAFFECTED_BY_INVULNERABILITY','NO_THREAT','UNK82','HAS_CHARGE_EFFECT'])
    .SchoolMask.set(['PHYSICAL',0x1])
    .Priority.set(50)
    .ShapeshiftMask.Include.set(BigInt(65536))
    .ShapeshiftMask.Exclude.set(BigInt(65536))
    .TargetAuraSpell.Exclude.set(65219)
    .Category.set(1219)
    .Family.set(4)
    .ClassMask.set(1,0,0)
    .ItemEquips.set(-1,0,0)
    .Levels.set(46,46,0)
    .CastTime.modRefCopy(x=>x
    )
    .Cooldown.mod(x=>x
        .CategoryTime.set(3000)
        .Category.set(1219)
        .GlobalCategory.set(1178)
    )
    .Power.mod(x=>x
        .Type.RAGE.set()
    )
    .Range.modRefCopy(x=>x
        .Name.set({"enGB":"Charge"})
        .NameShort.set({"enGB":"Charge"})
        .HostileMin.set(8)
        .HostileMax.set(25)
        .FriendMin.set(8)
        .FriendMax.set(25)
    )

std.Spells.load(6178)
    // =================================================
    //
    // - Basic Properties -
    //
    // =================================================
    .Name.set({"enGB":"Charge"})
    .Description.set({"enGB":"Charge an enemy, generate $/10;s2 rage, and stun it for $7922d."})
    .AuraDescription.set({})
    .Subtext.set({"enGB":"Rank 2"})
    .Icon.setFullPath("Interface\\Icons\\Ability_Warrior_Charge")
    .PreventionType.PACIFY.set()
    .FacingCasterFlags.set(['SPELL_FACING_FLAG_INFRONT'])
    .Attributes.set(['IS_ABILITY','NOT_SHAPESHIFTED','SHEATHE_UNCHANGED','UNAFFECTED_BY_INVULNERABILITY','NO_THREAT','UNK82','HAS_CHARGE_EFFECT'])
    .SchoolMask.set(['PHYSICAL',0x1])
    .Priority.set(50)
    .ShapeshiftMask.Include.set(BigInt(65536))
    .ShapeshiftMask.Exclude.set(BigInt(65536))
    .TargetAuraSpell.Exclude.set(65219)
    .Category.set(1219)
    .Family.set(4)
    .ClassMask.set(1,0,0)
    .ItemEquips.set(-1,0,0)
    .Levels.set(46,46,0)
    .CastTime.modRefCopy(x=>x
    )
    .Cooldown.mod(x=>x
        .CategoryTime.set(3000)
        .Category.set(1219)
        .GlobalCategory.set(1178)
    )
    .Power.mod(x=>x
        .Type.RAGE.set()
    )
    .Range.modRefCopy(x=>x
        .Name.set({"enGB":"Charge"})
        .NameShort.set({"enGB":"Charge"})
        .HostileMin.set(8)
        .HostileMax.set(25)
        .FriendMin.set(8)
        .FriendMax.set(25)
    )

std.Spells.load(100)
    // =================================================
    //
    // - Basic Properties -
    //
    // =================================================
    .Name.set({"enGB":"Charge"})
    .Description.set({"enGB":"Charge an enemy, generate $/10;s2 rage, and stun it for $7922d."})
    .AuraDescription.set({})
    .Subtext.set({"enGB":"Rank 1"})
    .Icon.setFullPath("Interface\\Icons\\Ability_Warrior_Charge")
    .PreventionType.PACIFY.set()
    .FacingCasterFlags.set(['SPELL_FACING_FLAG_INFRONT'])
    .Attributes.set(['IS_ABILITY','NOT_SHAPESHIFTED','SHEATHE_UNCHANGED','UNAFFECTED_BY_INVULNERABILITY','NO_THREAT','UNK82','HAS_CHARGE_EFFECT'])
    .SchoolMask.set(['PHYSICAL',0x1])
    .Priority.set(50)
    .ShapeshiftMask.Include.set(BigInt(65536))
    .ShapeshiftMask.Exclude.set(BigInt(65536))
    .TargetAuraSpell.Exclude.set(65219)
    .Category.set(1219)
    .Family.set(4)
    .ClassMask.set(1,0,0)
    .ItemEquips.set(-1,0,0)
    .Levels.set(46,46,0)
    .CastTime.modRefCopy(x=>x
    )
    .Cooldown.mod(x=>x
        .CategoryTime.set(3000)
        .Category.set(1219)
        .GlobalCategory.set(1178)
    )
    .Power.mod(x=>x
        .Type.RAGE.set()
    )
    .Range.modRefCopy(x=>x
        .Name.set({"enGB":"Charge"})
        .NameShort.set({"enGB":"Charge"})
        .HostileMin.set(8)
        .HostileMax.set(25)
        .FriendMin.set(8)
        .FriendMax.set(25)
    )