import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoutesConfig from './Routes/RoutesCongfig';


function App() {
  const [formData, setFormData] = useState({
    reg_num: '',
    name: '',
    job: '',
    father_name: '',
    phone_number: '',
    siblings: '',
    address: '',
    dob: '',
    rasi: '',
    nakshatra: '',
    reg_date: '',
    education: '',
    salary: '',
    mother_name: '',
    property_details: '',
    height: '',
    skin_color: '',
    dot: '',
    birth: '',
    lagnam: '',
    caste: '',
    birth: '',
    native: '',
    dt: '',
    expectation: '',
    profileImage: '',

    raasi: {
      k1: "",
      k2: "",
      k3: "",
      k4: "",
      k5: "",
      k6: "",

      k7: "",
      k8: "",
      k9: "",
      k10: "",
      k11: "",
      k12: "",
    },
    amsam: {
      k1: "",
      k2: "",
      k3: "",
      k4: "",
      k5: "",
      k6: "",

      k7: "",
      k8: "",
      k9: "",
      k10: "",
      k11: "",
      k12: "",
    }
  });
  const getData = () => {
    const savedData = localStorage.getItem(formData);
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setFormData(parsedData);
    }
  }
  getData()
  return (
    <Router>
      <RoutesConfig formData={formData} setFormData={setFormData} />
    </Router>
  );
}

export default App;
