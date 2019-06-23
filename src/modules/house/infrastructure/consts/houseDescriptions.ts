import { HouseType } from "src/modules/common/infrastructure/consts/goTEnums";

// tslint:disable: max-line-length
export const LannisterDescription = {
  type: HouseType.Lannister,
  imageSrc: "assets/img/HouseLannisterShield.png",
  backgroundBanner: "/assets/img/LannisterBanner.png",
  footmanImageSrc: "/assets/img/LannisterFootman.png",
  knightImageSrc: "/assets/img/LannisterKnight.png",
  shipImageSrc: "/assets/img/LannisterShip.png",
  towerImageSrc: "/assets/img/LannisterTower.png",
  backgroundColor: "#87090a",
  text: {
    "Sentence" : {
      "pl-PL": "Słuchajcie Mojego Ryku",
      "en-EN": "Hear My Roar"
    },
    "HouseName": {
      "pl-PL": "Ród Lannisterów",
      "en-EN": "House Lannister"
    },
    "Description": {
      "pl-PL": "Lannisterowie z Casterly Rock pozostają najważniejszą siłą wspierającą pretensje króla Joffreya Baratheona do Żelaznego Tronu. Chęłpią się pochodzeniem od Lanna Sprytnego, legendarnego spryciarza z Ery Herosów. Złoto Casterly Rock i Złotego Zęba uczyniło z nich najbogatszych z wielkich rodów. Ich herbem jest złoty lew na karmazynowym polu.",
      "en-EN": "Translation later"
    }
  },
  getTranslation: (key: string) => {
    const locale_id = localStorage.getItem("locale_id");
    return LannisterDescription.text[key][locale_id];
  }
};

export const BaratheonDescription = {
  type: HouseType.Baratheon,
  imageSrc: "assets/img/HouseBaratheonShield.png",
  backgroundBanner: "/assets/img/BaratheonBanner.png",
  footmanImageSrc: "/assets/img/BaratheonFootman.png",
  knightImageSrc: "/assets/img/BaratheonKnight.png",
  shipImageSrc: "/assets/img/BaratheonShip.png",
  towerImageSrc: "/assets/img/BaratheonTower.png",
  backgroundColor: "#fecf03",
  text: {
    "Sentence": {
      "pl-PL": "Nasza Jest Furia",
      "en-EN": "Ours Is the Fury"
    },
    "HouseName": {
      "pl-PL": "Ród Baratheonów",
      "en-EN": "House Baratheon"
    },
    "Description": {
      "pl-PL": "Najmłodszy z Wielkich Rodów, zrodzony podczas Podboju. Jego założyciel, Orys Baratheon, był jakoby bękarcim bratem Aegona Smoka. Orys szybko awansował i stał się jednym  najbardziej wojowniczych dowódców Aegona. Herbem Baratheonów jest jeleń w koronie czarny na złotym tle.",
      "en-EN": ""
    }
  },
  getTranslation: (key: string) => {
    const locale_id = localStorage.getItem("locale_id");
    return BaratheonDescription.text[key][locale_id];
  }
};

export const StarkDescription = {
  type: HouseType.Stark,
  imageSrc: "assets/img/HouseStarkShield.png",
  backgroundBanner: "/assets/img/StarkBanner.png",
  footmanImageSrc: "/assets/img/StarkFootman.png",
  knightImageSrc: "/assets/img/StarkKnight.png",
  shipImageSrc: "/assets/img/StarkShip.png",
  towerImageSrc: "/assets/img/StarkTower.png",
  backgroundColor: "#d4cdb1",
  text: {
    "Sentence": {
      "pl-PL": "Nadchodzi Zima",
      "en-EN": "Winter Is Coming"
    },
    "HouseName": {
      "pl-PL": "Ród Starków",
      "en-EN": "House Stark"
    },
    "Description": {
      "pl-PL": "Starkowie wywodzą się od Brandona Budowniczego i starożytnych królów zimy. Przez tysiąclecia władali Winterfell jako królowie północy, a później jako namiestnicy. Ich herbem, jest szary wilkor na białym jak lód polu.",
      "en-EN": ""
    }
  },
  getTranslation: (key: string) => {
    const locale_id = localStorage.getItem("locale_id");
    return StarkDescription.text[key][locale_id];
  }
};

