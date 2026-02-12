import { std } from "wow/wotlk";
import { LICH_CLASS, NECROSIS_SKILL_LINE } from "../lich-class";

// console.log(std.Spells.load(50796).codify({}))

export const LICH_BOLT_TEMPLATE = std.Spells.create('mod','lich-bolt')
    // =================================================
    //
    // - Basic Properties -
    //
    // =================================================
    .Name.set({"enGB":"Lich Bolt"})
    .Description.set({"enGB":"Causes the enemy target to run in horror for $d and causes $s1 Shadow damage.  The caster gains ${100*$e1}% of the damage caused in health."})
    .AuraDescription.set({"enGB":"Horrified."})
    .Subtext.set({"enGB":"Rank 1"})
    .Icon.setFullPath("Interface\\Icons\\Spell_Shadow_DeathCoil")
    .PreventionType.SILENCE.set()
    .DispelType.DISPEL_MAGIC.set()
    .FacingCasterFlags.set(['SPELL_FACING_FLAG_INFRONT'])
    .Attributes.set(['NOT_SHAPESHIFTED'])
    .InterruptFlags.set(['ON_INTERRUPT'])
    .SchoolMask.set(['PHYSICAL','SHADOW'])
    .DefenseType.set(1)
    .Priority.set(50)
    .Speed.set(24)
    .Category.set(633)
    .Family.set(5)
    .AutoLearn.add(20, [LICH_CLASS.Mask])
    .ItemEquips.set(-1,0,0)
    .Levels.set(42,42,48)
    .CastTime.modRefCopy(x=>x
        .Base.set(1800)
        .Minimum.set(1800)
    )
    .Duration.modRefCopy(x=>x
        .Duration.set(3000)
        .MaxDuration.set(3000)
    )
    .CastTime.modRefCopy(x=>x
    )
    .Cooldown.mod(x=>x
        .CategoryTime.set(1500)
        .GlobalTime.set(1500)
    )
    .Power.mod(x=>x
        .Type.MANA.set()
        .CostPercent.set(23)
    )
    .Range.modRefCopy(x=>x
        .Name.set({"enGB":"Medium Range"})
        .NameShort.set({"enGB":"Medium"})
        .HostileMax.set(40)
        .FriendMax.set(40)
    )
    .SkillLines.add(NECROSIS_SKILL_LINE.ID, [LICH_CLASS.Mask])
    // =================================================
    //
    // - Effects -
    //
    // =================================================
    .Effects.addMod(x=>x
        .Type.HEALTH_LEECH.set()
        .DamageBase.set(244)
        .DamageDieSides.set(1)
        .DamagePerLevel.set(2.200000047683716)
        .DamagePerCombo.set(0)
        .BonusMultiplier.set(0.21400000154972076)
        .MultipleValue.set(3)
        .ChainTargets.set(0)
        .ChainAmplitude.set(1)
        .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
        .ImplicitTargetB.set(0)
    )
    .Effects.addMod(x=>x
        .Type.APPLY_AURA.set()
        .Aura.MOD_FEAR.set()
        .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
        .ImplicitTargetB.set(0)
        .ChainTargets.set(0)
        .ChainAmplitude.set(1)
    )
    // =================================================
    //
    // - Visuals -
    //
    // =================================================
    .Visual.modRefCopy(x=>x
        .Missile.mod(x=>x
            .HasMissile.set(1)
            .Attachment.set(-1)
            .CastOffset.set({"x":0,"y":0,"z":0})
            .DestinationAttachment.set(1)
            .Model.set(151)
            .Sound.set(3015)
            .FollowGround.mod(x=>x
                .Approach.set(0)
                .DropSpeed.set(0)
                .Flags.set(0)
                .Height.set(0)
            )
        )
        .CastKit.modRefCopy(x=>x
            .addBothHands(x=>x
                .Name.set("Fel Fire Precast Hand Uber")
                .Filename.set("spells\\fel_fire_precast_uber_hand.mdx")
                .AreaSize.set(1)
                .Scale.set(1,0.009999999776482582,100)
            )
            .CameraShake.set(0)
            .Flags.set(0)
            .Sound.set(1484)
            .Animation.SPELL_CAST_DIRECTED.set()
            .StartAnimation.set(-1)
        )
        .ImpactKit.modRefCopy(x=>x
            .ChestEffect.modRefCopy(x=>x
                .Name.set("Decimate Impact Chest")
                .Filename.set("spells\\decimate_impact_chest.mdx")
                .AreaSize.set(1)
                .Scale.set(1,0.009999999776482582,100)
            )
            .CameraShake.set(0)
            .Flags.set(0)
            .Sound.set(1507)
            .Animation.set(-1)
            .StartAnimation.set(-1)
        )
        .PrecastKit.modRefCopy(x=>x
            .addBothHands(x=>x
                .Name.set("Fel Fire Precast Hand")
                .Filename.set("spells\\fel_fire_precast_hand.m2")
                .AreaSize.set(1)
                .Scale.set(1,0.009999999776482582,100)
            )
            .CameraShake.set(0)
            .Flags.set(0)
            .Sound.set(702)
            .Animation.READY_SPELL_DIRECTED.set()
            .StartAnimation.set(-1)
        )
    )