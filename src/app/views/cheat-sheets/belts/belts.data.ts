import { BeltsData } from "app/models/BeltsData.model";
import { RawData } from "app/models/Data.model";

export const BELTS_DATA: RawData<BeltsData> = {
  "cheatSheet": {
    "title": "Belts",
    "icon": "Transport_belt"
  },
  "data": {
    "belt_density": 8,
    "belt_info": [
      {
        "tier": 1,
        "icons": [
          "Transport_belt",
          "Underground_belt",
          "Splitter"
        ],
        "throughput": 15,
        "underground_distance": 4
      },
      {
        "tier": 2,
        "icons": [
          "Fast_transport_belt",
          "Fast_underground_belt",
          "Fast_splitter"
        ],
        "throughput": 30,
        "underground_distance": 6
      },
      {
        "tier": 3,
        "icons": [
          "Express_transport_belt",
          "Express_underground_belt",
          "Express_splitter"
        ],
        "throughput": 45,
        "underground_distance": 8
      }
    ]
  }
};
