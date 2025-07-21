import { std } from "wow/wotlk";
import { CreatureTemplate } from "wow/wotlk/std/Creature/CreatureTemplate";


export const HEIRLOOM_VENDOR = std.CreatureOutfits.create().fromString(
    `
    Character\Human\male\humanmale.m2
    1 0
    0 0 9 10 4 9 1
    19945
    0
    28075
    8284
    0
    0
    0
    5110
    0
    0
    15854
    0
    25810
    0
    0    
    `)

const HEIRLOOM_SPAWNS = [
    {map:0,x:-8904.369141,y:-109.104568,z:81.848251,o:3.996114},
    {map:0,x:-6215.218262,y:327.121887,z:383.415222,o:2.796034},
    {map:1,x:10326.507812,y:820.908691,z:1326.461426,o:2.362302},
    {map:530,x:-4069.693115,y:-13756.577148,z:74.755508,o:4.380929},
    {map:1,x:-638.988525,y:-4235.432617,z:38.134125,o:0.184569},
    {map:0,x:1655.934326,y:1682.552734,z:120.718895,o:0.042756},
    {map:1,x:-2883.518555,y:-274.777496,z:53.914898,o:2.171628},
    {map:530,x:10362.517578,y:-6388.761230,z:38.533123,o:4.657095},
]

std.CreatureTemplates.create('mod', 'Heirloom-Vendor-hu1')
    .Name.enGB.set('Nostalgic Nelson')
    .Subname.enGB.set('Only Accepts Aged Coins')
    .FactionTemplate.NEUTRAL_PASSIVE.set()
    .Type.HUMANOID.set()
    .Level.set(80, 80)
    .FlagsExtra.set(["CIVILIAN"])
    .NPCFlags.set(["VENDOR"])
    .UnitFlags.MIRROR_IMAGE.set(1)
    .Spawns.add('mod', 'Heirloom-Vendor', HEIRLOOM_SPAWNS)
    .Models.addIds(HEIRLOOM_VENDOR.ID)
    .Vendor.add(60011, 3000, 0, 0)
    .Vendor.add(60022, 3000, 0, 0)
    .Vendor.add(60032, 3000, 0, 0)
    .Vendor.add(60042, 3000, 0, 0)
    .Vendor.add(60056, 3000, 0, 0)
    .Vendor.add(60067, 3000, 0, 0)
    .Vendor.add(60080, 3000, 0, 0)
    .Vendor.add(60102, 3000, 0, 0)
    .Vendor.add(60103, 3000, 0, 0)
    .Vendor.add(60105, 3000, 0, 0)
    .Vendor.add(60043, 3001, 0, 0)