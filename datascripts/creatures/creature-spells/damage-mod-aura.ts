import { std } from "wow/wotlk";

std.Spells.create('mod', 'dmg-mod')
    .Name.enGB.set('Damage Reduction')
    .Power.setMana(0, 0, 0, 0, 0)
    .Effects.addGet()
    .Type.APPLY_AURA.set()
    .Aura.MOD_DAMAGE_PERCENT_DONE.set()
    .PercentBase.set(0, "AUTO")
    .ImplicitTargetA.UNIT_TARGET_ENEMY.set()