import { RawData } from "app/models/Data.model";
import { MiningData } from "app/models/MiningData.model";

export const MINING_DATA: RawData<MiningData> = {
  "cheatSheet": {
    "title": "Mining",
    "icon": "Electric_mining_drill"
  },
  "data": {
    "prodBonusPercent": 10,
    "drills": [
      {
        "id": "Burner_mining_drill",
        "miningSpeed": 0.25
      },
      {
        "id": "Electric_mining_drill",
        "miningSpeed": 0.50
      }
    ],
    "ores": [
      {
        "id": "Copper_ore",
        "miningTime": 1,
        "burnerMiningDrill": true,
        "electricMiningDrill": true
      },
      {
        "id": "Iron_ore",
        "miningTime": 1,
        "burnerMiningDrill": true,
        "electricMiningDrill": true
      },
      {
        "id": "Coal",
        "miningTime": 1,
        "burnerMiningDrill": true,
        "electricMiningDrill": true
      },
      {
        "id": "Stone",
        "miningTime": 1,
        "burnerMiningDrill": true,
        "electricMiningDrill": true
      },
      {
        "id": "Uranium_ore",
        "miningTime": 2,
        "burnerMiningDrill": false,
        "electricMiningDrill": true
      }
    ]
  }
};
