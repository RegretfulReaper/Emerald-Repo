import { std } from "wow/wotlk"
import { SET_CURRENCY } from "../../datascripts"

std.Items.create('default', 'mighty-lockbox')
    .Name.enGB.set('Passed-down Mighty Lockbox')
    .ItemSetName.enGB.set('Heirlooms of Might')
    .Class.JUNK.set()
    .ClassMask.set(["WARRIOR"])
    .Description.enGB.set('Contains a Mighty set of Armor, passed-down for generations.')
    .Material.METAL.set()
    .Quality.ORANGE.set()
    .Flags.set(["OPENABLE", "HEROIC"])
    .ItemLevel.set(264)
    .DisplayInfo.set(9632)
    .Loot.mod((loot) => {
        loot
            .addItem(60002, 100, 1, 1, false, 0, 1)
            .addItem(60003, 100, 1, 1, false, 0, 1)
            .addItem(60004, 100, 1, 1, false, 0, 1)
            .addItem(60005, 100, 1, 1, false, 0, 1)
            .addItem(60006, 100, 1, 1, false, 0, 1)
            .addItem(60007, 100, 1, 1, false, 0, 1)
            .addItem(60008, 100, 1, 1, false, 0, 1)
            .addItem(60009, 100, 1, 1, false, 0, 1)
            .addItem(60010, 100, 1, 1, false, 0, 1)
            .addItem(42943, 100, 1, 1, false, 0, 1)
    })

std.Items.create('default', 'Blemished-Lockbox')
    .Name.enGB.set("Passed-down Penance Lockbox")
    .ItemSetName.enGB.set('Blemished Penance Set')
    .Class.JUNK.set()
    .ClassMask.set(["PALADIN"])
    .Description.enGB.set('Contains a Blemished set of Armor, passed-down for generations.')
    .Material.METAL.set()
    .Quality.ORANGE.set()
    .Flags.set(["OPENABLE", "HEROIC"])
    .ItemLevel.set(264)
    .DisplayInfo.set(9632)
    .Loot.mod((loot) =>{
        loot
            .addItem(60012, 100, 1, 1, false, 0, 1)
            .addItem(60013, 100, 1, 1, false, 0, 1)
            .addItem(60014, 100, 1, 1, false, 0, 1)
            .addItem(60015, 100, 1, 1, false, 0, 1)
            .addItem(60016, 100, 1, 1, false, 0, 1)
            .addItem(60017, 100, 1, 1, false, 0, 1)
            .addItem(60018, 100, 1, 1, false, 0, 1)
            .addItem(60019, 100, 1, 1, false, 0, 1)
            .addItem(60020, 100, 1, 1, false, 0, 1)
            .addItem(60021, 100, 1, 1, false, 0, 1)
    })

std.Items.create('default', 'Enchanted-Lockbox')
    .Name.enGB.set("Passed-down Arcanist Lockbox")
    .ItemSetName.enGB.set('Enchanted Heirloom Set')
    .Class.JUNK.set()
    .ClassMask.set(["MAGE"])
    .Description.enGB.set('Contains a Enchanted set of Armor, passed-down for generations.')
    .Material.METAL.set()
    .Quality.ORANGE.set()
    .Flags.set(["OPENABLE", "HEROIC"])
    .ItemLevel.set(264)
    .DisplayInfo.set(9632)
    .Loot.mod((loot) =>{
        loot
            .addItem(60033, 100, 1, 1, false, 0, 1)
            .addItem(60034, 100, 1, 1, false, 0, 1)
            .addItem(60035, 100, 1, 1, false, 0, 1)
            .addItem(60036, 100, 1, 1, false, 0, 1)
            .addItem(60037, 100, 1, 1, false, 0, 1)
            .addItem(60038, 100, 1, 1, false, 0, 1)
            .addItem(60039, 100, 1, 1, false, 0, 1)
            .addItem(60040, 100, 1, 1, false, 0, 1)
            .addItem(60041, 100, 1, 1, false, 0, 1)
            .addItem(44095, 100, 1, 1, false, 0, 1)
    })

