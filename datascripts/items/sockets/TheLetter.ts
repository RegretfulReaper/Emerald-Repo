import { std } from "wow/wotlk";

std.Items.create('mod','letter-quest')
    .Name.enGB.set(`Melanie's Letter`)
    .Description.enGB.set('To my Kin...')
    .ItemSetName.enGB.set('HearthQuestline')
    .Bonding.QUEST_ITEM.set()
    .Class.QUEST.set()
    .Material.CONSUMABLES.set()
    .Quality.WHITE.set()
    .Price.BuyCount.set(1)
    .ItemLevel.set(1)
    .MaxCount.set(1)
    .MaxStack.set(1)
    .SoundOverride.set(-1)
    .DisplayInfo.modRefCopy('mod','letter',x=>x
        .Icon.set('INV_Misc_Note_01')
        .GroupSoundIndex.set(20)
    )
    .PageText.set(4000)
    .PageText.setSimple('mod', 'to-my-kin', 'enGB', `To my Kin, I am sorry I can not bring these words to you myself.
    
I trust the adventurer I asked to deliver these letters did to vigilantly. I have things to say, that I fear I no longer bear the strength to say aloud in my voice.
But before all, I want you to know, I wished not to forsake any of you. I wish nothing more, but to return home and be with you all. But higher tidings call my name.

These following three Pages are for my Kin, any and all I would call my Kin that is.`, 4001)

std.Items.create('mod', 'to-my-kin-texts')
    .PageText.setSimple('mod', 'to-my-kin2', 'enGB', `My dear Jasmine, you grew from my darling daughter, to a fine Woman.
    
I happy, that you will not need to bear the years to come alone. Be it your Fiance, or your Sister. You will always have someone to fall back onto.
Never forget from whenst you came, let the life you lived until my depature be, what made you into the person you are now.

I will never forget when first held you in my arms, the feeling I got that day, challenges the light itself in intensity.
I will never forget you, and may we meet again.

In Motherly Love,
Your Mother~`, 4002)
    .PageText.setSimple('mod', 'to-my-kin3', 'enGB', `My sweet Mia, the days ahead will be a Challenge.
    
I wish I could get to watch you grow into a Woman. I hope that your beloved gives you the Strength, to go on without me. I am sorry, that I wasn't always able to shield you from harm.
Your scars, your wounds, the Pain you lived, let it be a reminder, that nothing in this world, can protect you, but yourself. I wish I could be the one to do it, but alas, now my hands are tied. You are, and will always be, my Darling.

With Warmth and Love,
Your Mother~`, 4003)
    .PageText.setSimple('mod', 'to-my-kin4', 'enGB', `Adventurer, this letter, is for you.
    
I apologize for the deceit, but I could not tell you the truth, about why I could not deliver these letters myself.
    
A while ago, whilst aiding the Argent Dawn in the Raiding of Naxxrammas, when it still loomed near Stratholme, I got infected.
I am certain that you know, once a Person is afflicted by the Plague of undeath, there is no saving them. And thus I secluded myself.
By the time you delivered the last letters, I will no longer be by the Hearth. But I wish to bestow it upon you. Let it be a Home to all those in need of one, so that my Compassion and Kindnesss can live on.

Thank you $n, for reading these, my last words.

Yours Truly,
Melanie B.`)

std.Items.create('mod','letter-nonquest')
    .Name.enGB.set(`Letter to you`)
    .Description.enGB.set('Adventurer...')
    .ItemSetName.enGB.set('HearthDeed')
    .Bonding.NO_BOUNDS.set()
    .Class.JUNK.set()
    .Flags.CANT_DESTROY.set(1)
    .Material.CONSUMABLES.set()
    .Quality.WHITE.set()
    .Price.BuyCount.set(1)
    .ItemLevel.set(1)
    .MaxCount.set(1)
    .MaxStack.set(1)
    .SoundOverride.set(-1)
    .DisplayInfo.modRefCopy('mod','letter-nonquest',x=>x
        .Icon.set('INV_Misc_Note_04')
        .GroupSoundIndex.set(20)
    )
    .PageText.set(4003)