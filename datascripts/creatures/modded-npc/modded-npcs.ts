import { std } from "wow/wotlk"

const model = std.CreatureOutfits.create().fromString(`
Character\Human\male\humanmale.m2
1 0
0 1 9 6 4 9 1
51277
0
51273
14537
0
0
51278
51274
0
51267
33688
0
47547
0
0
`)

std.CreatureTemplates.load(37119)
    .Models.mod(0, (display) => {
        display.set(model.ID)
    })
    .Scale.set(2)
    .Weapons.add(70011, 0, 0)