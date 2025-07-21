import { std } from "wow/wotlk";

// console.log(std.Spells.load(14983).codify({}))

std.Spells.create('mod','legacy-rage')
    // =================================================
    //
    // - Basic Properties -
    //
    // =================================================
    .Name.set({"enGB":"Helya's Relentless Wrath"})
    .Description.set({"enGB":"Afflicted by Helya's Relentless Wrath, You generate $s1 rage upon every Weapon swing."})
    .AuraDescription.set({})
    .Subtext.set({'enGB':"Artifact"})
    .Icon.setFullPath("Interface\\Icons\\Spell_Holy_BlessingOfStamina")
    .Attributes.set(['IS_ABILITY','IS_PASSIVE','IS_HIDDEN_IN_SPELLBOOK','SHEATHE_UNCHANGED'])
    .SchoolMask.set(['PHYSICAL',0x1])
    .Priority.set(50)
    .Family.set(0)
    .ClassMask.set(0,0,0)
    .ItemEquips.set(-1,0,0)
    .Levels.set(1,0,0)
    .CastTime.modRefCopy(x=>x
    )
    .Cooldown.mod(x=>x
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
        .Type.APPLY_AURA.set()
        .Aura.MOD_POWER_REGEN.set()
        .PowerType.RAGE.set()
        .PowerBase.set(19)
        .PowerDieSides.set(1)
        .PowerPerLevel.set(0)
        .PowerPerCombo.set(0)
        .BonusMultiplier.set(0)
        .MultipleValue.set(0)
        .ChainTargets.set(0)
        .ChainAmplitude.set(1)
        .ImplicitTargetA.UNIT_CASTER.set()
        .ImplicitTargetB.set(0)
    )

std.Spells.create('mod','helheim')
    // =================================================
    //
    // - Basic Properties -
    //
    // =================================================
    .Name.set({"enGB":"Titan's Death Grip"})
    .Description.set({"enGB":"You may use Execute regardless of target's health."})
    .AuraDescription.set({"enGB":"You may use Execute regardless of target's health."})
    .Subtext.set({})
    .Icon.setFullPath("Interface\\Icons\\inv_sword_1h_artifactvigfus_d_01")
    .Attributes.set(['IS_ABILITY','UNAFFECTED_BY_INVULNERABILITY','NO_THREAT','PERSISTS_DEATH'])
    .SchoolMask.set(['PHYSICAL',0x1])
    .Proc.mod(x=>x
        .SpellFamily.set(4)
        .ClassMask.A.set(536870912)
        .ClassMask.B.set(536870912)
        .ClassMask.C.set(536870912)
        .PhaseMask.set("FINISH")
        .SchoolMask.set(["PHYSICAL", 0x1])
    )
    .Family.set(4)
    .ClassMask.set(0,33554432,0)
    .ItemEquips.set(-1,0,0)
    .Levels.set(0,0,0)
    .Duration.modRefCopy(x=>x
        .Duration.set(-1)
        .MaxDuration.set(-1)
    )
    .CastTime.modRefCopy(x=>x
    )
    .Cooldown.mod(x=>x
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
        .ClassMask.set(536870912,0,0)
        .Type.APPLY_AURA.set()
        .Aura.ABILITY_IGNORE_AURASTATE.set()
        .ItemType.set(0)
        .Mechanic.NONE.set()
        .PointsBase.set(0)
        .PointsDieSides.set(0)
        .PointsPerLevel.set(0)
        .PointsPerCombo.set(0)
        .ImplicitTargetA.UNIT_CASTER.set()
        .ImplicitTargetB.set(0)
        .AuraPeriod.set(0)
        .MultipleValue.set(0)
        .ChainTarget.set(0)
        .MiscValueA.set(0)
        .MiscValueB.set(0)
        .TriggerSpell.set(0)
        .ChainAmplitude.set(1)
        .BonusMultiplier.set(0)
    )