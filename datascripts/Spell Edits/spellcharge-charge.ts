import { std } from "wow/wotlk";

export const CHARGE_AURA = std.Spells.create('mod', 'charge-aura')
    // =================================================
    //
    // - Basic Properties -
    //
    // =================================================
    .Name.set({"enGB":"Charge"})
    .Description.set({"enGB":"Charge an enemy, generate $/10;s2 rage, and stun it for $7922d."})
    .AuraDescription.set({})
    .Subtext.set({"enGB":"Rank 3"})
    .Icon.setFullPath("Interface\\Icons\\Ability_Warrior_Charge")
    .PreventionType.PACIFY.set()
    .FacingCasterFlags.set(['SPELL_FACING_FLAG_INFRONT'])
    .Attributes.set(['IS_ABILITY','NOT_SHAPESHIFTED','SHEATHE_UNCHANGED','UNAFFECTED_BY_INVULNERABILITY','NO_THREAT','UNK82','HAS_CHARGE_EFFECT'])
    .SchoolMask.set(['PHYSICAL',0x1])
    .Priority.set(50)
    .ShapeshiftMask.Include.set(BigInt(65536))
    .ShapeshiftMask.Exclude.set(BigInt(65536))
    .TargetAuraSpell.Exclude.set(65219)
    .Category.set(1219)
    .Family.set(4)
    .Stacks.set(2)
    .ClassMask.set(1,0,0)
    .ItemEquips.set(-1,0,0)
    .Levels.set(46,46,0)
    .Duration.setSimple(3000)
    // =================================================
    //
    // - Effects -
    //
    // =================================================
    .Effects.addMod(x=>x
        .Type.APPLY_AURA.set()
        .Aura.DUMMY.set()
        .AuraPeriod.set(3000)
        )