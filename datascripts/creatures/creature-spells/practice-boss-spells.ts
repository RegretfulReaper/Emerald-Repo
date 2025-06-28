import { config } from "node:process";
import { std } from "wow/wotlk";


const bosseva = std.Spells.create('default', 'Boss-Evasion', 26669)
    .Cooldown.Time.set(30000)
    .Effects.mod(0, (effect) =>{
        effect.PointsBase.set(74)
    },    
)