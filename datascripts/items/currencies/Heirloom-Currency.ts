import { std } from "wow/wotlk";

std.Items.create('mod', 'Aged Coin')
    .Name.enGB.set('Aged Coin')
    .DisplayInfo.setSimpleIcon('mod', 'Aged Coin', 'wow_token01')
    .Quality.ORANGE.set()
    .MaxCount.set(1)

export const SET_CURRENCY = std.Currency.create('mod', 'Soul-Coin')
    .Name.enGB.set("Aged Coins")
    .Item.set(60043)
    .Category.set(1)
    .Description.enGB.set("I think I've seen someone that took these coins from my days as a level 1")

std.ExtendedCost.create()
    .Items.add(60043, 1)

std.ExtendedCost.create()
    .Items.add(60044, 4)