import React from 'react'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import SideBar from '../../sideBar/sideBar'
import  AccessMana from '../../Content/AccessMana/AccessMana';
import  Analysis from '../../Content/Analysis/Analysis';
import  AreaMana from '../../Content/AreaMana/AreaMana';
import  InputData from '../../Content/InputData/InputData';
import  ListData from '../../Content/ListData/ListData';
import  LookUp from '../../Content/LookUp/LookUp';
import  News from '../../Content/News/News';

export default function NewEst() {
    return (
        <div className='nes'>
            <SideBar/>
            <Routes>
                <Route path='/Home/AccessManagement' element={<AccessMana/>}/>
                <Route path='/Home/Analysis' element={<Analysis/>}/>
                <Route path='/Home/AreaManagement' element={<AreaMana/>}/>
                <Route path='/Home/InputData' element={<InputData/>}/>
                <Route path='/Home/ListData' element={<ListData/>}/>
                <Route path='/Home/LookUp' element={<LookUp/>}/>
                <Route path='/Home/News' element={<News/>}/>
            </Routes>
                
        </div>
    )
}



