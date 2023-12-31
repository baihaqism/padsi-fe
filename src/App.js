import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"
import "./App.css"
import ProtectedRoute from "./utils/ProtectedRoute"
import PublicRoute from "./utils/PublicRoute"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Sidebar from "./components/Sidebar"
import MainDash from "./components/MainDash/MainDash"
import Transactions from "./pages/Transactions/Transactions"
import AddTransactions from "./pages/Transactions/List/Add"
import DetailsTransactions from "./pages/Transactions/List/Preview"
import EditTransactions from "./pages/Transactions/List/Edit"
import Customers from "./pages/Customers/Customers"
import Users from "./pages/Users/Users"
import Products from "./pages/Products/Products"
import Services from "./pages/Services/Services"
import Test from "./pages/ScriptTest/Test"

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route
            path="/dashboard"
            element={
              <div className="App">
                <div className="AppGlass">
                  <Sidebar />
                  <MainDash />
                </div>
              </div>
            }
          />
          <Route
            path="/transactions"
            element={
              <div className="App">
                <div className="AppGlass">
                  <Sidebar />
                  <Transactions />
                </div>
              </div>
            }
          />
          <Route
            path="/transactions/add"
            element={
              <div className="App">
                <div className="AppGlass">
                  <Sidebar />
                  <AddTransactions />
                </div>
              </div>
            }
          />
          <Route
            path="/transactions/details/:id_transactions"
            element={
              <div className="App">
                <div className="AppGlass">
                  <Sidebar />
                  <DetailsTransactions />
                </div>
              </div>
            }
          />
          <Route
            path="/transactions/edit/:id_transactions"
            element={
              <div className="App">
                <div className="AppGlass">
                  <Sidebar />
                  <EditTransactions />
                </div>
              </div>
            }
          />
          <Route
            path="/customers"
            element={
              <div className="App">
                <div className="AppGlass">
                  <Sidebar />
                  <Customers />
                </div>
              </div>
            }
          />
          <Route
            path="/users"
            element={
              <div className="App">
                <div className="AppGlass">
                  <Sidebar />
                  <Users />
                </div>
              </div>
            }
          />
          <Route
            path="/products"
            element={
              <div className="App">
                <div className="AppGlass">
                  <Sidebar />
                  <Products />
                </div>
              </div>
            }
          />
          <Route
            path="/services"
            element={
              <div className="App">
                <div className="AppGlass">
                  <Sidebar />
                  <Services />
                </div>
              </div>
            }
          />
          <Route
            path="/test"
            element={
              <div className="App">
                <div className="AppGlass">
                  <Sidebar />
                  <Test />
                </div>
              </div>
            }
          />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
