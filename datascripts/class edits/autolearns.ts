import { std } from "wow/wotlk";

std.Classes.load("SHAMAN")
    .Races.add(["DWARF"])

std.Classes.load("DRUID")
    .Races.add(["TROLL"])

std.Classes.load("ROGUE")
    .Races.add(["TAUREN"])

std.Classes.load("MAGE")
    .Races.add(["TAUREN", "NIGHTELF"])

std.Classes.load("HUNTER")
    .Races.add(["UNDEAD", "HUMAN"])

std.EquipSkills.Bows.enableAutolearnClass("HUNTER", ["HUMAN", "UNDEAD"])
std.EquipSkills.Crossbows.enableAutolearnClass("HUNTER", ["HUMAN", "UNDEAD"])
std.EquipSkills.Guns.enableAutolearnClass("HUNTER", ["HUMAN", "UNDEAD"])
std.EquipSkills.Polearms.enableAutolearnClass("HUNTER", ["HUMAN", "NIGHTELF", "ORC", "UNDEAD", "DWARF", "TAUREN", "TROLL"])
std.EquipSkills.Mail.enableAutolearnClass(["SHAMAN"], ["DWARF", "TROLL", "ORC", "TAUREN"])
std.EquipSkills.Mail.enableAutolearnClass(["HUNTER"], ["HUMAN", "NIGHTELF", "ORC", "UNDEAD", "DWARF", "TAUREN", "TROLL"])
std.EquipSkills.Swords1H.enableAutolearnClass("ROGUE")

std.Classes.load("PRIEST")
    .Races.add(["GNOME"])

std.Classes
    .load("PALADIN")
    .Races.add(["UNDEAD"])
    std.EquipSkills.Daggers.enableAutolearnClass("PALADIN")
    std.EquipSkills.Maces2H.enableAutolearnClass("PALADIN")