std.Items.create('default', 'Torn-Lockbox')
    .Name.enGB.set("Passed-down Nightslayer Lockbox")
    .ItemSetName.enGB.set('Torn Nightslayer Set')
    .Class.JUNK.set()
    .ClassMask.set(["ROGUE"])
    .Description.enGB.set('Contains a Torn set of Armor, passed-down for generations.')
    .Material.METAL.set()
    .Quality.ORANGE.set()
    .Flags.set(["OPENABLE", "HEROIC"])
    .ItemLevel.set(264)
    .DisplayInfo.set(9632)
    .Loot.mod((loot) =>{
        loot
            .addItem(60023, 100, 1, 1, false, 0, 1)
            .addItem(60024, 100, 1, 1, false, 0, 1)
            .addItem(60025, 100, 1, 1, false, 0, 1)
            .addItem(60026, 100, 1, 1, false, 0, 1)
            .addItem(60027, 100, 1, 1, false, 0, 1)
            .addItem(60028, 100, 1, 1, false, 0, 1)
            .addItem(60029, 100, 1, 1, false, 0, 1)
            .addItem(60030, 100, 1, 1, false, 0, 1)
            .addItem(60031, 100, 1, 1, false, 0, 1)
            .addItem(42944, 100, 2, 2, false, 0, 1)
    })

std.Items.create('default', 'Felheart-Lockbox')
    .Name.enGB.set('Passed-down Felheart Lockbox')
    .ItemSetName.enGB.set('Cursed Felheart Set')
    .Class.JUNK.set()
    .ClassMask.set(["WARLOCK"])
    .Description.enGB.set('Contains a Cursed set of Armor, passed-down for generations.')
    .Material.METAL.set()
    .Quality.ORANGE.set()
    .Flags.set(["OPENABLE", "HEROIC"])
    .ItemLevel.set(264)
    .DisplayInfo.set(9632)
    .Loot.mod((loot) => {
        loot
            .addItem(60048, 100, 1, 1, false, 0, 1) // cursed-head
            .addItem(60049, 100, 1, 1, false, 0, 1) // cursed-shoulders
            .addItem(60050, 100, 1, 1, false, 0, 1) // cursed-chest
            .addItem(60051, 100, 1, 1, false, 0, 1) // cursed-wrists
            .addItem(60052, 100, 1, 1, false, 0, 1) // cursed-hands
            .addItem(60053, 100, 1, 1, false, 0, 1) // cursed-waist
            .addItem(60054, 100, 1, 1, false, 0, 1) // cursed-legs
            .addItem(60055, 100, 1, 1, false, 0, 1) // cursed-feet
            .addItem(60057, 100, 1, 1, false, 0, 1) // Cursed Cloak of Flames)
            .addItem(42947, 100, 1, 1, false, 0, 1) // Dignified Headmaster's Charge
    })

std.Items.create('default', 'Prophecy-Lockbox')
    .Name.enGB.set('Passed-down Prophecy Lockbox')
    .ItemSetName.enGB.set('Blessed Vestments of Prophecy')
    .Class.JUNK.set()
    .ClassMask.set(["PRIEST"])
    .Description.enGB.set('Contains a Blessed set of Vestments, passed-down for generations.')
    .Material.METAL.set()
    .Quality.ORANGE.set()
    .Flags.set(["OPENABLE", "HEROIC"])
    .ItemLevel.set(264)
    .DisplayInfo.set(9632)
    .Loot.mod((loot) => {
        loot
            .addItem(60058, 100, 1, 1, false, 0, 1) // Head
            .addItem(60059, 100, 1, 1, false, 0, 1) // Shoulders
            .addItem(60060, 100, 1, 1, false, 0, 1) // Chest
            .addItem(60061, 100, 1, 1, false, 0, 1) // Wrists
            .addItem(60062, 100, 1, 1, false, 0, 1) // Hands
            .addItem(60063, 100, 1, 1, false, 0, 1) // Waist
            .addItem(60064, 100, 1, 1, false, 0, 1) // Legs
            .addItem(60065, 100, 1, 1, false, 0, 1) // Feet
            .addItem(60066, 100, 1, 1, false, 0, 1) // Blessed Cloak of Grace
            .addItem(60068, 100, 1, 1, false, 0, 1) // Blessed Light Binder Staff
    })

