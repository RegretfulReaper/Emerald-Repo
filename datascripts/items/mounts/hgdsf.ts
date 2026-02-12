import { std } from "wow/wotlk";

std.Spells.create('mod','kfc-pferd')
    // =================================================
    //
    // - Basic Properties -
    //
    // =================================================
    .Name.set({"enGB":"Azeroth Traversing Machine"})
    .Description.set({"enGB":"Summons and dismisses a flying mount.  This is a very fast mount. This mount can be used wherever you want to use it."})
    .AuraDescription.set({"enGB":"Increases flight speed by $s2%."})
    .Subtext.set({})
    .Icon.setFullPath("Interface\\Icons\\ability_mount_rocketmount")
    .Attributes.set(['IS_ABILITY','IS_HIDDEN_FROM_LOG','OUTDOORS_ONLY','NOT_SHAPESHIFTED','SHEATHE_UNCHANGED','STOP_ATTACKING','CANNOT_USE_IN_COMBAT','IGNORE_BONUSES','UNK79','IS_ALLIANCE_ONLY'])
    .InterruptFlags.set(['ON_MOVEMENT','ON_PUSHBACK','ON_INTERRUPT_CAST','ON_INTERRUPT','ON_DAMAGE'])
    .SchoolMask.set(['PHYSICAL',0x1])
    .Mechanic.set(21)
    .Family.set(0)
    .ClassMask.set(0,0,0)
    .ItemEquips.set(-1,0,0)
    .Levels.set(1,0,0)
    .Duration.modRefCopy(x=>x
        .Duration.set(-1)
        .MaxDuration.set(-1)
    )
    .CastTime.modRefCopy(x=>x
        .Base.set(1500)
        .Minimum.set(1500)
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
        .Aura.MOUNTED.set()
        .CreatureTemplate.set(45004)
        .ImplicitTargetA.UNIT_CASTER.set()
        .ImplicitTargetB.set(0)
        .ChainTargets.set(0)
        .ChainAmplitude.set(1)
    )
    .Effects.addMod(x=>x
        .Type.APPLY_AURA.set()
        .Aura.MOD_INCREASE_MOUNTED_FLIGHT_SPEED.set()
        .PercentBase.set(278)
        .PercentDieSides.set(1)
        .PercentPerLevel.set(0)
        .PercentPerCombo.set(0)
        .BonusMultiplier.set(0)
        .MultipleValue.set(0)
        .ChainTargets.set(0)
        .ChainAmplitude.set(1)
        .ImplicitTargetA.UNIT_CASTER.set()
        .ImplicitTargetB.set(0)
    )
    .Effects.addMod(x=>x
        .Type.APPLY_AURA.set()
        .Aura.MOD_INCREASE_MOUNTED_SPEED.set()
        .PercentBase.set(98)
        .PercentDieSides.set(1)
        .PercentPerLevel.set(0)
        .PercentPerCombo.set(0)
        .BonusMultiplier.set(1)
        .MultipleValue.set(0)
        .ChainTargets.set(0)
        .ChainAmplitude.set(1)
        .ImplicitTargetA.UNIT_CASTER.set()
        .ImplicitTargetB.set(0)
    )
    // =================================================
    //
    // - Visuals -
    //
    // =================================================
    .Visual.modRefCopy(x=>x
        .CastKit.modRefCopy(x=>x
            .CameraShake.set(0)
            .Flags.set(0)
            .Sound.set(10886)
            .Animation.SPELL_CAST_OMNI.set()
            .StartAnimation.set(-1)
        )
        .PrecastKit.modRefCopy(x=>x
            .CameraShake.set(0)
            .Flags.set(0)
            .Sound.set(6425)
            .Animation.USE_STANDING_LOOP.set()
            .StartAnimation.set(-1)
        )
    )