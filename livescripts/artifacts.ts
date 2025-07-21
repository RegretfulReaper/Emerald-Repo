export function cloak(events: TSEvents) {
    events.Player.OnSpellCast((player, spell) => {
        const back = player.GetEquippedItemBySlot(14)
        if (back){
            // player.HasItem()
        }
    })
}

export function artifact(events: TSEvents) {
    events.Item.OnEquip((item, player, mainhand) => {
        if (item.GetEntry() == 60106){
            item.IsEquipped()
            player.LearnSpell(46917)
            player.EquipItem(60108, 16)
        }
    })
    events.Item.OnUnequip((item, player) => {
        if (item.GetEntry() == 60106){
            item.IsInBag()
            player.RemoveSpell(46917, true, true)
            player.RemoveItemByEntry(60108)
        }
    })
    events.Item.OnEquip((item, player, mainhand) => {
        item.GetEntry()
        if (item.GetEntry() == 60106) {
            player.HasItem(60106, 1, false)
            if (item.IsEquipped()) {
                player.ModifyPower(1, 500)
            }
        }
    })
    events.Item.OnEquip((item, player, mainhand) => {
        if (item.GetEntry() == 60110){
            item.IsEquipped()
            player.EquipItem(60111, 16)
        }
    })
    events.Item.OnUnequip((item, player) => {
        if (item.GetEntry() == 60110){
            item.IsInBag()
            player.RemoveItemByEntry(60111)
        }
    })
    events.Item.OnEquip((item, player, mainhand) => {
        if (item.GetEntry() == 60109){
            item.IsEquipped()
            player.EquipItem(60112, 16)
        }
    })
    events.Item.OnUnequip((item, player) => {
        if (item.GetEntry() == 60109){
            item.IsInBag()
            player.RemoveItemByEntry(60112)
        }
    })
}