export class SupplyRulesItem {
  constructor(public armyCount?: number, public armySizes?: SupplyArmySizeItem[]) { }
}

export class SupplyArmySizeItem {
  constructor(public armySize?: number, public armyExist?: boolean) { }
}
