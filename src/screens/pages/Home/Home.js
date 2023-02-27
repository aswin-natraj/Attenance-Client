import {
  Box,
  Center,
  Text,
  Image,
  Heading,
  Select,
  HStack,
  VStack,
  Card,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

function Home() {
  const [formData, setFormData] = React.useState({});
  const [rowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
  ]);

  const [columnDefs] = useState([
    { field: "make", checkboxSelection: true },
    { field: "model" },
    { field: "price" },
    { field: "price" },
    { field: "price" },
  ]);
  const defaultSetting = {
    sortable: true,
    editable: true,
    filter: true,
    floatingFilter: true,
    flex: 1,
  };
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      height={"full"}
    >
      <Card
        className="ag-theme-alpine"
        style={{ height: " 80%", width: "90%", overflowX: "hidden" }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultSetting}
        ></AgGridReact>
      </Card>{" "}
    </Box>
  );
}

export default Home;
