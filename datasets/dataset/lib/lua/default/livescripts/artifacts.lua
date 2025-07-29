--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
function ____exports.cloak(events)
    events.Player:OnSpellCast(function(player, spell)
        local back = player:GetEquippedItemBySlot(14)
        if back then
        end
    end)
end
function ____exports.artifact(events)
    events.Item:OnEquip(function(item, player, mainhand)
        if item:GetEntry() == 60106 then
            item:IsEquipped()
            player:LearnSpell(46917)
            player:EquipItem(60108, 16)
        end
    end)
    events.Item:OnUnequip(function(item, player)
        if item:GetEntry() == 60106 then
            item:IsInBag()
            player:RemoveSpell(46917, true, true)
            player:RemoveItemByEntry(60108)
        end
    end)
    events.Item:OnEquip(function(item, player, mainhand)
        item:GetEntry()
        if item:GetEntry() == 60106 then
            player:HasItem(60106, 1, false)
            if item:IsEquipped() then
                player:ModifyPower(1, 500)
            end
        end
    end)
    events.Item:OnEquip(function(item, player, mainhand)
        if item:GetEntry() == 60110 then
            item:IsEquipped()
            player:EquipItem(60111, 16)
        end
    end)
    events.Item:OnUnequip(function(item, player)
        if item:GetEntry() == 60110 then
            item:IsInBag()
            player:RemoveItemByEntry(60111)
        end
    end)
    events.Item:OnEquip(function(item, player, mainhand)
        if item:GetEntry() == 60109 then
            item:IsEquipped()
            player:EquipItem(60112, 16)
        end
    end)
    events.Item:OnUnequip(function(item, player)
        if item:GetEntry() == 60109 then
            item:IsInBag()
            player:RemoveItemByEntry(60112)
        end
    end)
end
return ____exports
