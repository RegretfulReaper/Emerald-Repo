import { std } from "wow/wotlk";

std.Spells.create('mod', 'cant-miss')
    .Name.set({"enGB":"Can't Miss"})
    .Attributes.set(["CANT_BE_CANCELED", "IS_PASSIVE"])
    .Effects.addMod(x=>x
        .Type.APPLY_AURA.set()
        .Aura.MOD_ATTACKER_RANGED_HIT_CHANCE.set()
        .PercentBase.set(100, "AUTO")
        .PercentPerLevel.set(100, "AUTO")
        )