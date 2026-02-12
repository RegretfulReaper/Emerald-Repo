import { std } from "wow/wotlk";
import { DOMINATION_SKILL_LINE, LICH_CLASS } from "../lich-class";

export const GHOUL_TEMPLATE = std.Spells.create('mod','Lich Ghoul')
    // =================================================
    //
    // - Basic Properties -
    //
    // =================================================
    .Name.set({"enGB":"Summon Deathcage Sorcerer"})
    .Description.set({"enGB":"Summons a Deathcage Sorcerer to fight alongside you."})
    .AuraDescription.set({})
    .Subtext.set({"enGB":"Summon"})
    .Icon.setFullPath("Interface\\Icons\\inv_misc_bone_elfskull_01")
    .PreventionType.SILENCE.set()
    .Attributes.set(['NOT_SHAPESHIFTED','DISMISS_PET','UN_AUTOCASTABLE_BY_PET','NO_REAGENT_WHILE_PREP'])
    .InterruptFlags.set(['ON_MOVEMENT','ON_PUSHBACK','ON_INTERRUPT_CAST','ON_INTERRUPT'])
    .SchoolMask.set(['PHYSICAL','SHADOW'])
    .DefenseType.set(1)
    .AutoLearn.add(20, [LICH_CLASS.Mask])
    .Family.set(5)
    .ItemEquips.set(-1,0,0)
    .Duration.modRefCopy(x=>x
        .Duration.set(-1)
        .MaxDuration.set(-1)
    )
    .CastTime.modRefCopy(x=>x
        .Base.set(5000)
        .Minimum.set(5000)
    )
    .Cooldown.mod(x=>x
        .GlobalTime.set(1500)
    )
    .Power.mod(x=>x
        .Type.MANA.set()
        .CostPercent.set(80)
    )
    .Range.modRefCopy(x=>x
        .Name.set({"enGB":"Self Only"})
        .NameShort.set({"enGB":"Self"})
    )
    .SkillLines.add(DOMINATION_SKILL_LINE.ID, LICH_CLASS.Mask)
    // =================================================
    //
    // - Effects -
    //
    // =================================================
    .Effects.addMod(x=>x
        .Type.SUMMON_PET.set()
        .SummonedCreature.set(16308)
    )
    // =================================================
    //
    // - Visuals -
    //
    // =================================================
    .Visual.modRefCopy(x=>x
        .CastKit.modRefCopy(x=>x
            .addBothHands(x=>x
                .Name.set("Summon Precast Hand")
                .Filename.set("Spells\\Summon_PreCast_Hand.mdx")
                .AreaSize.set(1)
                .Scale.set(1,0.009999999776482582,100)
            )
            .BaseEffect.modRefCopy(x=>x
                .Name.set("SummonPet Cast Impact Base")
                .Filename.set("Spells\\SummonPet_Cast_Impact_Base.mdx")
                .AreaSize.set(1)
                .Scale.set(1,0.009999999776482582,100)
            )
            .CameraShake.set(0)
            .Flags.set(0)
            .Sound.set(6101)
            .Animation.SPELL_CAST_OMNI.set()
            .StartAnimation.set(-1)
        )
        .ChannelKit.modRefCopy(x=>x
            .addBothHands(x=>x
                .Name.set("Magic PreCast Hand")
                .Filename.set("Spells\\Magic_PreCast_Hand.mdx")
                .AreaSize.set(1)
                .Scale.set(1,0.009999999776482582,100)
            )
            .CameraShake.set(0)
            .Flags.set(0)
            .Sound.set(3136)
            .Animation.CHANNEL_CAST_DIRECTED.set()
            .StartAnimation.set(-1)
        )
        .PrecastKit.modRefCopy(x=>x
            .addBothHands(x=>x
                .Name.set("Summon Precast Hand")
                .Filename.set("Spells\\Summon_PreCast_Hand.mdx")
                .AreaSize.set(1)
                .Scale.set(1,0.009999999776482582,100)
            )
            .BaseEffect.modRefCopy(x=>x
                .Name.set("SummonPet PreCast Impact Base")
                .Filename.set("Spells\\SummonPet_Impact_Base.mdx")
                .AreaSize.set(1)
                .Scale.set(1,0.009999999776482582,100)
            )
            .CameraShake.set(0)
            .Flags.set(0)
            .Sound.set(6554)
            .Animation.READY_SPELL_OMNI.set()
            .StartAnimation.set(-1)
        )
    )