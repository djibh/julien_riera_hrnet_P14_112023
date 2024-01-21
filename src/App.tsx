import { Routes, Route } from "react-router-dom";

import AuthLayout from "./layout/AuthLayout"
import BaseLayout from "./layout/BaseLayout"
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";

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
            {/* <Route path="/all-users" element={<AllUsers />} /> */}
            {/* <Route path="/saved" element={<Saved />} /> */}
            {/* <Route path="/profile/:id/*" element={<Profile />} /> */}
            {/* <Route path="/update-profile/:id" element={<UpdateProfile />} /> */}
          </Route>
        </Routes>
    </main>
    );
  };

  export default App;