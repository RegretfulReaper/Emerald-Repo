import { std } from "wow/wotlk";

std.ItemDisplayInfo.create('mod', 'ebon-blade')
    .Models.add('sword_2h_artifactashbringershadow_d_03.mdx', 'sword_2h_artifactashbringershadow_d_03_purple')
    .Icon.set('inv_sword_62')

std.Items.create('mod', 'ebon-blade-demo')
    .Name.enGB.set("Demo Ebon Blade")
    .Class.SWORD_2H.set()
    .InventoryType.TWOHAND.set()
    .Quality.PURPLE.set()
    .DisplayInfo.set(70009)
    .SheatheType.set(1)

std.ItemDisplayInfo.create('mod', 'shattered-legacy')
    .Models.add('sword_2h_artifactashbringerlightning_d_03.mdx', 'sword_2h_artifactashbringerlightning_d_03yellow')
    .Icon.set('inv_sword_88')

std.Items.create('mod', 'shattered-legacy-demo')
    .Name.enGB.set("Demo Shattered Legacy of the Ashbringer")
    .Class.SWORD_2H.set()
    .InventoryType.TWOHAND.set()
    .Quality.PURPLE.set()
    .DisplayInfo.set(70010)
    .SheatheType.set(1)
    .Damage.add("PHYSICAL", 9999, 10000)
    .Damage.add("HOLY", 9999, 10000)

std.ItemDisplayInfo.create('mod', 'nerub-red')
    .Models.add('sword_1h_nerubianraid_d_01.mdx', 'sword_1h_nerubianraid_d_01_5246513')
    .Icon.set('inv_sword_139')

std.Items.create('mod', 'nerub-red-demo')
    .Name.enGB.set("Nerubian Blade Red Demo")
    .Class.SWORD_1H.set()
    .InventoryType.WEAPON.set()
    .Quality.PURPLE.set()
    .DisplayInfo.set(70011)
    .SheatheType.set(3)

std.ItemDisplayInfo.create('mod', 'Shalamayne-death')
    .Models.add('sword_2h_shalamayne_d_03.mdx', 'sword_2h_shalamayne_d_03_3607739')
    .Icon.set('inv_sword_152')

std.Items.create('mod', 'shalamayne-death-demo')
    .Name.enGB.set("Shalamayne's Deadly Whispers Demo")
    .Class.SWORD_2H.set()
    .InventoryType.TWOHAND.set()
    .Quality.PURPLE.set()
    .DisplayInfo.set(70012)
    .SheatheType.set(1)

 //console.log(std.ItemDisplayInfo.load(45888).codify({}))