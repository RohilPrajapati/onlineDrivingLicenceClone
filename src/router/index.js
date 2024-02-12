import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import InnerLayout from "../layout/InnerLayout";
import UserPage from "../pages/User";
import LoginForm from "../pages/User/components/LoginForm";
import ForgotPasswordForm from "../pages/User/components/ForgotPasswordForm";
import RegisterForm from "../pages/User/components/RegisterForm";
import SearchLicense from "../pages/User/components/SearchLicense";
import Home from "../pages/Home";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Navigate to={'login'} />} />
                {/* <Route index element={<Home />} /> */}
                <Route element={<UserPage />}>
                    <Route path="login" element={<LoginForm />} />
                    <Route path="register" element={<RegisterForm />} />
                    <Route path="forgot-password" element={<ForgotPasswordForm />} />
                    <Route path="license-check" element={<SearchLicense />} />
                </Route>
            </Route>
            <Route path="/" element={<InnerLayout />}>
                <Route path="home" element={<Home />} />
            </Route>
        </Route>

    )
);