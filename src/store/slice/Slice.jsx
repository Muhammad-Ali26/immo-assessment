// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";

const addressSlice = createSlice({
  name: "addresses",
  initialState: [
    {
      id: 1,
      address: "SteinstraBe 12",
      postCode: "20095",
      propertyType: "Flat",
      rooms: "5",
      floorArea: "64",
    },
    {
      id: 2,
      address: "ForsmannstraBe 5",
      postCode: "244555",
      propertyType: "Plaza",
      rooms: "7",
      floorArea: "64",
    },
    {
      id: 3,
      address: "HimmelstraBe 2",
      postCode: "29876",
      propertyType: "Semi-detached",
      rooms: "10",
      floorArea: "64",
    },
    {
      id: 4,
      address: "Alte Schleuse 23",
      postCode: "22311",
      propertyType: "Terraced House",
      rooms: "3",
      floorArea: "22",
    },
    {
      id: 5,
      address: "SteinstraBe 12",
      postCode: "20112",
      propertyType: "Flat",
      rooms: "4",
      floorArea: "54",
    },
  ],
});

export default addressSlice.reducer;
