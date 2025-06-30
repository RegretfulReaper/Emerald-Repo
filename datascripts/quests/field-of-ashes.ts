import { std } from "wow/wotlk";

const EBON = std.Quests.create('mod', 'ashbringer')
    .Name.enGB.set("Fields of Ash")
    .MinLevel.set(60)
    .MaxLevel.set(70)
    .ClassMask.set("PALADIN")
    .Tags.add('mod', 'Legendary')
    .ObjectiveText.enGB.set(`The Scourge has grown Stronger, and though the Ashbringer still exists, in its current stage, it is nowhere near as strong as when father wield it.

    Adventurer, you that came from the bowels of death holding the corrputed blade of my father, are you willing to aid us forge it anew... No, forge a better weapon. Paladin, would you be willing to forge the blade as cold as Northrend itself, forge the Ebon Blade?

    It may be grueling task, but if we can forge a weapon, able to destroy the scourge as once the Ashbringer did, I say it must be done. Not only for Lordaeron, but for all the citizens of Azeroth!`)
    .Flags.AUTOCOMPLETE.set(1)

const EBON2 = std.Quests.create('mod', 'ashbringer2')
    .Name.enGB.set("")