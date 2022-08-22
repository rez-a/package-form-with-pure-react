import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import WelcomeText from "./Components/WelcomeText";
import Layout from "./Layout/Layout";
import { Routes, Route, Navigate } from 'react-router-dom';
import ForgetPassword from "./Components/ForgetPassword";
import OneTimePass from "./Components/OneTimePass";
import Home from "./Components/Home";
import ThemeContext from "./context/ThemeContext";
import { useState } from "react";





function App() {
  const [theme, setTheme] = useState('#007BFF');
  return (

    <ThemeContext theme={theme} setTheme={setTheme}>
      <Routes>
        <Route path="/register" element={
          <Layout>
            <WelcomeText title='Welcome' text=", Looks like you're new here!" />
            <SignUp />
          </Layout>
        } />
        <Route path="/login" element={
          <Layout>
            <WelcomeText title='Welcome' text=", We are glad to see you again!" />
            <Login />
          </Layout>
        } />
        <Route path="/forgetPassword" element={
          <Layout>
            <WelcomeText title="Don't worry" text=", We are here help you to recover your password." />
            <ForgetPassword />
          </Layout>
        } />
        <Route path="/otp" element={
          <Layout>
            <WelcomeText title="" text="We care about your account security." />
            <OneTimePass />
          </Layout>
        } />
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeContext>
  );
}

export default App;
