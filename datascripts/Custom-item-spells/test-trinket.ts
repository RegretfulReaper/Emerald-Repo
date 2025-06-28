import { std } from "wow/wotlk";
import { Description } from "wow/wotlk/std/Quest/QuestText";
import { Spell } from "wow/wotlk/std/Spell/Spell";


const shared_values = {

    Name:"Eye of Kezaan",
    Description: "Your spells and abilities have a high chance to empower the Eye and grant you $s1% Critical Chance up to 20 times, decaying rapidly upon leaving combat.",
    Icon: "achievement_dungeon_classicraider"
}

const trinket_spell = std.Spells.create("default", "Eye of Kezan")
    .Name.enGB.set(shared_values.Name)
    .Description.enGB.set(shared_values.Description)
    .AuraDescription.enGB.set(shared_values.Description)
    .Duration.setSimple(30000)
    .Stacks.set(20)
    .Icon.setPath(shared_values.Icon)

trinket_spell
.Effects.addGet()
    .Type.APPLY_AURA.set()
    .Aura.MOD_CRIT_PCT.set()
    .ImplicitTargetA.UNIT_CASTER.set()
    .PercentBase.set(17)
    .PercentDieSides.set(1)
    .ChainAmplitude.set(1)

trinket_spell
.Effects.addGet()
    .Type.APPLY_AURA.set()
    .Aura.MOD_ATTACKER_SPELL_AND_WEAPON_CRIT_CHANCE.set()
    .ImplicitTargetA.UNIT_CASTER.set()
    .PercentBase.set(173)
    .PercentDieSides.set(1)
    .ChainAmplitude.set(1)

trinket_spell
.Effects.addGet()
    .Type.APPLY_AURA.set()
    .Aura.MOD_HIT_CHANCE.set()
    .ImplicitTargetA.UNIT_CASTER.set()
    .PercentBase.set(17)
    .PercentDieSides.set(1)
    .ChainAmplitude.set(1)