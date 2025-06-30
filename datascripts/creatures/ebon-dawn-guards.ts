import { std } from "wow/wotlk";

const EBON_KNIGHT_ALLI = std.CreatureOutfits.create().fromString(
    `Character\Human\male\humanmale.m2
    1 0
    0 12 8 1 8 8 1
    3536
    0
    30996
    34561
    34487
    0
    30993
    30990
    34431
    30982
    48519
    40700
    40251
    22999
    0
    `)

const EBON_KNIGHT_HORD = std.CreatureOutfits.create().fromString(
    `
    Character\Scourge\male\scourgemale.m2
    5 0
    1 11 7 2 0 7 1
    3536
    0
    30996
    34561
    34487
    0
    30993
    30990
    34431
    30982
    48519
    40700
    40251
    22999
    0
    `)

const EBON_KNIGHT_ALLI_F = std.CreatureOutfits.create().fromString(`
    Character\Human\female\humanfemale.m2
    1 1
    1 16 8 12 4 8 1
    3536
    0
    30996
    34561
    34487
    0
    30993
    30990
    34431
    30982
    48519
    40700
    40251
    22999
    0
    `)

const EBON_KNIGHT_HORD_F = std.CreatureOutfits.create().fromString(`
    Character\Scourge\female\scourgefemale.m2
    5 1
    1 0 7 3 4 7 1
    3536
    0
    30996
    34561
    34487
    0
    30993
    30990
    34431
    30982
    48519
    40700
    40251
    22999
    0
    `)

const MODELS = [
    EBON_KNIGHT_ALLI.ID,
    EBON_KNIGHT_ALLI_F.ID,
    EBON_KNIGHT_HORD.ID,
    EBON_KNIGHT_HORD_F.ID,
]

const GUARD_SPAWN = [
    { map: 0, x: 2280.797607, y: -5321.458496, z: 88.935989, o: 1.541884 },
    { map: 0, x: 2287.047607, y: -5317.876465, z: 88.763092, o: 2.646939 },
    { map: 0, x: 2272.497803, y: -5281.679199, z: 82.135170, o: 1.297625 },
    { map: 0, x: 2286.044678, y: -5282.298340, z: 82.364174, o: 1.580365 },
    { map: 0, x: 2345.759277, y: -5258.868652, z: 82.558182, o: 0.786328 },
    { map: 0, x: 2357.424561, y: -5270.267090, z: 79.706337, o: 0.723502 },
    { map: 0, x: 2335.795898, y: -5270.447754, z: 81.784569, o: 5.548987 },
    { map: 0, x: 2345.545166, y: -5280.195801, z: 81.910439, o: 2.368122 },
    { map: 0, x: 2227.431885, y: -5227.699707, z: 75.398170, o: 3.156654 },
    { map: 0, x: 2213.767578, y: -5227.880371, z: 77.338951, o: 0.097526 },
    { map: 0, x: 2226.564209, y: -5213.424316, z: 72.893997, o: 1.930646 },
    { map: 0, x: 2214.354492, y: -5213.529297, z: 71.565605, o: 1.206508 },
    { map: 0, x: 2197.404053, y: -5241.234863, z: 81.211769, o: 4.644195 },
    { map: 0, x: 2196.371094, y: -5254.592285, z: 83.572464, o: 1.545803 },
    { map: 0, x: 2184.397705, y: -5240.818848, z: 84.085823, o: 3.149587 },
    { map: 0, x: 2183.780273, y: -5253.779297, z: 88.094612, o: 2.992515 },

]


//console.log(std.Spells.load(30809).codify({}))

std.Spells.create('mod', 'Ebon-Dawn')
    .Name.enGB.set('Reborn Death Knight')
    .AuraDescription.enGB.set('Once a Death Knight, this Soul has found its way back to the light, although in tremendous pain, they serve the Light, even if they were forsaken by it.')
    .Icon.setPath('achievement_reputation_knightsoftheebonblade')
    .Effects.addGet()
    .Type.APPLY_AURA.set()
    .Aura.DUMMY.set()
    .ImplicitTargetA.UNIT_CASTER.set()




export const E_DAWN = std.CreatureTemplates.create('mod', 'ebon-dawn-knight')
    .Name.enGB.set("Light's Hope Guard")
    .Subname.enGB.set("Paladin of the Ebon-Dawn")
    .FactionTemplate.set(794)
    .Level.set(70, 70)
    .Rank.ELITE.set()
    .Stats.HealthMod.set(3)
    .Stats.ArmorMod.set(10)
    .Stats.DamageMod.set(2)
    .UnitClass.PALADIN.set()
    .Models.addIds(EBON_KNIGHT_ALLI.ID,
        EBON_KNIGHT_ALLI_F.ID,
        EBON_KNIGHT_HORD.ID,
        EBON_KNIGHT_HORD_F.ID)
    .Spawns.add('mod', 'ebon-dawn-spawns', GUARD_SPAWN)

std.Areas.load(2268)
    .Name.enGB.set("Light's Hope Settlement")

//console.log(std.Titles.load(177).objectify())
std.Titles.create('mod', 'ebon-dawn')
    .Text.Male.enGB.set("%s, of the Ebon-Dawn")
    .Text.Female.enGB.set("%s, of the Ebon-Dawn")

std.Achievements.create('mod', 'ebon-dawn')
    .Category.set(81)
    .Name.enGB.set("United for one Cause")
    .Description.enGB.set("United the Ebon Blade and Argent Dawn to form the Ebon-Dawn")
    .Rewards.Title.set(178)
    .Icon.setPath('achievement_reputation_knightsoftheebonblade')