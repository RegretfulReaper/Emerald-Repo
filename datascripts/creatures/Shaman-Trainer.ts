import { std } from "wow/wotlk";

const SHAMANTRAINER = std.CreatureTemplates.load(20407)
std.CreatureTemplates.load(20407)
    .Models.mod(0, (model) => 
        model.set(19598)    
)

const SPAWNS = [
    { map: 0, x: -6055.743652, y: 382.544067, z: 393.246979, o: 2.967060 },
    { map: 0, x: -5580.989258, y: -542.544067, z: 404.035278, o: 3.152371 },
]

SHAMANTRAINER.Spawns.addMod('default', 'Shaman-Trainer', SPAWNS, (spawn) => {
    spawn
        .MovementType.RANDOM_MOVEMENT.set()
        .WanderDistance.set(0)
})

std.CreatureTemplates.create('default', 'Trainer')
    .Name.enGB.set('Trainer')
    .Subname.enGB.set('Trainer')
    .NPCFlags.CLASS_TRAINER.set(1)
    .FactionTemplate.NEUTRAL_PASSIVE.set()
    .UnitClass.set("PALADIN")
    .Trainer.set(1)
    .Models.addIds(21264)