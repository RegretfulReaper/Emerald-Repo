import { std } from 'wow/wotlk';

std.Items.create('mod', 'xp-pot-item')
    // =================================================
    //
    // - Basic Properties -
    //
    // =================================================
    .Name.set({ "enGB": "Experience Potion" })
    .DisplayInfo.setSimpleIcon('default', 'xp-pot-item', 'inv_potion_26')
    .Quality.HEIRLOOM.set()
    .Bonding.BINDS_ON_PICKUP.set()
    .Class.POTION.set()
    .MaxStack.set(10)
    // =================================================
    //
    // - Spells -
    //
    // =================================================
    .Spells.addMod(x => x
        .Spell.set(80908)
        .CategoryCooldown.set(-1)
        .Cooldown.set(-1)
        .Trigger.ON_USE.set()
        .Charges.Raw.set(-1)
);