import {std} from 'wow/wotlk';

std.Spells.create('default','admin-haste')
    // =================================================
    //
    // - Basic Properties -
    //
    // =================================================
    .Name.set({"enGB":"Admin's Haste"})
    .Description.set({"enGB":"Increases haste rating by $s1 for $d."})
    .AuraDescription.set({"enGB":"Increases haste rating by $s1."})
    .Subtext.set({})
    .Icon.setFullPath("Interface\\Icons\\INV_Alchemy_Elixir_04")
    .Attributes.set(['CASTABLE_WHILE_SITTING','UNAFFECTED_BY_INVULNERABILITY'])
    .SchoolMask.set(['PHYSICAL',0x1])
    .Family.set(13)
    .ClassMask.set(0,0,0)
    .ItemEquips.set(-1,0,0)
    .Levels.set(45,45,45)
    .Duration.modRefCopy(x=>x
        .Duration.set(3600000)
        .MaxDuration.set(3600000)
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
        .Type.APPLY_AURA.set()
        .Aura.MOD_RATING.set()
        .Rating.set(917504)
        .PercentBase.set(14999)
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
    // =================================================
    //
    // - Visuals -
    //
    // =================================================
    .Visual.modRefCopy(x=>x
        .CastKit.modRefCopy(x=>x
            .RightHandEffect.modRefCopy(x=>x
                .Name.set("Item - Potion Healing")
                .Filename.set("Spells\\PotionA_SpellObject.mdx")
                .AreaSize.set(1)
                .Scale.set(1,0.009999999776482582,100)
            )
            .CameraShake.set(0)
            .Flags.set(0)
            .Sound.set(3373)
            .Animation.EMOTE_EAT.set()
            .StartAnimation.set(-1)
        )
    )