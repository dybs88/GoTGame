import { SupplyRulesItem, SupplyArmySizeItem } from "./supplyRulesItem.model";
import { Army } from "./army.model";

export class SupplyTrackRules {
  public supplyRulesItems: SupplyRulesItem[];

  constructor() {
    this.supplyRulesItems = new Array<SupplyRulesItem>(
      new SupplyRulesItem(2, new Array<SupplyArmySizeItem>(
        new SupplyArmySizeItem(2),
        new SupplyArmySizeItem(2)
      )),
      new SupplyRulesItem(2, new Array<SupplyArmySizeItem>(
        new SupplyArmySizeItem(3),
        new SupplyArmySizeItem(2)
      )),
      new SupplyRulesItem(3, new Array<SupplyArmySizeItem>(
        new SupplyArmySizeItem(3),
        new SupplyArmySizeItem(2),
        new SupplyArmySizeItem(2)
      )),
      new SupplyRulesItem(4, new Array<SupplyArmySizeItem>(
        new SupplyArmySizeItem(3),
        new SupplyArmySizeItem(2),
        new SupplyArmySizeItem(2),
        new SupplyArmySizeItem(2)
      )),
      new SupplyRulesItem(4, new Array<SupplyArmySizeItem>(
        new SupplyArmySizeItem(3),
        new SupplyArmySizeItem(3),
        new SupplyArmySizeItem(2),
        new SupplyArmySizeItem(2)
      )),
      new SupplyRulesItem(4, new Array<SupplyArmySizeItem>(
        new SupplyArmySizeItem(4),
        new SupplyArmySizeItem(3),
        new SupplyArmySizeItem(2),
        new SupplyArmySizeItem(2)
      )),
      new SupplyRulesItem(5, new Array<SupplyArmySizeItem>(
        new SupplyArmySizeItem(4),
        new SupplyArmySizeItem(3),
        new SupplyArmySizeItem(2),
        new SupplyArmySizeItem(2),
        new SupplyArmySizeItem(2)
      ))
    );
  }

  calculateAvaibleArmies(position: number, armies: Army[]) {
    const supplyItem = this.supplyRulesItems[position];

    const suppliedArmies = armies.filter(a => a.pawns.length > 1);

    for (let a = 0; a < suppliedArmies.length; a++) {
      const armySizeItem = supplyItem.armySizes.find(i => i.armySize === suppliedArmies[a].pawns.length && !i.armyExist);
      if (armySizeItem !== undefined) {
        armySizeItem.armyExist = true;
      }
    }
  }
}
