import { std } from "wow/wotlk";

std.Spells.create('mod', 'explo-adrenaline')
    .Name.set({"enGB":"Explosive Adrenaline", "deDE":"Explosives Adrenalin"})
    .Description.set({"enGB":`Repurpose a Seaforium charge to give your heart a kick, causing your first ability every 60 sec to trigger Explosive Adrenaline, granting 117 Critical Strike for 15 sec.`})
    .AuraDescription.set({"enGB":`Repurpose a Seaforium charge to give your heart a kick, causing your first ability every 60 sec to trigger Explosive Adrenaline, granting 117 Critical Strike for 15 sec.`})
    .Subtext.set({"enGB":"Time-Warped Spell", "deDE":"Zeit-Verzerrter Zauber"})
    .Icon.setPath('ability_blackhand_attachedslagbombs')
    .SchoolMask.PHYSICAL.set(1)
    .Stacks.set(60)
    .Duration.modRefCopy(x => x
        .Duration.set(15000)
        .MaxDuration.set(15000)
    )
    .Range.modRefCopy(x=>x
        .Name.set({"enGB":"Self Only"})
        .NameShort.set({"enGB":"Self"})
    )
    .Cooldown.mod(x => x
        .GlobalTime.set(0)
        .GlobalCategory.set(0)
    )
    .Power.mod(x => x
        .Type.MANA.set()
        .CostPercent.set(0)
    )
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.MOD_CRIT_PCT.set()
        .PercentBase.set(1, "[1-101]")
        .ImplicitTargetA.UNIT_CASTER.set()
    )