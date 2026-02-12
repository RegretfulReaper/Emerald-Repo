import { std } from "wow/wotlk";

export const LICH_CONSTANTS = {
     
    MODULE_NAME: "mod",
    CLASS_NAME: "Lich",
    CLASS_COLOR: 0xb864fc,
    FAMILY_ID: 502,
    GLYPH_SUBFAMILY_ID: 502,
    CLASS_DESCRIPTION: `Gunther Arcanus, season mage of the Kirin Tor, now the of Necromancy Instructor of the Forsaken, taught you, oh scourge born, how to control the curse, nay the plague of the undeath. You are, a Lich, lesser than a King, but more than a Forsaken.
    
    May your Strength never never fail you, and may the Undead, heed your voice like the cold grasp of Northrend's ice in their veins.`,
    
    INFO_1: "- Role: Damage, Support",
    INFO_2: "- Light Armor (Cloth)",
    INFO_3: "- Great for buffing and making their allies stronger.",
    INFO_4: "- Utilizes Staves, Daggers, and Maces to fight.",
    INFO_5: "- Uses Mana as main Resource",

    TREE_1_NAME: "Domination",
    TREE_1_ICON: "Spell_Shadow_DeathCoil",
    TREE_2_NAME: "Necrosis",
    TREE_2_ICON: "spell_shadow_mindrot",
}

export const LICH_CLASS = std.Classes.create(LICH_CONSTANTS.MODULE_NAME, LICH_CONSTANTS.CLASS_NAME, "WARLOCK")
    .Name.enGB.set("Necromancer")
    .Roles.set(true, false, true)
    .UI.Color.set(0xb864fc)
    .UI.DisabledText.set("You must choose a different race to be this class.")
    .UI.Description.set(LICH_CONSTANTS.CLASS_DESCRIPTION)
    .UI.setIcon(std.Image.readFromModule("default", "assets\\class-icon\\inv_misc_bone_elfskull_01.blp"))
    .UI.Info.add(LICH_CONSTANTS.INFO_1)
    .UI.Info.add(LICH_CONSTANTS.INFO_2)
    .UI.Info.add(LICH_CONSTANTS.INFO_3)
    .UI.Info.add(LICH_CONSTANTS.INFO_4)
    .UI.Info.add(LICH_CONSTANTS.INFO_5)
    .Races.add(["UNDEAD", "HUMAN", "ORC", "NIGHTELF"])
    .UI.ButtonPos.setRelativeTo("CharacterCreateClassButton1")
    .UI.ButtonPos.setRelativePoint("BOTTOM")
    .UI.ButtonPos.setPoint("TOP")
    .UI.ButtonPos.setPos(0, -6)

std.EquipSkills.Cloth.enableAutolearnClass(LICH_CLASS.Mask)
std.EquipSkills.Staves.enableAutolearnClass(LICH_CLASS.Mask)
std.EquipSkills.Daggers.enableAutolearnClass(LICH_CLASS.Mask)
std.EquipSkills.Wands.enableAutolearnClass(LICH_CLASS.Mask)
std.EquipSkills.Mail.enableAutolearnClass(LICH_CLASS.Mask)
std.EquipSkills.Maces1H.enableAutolearnClass(LICH_CLASS.Mask)
std.EquipSkills.Maces2H.enableAutolearnClass(LICH_CLASS.Mask)
std.EquipSkills.Plate.enableAutolearnClass(LICH_CLASS.Mask)
std.EquipSkills.Polearms.enableAutolearnClass(LICH_CLASS.Mask)
std.EquipSkills.Shields.enableAutolearnClass(LICH_CLASS.Mask)
std.Spells.load(5019).AutoLearn.add(1, LICH_CLASS.Mask)
std.Spells.load(674).AutoLearn.add(1, LICH_CLASS.Mask)

export const NECROSIS_TALENT_TREE = LICH_CLASS.TalentTrees.addGet(LICH_CONSTANTS.MODULE_NAME, "talent-tree-" + LICH_CONSTANTS.TREE_2_NAME, 0)
    .Name.enGB.set(LICH_CONSTANTS.TREE_1_NAME)
    .Icon.setPath(LICH_CONSTANTS.TREE_1_ICON)
    .BackgroundImage.set(std.Classes.load("PRIEST").TalentTrees.get()[2].BackgroundImage.get())
    .OrderIndex.set(0)

export const DOMINATION_TALENT_TREE = LICH_CLASS.TalentTrees.addGet(LICH_CONSTANTS.MODULE_NAME, "talent-tree-" + LICH_CONSTANTS.TREE_1_NAME, 0)
    .Name.enGB.set(LICH_CONSTANTS.TREE_2_NAME)
    .Icon.setPath(LICH_CONSTANTS.TREE_2_ICON)
    .BackgroundImage.set(std.Classes.load("WARLOCK").TalentTrees.get()[0].BackgroundImage.get())
    .OrderIndex.set(1)

export const NECROSIS_SKILL_LINE = std.SkillLines.create(LICH_CONSTANTS.MODULE_NAME, "skill-line" + LICH_CONSTANTS.TREE_2_NAME)
    .Name.enGB.set(LICH_CONSTANTS.TREE_1_NAME)
    .Icon.setPath(LICH_CONSTANTS.TREE_1_ICON)
    .Category.CLASS.set()
    .enableAutolearn()

export const DOMINATION_SKILL_LINE = std.SkillLines.create(LICH_CONSTANTS.MODULE_NAME, "skill-line" + LICH_CONSTANTS.TREE_1_NAME)
    .Name.enGB.set(LICH_CONSTANTS.TREE_2_NAME)
    .Icon.setPath(LICH_CONSTANTS.TREE_2_ICON)
    .Category.CLASS.set()
    .enableAutolearn()