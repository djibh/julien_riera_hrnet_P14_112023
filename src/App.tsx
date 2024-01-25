import { Routes, Route } from "react-router-dom";

import AuthLayout from "./layout/AuthLayout"
import BaseLayout from "./layout/BaseLayout"
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";

const App = () => {
    return (
      <main className="flex h-screen">
        <Routes>
          {/* public routes */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
          </Route>
  
          {/* private routes */}
          <Route element={<BaseLayout />}>
            <Route index element={<Homepage />} />
            {/* <Route path="/services" element={<AllUsers />} /> */}
            {/* <Route path="/patient/:id/*" element={<Patient />} /> */}
          </Route>
        </Routes>
        <ToastContainer position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light" />
    </main>
    );
  };

  export default App;