import { std } from "wow/wotlk";
import { HEIRLOOM_VENDOR } from "../creatures/modded-npc/Heirloom-Vendor";

const corpse_fields = std.Quests.create('mod', 'corpse_field')
    .Name.set({"enGB":"Field of Corpses", "deDE":"Feld von Leichen"})
    .PickupText.set({"enGB":`This land once was bountiful and beautiful. And though I don't agree with the Radical approach of the Scarlet Crusade, I am not opposed to reclaiming the lands.
    
Though you see, I am not what I used to be, figuratively and literally. Once a Paladin of an Order, now just a nobody in Ebon Blade Armor. My memories are still foggy, but I do remember when these lands were lush and green, and I remember a Powerful Artifact that was lost in Stratholme.
    
Adventurer, if you do not mind, would you help us, regain control over this area? Although we already established the Light's Hope Settlement when the Argent dawn permitted us entry, for assistance, we lack quite a few resources to make this place truly safe.`, "deDE":`Dieses Land war einst fruchtbar und schön. Und obwohl ich mit dem radikalen Ansatz des Scharlachroten Kreuzzuges nicht einverstanden bin, bin ich nicht dagegen, das Land zurückzuerobern.
    
Allerdings bin ich nicht mehr der, der ich einmal war, weder im übertragenen noch im wörtlichen Sinne. Einst war ich ein Paladin eines Ordens, jetzt bin ich nur noch ein Niemand in einer Ebenholzklingen-Rüstung. Meine Erinnerungen sind immer noch neblig, aber ich erinnere mich an die Zeit, als diese Länder üppig und grün waren, und ich erinnere mich an ein mächtiges Artefakt, das in Stratholme verloren ging.
    
Abenteurer, wenn es Euch nichts ausmacht, würdet Ihr uns helfen, die Kontrolle über dieses Gebiet wiederzuerlangen? Obwohl wir bereits die Siedlung des Hoffnungsvollen Lichts gegründet haben, als die Argentumdämmerung uns den Zutritt erlaubte, fehlen uns trotzdem einige Ressourcen, um diesen Ort wirklich sicher zu machen.`})
    .IncompleteText.set({"enGB":"Please help us get those resources.", "deDE":"Bitte Hilf uns die Resourcen zu sammeln."})
    .ObjectiveText.set({"enGB":"Gather 15 required resources from nearby enemies.", "deDE":"Sammel 15 benötigte Resourcen von Gegnern in der Nähe."})
    .CompleteText.set({"enGB":"Thank you $c! Thanks to your efforts, we may have hope yet!","deDE":"Danke sehr $c! Dank euch, können wir vielleicht doch weiter hoffen."})
    .CompleteLogText.set({"enGB":"Return to Nathaniel Hammerfall at the Light's Hope Settlement."})
    .AreaSort.set(139)
    .QuestLevel.set(60)
    .Objectives.Item.add(60117, 15)
    .Questgiver.addCreatureBoth(45006)
    .Rewards.Difficulty.DIFFICULTY_5.set()
    .Rewards.Money.set(500000)
    .Rewards.ChoiceItem.add(19901, 1)
    .Rewards.ChoiceItem.add(20258, 1)
    .Rewards.ChoiceItem.add(21806, 1)
    .Rewards.ChoiceItem.add(19962, 1)

