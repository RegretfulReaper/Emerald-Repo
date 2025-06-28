import { std } from "wow/wotlk";

std.Spells.create('default','Bloodied Strike')
    // =================================================
    //
    // - Basic Properties -
    //
    // =================================================
    .Name.set({"enGB":"Bloodied Strike"})
    .Description.set({"enGB":"An instant strike that deals $s2% weapon damage (${$m2*1.45}% if a dagger is equipped) and causes the target to hemorrhage, increasing any Physical damage dealt to the target by up to $<bonus>."})
    .AuraDescription.set({"enGB":"Increases damage taken by $s3."})
    .Subtext.set({"enGB":"Forbidden Rune"})
    .Icon.setFullPath("Interface\\Icons\\Spell_Shadow_LifeDrain")
    .DescriptionVariable.setSimple("$bonus=$?s56807[${$m3*1.4}][${$m3}]")
    .PreventionType.PACIFY.set()
    .FacingCasterFlags.set(['SPELL_FACING_FLAG_INFRONT'])
    .Attributes.set(['IS_ABILITY','NOT_SHAPESHIFTED','SHEATHE_UNCHANGED','IS_NEGATIVE','MELEE_COMBAT_START','UNK10','UNK27','MAINHAND_REQUIRED'])
    .SchoolMask.set(['PHYSICAL',0x1])
    .DefenseType.set(2)
    .StanceBarOrder.set(4294967295)
    .Family.set(8)
    .ClassMask.set(41943040,0,0)
    .ItemEquips.set(2,173555,0)
    .Levels.set(0,0,0)
    .Duration.modRefCopy(x=>x
        .Duration.set(15000)
        .MaxDuration.set(15000)
    )
    .CastTime.modRefCopy(x=>x
    )
    .Cooldown.mod(x=>x
        .GlobalTime.set(1000)
        .GlobalCategory.set(133)
    )
    .Power.mod(x=>x
        .Type.ENERGY.set()
        .CostBase.set(0)
    )
    .Range.modRefCopy(x=>x
        .Name.set({"enGB":"Combat Range"})
        .NameShort.set({"enGB":"Combat"})
        .Flags.set(1)
        .HostileMax.set(5)
        .FriendMax.set(5)
    )
    // =================================================
    //
    // - Effects -
    //
    // =================================================
    .Effects.addMod(x=>x
        .Type.NORMALIZED_WEAPON_DMG.set()
        .ItemType.set(0)
        .Mechanic.NONE.set()
        .PointsBase.set(0)
        .PointsDieSides.set(0)
        .PointsPerLevel.set(0)
        .PointsPerCombo.set(0)
        .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
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
    .Effects.addMod(x=>x
        .Type.WEAPON_PERCENT_DAMAGE.set()
        .Percentage.set(108)
        .DamagePctBase.set(108)
        .DamagePctDieSides.set(1)
        .DamagePctPerLevel.set(0)
        .DamagePctPerCombo.set(0)
        .BonusMultiplier.set(0)
        .MultipleValue.set(0)
        .ChainTargets.set(0)
        .ChainAmplitude.set(1)
        .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
        .ImplicitTargetB.set(0)
    )
    .Effects.addMod(x=>x
        .Type.APPLY_AURA.set()
        .Aura.MOD_DAMAGE_TAKEN.set()
        .School.set(undefined)
        .DamagePctBase.set(11)
        .DamagePctDieSides.set(1)
        .DamagePctPerLevel.set(0)
        .DamagePctPerCombo.set(0)
        .BonusMultiplier.set(0)
        .MultipleValue.set(0)
        .ChainTargets.set(0)
        .ChainAmplitude.set(1)
        .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
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
            .Sound.set(48)
            .CharProcedures.addMod(x=>x
                .Type.WEAPON_TRAIL.set()
                .Color.set(1262355207)
                .FadeOutRate.set(0)
                .Duration.set(0)
                .Alpha.set(0)
            )
            .Animation.SPECIAL1_H.set()
            .StartAnimation.set(-1)
        )
        .ImpactKit.modRefCopy(x=>x
            .ChestEffect.modRefCopy(x=>x
                .Name.set("BloodyExplosion")
                .Filename.set("Spells\\BloodyExplosion.mdx")
                .AreaSize.set(1)
                .Scale.set(1,0.009999999776482582,100)
            )
            .CameraShake.set(0)
            .Flags.set(0)
            .Sound.set(3134)
            .Animation.set(-1)
            .StartAnimation.set(-1)
        )
    )

