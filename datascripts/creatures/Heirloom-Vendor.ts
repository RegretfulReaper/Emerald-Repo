import { std } from "wow/wotlk";
import { CreatureTemplate } from "wow/wotlk/std/Creature/CreatureTemplate";


export const HEIRLOOM_VENDOR = std.CreatureOutfits.create().fromString(
    `
    Character\Human\male\humanmale.m2
    1 0
    1 10 12 10 4 12 1
    0
    0
    22419
    22420
    22422
    0
    22417
    22416
    22423
    22421
    38632
    0
    42061
    0
    0
    `)

std.CreatureTemplates.create('default', 'Heirloom-Vendor-hu1')
    .Name.enGB.set('Steward Gryphon')
    .Subname.enGB.set('Heirloom Vendor')
    .FactionTemplate.NEUTRAL_PASSIVE.set()
    .Type.HUMANOID.set()
    .NPCFlags.VENDOR.set(1)
    .Spawns.add('default', 'Heirloom-Vendor', {map:0,x:-8904.369141,y:-109.104568,z:81.848251,o:3.996114})
    .Models.addIds(HEIRLOOM_VENDOR.ID)
    .Vendor.add(60011, 3000, 0, 0)
    .Vendor.add(60022, 3000, 0, 0)
    .Vendor.add(60032, 3000, 0, 0)
    .Vendor.add(60042, 3000, 0, 0)
    .Vendor.add(60056, 3000, 0, 0) // Felheart Lockbox
    .Vendor.add(60067, 3000, 0, 0) // Prophecy Lockbox
    .Vendor.add(60080, 3000, 0, 0)
    .Vendor.add(60102, 3000, 0, 0) // Cenarion Lockbox
    .Vendor.add(60103, 3000, 0, 0) // Ten Storms Lockbox
    .Vendor.add(60105, 3000, 0, 0)

std.CreatureTemplates.create('default', 'Heirloom-Vendor-mid2')
    .Name.enGB.set('Rupert')
    .Subname.enGB.set('Heirloom Vendor')
    .FactionTemplate.NEUTRAL_PASSIVE.set()
    .Type.HUMANOID.set()
    .NPCFlags.VENDOR.set(1)
    .Spawns.add('default', 'Heirloom-Vendor-mid2', {map:0,x:-6215.218262,y:327.121887,z:383.415222,o:2.796034})
    .Models.addIds(HEIRLOOM_VENDOR.ID)
    .Vendor.add(60011, 3000, 0, 0)
    .Vendor.add(60022, 3000, 0, 0)
    .Vendor.add(60032, 3000, 0, 0)
    .Vendor.add(60042, 3000, 0, 0)
    .Vendor.add(60056, 3000, 0, 0) // Felheart Lockbox
    .Vendor.add(60067, 3000, 0, 0) // Prophecy Lockbox
    .Vendor.add(60080, 3000, 0, 0)
    .Vendor.add(60102, 3000, 0, 0) // Cenarion Lockbox
    .Vendor.add(60103, 3000, 0, 0) // Ten Storms Lockbox
    .Vendor.add(60105, 3000, 0, 0)

std.CreatureTemplates.create('default', 'Heirloom-Vendor-ne3')
    .Name.enGB.set('Mister Van Gryphon')
    .Subname.enGB.set('Heirloom Vendor')
    .FactionTemplate.NEUTRAL_PASSIVE.set()
    .Type.HUMANOID.set()
    .NPCFlags.VENDOR.set(1)
    .Spawns.add('default', 'Heirloom-Vendor-ne3', {map:1,x:10326.507812,y:820.908691,z:1326.461426,o:2.362302})
    .Models.addIds(HEIRLOOM_VENDOR.ID)
    .Vendor.add(60011, 3000, 0, 0)
    .Vendor.add(60022, 3000, 0, 0)
    .Vendor.add(60032, 3000, 0, 0)
    .Vendor.add(60042, 3000, 0, 0)
    .Vendor.add(60056, 3000, 0, 0) // Felheart Lockbox
    .Vendor.add(60067, 3000, 0, 0) // Prophecy Lockbox
    .Vendor.add(60080, 3000, 0, 0)
    .Vendor.add(60102, 3000, 0, 0) // Cenarion Lockbox
    .Vendor.add(60103, 3000, 0, 0) // Ten Storms Lockbox
    .Vendor.add(60105, 3000, 0, 0)

std.CreatureTemplates.create('default', 'Heirloom-Vendor-drae4')
    .Name.enGB.set('Herr Greif')
    .Subname.enGB.set('Heirloom Vendor')
    .FactionTemplate.NEUTRAL_PASSIVE.set()
    .Type.HUMANOID.set()
    .NPCFlags.VENDOR.set(1)
    .Spawns.add('default', 'Heirloom-Vendor-drae4', {map:530,x:-4069.693115,y:-13756.577148,z:74.755508,o:4.380929})
    .Models.addIds(HEIRLOOM_VENDOR.ID)
    .Vendor.add(60011, 3000, 0, 0)
    .Vendor.add(60022, 3000, 0, 0)
    .Vendor.add(60032, 3000, 0, 0)
    .Vendor.add(60042, 3000, 0, 0)
    .Vendor.add(60056, 3000, 0, 0) // Felheart Lockbox
    .Vendor.add(60067, 3000, 0, 0) // Prophecy Lockbox
    .Vendor.add(60080, 3000, 0, 0)
    .Vendor.add(60102, 3000, 0, 0) // Cenarion Lockbox
    .Vendor.add(60103, 3000, 0, 0) // Ten Storms Lockbox
    .Vendor.add(60105, 3000, 0, 0)