const ebon_dawn = std.Quests.create('mod', 'ebon-dawn')
    .Name.enGB.set(`Who is the Ebon Dawn?`)
    .PickupText.enGB.set(`Greeting $c, I bet you have seen these new Sentries at the disposal of the Argent Dawn, and wondered, who are they, and why are undead among them.
    
Well, I asked myself the same question, until I got to find out first-hand. Lord Darion Mograine himself explained it to me. For you see, made a pact with the Argent Dawn during the Scourge's Invasion, when the Dreadfortress Naxxrammas was still floating above these grounds. Now that Naxxrammas no longer lingers, the envoys are here merely to take sigils from those that returned from it, but the Alliance is broken.

But that is where the Ebon Blade stepped up, we have come to an agreement with the Argent Dawn. As long as we do not meddle with their affairs, and assist in the reclamation of Lordaeron, we are permitted entry and even refuge... Though now we get to the Conditions we need to keep. You see, we need to find Resources, but also Rations. The Undead Light Clads are the Ebon Dawn, and although back to their light infused selves, they can only eat scourge infested supplies...

The Problem is, though we plan on raiding it in due time, our current lack of man-power, is what is keeping us from it. Even so, these Brave soldiers need to eat. They endure hardships and Pain for the sake of our cause... Say Adventurer, could you aid me in retrieving some Supplies from Stratholme? I would reward you handsomely... Well, as Handsomely as I can.`)
    .ObjectiveText.enGB.set(`Infiltrate Stratholme, and Retrieve 50 Tainted Supply Crates.`)
    .IncompleteText.enGB.set(`It doesn't look like you got what we need yet... Could... Could you keep trying?`)
    .CompleteText.enGB.set(`Perfect! That is all we need to feed them for the Week. . . That being said, this will probably be a weekly task, but don't worry, I will reward you as well as can be!`)
    .CompleteLogText.enGB.set(`Bring the Supplies to Nathaniel Hammerfall at the Light's Hope Settlement.`)
    .AreaSort.set(139)
    .QuestLevel.set(60)
    .Objectives.Item.add(60118, 50)
    .Flags.WEEKLY.set(1)
    .Questgiver.addCreatureBoth(45006)
    .Rewards.Difficulty.DIFFICULTY_9.set()
    .Rewards.Money.set(1500000)

const aged_coin = std.Quests.create('mod', 'a-c-q')
    .Name.enGB.set(`The tale of Nostalgic Nelson`)
    .PickupText.enGB.set(`$C! Hello!

I've got some splendid news for you! I've been contacted by an old friend of mine, Nelson Hawthunk. . .  Well, we call him "Nostalgic Nelson". He has recently contacted me via Gryphon Mail, I am supposed to hire adventurers to help him for one of his Aged Coins! You may wonder why you should care about those old dubloons. Well, they are kind of like a debt marker, and Nelson always pays his debts.

He is a knowledgable guy, he was one of the few people that were a guest of Honor at Medivh's Parties, and knowing the Former Guardian of Azeroth gave him A LOT of perks. He got Old Armors that seem to grow along their wearers, or a book made by Medivh, as I heard a Guide of sorts that will help you gain power as soon as you read its pages. Honestly, there are quite a few goodies he offers, I heard, that he likes to watch new adventurers, but he is also known to be in Dalaran City, selling items from the far future.`)
    .IncompleteText.enGB.set(`$C! Hello!

    I've got some splendid news for you! I've been contacted by an old friend of mine, Nelson Hawthunk. . .  Well, we call him "Nostalgic Nelson". He has recently contacted me via Gryphon Mail, I am supposed to hire adventurers to help him for one of his Aged Coins! You may wonder why you should care about those old dubloons. Well, they are kind of like a debt marker, and Nelson always pays his debts.
    
    He is a knowledgable guy, he was one of the few people that were a guest of Honor at Medivh's Parties, and knowing the Former Guardian of Azeroth gave him A LOT of perks. He got Old Armors that seem to grow along their wearers, or a book made by Medivh, as I heard a Guide of sorts that will help you gain power as soon as you read its pages. Honestly, there are quite a few goodies he offers, I heard, that he likes to watch new adventurers, but he is also known to be in Dalaran City, selling items from the far future.`)
    .CompleteText.enGB.set(`Go to Nostalgic Nelson in any of the Starting Zones.`)
    .QuestLevel.set(80)
    .Questgiver.addCreatureStarter(45006)
    .Questgiver.addCreatureEnder(45007)
    .Rewards.Item.add(60043, 1)
    .ObjectiveText.enGB.set(`Go to Nelson Hawthunk in Dalaran`)
    .Flags.set(["AUTO_ACCEPT", "AUTOCOMPLETE"])