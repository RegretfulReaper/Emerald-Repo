import { std } from "wow/wotlk";

std.Items.create('default', 'hammer-port')
    .Name.enGB.set('Caladbolg')
    .InventoryType.TWOHAND.set()
    .Class.SWORD_2H.set()
    .DisplayInfo.set(70003)
    .Quality.ORANGE.set()
    .Damage.addPhysical(849, 1868)
    .Delay.addMilliseconds(2000)
    .SheatheType.set(1)
    .Sheath.TWO_HANDED_WEAPON.set()
    .Bonding.BINDS_ON_PICKUP.set()
    .ItemLevel.set(267)