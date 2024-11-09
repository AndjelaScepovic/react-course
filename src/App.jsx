import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Error from "./pages/Error.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import MainNavigation from "./components/MainNavigation";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <MainNavigation /> {}
        <Home />
      </>
    ),
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: (
      <>
        <MainNavigation /> {}
        <Login />
      </>
    ),
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