std.Items.create('default', 'mythic-item')
    .Name.enGB.set('Mythic Test')
    .Flags.set(268435520)
    .Quality.ORANGE.set()
    .DisplayInfo.modRefCopy('default', 'id_display', x=>x
        .Icon.set('spell_deathknight_runetap')
        .GroupSoundIndex.set(20)
    )
    .Spells.addMod(x=>x 
        .Spell.set(80907)
        .Charges.set('UNLIMITED')
        .Trigger.ON_USE.set()
    )

// console.log(std.Items.load(60000).codify({}))

std.Spells.create('default','id')
    // =================================================
    //
    // - Basic Properties -
    //
    // =================================================
    .Name.set({"enGB":"Scroll of Bloodied Strike"})
    .Description.set({"enGB":"Teaches user the Ability Bloodied Strike."})
    .AuraDescription.set({})
    .Subtext.set({"enGB":"Forbidden Rune"})
    .Icon.setFullPath("Interface\\Icons\\Spell_Nature_Swiftness")
    .Attributes.set(['IS_HIDDEN_FROM_LOG','SHEATHE_UNCHANGED'])
    .SchoolMask.set(['PHYSICAL',0x1])
    .Family.set(0)
    .ClassMask.set(0,0,0)
    .ItemEquips.set(-1,0,0)
    .Levels.set(0,0,0)
    .CastTime.modRefCopy(x=>x
    )
    .Cooldown.mod(x=>x
    )
    .Power.mod(x=>x
        .Type.MANA.set()
    )
    .Range.modRefCopy(x=>x
        .Name.set({"enGB":"Vision Range"})
        .NameShort.set({"enGB":"Vision"})
        .HostileMax.set(100)
        .FriendMax.set(100)
    )
    // =================================================
    //
    // - Effects -
    //
    // =================================================
    .Effects.addMod(x=>x
        .Type.LEARN_SPELL.set()
        .LearntSpell.set(80906)
        .ImplicitTargetA.UNIT_TARGET_ANY.set()
        .ImplicitTargetB.set(0)
        // .ChainTargets.set(0)
        .ChainAmplitude.set(1)
    )
    .Effects.addMod(x=>x
        .Type.SKILL_STEP.set()
        .Tier.set(4)
        .Skill.set(762)
        .ImplicitTargetA.UNIT_TARGET_ANY.set()
        .ImplicitTargetB.set(0)
        .ChainTargets.set(0)
        .ChainAmplitude.set(1)
    )
    // =================================================
    //
    // - Visuals -
    //
    // =================================================
    .Visual.modRefCopy(x => x
        .CastKit.modRefCopy(x => x
            .CameraShake.set(0)
            .Flags.set(0)
            .Sound.set(48)
            .CharProcedures.addMod(x => x
                .Type.WEAPON_TRAIL.set()
                .Color.set(1262355207)
                .FadeOutRate.set(0)
                .Duration.set(0)
                .Alpha.set(0)
            )
            .Animation.SPECIAL1_H.set()
            .StartAnimation.set(-1)
        )
        .ImpactKit.modRefCopy(x => x
            .ChestEffect.modRefCopy(x => x
                .Name.set("BloodyExplosion")
                .Filename.set("Spells\\BloodyExplosion.mdx")
                .AreaSize.set(1)
                .Scale.set(1, 0.009999999776482582, 100)
            )
            .CameraShake.set(0)
            .Flags.set(0)
            .Sound.set(3134)
            .Animation.set(-1)
            .StartAnimation.set(-1)
        )
    )