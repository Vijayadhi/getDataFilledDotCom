import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Grid } from '@mui/material';
import PrintDataComponent from './PrintDataComponent';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/fill.css';

import HeaderComponent from './HeaderComponent';

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



function FillDataComponent({ formData, setFormData }) {
    const [imagePreview, setImagePreview] = useState(null);


    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Generate the absolute URL for the image
            const absoluteUrl = URL.createObjectURL(file);

            // Set the preview image and update the form data
            setImagePreview(absoluteUrl); // Preview the image
            setFormData((prevData) => ({
                ...prevData,
                profileImage: absoluteUrl, // Save the absolute URL in formData
            }));
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleRaasiKattamChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            raasi: {
                ...formData.raasi,
                [name]: value
            }
        });
    };

    const handleAmsamKattamChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            amsam: {
                ...formData.amsam,
                [name]: value
            }
        });
    };

    const [selectedRasi, setSelectedRasi] = useState("");
    const [nakshatras, setNakshatras] = useState([]);

    const handleRasiChange = (e) => {
        const rasi = e.target.value;
        formData.rasi = rasi;
        setSelectedRasi(rasi);
        setNakshatras(rasiNakshatraData[rasi] || []);
    };

    const handleNakshatraChange = (e) => {
        const nakshatra = e.target.value;
        formData.nakshatra = nakshatra;
    };
    const navigate = useNavigate()


    const handleDownlaod = () => {

        // window.print()
        // navigate('/download_data')
        // const blob = new Blob([JSON.stringify(formData, null, 2)], { type: 'application/json' });
        // saveAs(blob, 'formData.json');
        // console.log("button");


    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleDownlaod();
    }

    return (
        <>
            <HeaderComponent />
            <br />
            <section>
                <form>
                    <Box className="container">
                        <Box className="row">
                            <Box className="col-md">
                                <TextField fullWidth label="பதிவு எண்" name="reg_num" margin="normal" onChange={handleInputChange} value={formData.reg_num} />
                                <TextField fullWidth label="பெயர்" name="name" margin="normal" onChange={handleInputChange} value={formData.name} />

                                <TextField fullWidth label="சம்பளம்" name="salary" type="number" margin="normal" onChange={handleInputChange} />
                                <TextField fullWidth label="உயரம்" name="height" margin="normal" onChange={handleInputChange} />
                                <hr />
                                <TextField fullWidth label="தந்தை பெயர்" name="father_name" margin="normal" onChange={handleInputChange} />
                                <TextField fullWidth label="தந்தை வேலை" name="father_job" margin="normal" onChange={handleInputChange} />

                                <TextField fullWidth label="முகவரி" name="address" multiline rows={4} margin="normal" onChange={handleInputChange} />
                                <br/><br/>
                                <hr />
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


                                <TextField fullWidth label="திசை இருப்பு" name="dt" margin="normal" onChange={handleInputChange} />
                                <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><hr/>
                                <div class="custom-grid">
                                    <div class="custom-cell">
                                        <input type="text" placeholder="" name="k1"
                                            onChange={handleRaasiKattamChange} />
                                    </div>
                                    <div class="custom-cell">
                                        <input type="text" placeholder=" " name='k2' onChange={handleRaasiKattamChange} />
                                    </div>
                                    <div class="custom-cell">
                                        <input type="text" placeholder=" " name='k3' onChange={handleRaasiKattamChange} />
                                    </div>
                                    <div class="custom-cell">
                                        <input type="text" placeholder=" " name='k4' onChange={handleRaasiKattamChange} />
                                    </div>
                                    <div class="custom-cell">
                                        <input type="text" placeholder=" " name='k5' onChange={handleRaasiKattamChange} />
                                    </div>
                                    <div class="custom-cell no-border">
                                        <h3>raasi</h3>
                                        {/* <!-- Center boxes without input fields --> */}
                                    </div>
                                    <div class="custom-cell no-border">
                                        {/* <!-- Center boxes without input fields --> */}

                                    </div>
                                    <div class="custom-cell">
                                        <input type="text" placeholder=" " name='k6' onChange={handleRaasiKattamChange} />
                                    </div>
                                    <div class="custom-cell">
                                        <input type="text" placeholder=" " name='k7' onChange={handleRaasiKattamChange} />
                                    </div>
                                    <div class="custom-cell no-border">

                                        {/* <!-- Center boxes without input fields --> */}
                                    </div>
                                    <div class="custom-cell no-border">

                                        {/* <!-- Center boxes without input fields --> */}
                                    </div>
                                    <div class="custom-cell">
                                        <input type="text" placeholder="" name='k8' onChange={handleRaasiKattamChange} />
                                    </div>
                                    <div class="custom-cell">
                                        <input type="text" placeholder="" name='k9' onChange={handleRaasiKattamChange} />
                                    </div>
                                    <div class="custom-cell">
                                        <input type="text" placeholder="" name='k10' onChange={handleRaasiKattamChange} />
                                    </div>
                                    <div class="custom-cell">
                                        <input type="text" placeholder="" name='k11' onChange={handleRaasiKattamChange} />
                                    </div>
                                    <div class="custom-cell">
                                        <input type="text" placeholder="" name='k12' onChange={handleRaasiKattamChange} />
                                    </div>
                                </div><br /><br />
                                


                                {/* </Box> */}
                            </Box>
                            <Box className="col-md">
                                <TextField fullWidth label="தேதி" name="reg_date" type="date" InputLabelProps={{ shrink: true }} margin="normal" value={formData.reg_date}
                                    onChange={handleInputChange} />
                                <TextField fullWidth label="இனம்" name="caste" margin="normal" onChange={handleInputChange} value={formData.caste} />
                                <TextField fullWidth label="வேலை" name="job" margin="normal" onChange={handleInputChange} />

                                <TextField fullWidth label="நிறம்" name="skin_color" margin="normal" onChange={handleInputChange} />
                                <hr />


                                <TextField fullWidth label="தாயர் பெயர்" name="mother_name" margin="normal" onChange={handleInputChange} />
                                <TextField fullWidth label="தாயர் வேலை" name="mother_job" margin="normal" onChange={handleInputChange} />
                                <TextField fullWidth label="சொத்து விபரம்" name="property_details" margin="normal" onChange={handleInputChange} />
                                <TextField fullWidth label="உடன் பிறப்பு" name="siblings" margin="normal" onChange={handleInputChange} />

{/* <br/><br/><br/><br/> */}
                                <br/><br/><hr />
                                <TextField
                                    fullWidth
                                    select
                                    label="நட்சத்திரம்"
                                    margin="normal"
                                    onChange={handleNakshatraChange}
                                    name="nakshatra "

                                >
                                    <MenuItem value="">நட்சத்திரம் தேர்ந்தெடுக்கவும்</MenuItem>
                                    {nakshatras.map((nakshatra, index) => (
                                        <MenuItem key={index} value={nakshatra}>
                                            {nakshatra}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <br/>   <br/>
                                <label>புகைப்படம்:</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                />
                                <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/>
                                <hr/>

                                <div class="custom-grid">
                                    <div class="custom-cell">
                                        <input type="text" placeholder="" name="k1"
                                            onChange={handleAmsamKattamChange} />
                                    </div>
                                    <div class="custom-cell">
                                        <input type="text" placeholder="" name='k2' onChange={handleAmsamKattamChange} />
                                    </div>
                                    <div class="custom-cell">
                                        <input type="text" placeholder="" name='k3' onChange={handleAmsamKattamChange} />
                                    </div>
                                    <div class="custom-cell">
                                        <input type="text" placeholder="" name='k4' onChange={handleAmsamKattamChange} />
                                    </div>
                                    <div class="custom-cell">
                                        <input type="text" placeholder="" name='k5' onChange={handleAmsamKattamChange} />
                                    </div>
                                    <div class="custom-cell no-border">
                                        <h3>amsam</h3>
                                        {/* <!-- Center boxes without input fields --> */}
                                    </div>
                                    <div class="custom-cell no-border">
                                        {/* <!-- Center boxes without input fields --> */}

                                    </div>
                                    <div class="custom-cell">
                                        <input type="text" placeholder="" name='k6' onChange={handleAmsamKattamChange} />
                                    </div>
                                    <div class="custom-cell">
                                        <input type="text" placeholder="" name='k7' onChange={handleAmsamKattamChange} />
                                    </div>
                                    <div class="custom-cell no-border">

                                        {/* <!-- Center boxes without input fields --> */}
                                    </div>
                                    <div class="custom-cell no-border">

                                        {/* <!-- Center boxes without input fields --> */}
                                    </div>
                                    <div class="custom-cell">
                                        <input type="text" placeholder="" name='k8' onChange={handleAmsamKattamChange} />
                                    </div>
                                    <div class="custom-cell">
                                        <input type="text" placeholder="" name='k9' onChange={handleAmsamKattamChange} />
                                    </div>
                                    <div class="custom-cell">
                                        <input type="text" placeholder="" name='k10' onChange={handleAmsamKattamChange} />
                                    </div>
                                    <div class="custom-cell">
                                        <input type="text" placeholder="" name='k11' onChange={handleAmsamKattamChange} />
                                    </div>
                                    <div class="custom-cell">
                                        <input type="text" placeholder="" name='k12' onChange={handleAmsamKattamChange} />
                                    </div>
                                </div>
                                <br />
                            </Box>
                            <Box className="col-md">
                                <br />
                                <br />
                                <br />
                                {/* <br /> */}
                                <TextField fullWidth label="படிப்பு" name="education" margin="normal" onChange={handleInputChange} />
                                <TextField fullWidth label="பிறப்பு" name="birth" margin="normal" onChange={handleInputChange} />
                                <TextField fullWidth label="செல்" name="phone_number" margin="normal" onChange={handleInputChange} />
                                <hr/>
                                <TextField fullWidth label="எதிர்பார்ப்பு  "name="expectation" margin="normal" onChange={handleInputChange} />

                                <TextField fullWidth label="சொந்த ஊர் " name="native" margin="normal" onChange={handleInputChange} />
                                <TextField fullWidth label="பிறந்த தேதி" name="dob" type="date" InputLabelProps={{ shrink: true }} margin="normal" onChange={handleInputChange} />

                                <TextField fullWidth label="பிறந்த நேரம்" name="dot" type="time" InputLabelProps={{ shrink: true }} margin="normal" onChange={handleInputChange} />


                                <br />
                                <br />

                                <hr />
                                {/* <br /> */}
                                {/* <br /> */}
                                {/* <br />

                                <br />
                                <br /> */}
{/* 
                                <br />
                                <br />
                                <br /> */}

                                <TextField fullWidth label="லக்னம்" name="lagnam" margin="normal" onChange={handleInputChange} />
                                <br/>   <br/>
                                <p>புகைப்படத்தின் முன்னோட்டம்:</p>
                                {imagePreview && (
                                    <div>
                                        
                                        <img
                                            src={imagePreview}
                                            alt="Uploaded Preview"
                                            style={{ width: "200px", height: "200px", objectFit: "cover" }}
                                        />
                                    </div>
                                )}  <br/><hr/><br/> <br/><br/> 
                               
                                <button type="reset" className='btn btn-warning fw-bold btn-lg'>reset</button>&nbsp;
                                <Link type="submit" className='btn fw-bold btn-lg' to='/download_data'>Print Preview</Link><br /><br />

                                {/* <div className='preview'>
                                    <PrintDataComponent data={formData} />
                                </div> */}
                            </Box>
                        </Box>
                    </Box>
                </form>
            </section>
        </>
    );
}

export default FillDataComponent;
