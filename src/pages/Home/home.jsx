import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import SideBar from '../../components/SideBar/sidebar';
import DashBoard from './ContentRight/dashboard';


const HomePage = () => {

  const configHomePages = ({ component }) => {
    return (
      <>
        <div className='flex flex-row'>
          <SideBar />
          {component}
        </div>
      </>
    )
  }

  return (
    <>
      <div className='flex flex-row'>
        <SideBar />
        <DashBoard />
      </div>
    </>
  );
}

export default HomePage;