export const TyrellDescription = {
  type: HouseType.Tyrell,
  imageSrc: "assets/img/HouseTyrellShield.png",
  backgroundBanner: "/assets/img/TyrellBanner.png",
  footmanImageSrc: "/assets/img/TyrellFootman.png",
  knightImageSrc: "/assets/img/TyrellKnight.png",
  shipImageSrc: "/assets/img/TyrellShip.png",
  towerImageSrc: "/assets/img/TyrellTower.png",
  backgroundColor: "#8da080",
  text: {
    "Sentence": {
      "pl-PL": "Zbieramy Siły",
      "en-EN": "Growing Strong"
    },
    "HouseName": {
      "pl-PL": "Ród Tyrellów",
      "en-EN": "House Tyrell"
    },
    "Description": {
      "pl-PL": "Tyrellowie zdobli znaczenie jako namiestnicy królów Reach, którzy władali żyznymi równinami położonymi na południowy zachód od Dornijskiego Pogranicza i Czarnego Nurtu, aż po brzegi morza zachodzącego słońca. Herbem Tyrellów jest złota róża na trawiastozielonym polu.",
      "en-EN": "Translation later"
    }
  },
  getTranslation: (key: string) => {
    const locale_id = localStorage.getItem("locale_id");
    return TyrellDescription.text[key][locale_id];
  }
};

export const GreyjoyDescription = {
  type: HouseType.Greyjoy,
  imageSrc: "assets/img/HouseGreyjoyShield.png",
  backgroundBanner: "/assets/img/GreyjoyBanner.png",
  footmanImageSrc: "/assets/img/GreyjoyFootman.png",
  knightImageSrc: "/assets/img/GreyjoyKnight.png",
  shipImageSrc: "/assets/img/GreyjoyShip.png",
  towerImageSrc: "/assets/img/GreyjoyTower.png",
  backgroundColor: "#1a1a1a",
  text: {
    "Sentence": {
      "pl-PL": "My Nie Siejemy",
      "en-EN": "We Do Not Sow"
    },
    "HouseName": {
      "pl-PL": "Ród Greyjoyów",
      "en-EN": "House Greyjoy"
    },
    "Description": {
      "pl-PL": "Greyjoyowie z Pyke utrzymują, że wywodzą się od Szarego Króla z Ery Herosów. Legendy podają, że Szary Król władał nie tylko zachodnimi ziemiami ale i samym morzem i wziął sobie za żonę syrenę. Herbem Greyjoyów jest złoty kraken na czarnym polu.",
      "en-EN": ""
    }
  },
  getTranslation: (key: string) => {
    const locale_id = localStorage.getItem("locale_id");
    return GreyjoyDescription.text[key][locale_id];
  }
};

export const MartellDescription = {
  type: HouseType.Martell,
  imageSrc: "assets/img/HouseMartellShield.png",
  backgroundBanner: "/assets/img/MartellBanner.png",
  footmanImageSrc: "/assets/img/MartellFootman.png",
  knightImageSrc: "/assets/img/MartellKnight.png",
  shipImageSrc: "/assets/img/MartellShip.png",
  towerImageSrc: "/assets/img/MartellTower.png",
  backgroundColor: "#f0863a",
  text: {
    "Sentence": {
      "pl-PL": "Niezachwiani, Nieugięci, Niezłomni",
      "en-EN": "Unbowed, Unbent, Unbroken"
    },
    "HouseName": {
      "pl-PL": "Ród Martellów",
      "en-EN": "House Martell"
    },
    "Description": {
      "pl-PL": "Dorne jako ostatnie z Siedmiu Królestw poprzysięgło wierność Żelaznemu Tronowi. Krew, obyczaje i historia różnią je od pozostałych królestw. Gdy wybuchła wojna pięciu królów, Dorne nie przyłączyło się do niej. Na sztandarze Martellów widnieje czerwone słońce przebite złotą włócznią.",
      "en-EN": "Translation later"
    }
  },
  getTranslation: (key: string) => {
    const locale_id = localStorage.getItem("locale_id");
    return MartellDescription.text[key][locale_id];
  }
};
