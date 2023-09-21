import React from "react";
import DataTable from "react-data-table-component";
import { primaryStyles } from './CustomStyles';
import { useSelector } from "react-redux";
import { useState } from "react";


export default function App() {
  const addresses = useSelector((state) => state.addresses);
  const [searchInput, setSearchInput] = useState("");
  const [propertyTypeFilter, setPropertyTypeFilter] = useState("All");
  const [selectedRows, setSelectedRows] = useState([]);

  const columns = [
    {
      name: "Address",
      selector: (row) => row.address,
    },
    {
      name: "Postcode",
      selector: (row) => row.postCode,
    },
    {
      name: "Property type",
      selector: (row) => row.propertyType,
    },
    {
      name: "Number of rooms",
      selector: (row) => row.numberOfRooms,
    },
    {
      name: "Floor area (m)",
      selector: (row) => row.area,
    },
  ];

  const data = [];

  const filteredAddresses = addresses?.filter((value) =>
    value?.address.includes(searchInput) &&
    (propertyTypeFilter === "All" || value?.propertyType === propertyTypeFilter)
  );

  filteredAddresses?.map((value, index) => {
    data.push({
      id: value?.id,
      address: value?.address,
      postCode: value?.postCode,
      propertyType: value?.propertyType,
      numberOfRooms: value?.rooms,
      area: value?.floorArea
    })
  })

  const setNewArr = (arg) => {
    setSelectedRows(arg)
  }

  return (
    <>
      <section className="font-manrope">
        <header className="relative">
          <nav className="bg-gray-100 flex items-center justify-end md:justify-center px-3 py-8">
            <div>
              <img src="/images/logo.png" alt="logo" className="w-40 absolute top-0 left-0" />
            </div>

            <div className="">
              <h1 className="text-sm md:text-2xl lg:text-4xl text-black font-bold">Property Search Tool</h1>
            </div>
          </nav>
        </header>

        <div className="w-5/6 lg:w-2/4 m-auto py-20 space-y-5 ">
          <div className="space-y-3">
            <label className="text-xl text-black font-semibold">Search</label>
            <div className="flex gap-3">
              <input type="search" placeholder="Address" className="w-full h-12 border-2 border-gray-300 outline-none p-5" value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)} />
              <button className="w-40 h-12 bg-yellow-400 border-2 rounded-md border-yellow-500 font-semibold">
                Search
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl text-black font-semibold">Selected Properties</h2>
            <DataTable columns={columns} data={selectedRows} customStyles={primaryStyles} />
          </div>
        </div>

        <div className="w-5/6 m-auto space-y-5 lg:space-y-0 lg:grid grid-cols-5">
          <div className="space-y-3">
            <h2 className="text-xl text-black font-semibold">Property types</h2>
            <ul className="bg-slate-100 px-5 py-2 space-y-3 w-60">
              <li
                className={`text-black text-lg font-semibold cursor-pointer ${propertyTypeFilter === "All" ? "text-yellow-500" : ""
                  }`}
                onClick={() => setPropertyTypeFilter("All")}
              >
                All
              </li>
              <li
                className={`text-black text-lg font-semibold cursor-pointer ${propertyTypeFilter === "Flat" ? "text-yellow-500" : ""
                  }`}
                onClick={() => setPropertyTypeFilter("Flat")}
              >
                Flat
              </li>
              <li
                className={`text-black text-lg font-semibold cursor-pointer ${propertyTypeFilter === "Terraced House" ? "text-yellow-500" : ""
                  }`}
                onClick={() => setPropertyTypeFilter("Terraced House")}
              >
                Terraced House
              </li>
              <li
                className={`text-black text-lg font-semibold cursor-pointer ${propertyTypeFilter === "Semi-detached" ? "text-yellow-500" : ""
                  }`}
                onClick={() => setPropertyTypeFilter("Semi-detached")}
              >
                Semi-detached
              </li>
            </ul>
          </div>

          <div className="col-span-4 space-y-3">
            <h2 className="text-xl text-black font-semibold">Search results</h2>
            <DataTable
              columns={columns}
              data={data}
              customStyles={primaryStyles}
              selectableRows
              onSelectedRowsChange={({ selectedRows }) => setNewArr(selectedRows)}
            />
          </div>
        </div>
      </section>
    </>
  );
}
