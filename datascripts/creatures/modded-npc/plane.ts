import { std } from "wow/wotlk";

std.CreatureTemplates.create('mod', 'plane')
    .Name.enGB.set('Flying Machine')
    .Models.addIds(27670)
    .Scale.set(1)
    .Type.MECHANICAL.set()
    .UnitFlags.MOUNT.set(1)