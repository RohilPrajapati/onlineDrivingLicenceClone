import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import UserPage from "../pages/User";
import LoginForm from "../pages/User/components/LoginForm";
import ForgotPasswordForm from "../pages/User/components/ForgotPasswordForm";
import RegisterForm from "../pages/User/components/RegisterForm";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            {/* <Route index element={<Home />} /> */}
            <Route path="/" element={<UserPage />}>
                <Route path="login" element={<LoginForm />}/>
                <Route path="register" element={<RegisterForm />}/>
                <Route path="forgot-password" element={<ForgotPasswordForm />}/>
            </Route>
        </Route>    
    )
);