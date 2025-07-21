// import { std } from "wow/wotlk";
// import { CreatureTemplate } from "wow/wotlk/std/Creature/CreatureTemplate";
// import { CONFIG } from "./config";
// import { CREATURE } from "./Worldboss-Creature";
// import { SPELLS } from "./worldboss-spells";


// CREATURE.worldboss

//     // Phase 1: Caster form.

//     .Scripts.onAggro(x=>x
//         .Action.setSetCounter(1, 1, 1).Target.setSelf()
//     )
//     .Scripts.onCounterSet(1, 1, 0, 0, x=>x
//         .Action.setCallTimedActionlist(
//             std.TimedActionListBuilder.create(CREATURE.worldboss.ID, 11, false)
//                 .addAction(    0, x=>x.Action.setTalk({ enGB: "Phase 1 (caster)" }, 1000).Target.setSelf())
//                 .addAction(    0, x=>x.Action.setSetEventPhase(1).Target.setSelf())
//                 .addAction(    0, x=>x.Action.setAttackStop().Target.setSelf())
//                 .addAction(    0, x=>x.Action.setSetReactState("PASSIVE").Target.setSelf())
//                 .addAction( 1000, x=>x.Action.setSetReactState("AGGRESSIVE").Target.setSelf())
//                 .addAction(    0, x=>x.Action.setAttackStart().Target.setSelf())
//             .ID
//         , 1, 1).Target.setSelf()
//     )
