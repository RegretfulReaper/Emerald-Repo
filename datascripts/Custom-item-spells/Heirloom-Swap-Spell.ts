import { std } from "wow/wotlk";

std.Spells.create('mod','id')
    // =================================================
    //
    // - Basic Properties -
    //
    // =================================================
    .Name.set({"enGB":"Swap-Tank-War"})
    .Description.set({"enGB":""})
    .AuraDescription.set({})
    .Subtext.set({})
    .Icon.setFullPath("Interface\\Icons\\ability_rogue_dismantle")
    .Attributes.set([])
    .SchoolMask.set(['PHYSICAL',0x1])
    .Family.set(0)
    .ClassMask.set(0,0,0)
    .ItemEquips.set(-1,0,0)
    .Levels.set(0,0,0)
    .Reagents.add(42943,1)
    .CastTime.modRefCopy(x=>x
        .Base.set(1000)
        .Minimum.set(1000)
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
        .Type.CREATE_ITEM.set()
        .Item.set(42945)
        .ItemCount.set(0)
        .ImplicitTargetA.UNIT_CASTER.set()
        .ImplicitTargetB.set(0)
        .ChainTargets.set(0)
        .ChainAmplitude.set(1)
    )
    // .Effects.addMod(x=>x
    //     .Type.TRIGGER_SPELL.set()
    //     .TriggerSpell.set(22991)
    // )

    // std.Spells.create('mod','id')
    // // =================================================
    // //
    // // - Basic Properties -
    // //
    // // =================================================
    // .Name.set({"enGB":"Swap-Tank-War-Shield"})
    // .Description.set({"enGB":""})
    // .AuraDescription.set({})
    // .Subtext.set({})
    // .Icon.setFullPath("Interface\\Icons\\ability_rogue_dismantle")
    // .Attributes.set([])
    // .SchoolMask.set(['PHYSICAL',0x1])
    // .Family.set(0)
    // .ClassMask.set(0,0,0)
    // .ItemEquips.set(-1,0,0)
    // .Levels.set(0,0,0)
    // .Reagents.add(42943,1)
    // .CastTime.modRefCopy(x=>x
    //     .Base.set(1000)
    //     .Minimum.set(1000)
    // )
    // .Cooldown.mod(x=>x
    // )
    // .Power.mod(x=>x
    //     .Type.MANA.set()
    // )
    // .Range.modRefCopy(x=>x
    //     .Name.set({"enGB":"Self Only"})
    //     .NameShort.set({"enGB":"Self"})
    // )
    // // =================================================
    // //
    // // - Effects -
    // //
    // // =================================================
    // .Effects.addMod(x=>x
    //     .Type.CREATE_ITEM.set()
    //     .Item.set(42945)
    //     .ItemCount.set(0)
    //     .ImplicitTargetA.UNIT_CASTER.set()
    //     .ImplicitTargetB.set(0)
    //     .ChainTargets.set(0)
    //     .ChainAmplitude.set(1)
    // )