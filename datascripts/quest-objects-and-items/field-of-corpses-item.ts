import { std } from "wow/wotlk";

// console.log(std.CreatureTemplates.load(8606).objectify({}))

std.Items.create('mod', 'rec-resources')
    .Name.set({"enGB":"Pile of Sullied Resources", "deDE":"Haufen beschmutzter Resourcen"})
    .Quality.WHITE.set()
    .DisplayInfo.setSimpleIcon('mod', 'resource-items', 'Inv_crate_06')
    .Bonding.QUEST_ITEM.set()
    .Class.QUEST.set()
    .MaxStack.set(15)

std.Loot.Creature.load(8606)
    .addItem(60117, 33, 1, 1, true)

std.Loot.Creature.load(8607)
    .addItem(60117, 33, 1, 1, true)

std.Loot.Creature.load(8597)
    .addItem(60117, 33, 1, 1, true)

std.Loot.Creature.load(8601)
    .addItem(60117, 33, 1, 1, true)

std.Loot.Creature.load(8603)
    .addItem(60117, 33, 1, 1, true)

std.Loot.Creature.load(8542)
    .addItem(60117, 33, 1, 1, true)

std.Loot.Creature.load(8534)
    .addItem(60117, 33, 1, 1, true)

std.Loot.Creature.load(8529)
    .addItem(60117, 33, 1, 1, true)

std.Loot.Creature.load(8532)
    .addItem(60117, 33, 1, 1, true)

std.Loot.Creature.load(8528)
    .addItem(60117, 33, 1, 1, true)

std.Loot.Creature.load(8558)
    .addItem(60117, 33, 1, 1, true)

std.Loot.Creature.load(8546)
    .addItem(60117, 33, 1, 1, true)

std.Loot.Creature.load(8539)
    .addItem(60117, 33, 1, 1, true)

std.Loot.Creature.load(8546)
    .addItem(60117, 33, 1, 1, true)

std.Loot.Creature.load(8550)
    .addItem(60117, 33, 1, 1, true)

std.Loot.Creature.load(8544)
    .addItem(60117, 33, 1, 1, true)

std.Loot.Creature.load(8545)
    .addItem(60117, 33, 1, 1, true)

std.Items.create('mod', 'taint-supp')
    .Name.enGB.set('Tainted Supplies')
    .DisplayInfo.setSimpleIcon('mod', 'taint-supp', 'ability_hunter_pet_worm')
    .Quality.WHITE.set()
    .Class.QUEST.set()
    .Bonding.QUEST_ITEM.set()
    .MaxStack.set(50)

std.Loot.Creature.load(10414)
    .addItem(60118, 100, 1, 5, true)

std.Loot.Creature.load(11082)
    .addItem(60118, 70, 1, 1, true)

std.Loot.Creature.load(10405)
    .addItem(60118, 70, 1, 3, true)

std.Loot.Creature.load(10381)
    .addItem(60118, 100, 1, 2, true)

std.Loot.Creature.load(10382)
    .addItem(60118, 100, 1, 2, true)

std.Loot.Creature.load(10383)
    .addItem(60118, 100, 1, 2, true)