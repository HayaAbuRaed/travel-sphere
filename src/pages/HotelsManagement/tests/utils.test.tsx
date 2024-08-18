// import { getLocation, mapHotelsToTableData, filterByKey } from "../utils";
// import { Hotel } from "../API/types";
// import Map from "../components/Map";
// import { HotelData } from "../types";
// import { hotelsExample } from "./constants";

// describe.skip("HotelsManagement/utils.tsx", () => {
//   describe("getLocation function", () => {
//     it("should return a Map component if latitude and longitude are provided", () => {
//       const latitude = 31.9;
//       const longitude = 35.2;

//       const result = getLocation(latitude, longitude);

//       const expected = <Map position={[latitude, longitude]} />;

//       expect(result).toEqual(expected);
//     });

//     it("should return 'Not Set' if latitude and longitude are not provided", () => {
//       const latitude = 0;
//       const longitude = 0;

//       const result = getLocation(latitude, longitude);

//       const expected = "Not Set";

//       expect(result).toEqual(expected);
//     });
//   });

//   describe("mapHotelsToTableData function", () => {
//     it("should map hotels to table data", () => {
//       const hotels: Hotel[] = [hotelsExample[0]];

//       const result = mapHotelsToTableData(hotels);

//       const expected: HotelData[] = [
//         {
//           ...hotels[0],
//           location: (
//             <Map position={[hotels[0].latitude, hotels[0].longitude]} />
//           ),
//         },
//       ];

//       expect(result).toEqual(expected);
//     });
//   });

//   describe("filterByKey function", () => {
//     it("should filter hotels by key and value", () => {
//       const hotels: Hotel[] = hotelsExample;

//       const result = filterByKey(hotels, "name", "Hotel 1");

//       const expected = [hotels[0]];

//       expect(result).toEqual(expected);
//     });
//   });
// });
