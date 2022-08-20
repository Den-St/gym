import React from 'react';
import '../src/components/theme/fonts.css'
import {Layout} from "./containers/Layout";
import {Main} from "./containers/Main";
import {Normalize} from "styled-normalize";
import {Route, Routes} from "react-router-dom";
import {Admin} from "./admin/containers";
import {LoginPage} from "./admin/containers/loginPage";
function App() {
  return <><Layout>
    <Routes>
      <Route path={'/'} element={<Main/>}/>
      <Route path={"/admin"} element={<Admin/>}/>
      <Route path={"/admin/login"} element={<LoginPage/>}/>
    </Routes>
  </Layout>
  <Normalize/></>
}

export default App;