std.CreatureTemplates.create('default', 'Heirloom-Vendor-orc5')
    .Name.enGB.set('Lord of Gryphon')
    .Subname.enGB.set('Heirloom Vendor')
    .FactionTemplate.NEUTRAL_PASSIVE.set()
    .Type.HUMANOID.set()
    .NPCFlags.VENDOR.set(1)
    .Spawns.add('default', 'Heirloom-Vendor-orc5', {map:1,x:-638.988525,y:-4235.432617,z:38.134125,o:0.184569})
    .Models.addIds(HEIRLOOM_VENDOR.ID)
    .Vendor.add(60011, 3000, 0, 0)
    .Vendor.add(60022, 3000, 0, 0)
    .Vendor.add(60032, 3000, 0, 0)
    .Vendor.add(60042, 3000, 0, 0)
    .Vendor.add(60056, 3000, 0, 0) // Felheart Lockbox
    .Vendor.add(60067, 3000, 0, 0) // Prophecy Lockbox
    .Vendor.add(60080, 3000, 0, 0)
    .Vendor.add(60102, 3000, 0, 0) // Cenarion Lockbox
    .Vendor.add(60103, 3000, 0, 0) // Ten Storms Lockbox
    .Vendor.add(60105, 3000, 0, 0)

std.CreatureTemplates.create('default', 'Heirloom-Vendor-sc6')
    .Name.enGB.set('Monsieur Gryphon')
    .Subname.enGB.set('Heirloom Vendor')
    .FactionTemplate.NEUTRAL_PASSIVE.set()
    .Type.HUMANOID.set()
    .NPCFlags.VENDOR.set(1)
    .Spawns.add('default', 'Heirloom-Vendor-sc6', {map:0,x:1655.934326,y:1682.552734,z:120.718895,o:0.042756})
    .Models.addIds(HEIRLOOM_VENDOR.ID)
    .Vendor.add(60011, 3000, 0, 0)
    .Vendor.add(60022, 3000, 0, 0)
    .Vendor.add(60032, 3000, 0, 0)
    .Vendor.add(60042, 3000, 0, 0)
    .Vendor.add(60056, 3000, 0, 0) // Felheart Lockbox
    .Vendor.add(60067, 3000, 0, 0) // Prophecy Lockbox
    .Vendor.add(60080, 3000, 0, 0)
    .Vendor.add(60102, 3000, 0, 0) // Cenarion Lockbox
    .Vendor.add(60103, 3000, 0, 0) // Ten Storms Lockbox
    .Vendor.add(60105, 3000, 0, 0)

std.CreatureTemplates.create('default', 'Heirloom-Vendor-ta7')
    .Name.enGB.set('Sir von Gryphon')
    .Subname.enGB.set('Heirloom Vendor')
    .FactionTemplate.NEUTRAL_PASSIVE.set()
    .Type.HUMANOID.set()
    .NPCFlags.VENDOR.set(1)
    .Spawns.add('default', 'Heirloom-Vendor-ta7', {map:1,x:-2883.518555,y:-274.777496,z:53.914898,o:2.171628})
    .Models.addIds(HEIRLOOM_VENDOR.ID)
    .Vendor.add(60011, 3000, 0, 0)
    .Vendor.add(60022, 3000, 0, 0)
    .Vendor.add(60032, 3000, 0, 0)
    .Vendor.add(60042, 3000, 0, 0)
    .Vendor.add(60056, 3000, 0, 0) // Felheart Lockbox
    .Vendor.add(60067, 3000, 0, 0) // Prophecy Lockbox
    .Vendor.add(60080, 3000, 0, 0)
    .Vendor.add(60102, 3000, 0, 0) // Cenarion Lockbox
    .Vendor.add(60103, 3000, 0, 0) // Ten Storms Lockbox
    .Vendor.add(60105, 3000, 0, 0)

std.CreatureTemplates.create('default', 'Heirloom-Vendor-be8')
    .Name.enGB.set('Mr. Gryphon')
    .Subname.enGB.set('Heirloom Vendor')
    .FactionTemplate.NEUTRAL_PASSIVE.set()
    .Type.HUMANOID.set()
    .NPCFlags.VENDOR.set(1)
    .Spawns.add('default', 'Heirloom-Vendor-be8', {map:530,x:10362.517578,y:-6388.761230,z:38.533123,o:4.657095})
    .Models.addIds(HEIRLOOM_VENDOR.ID)
    .Vendor.add(60011, 3000, 0, 0)
    .Vendor.add(60022, 3000, 0, 0)
    .Vendor.add(60032, 3000, 0, 0)
    .Vendor.add(60042, 3000, 0, 0)
    .Vendor.add(60056, 3000, 0, 0) // Felheart Lockbox
    .Vendor.add(60067, 3000, 0, 0) // Prophecy Lockbox
    .Vendor.add(60080, 3000, 0, 0)
    .Vendor.add(60102, 3000, 0, 0) // Cenarion Lockbox
    .Vendor.add(60103, 3000, 0, 0) // Ten Storms Lockbox
    .Vendor.add(60105, 3000, 0, 0)