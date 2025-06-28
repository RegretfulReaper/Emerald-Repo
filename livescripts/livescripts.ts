//export function Main(events: TSEvents) {
//    events.Spell.OnCast((spell) => {
//        if (spell.GetEntry() == 80910) {
//            spell.GetCaster().ToPlayer()?.SetLevel(60)
//            spell.GetCaster().ToPlayer()?.AddItem(60043, 1)
//            spell.GetCaster().ToPlayer()?.AdvanceSkillsToMax()
//            spell.GetCaster().ToPlayer()?.AddItem(38082, 4)
//            spell.GetCaster().ToPlayer()?.LearnClassSpells(true, true, true)
//            spell.GetCaster().ToPlayer()?.LearnSpell(34090)
//            spell.GetCaster().ToPlayer()?.TryAddMoney(2500000)
//        }
//    })
//}


export function Main(events: TSEvents) {
    events.Spell.OnCast((spell) => {
        if (spell.GetEntry() == 80910) {
            const player = ToPlayer(spell.GetCaster());
            if (!player) return;

            //if (player.GetGMRank() == 3) {
            //    player.Teleport(1, 16226.200195, 16257.000000, 13.202200, 1.650070)
            //}

            // Optional: Items weiterhin klassenspezifisch vergeben
            if (player.GetClass() == 1) {
                player.SetLevel(60);
                player.LearnClassSpells(true, true, true);
                player.EquipItem(16963, 0)
                player.EquipItem(16961, 2)
                player.EquipItem(16966, 4)
                player.EquipItem(16959, 8)
                player.EquipItem(16964, 9)
                player.EquipItem(16960, 5)
                player.EquipItem(16962, 6)
                player.EquipItem(16965, 7)
                player.EquipItem(13163, 15)
                player.EquipItem(23045, 14)
                player.EquipItem(23162, 19)
                player.EquipItem(23162, 20)
                player.EquipItem(23162, 21)
                player.EquipItem(23162, 22)
                player.EquipItem(18821, 10)
                player.EquipItem(23038, 11)
                player.EquipItem(23041, 12)
                player.EquipItem(22954, 13)
                player.EquipItem(23053, 1)
            }

            if (player.GetClass() == 2) {
                player.SetLevel(60);
                player.LearnClassSpells(true, true, true);
                player.EquipItem(16955, 0)
                player.EquipItem(16953, 2)
                player.EquipItem(16958, 4)
                player.EquipItem(16951, 8)
                player.EquipItem(16956, 9)
                player.EquipItem(16952, 5)
                player.EquipItem(16954, 6)
                player.EquipItem(16957, 7)
                player.EquipItem(22798, 15)
                player.EquipItem(23045, 14)
                player.EquipItem(23162, 19)
                player.EquipItem(23162, 20)
                player.EquipItem(23162, 21)
                player.EquipItem(23162, 22)
                player.EquipItem(23038, 10)
                player.EquipItem(18821, 11)
                player.EquipItem(19343, 12)
                player.EquipItem(22954, 13)
                player.EquipItem(23053, 1)
                player.EquipItem(23203, 17)
            }

            if (player.GetClass() == 3) {
                player.SetLevel(60);
                player.LearnClassSpells(true, true, true);
                player.EquipItem(16939, 0)
                player.EquipItem(16937, 2)
                player.EquipItem(16942, 4)
                player.EquipItem(16935, 8)
                player.EquipItem(16940, 9)
                player.EquipItem(16936, 5)
                player.EquipItem(16938, 6)
                player.EquipItem(16941, 7)
                player.EquipItem(23039, 15)
                player.EquipItem(21710, 14)
                player.EquipItem(23162, 19)
                player.EquipItem(23162, 20)
                player.EquipItem(23162, 21)
                player.EquipItem(23162, 22)
                player.EquipItem(22961, 10)
                player.EquipItem(23038, 11)
                player.EquipItem(13209, 12)
                player.EquipItem(13965, 13)
                player.EquipItem(19377, 1)
                player.EquipItem(22812, 17)
            }

            if (player.GetClass() == 4) {
                player.SetLevel(60);
                player.LearnClassSpells(true, true, true);
                player.LearnSpell(201)
                player.LearnSpell(5011)
                player.EquipItem(16908, 0)
                player.EquipItem(16832, 2)
                player.EquipItem(16905, 4)
                player.EquipItem(16911, 8)
                player.EquipItem(16907, 9)
                player.EquipItem(16910, 5)
                player.EquipItem(16909, 6)
                player.EquipItem(16906, 7)
                player.EquipItem(23054, 15)
                player.EquipItem(23577, 16)
                player.EquipItem(23045, 14)
                player.EquipItem(23162, 19)
                player.EquipItem(23162, 20)
                player.EquipItem(23162, 21)
                player.EquipItem(23162, 22)
                player.EquipItem(23060, 10)
                player.EquipItem(23038, 11)
                player.EquipItem(23041, 12)
                player.EquipItem(22954, 13)
                player.EquipItem(19377, 1)
                player.EquipItem(22812, 17)
            }

            if (player.GetClass() == 5) {
                player.SetLevel(60);
                player.LearnClassSpells(true, true, true);
                player.EquipItem(16921, 0)
                player.EquipItem(16924, 2)
                player.EquipItem(16923, 4)
                player.EquipItem(16926, 8)
                player.EquipItem(16920, 9)
                player.EquipItem(16925, 5)
                player.EquipItem(16922, 6)
                player.EquipItem(16919, 7)
                player.EquipItem(18608, 15)
                player.EquipItem(22960, 14)
                player.EquipItem(23162, 19)
                player.EquipItem(23162, 20)
                player.EquipItem(23162, 21)
                player.EquipItem(23162, 22)
                player.EquipItem(19382, 10)
                player.EquipItem(23061, 11)
                player.EquipItem(19958, 12)
                player.EquipItem(23047, 13)
                player.EquipItem(23036, 1)
                player.EquipItem(23009, 17)
            }

            if (player.GetClass() == 7) {
                player.SetLevel(60);
                player.LearnClassSpells(true, true, true);
                player.EquipItem(16947, 0)
                player.EquipItem(16945, 2)
                player.EquipItem(16950, 4)
                player.EquipItem(16943, 8)
                player.EquipItem(16948, 9)
                player.EquipItem(16944, 5)
                player.EquipItem(16946, 6)
                player.EquipItem(16949, 7)
                player.EquipItem(23221, 15)
                player.EquipItem(22819, 16)
                player.EquipItem(21710, 14)
                player.EquipItem(23162, 19)
                player.EquipItem(23162, 20)
                player.EquipItem(23162, 21)
                player.EquipItem(23162, 22)
                player.EquipItem(23038, 10)
                player.EquipItem(21677, 11)
                player.EquipItem(23041, 12)
                player.EquipItem(22954, 13)
                player.EquipItem(23053, 1)
                player.EquipItem(22395, 17)
            }

            if (player.GetClass() == 8) {
                player.SetLevel(60);
                player.LearnClassSpells(true, true, true);
                player.EquipItem(16914, 0)
                player.EquipItem(16917, 2)
                player.EquipItem(16916, 4)
                player.EquipItem(16918, 8)
                player.EquipItem(16913, 9)
                player.EquipItem(16818, 5)
                player.EquipItem(16915, 6)
                player.EquipItem(16912, 7)
                player.EquipItem(22799, 15)
                player.EquipItem(23050, 14)
                player.EquipItem(23162, 19)
                player.EquipItem(23162, 20)
                player.EquipItem(23162, 21)
                player.EquipItem(23162, 22)
                player.EquipItem(21709, 10)
                player.EquipItem(23031, 11)
                player.EquipItem(19339, 12)
                player.EquipItem(23207, 13)
                player.EquipItem(21608, 1)
                player.EquipItem(22820, 17)
            }

            if (player.GetClass() == 9) {
                player.SetLevel(60);
                player.LearnClassSpells(true, true, true);
                player.EquipItem(16929, 0)
                player.EquipItem(16932, 2)
                player.EquipItem(16931, 4)
                player.EquipItem(16934, 8)
                player.EquipItem(16928, 9)
                player.EquipItem(16933, 5)
                player.EquipItem(16930, 6)
                player.EquipItem(16927, 7)
                player.EquipItem(22800, 15)
                player.EquipItem(23050, 14)
                player.EquipItem(23162, 19)
                player.EquipItem(23162, 20)
                player.EquipItem(23162, 21)
                player.EquipItem(23162, 22)
                player.EquipItem(21709, 10)
                player.EquipItem(23031, 11)
                player.EquipItem(23207, 12)
                player.EquipItem(23046, 13)
                player.EquipItem(23057, 1)
                player.EquipItem(22820, 17)
            }

            if (player.GetClass() == 11) {
                player.SetLevel(60);
                player.LearnClassSpells(true, true, true);
                player.EquipItem(16900, 0)
                player.EquipItem(16902, 2)
                player.EquipItem(16897, 4)
                player.EquipItem(16904, 8)
                player.EquipItem(16899, 9)
                player.EquipItem(16903, 5)
                player.EquipItem(16901, 6)
                player.EquipItem(16898, 7)
                player.EquipItem(22800, 15)
                player.EquipItem(23050, 14)
                player.EquipItem(23162, 19)
                player.EquipItem(23162, 20)
                player.EquipItem(23162, 21)
                player.EquipItem(23162, 22)
                player.EquipItem(21709, 10)
                player.EquipItem(23031, 11)
                player.EquipItem(19379, 12)
                player.EquipItem(23046, 13)
                player.EquipItem(23057, 1)
                player.EquipItem(23197, 17)
            }

        }
        if (spell.GetEntry() == 80905) {
            const player = ToPlayer(spell.GetCaster());
            if (!player) return;

        }
    })
    events.Player.OnCreate((char) => {
        char.ToPlayer()?.SetLevel(58)
    })
}