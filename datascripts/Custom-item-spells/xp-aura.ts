import { std } from "wow/wotlk";

std.Spells.create('mod', 'xp-aura')
    // =================================================
    //
    // - Basic Properties -
    //
    // =================================================
    .Name.set({ "enGB": "Aura of Experience" })
    .Description.set({ "enGB": "Experience gained from Killing Monsters and completing quests increased by $s1%." })
    .AuraDescription.set({ "enGB": "Experience gained from Killing Monsters and completing quests increased by $s1%." })
    .Subtext.set({ "enGB": "Admin Only" })
    .Icon.setFullPath("Interface\\Icons\\ability_paladin_beaconoflight")
    .PreventionType.SILENCE.set()
    .Attributes.set(['NOT_SHAPESHIFTED', 'UN_AUTOCASTABLE_BY_PET', 'CONSOLIDATED_RAID_BUFF'])
    .InterruptFlags.set(['ON_INTERRUPT'])
    .SchoolMask.set([])
    .DefenseType.set(1)
    .MaxTargetLevel.set(79)
    .Family.set(0)
    .Stacks.set(0)
    .ClassMask.set(0, 0, 16)
    .ItemEquips.set(-1, 0, 0)
    .Levels.set(80905, 1, 79)
    .Duration.modRefCopy(x => x
        .Duration.set(-1)
        .MaxDuration.set(-1)
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
        .PercentBase.set(299)
        .ImplicitTargetA.UNIT_CASTER.set()
        .ImplicitTargetB.UNIT_CASTER_AREA_PARTY.set()
        .Radius.set(1000)
    )
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.MOD_XP_QUEST_PCT.set()
        .PercentBase.set(299)
        .ImplicitTargetA.UNIT_CASTER.set()
        .ImplicitTargetB.UNIT_CASTER_AREA_PARTY.set()
        .Radius.set(1000)
    )