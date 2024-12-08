import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import PrintDataComponent from './PrintDataComponent';

import './fill.css';

const rasiNakshatraData = {
    "மேஷம்": ["அசுவினி", "பரணி", "கிருத்திகை (1-ஆம் பாதம்)"],
    "ரிஷபம்": ["கிருத்திகை (2-ஆம் பாதம்)", "ரோகிணி", "மிருகசிரீஷம் (2-ஆம் பாதம்)"],
    "மிதுனம்": ["மிருகசிரீஷம் (3-ஆம் பாதம்)", "திருவாதிரை", "புனர்பூசம் (3-ஆம் பாதம்)"],
    "கடகம்": ["புனர்பூசம் (4-ஆம் பாதம்)", "பூசம்", "ஆயில்யம்"],
    "சிம்மம்": ["மகம்", "பூரம்", "உத்திரம் (1-ஆம் பாதம்)"],
    "கன்னி": ["உத்திரம் (2-ஆம் பாதம்)", "அஸ்தம்", "சித்திரை (2-ஆம் பாதம்)"],
    "துலாம்": ["சித்திரை (3-ஆம் பாதம்)", "சுவாதி", "விசாகம் (3-ஆம் பாதம்)"],
    "விருச்சிகம்": ["விசாகம் (4-ஆம் பாதம்)", "அனுஷம்", "கேட்டை"],
    "தனுசு": ["முலம்", "பூராடம்", "உத்திராடம் (1-ஆம் பாதம்)"],
    "மகரம்": ["உத்திராடம் (2-ஆம் பாதம்)", "திருவோணம்", "அவிட்டம் (2-ஆம் பாதம்)"],
    "கும்பம்": ["அவிட்டம் (3-ஆம் பாதம்)", "சதயம்", "பூரட்டாதி (3-ஆம் பாதம்)"],
    "மீனம்": ["பூரட்டாதி (4-ஆம் பாதம்)", "உத்திரட்டாதி", "ரேவதி"]
};



function FillDataComponent() {
    const [formData, setFormData] = useState({
        reg_num: '',
        name: '',
        job: '',
        father_name: '',
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
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const [selectedRasi, setSelectedRasi] = useState("");
    const [nakshatras, setNakshatras] = useState([]);

    const handleRasiChange = (e) => {
        const rasi = e.target.value;
        setSelectedRasi(rasi);
        setNakshatras(rasiNakshatraData[rasi] || []);
    };

    return (
        <>
            <header>
                <p>getDataFilledDotCom</p>
                <div className='topBar'>
                    <a href=''>Home</a>
                    <a href=''>Contact Us</a>
                    <a href=''>Logout</a>
                </div>
            </header>
            <br />
            <section>
                <form>
                    <Box className="container">
                        <Box className="row">
                            <Box className="col-md">
                                <TextField fullWidth label="பதிவு எண்" name="reg_num" margin="normal" />
                                <TextField fullWidth label="பெயர்" name="name" margin="normal" />
                                <TextField fullWidth label="வேலை" name="job" margin="normal" />
                                <TextField fullWidth label="தந்தை பெயர்" name="father_name" margin="normal" />
                                <TextField fullWidth label="உடன் பிறப்பு" name="siblings" margin="normal" />
                                <TextField fullWidth label="முகவரி" name="address" multiline rows={4} margin="normal" />
                                <TextField fullWidth label="பிறந்த தேதி" name="dob" type="date" InputLabelProps={{ shrink: true }} margin="normal" />
                                <TextField
                                    fullWidth
                                    select
                                    label="ராசி"
                                    value={selectedRasi}
                                    onChange={handleRasiChange}
                                    margin="normal"
                                >
                                    <MenuItem value="">ராசி தேர்ந்தெடுக்கவும்</MenuItem>
                                    {Object.keys(rasiNakshatraData).map((rasi) => (
                                        <MenuItem key={rasi} value={rasi}>
                                            {rasi}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Box>
                            <Box className="col-md">
                                <TextField fullWidth label="தேதி" name="reg_date" type="date" InputLabelProps={{ shrink: true }} margin="normal" value={formData.reg_date}
                                    onChange={handleInputChange} />
                                <TextField fullWidth label="படிப்பு" name="education" margin="normal" />
                                <TextField fullWidth label="சம்பளம்" name="salary" type="number" margin="normal" />
                                <TextField fullWidth label="தாயர் பெயர்" name="mother_name" margin="normal" />
                                <TextField fullWidth label="சொத்து விபரம்" name="property_details" margin="normal" />
                                <TextField fullWidth label="உயரம்" name="height" margin="normal" />
                                <TextField fullWidth label="நிறம்" name="peer_color" margin="normal" />
                                <TextField fullWidth label="பிறந்த நேரம்" name="dot" type="time" InputLabelProps={{ shrink: true }} margin="normal" />
                                <TextField
                                    fullWidth
                                    select
                                    label="நட்சத்திரம்"
                                    margin="normal"
                                >
                                    <MenuItem value="">நட்சத்திரம் தேர்ந்தெடுக்கவும்</MenuItem>
                                    {nakshatras.map((nakshatra, index) => (
                                        <MenuItem key={index} value={nakshatra}>
                                            {nakshatra}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Box>
                            <Box className="col-md">
                                <div className='preview'>
                                    <PrintDataComponent data={formData} />
                                </div>
                            </Box>
                        </Box>
                    </Box>
                </form>
            </section>
        </>
    );
}

export default FillDataComponent;
