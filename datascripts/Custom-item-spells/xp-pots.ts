import { std } from 'wow/wotlk';

std.Spells.create('default', 'Thing')
    // =================================================
    //
    // - Basic Properties -
    //
    // =================================================
    .Name.set({ "enGB": "Potion of Experience" })
    .Description.set({ "enGB": "Experience gained from Killing Monsters and completing quests increased by $s1%." })
    .AuraDescription.set({ "enGB": "Experience gained from Killing Monsters and completing quests increased by $s1%." })
    .Subtext.set({ "enGB": "Admin Only" })
    .Icon.setFullPath("Interface\\Icons\\inv_potion_26")
    .PreventionType.SILENCE.set()
    .Attributes.set(['NOT_SHAPESHIFTED', 'UN_AUTOCASTABLE_BY_PET', 'CONSOLIDATED_RAID_BUFF'])
    .InterruptFlags.set(['ON_INTERRUPT'])
    .SchoolMask.set([])
    .DefenseType.set(1)
    .Family.set(0)
    .Stacks.set(0)
    .ClassMask.set(0, 0, 16)
    .ItemEquips.set(-1, 0, 0)
    .Levels.set(1, 1, 0)
    .Duration.modRefCopy(x => x
        .Duration.set(3600000)
        .MaxDuration.set(3600000)
    )
    .CastTime.modRefCopy(x => x
    )
    .Cooldown.mod(x => x
        .GlobalTime.set(0)
        .GlobalCategory.set(0)
    )
    .Power.mod(x => x
        .Type.MANA.set()
        .CostPercent.set(0)
    )
    .Range.modRefCopy(x => x
        .Name.set({ "enGB": "Self Only" })
        .NameShort.set({ "enGB": "Self" })
    )
    // =================================================
    //
    // - Effects -
    //
    // =================================================
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.MOD_XP_PCT.set()
        .PercentBase.set(149)
        .ImplicitTargetA.UNIT_CASTER.set()
        .ImplicitTargetB.UNIT_CASTER_AREA_PARTY.set()
        .Radius.set(1000)
    )
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.MOD_XP_QUEST_PCT.set()
        .PercentBase.set(149)
        .ImplicitTargetA.UNIT_CASTER.set()
        .ImplicitTargetB.UNIT_CASTER_AREA_PARTY.set()
        .Radius.set(1000)
    )