std.Items.create('default', 'Dragonstalker-Lockbox')
    .Name.enGB.set('Passed-down Dragonstalker Lockbox')
    .ItemSetName.enGB.set('Singed Dragonstalker Set')
    .Class.JUNK.set()
    .ClassMask.set(["HUNTER"])
    .Description.enGB.set('Contains a Singed set of Armor, passed-down for generations.')
    .Material.METAL.set()
    .Quality.ORANGE.set()
    .Flags.set(["OPENABLE", "HEROIC"])
    .ItemLevel.set(264)
    .DisplayInfo.set(9632)
    .Loot.mod((loot) => {
        loot
            .addItem(60070, 100, 1, 1, false, 0, 1)
            .addItem(60071, 100, 1, 1, false, 0, 1)
            .addItem(60072, 100, 1, 1, false, 0, 1)
            .addItem(60073, 100, 1, 1, false, 0, 1)
            .addItem(60074, 100, 1, 1, false, 0, 1)
            .addItem(60075, 100, 1, 1, false, 0, 1)
            .addItem(60076, 100, 1, 1, false, 0, 1)
            .addItem(60077, 100, 1, 1, false, 0, 1)
            .addItem(60078, 100, 1, 1, false, 0, 1)
            .addItem(60079, 100, 1, 1, false, 0, 1)
            .addItem(42946, 100, 1, 1, false, 0, 1)
    })

std.Items.create('default', 'TenStorms-Lockbox')
    .Name.enGB.set('Passed-down Ten Storms Lockbox')
    .ItemSetName.enGB.set('Charged Ten Storms Set')
    .Class.JUNK.set()
    .ClassMask.set(["SHAMAN"])
    .Description.enGB.set('Contains a Charged set of Armor, passed-down for generations.')
    .Material.METAL.set()
    .Quality.ORANGE.set()
    .Flags.set(["OPENABLE", "HEROIC"])
    .ItemLevel.set(264)
    .DisplayInfo.set(9632)
    .Loot.mod((loot) => {
        loot
            .addItem(60081, 100, 1, 1, false, 0, 1)
            .addItem(60082, 100, 1, 1, false, 0, 1)
            .addItem(60083, 100, 1, 1, false, 0, 1)
            .addItem(60084, 100, 1, 1, false, 0, 1)
            .addItem(60085, 100, 1, 1, false, 0, 1)
            .addItem(60086, 100, 1, 1, false, 0, 1)
            .addItem(60087, 100, 1, 1, false, 0, 1)
            .addItem(60088, 100, 1, 1, false, 0, 1)
            .addItem(60089, 100, 1, 1, false, 0, 1)
            .addItem(60090, 100, 1, 1, false, 0, 1) // Charged Mace
            .addItem(60091, 100, 1, 1, false, 0, 1) // Charged Shield
            .addItem(60104, 100, 1, 1, false, 0, 1) // Master Totem
    })

std.Items.create('default', 'Cenarion-Lockbox')
    .Name.enGB.set('Passed-down Cenarion Lockbox')
    .ItemSetName.enGB.set('Overgrown Cenarion Set')
    .Class.JUNK.set()
    .ClassMask.set(["DRUID"])
    .Description.enGB.set('Contains an Overgrown set of Armor, passed-down for generations.')
    .Material.METAL.set()
    .Quality.ORANGE.set()
    .Flags.set(["OPENABLE", "HEROIC"])
    .ItemLevel.set(264)
    .DisplayInfo.set(9632)
    .Loot.mod((loot) => {
        loot
            .addItem(60092, 100, 1, 1, false, 0, 1)
            .addItem(60093, 100, 1, 1, false, 0, 1)
            .addItem(60094, 100, 1, 1, false, 0, 1)
            .addItem(60095, 100, 1, 1, false, 0, 1)
            .addItem(60096, 100, 1, 1, false, 0, 1)
            .addItem(60097, 100, 1, 1, false, 0, 1)
            .addItem(60098, 100, 1, 1, false, 0, 1)
            .addItem(60099, 100, 1, 1, false, 0, 1)
            .addItem(60100, 100, 1, 1, false, 0, 1)
            .addItem(60101, 100, 1, 1, false, 0, 1)
    })