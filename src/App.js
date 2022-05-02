import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import StockEdit from "./components/stock/edit";
import Edit from "./components/Edit";
import Create from "./components/Create";
import StockList from "./components/stock/stockList";
import AddStock from "./components/stock/create";
import ExcelUpload from "./components/stock/excel_upload";
import EODStockList from "./components/stock/eod_stock_list";
import EODStockListEdit from "./components/stock/eodstocklistedit"
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<RecordList />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/stock/edit/:id" element={<StockEdit />} />
        <Route path="/eodstocklistedit/:id" element={<EODStockListEdit />} />
        <Route path="/create" element={<Create />} />
        <Route path="/stocks" element={<StockList />} />
        <Route path="/addstock" element={<AddStock />} />
        <Route path="/excelupload" element={<ExcelUpload />} />
        <Route path="/eodstockdata" element={<EODStockList />} />
      </Routes>
    </div>
  );
};

export default App;
