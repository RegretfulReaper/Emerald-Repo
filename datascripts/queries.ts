import Query from "mysql2/typings/mysql/lib/protocol/sequences/Query";
import { DBC, SQL, std } from "wow/wotlk";
import { CHARGE_AURA } from "./Spell Edits/spellcharge-charge";


//===========================================================
//===========================================================
//============== SQL Level Experience Rows ==================
//===========================================================
//===========================================================
std.SQL.player_xp_for_level.add(80)
    .Experience.set(1670800 * 1.05)

std.SQL.player_xp_for_level.add(81)
    .Experience.set(1670800 * 1.05 ** 2)

std.SQL.player_xp_for_level.add(82)
    .Experience.set(1670800 * 1.05 ** 3)

std.SQL.player_xp_for_level.add(83)
    .Experience.set(1670800 * 1.05 ** 4)

std.SQL.player_xp_for_level.add(84)
    .Experience.set(1670800 * 1.05 ** 5)

std.SQL.player_xp_for_level.add(85)
    .Experience.set(1670800 * 1.05 ** 6)

std.SQL.player_xp_for_level.add(86)
    .Experience.set(1670800 * 1.05 ** 7)

std.SQL.player_xp_for_level.add(87)
    .Experience.set(1670800 * 1.05 ** 8)

std.SQL.player_xp_for_level.add(88)
    .Experience.set(1670800 * 1.05 ** 9)

std.SQL.player_xp_for_level.add(89)
    .Experience.set(1670800 * 1.05 ** 10)

//===========================================================
//===========================================================
//============== SQL Level Class stat rows ==================
//===========================================================
//===========================================================

// Example base values for each class at level 81
const baseStats = [
    { classId: 1, basehp: 9339, basemana: 0 },      // Warrior
    { classId: 2, basehp: 9000, basemana: 6000 },   // Paladin
    { classId: 3, basehp: 8500, basemana: 8000 },   // Hunter
    { classId: 4, basehp: 8000, basemana: 0 },      // Rogue
    { classId: 5, basehp: 7500, basemana: 10000 },  // Priest
    { classId: 6, basehp: 9200, basemana: 0 },      // Death Knight
    { classId: 7, basehp: 8700, basemana: 9000 },   // Shaman
    { classId: 8, basehp: 7000, basemana: 11000 },  // Mage
    { classId: 9, basehp: 7200, basemana: 10500 },  // Warlock
    { classId: 11, basehp: 8800, basemana: 9500 },  // Druid
    // Add Monk or other classes as needed
];

for (let level = 81; level <= 90; level++) {
    baseStats.forEach(stat => {
        std.SQL.player_classlevelstats.add(stat.classId, level)
            .basehp.set(Math.round(stat.basehp * Math.pow(1.05, level - 81)))
            .basemana.set(Math.round(stat.basemana * Math.pow(1.05, level - 81)));
    });
}

//===========================================================
//===========================================================
//============== SQL Stat Additional Rows ==================
//===========================================================
//===========================================================

const races = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const classes = [
    { id: 1, str: 200, agi: 150, sta: 190, inte: 100, spi: 100 },   // Warrior
    { id: 2, str: 180, agi: 120, sta: 180, inte: 140, spi: 160 },   // Paladin
    { id: 3, str: 120, agi: 200, sta: 170, inte: 120, spi: 110 },   // Hunter
    { id: 4, str: 110, agi: 210, sta: 160, inte: 110, spi: 100 },   // Rogue
    { id: 5, str: 100, agi: 110, sta: 150, inte: 200, spi: 200 },   // Priest
    { id: 6, str: 210, agi: 130, sta: 200, inte: 100, spi: 100 },   // Death Knight
    { id: 7, str: 140, agi: 140, sta: 170, inte: 180, spi: 160 },   // Shaman
    { id: 8, str: 100, agi: 120, sta: 140, inte: 220, spi: 180 },   // Mage
    { id: 9, str: 110, agi: 110, sta: 150, inte: 210, spi: 190 },   // Warlock
    { id: 11, str: 130, agi: 170, sta: 160, inte: 170, spi: 170 },  // Druid
];

for (let level = 81; level <= 90; level++) {
    for (const race of races) {
        for (const cls of classes) {
            // console.log("Race, classID, level", race, cls.id, level);
            // console.log("str", Math.round(cls.str + .15 * (level - 81) * cls.str));
            // console.log("agi", Math.round(cls.agi + .15 * (level - 81) * cls.agi));
            // console.log("sta", Math.round(cls.sta + .15 * (level - 81) * cls.sta));
            // console.log("inte", Math.round(cls.inte + .15 * (level - 81) * cls.inte));
            // console.log("spi", Math.round(cls.spi + .15 * (level - 81) * cls.spi));
            /*
            std.SQL.player_levelstats.add(race, cls.id, level)
                .str.set(Math.round(cls.str + .15 * (level - 81) * cls.str))
                .agi.set(Math.round(cls.agi + .15 * (level - 81) * cls.agi))
                .sta.set(Math.round(cls.sta + .15 * (level - 81) * cls.sta))
                .inte.set(Math.round(cls.inte + .15 * (level - 81) * cls.inte))
                .spi.set(Math.round(cls.spi + .15 * (level - 81) * cls.spi));
            */
        }
    }
}

// std.SQL.spell_linked_spell.add(11578, CHARGE_AURA.ID, 0);