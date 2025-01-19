import React, { useState } from 'react';
import { Box } from '@mui/material';
import "../assets/css/vars.css"
import "../assets/css/fillData.css"
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import HeaderComponent from './HeaderComponent';


import jothidamImage from "../assets/fillData/jothidam.jpg";
import ffCopyImage from "../assets/fillData/ff-copy.png";
import rectangleImage from "../assets/fillData/rectangle-50.svg";

// import image1950026 from "../assets/fillData/1950026.png";
import rectagle_1 from "../assets/fillData/rectangle-10.svg";
import vector_1 from "../assets/fillData/vector-10.svg";
import untitled_1 from "../assets/fillData/2cc87b5fad166944e192b2b04dee9a34.png";
import ganesha from "../assets/fillData/ganesha.png";
import pillaiyar_suli from "../assets/fillData/5e08fb3676f1c66803b4d235_pillaiyar_suli-2873035222.png";
import vector_11 from "../assets/fillData/vector-11.svg";
import vector_21 from "../assets/fillData/vector-21.svg";
import vector_31 from "../assets/fillData/vector-31.svg";
import vector_41 from "../assets/fillData/vector-41.svg";
import vector_51 from "../assets/fillData/vector-51.svg";
import vector_61 from "../assets/fillData/vector-61.svg";
import vector_71 from "../assets/fillData/vector-71.svg";
import vector_81 from "../assets/fillData/vector-81.svg";
import vector_91 from "../assets/fillData/vector-91.svg";
import vector_101 from "../assets/fillData/vector-101.svg";
import vector_111 from "../assets/fillData/vector-111.svg";
import vector_121 from "../assets/fillData/vector-121.svg";
import vector_131 from "../assets/fillData/vector-131.svg";
import vector_141 from "../assets/fillData/vector-141.svg";
import vector_151 from "../assets/fillData/vector-151.svg";
import vector_161 from "../assets/fillData/vector-161.svg";
import vector_171 from "../assets/fillData/vector-171.svg";
import vector_181 from "../assets/fillData/vector-181.svg";
import vector_191 from "../assets/fillData/vector-191.svg";
import vector_201 from "../assets/fillData/vector-201.svg";
import vector_211 from "../assets/fillData/vector-211.svg";
import vector_221 from "../assets/fillData/vector-221.svg";
import vector_231 from "../assets/fillData/vector-231.svg";
import vector_241 from "../assets/fillData/vector-241.svg";
import vector_251 from "../assets/fillData/vector-251.svg";
import vector_261 from "../assets/fillData/vector-261.svg";
import vector_271 from "../assets/fillData/vector-271.svg";
import vector_281 from "../assets/fillData/vector-281.svg";
import vector_291 from "../assets/fillData/vector-291.svg";
import vector_301 from "../assets/fillData/vector-301.svg";
import vector_311 from "../assets/fillData/vector-311.svg";
import vector_321 from "../assets/fillData/vector-321.svg";
import vector_331 from "../assets/fillData/vector-331.svg";
import vector_341 from "../assets/fillData/vector-341.svg";
import vector_351 from "../assets/fillData/vector-351.svg";
import vector_361 from "../assets/fillData/vector-361.svg";
import vector_371 from "../assets/fillData/vector-371.svg";
import vector_381 from "../assets/fillData/vector-381.svg";
import vector_391 from "../assets/fillData/vector-391.svg";
import vector_401 from "../assets/fillData/vector-401.svg";
import vector_411 from "../assets/fillData/vector-411.svg";
import vector_421 from "../assets/fillData/vector-421.svg";
import vector_431 from "../assets/fillData/vector-431.svg";
import vector_441 from "../assets/fillData/vector-441.svg";
import vector_451 from "../assets/fillData/vector-451.svg";
import vector_461 from "../assets/fillData/vector-461.svg";
import vector_471 from "../assets/fillData/vector-471.svg";
import vector_481 from "../assets/fillData/vector-481.svg";
import vector_491 from "../assets/fillData/vector-491.svg";
import image1950026 from "../assets/fillData/1950026.png";
import image7f231f5f from "../assets/fillData/7f231f5f63977976f1dfa0d94a92c1cd.png";
import image1541664 from "../assets/fillData/1541664.png";
import vector500 from "../assets/fillData/vector-500.svg";
import vector510 from "../assets/fillData/vector-510.svg";
import vector520 from "../assets/fillData/vector-520.svg";
import vector530 from "../assets/fillData/vector-530.svg";
import vector540 from "../assets/fillData/vector-540.svg";
import vector550 from "../assets/fillData/vector-550.svg";
import vector560 from "../assets/fillData/vector-560.svg";
import vector570 from "../assets/fillData/vector-570.svg";
import vector580 from "../assets/fillData/vector-580.svg";
import vector590 from "../assets/fillData/vector-590.svg";
import vector600 from "../assets/fillData/vector-600.svg";
import vector610 from "../assets/fillData/vector-610.svg";
import vector620 from "../assets/fillData/vector-620.svg";
import vector630 from "../assets/fillData/vector-630.svg";
import vector640 from "../assets/fillData/vector-640.svg";
import vector650 from "../assets/fillData/vector-650.svg";
import image84f7be2f from "../assets/fillData/84f7be2f8db3f93c483d1a65a755025a.png";
import { useNavigate } from 'react-router-dom';

function DownloadDataComponent({ data }) {
    localStorage.setItem('formData', JSON.stringify(data));
    const [loading, setLoading] = useState(false); // State to track loading status
    const navigate = useNavigate();

    const imagePath = data.profileImage; // Your image path stored separately
    const handlePrint = async () => {
        const element = document.getElementById('content-to-print'); // ID of the div to print

        setLoading(true); // Set loading to true when the download starts
        try {
            // Adjust canvas size and scale for larger content
            const canvas = await html2canvas(element, {
                scale: 2, // Increase scale for higher resolution
                useCORS: true, // Allow cross-origin content
                width: element.scrollWidth, // Set canvas width to match element width
                height: element.scrollHeight, // Set canvas height to match element height
            });

            // Convert canvas to image data
            const imgData = canvas.toDataURL('image/jpeg', 0.9);

            // Create a PDF
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();

            // Add image to PDF and ensure it fits the page
            pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, (canvas.height / canvas.width) * pdfWidth);

            // Save the PDF
            pdf.save('matrimony_details.pdf');
        } catch (error) {
            console.error('Error generating PDF:', error);
        } finally {
            setLoading(false); // Set loading to false after download is complete
        }
    };
    const handleBack = ()=>{
        navigate('/getDataFilled');
        // window.location('/')
        // window.href('/')
    }




    return (
        <>
            <HeaderComponent /><br />
            <Box className="container" style={{ maxWidth: '81%' }}>
                <Box className="row">
                    <Box className="col-md">
                        <div
                            className="a-4-1"
                            id="content-to-print"
                            style={{
                                padding: '20px',
                                margin: '0 auto',
                                width: '100%', // Ensure it spans full width
                                maxWidth: '900px', // Adjust content max width
                                border: '1px solid #ddd',
                                background: '#fff',
                            }}
                        >
                            <div className="frame-1">
                                <img className="rectangle-1" src={rectagle_1} />
                                <img className="untitled-1-jkj-1" src={untitled_1} />
                                <img className="vector-1" src={vector_1} />
                                <img className="vector-2" src={vector_11} />
                                <img className="vector-3" src={vector_21} />
                                <img className="vector-4" src={vector_31} />
                                <img className="vector-5" src={vector_41} />
                                <img className="vector-6" src={vector_51} />
                                <img className="vector-7" src={vector_61} />
                                <img className="vector-8" src={vector_71} />
                                <img className="vector-9" src={vector_81} />
                                <img className="vector-10" src={vector_91} />
                                <img className="vector-11" src={vector_101} />
                                <img className="vector-12" src={vector_111} />
                                <img className="vector-13" src={vector_121} />
                                <img className="vector-14" src={vector_131} />
                                <img className="vector-15" src={vector_141} />
                                <img className="vector-16" src={vector_151} />
                                <img className="vector-17" src={vector_161} />
                                <img className="vector-18" src={vector_171} />
                                <img className="vector-19" src={vector_181} />
                                <img className="vector-20" src={vector_191} />
                                <img className="vector-21" src={vector_201} />
                                <img className="vector-22" src={vector_211} />
                                <img className="vector-23" src={vector_221} />
                                <img className="vector-24" src={vector_231} />
                                <img className="vector-25" src={vector_241} />
                                <img className="vector-26" src={vector_251} />
                                <img className="vector-27" src={vector_261} />
                                <img className="vector-28" src={vector_271} />
                                <img className="vector-29" src={vector_281} />
                                <img className="vector-30" src={vector_291} />
                                <img className="vector-31" src={vector_301} />
                                <img className="vector-32" src={vector_311} />
                                <img className="vector-33" src={vector_321} />
                                <img className="vector-34" src={vector_331} />
                                <img className="vector-35" src={vector_341} />
                                <img className="vector-36" src={vector_351} />
                                <img className="vector-37" src={vector_361} />
                                <img className="vector-38" src={vector_371} />
                                <img className="vector-39" src={vector_381} />
                                <img className="vector-40" src={vector_391} />
                                <img className="vector-41" src={vector_401} />
                                <img className="vector-42" src={vector_411} />
                                <img className="vector-43" src={vector_421} />
                                <img className="vector-44" src={vector_431} />
                                <img className="vector-45" src={vector_441} />
                                <img className="vector-46" src={vector_451} />
                                <img className="vector-47" src={vector_461} />
                                <img className="vector-48" src={vector_471} />
                                <img className="vector-49" src={vector_481} />
                                <img className="vector-50" src={vector_491} />
                                <img className="layer-1-1" src={ganesha} />
                                <img className="_5-e-08-fb-3676-f-1-c-66803-b-4-d-235-pillaiyar-suli-2873035222-1"
                                    src={pillaiyar_suli} />
                                <img className="_1950026-2" src={image1950026} />
                                <img className="_1950026-1" src={image1950026} />
                                <img className="_1950026-4" src={image1950026} />
                                <img className="_7-f-231-f-5-f-63977976-f-1-dfa-0-d-94-a-92-c-1-cd-1" src={image7f231f5f} />
                                <div className="div">
                                    ஸ்ரீ ஹயக்ரீவா
                                    <br />
                                </div>
                                <div className="div2">
                                    திருமண தகவல் மையம்
                                    <br />
                                </div>
                                <div className="div3">
                                    அனைத்து சமூகத்தினருக்கும்
                                    <br />
                                </div>
                                <div className="_92-44-222-220">
                                    <br />
                                </div>
                                <div className="shmm-f-5007">
                                    பதிவு எண்: {data.reg_num}
                                    <br />
                                </div>
                                <div className="_07-10-2024">
                                    தேதி: {data.reg_date}
                                    <br />
                                </div>
                                <div className="div4">
                                    ~ சுபம் ~
                                </div>
                                <div className="tn-11-2016">
                                    <span>
                                        <span className="tn-11-2016-span">அரசு பதிவு எண்:</span>
                                        <span className="tn-11-2016-span2">TN-11/2016</span>
                                    </span>
                                </div>
                                <div className="srihayagirivamatrimony-gmail-com">
                                    srihayagirivamatrimony@gmail.com

                                </div>

                                <div className="_2-a">2A, நேதாஜி ரோடு, மஞ்சக்குப்பம், கடலூர்</div>
                                <img className="untitled-1-jothidam-1" src={jothidamImage} />
                                <img className="_1950026-5" src={image1950026} />
                                <img className="_1541664-1" src={image1541664} />
                                <img className="vector-50" src={vector500} />
                                <img className="vector-51" src={vector510} />
                                <img className="vector-522" src={vector520} />
                                <img className="vector-53" src={vector530} />
                                <img className="vector-54" src={vector540} />
                                <img className="vector-55" src={vector550} />
                                <img className="vector-56" src={vector560} />
                                <img className="vector-57" src={vector570} />
                                <img className="vector-58" src={vector580} />
                                <img className="vector-59" src={vector590} />
                                <img className="vector-60" src={vector600} />
                                <img className="vector-61" src={vector610} />
                                <img className="vector-622" src={vector620} />
                                <img className="vector-63" src={vector630} />
                                <img className="vector-64" src={vector640} />
                                <img className="vector-65" src={vector650} />
                                <img className="_84-f-7-be-2-f-8-db-3-f-93-c-483-d-1-a-65-a-755025-a-1" src={image84f7be2f} />
                                <img
                                    src={imagePath} // Dynamically set the image source
                                    alt="background"
                                    style={{
                                        borderRadius: '19px',
                                        width: '190px',
                                        height: '300px',
                                        position: 'absolute',
                                        left: '400px',
                                        top: '259px',
                                    }}
                                />
                                <div className='raasi'>
                                    <div class="outer-rect"></div>
                                    <div class="first"></div>
                                    <div class="center"></div>
                                    <div class="top"></div>
                                    <div class="bottom"></div>
                                    <div class="middle"></div>
                                    <div class="last"></div>
                                    <div class="inner-rect"></div>
                                    <div class="sdfnv-msd-mds">{data.raasi.k1}</div>
                                    <div class="sdfnv-msd-mds2">{data.raasi.k2}</div>
                                    <div class="sdfnv-msd-mds3">{data.raasi.k3}</div>
                                    <div class="sdfnv-msd-mds4">{data.raasi.k4}</div>
                                    <div class="sdfnv-msd-mds5">{data.raasi.k6}</div>
                                    <div class="sdfnv-msd-mds6">{data.raasi.k8}</div>
                                    <div class="sdfnv-msd-mds7">{data.raasi.k12}</div>
                                    <div class="sdfnv-msd-mds8">{data.raasi.k11}</div>
                                    <div class="sdfnv-msd-mds9">{data.raasi.k10}</div>
                                    <div class="sdfnv-msd-mds10">{data.raasi.k9}</div>
                                    <div class="sdfnv-msd-mds11">{data.raasi.k7}</div>
                                    <div class="sdfnv-msd-mds12">{data.raasi.k5}</div>
                                    <div className="div5">இராசி </div>
                                    <img className="ff-copy-1" src={ffCopyImage} />
                                </div>
                                <div className='amsam'>
                                    <div class="outer-rect"></div>
                                    <div class="first"></div>
                                    <div class="center"></div>
                                    <div class="top"></div>
                                    <div class="bottom"></div>
                                    <div class="middle"></div>
                                    <div class="last"></div>
                                    <div class="inner-rect"></div>
                                    <div class="sdfnv-msd-mds">{data.amsam.k1}</div>
                                    <div class="sdfnv-msd-mds2">{data.amsam.k2}</div>
                                    <div class="sdfnv-msd-mds3">{data.amsam.k3}</div>
                                    <div class="sdfnv-msd-mds4">{data.amsam.k4}</div>
                                    <div class="sdfnv-msd-mds5">{data.amsam.k6}</div>
                                    <div class="sdfnv-msd-mds6">{data.amsam.k8}</div>
                                    <div class="sdfnv-msd-mds7">{data.amsam.k12}</div>
                                    <div class="sdfnv-msd-mds8">{data.amsam.k11}</div>
                                    <div class="sdfnv-msd-mds9">{data.amsam.k10}</div>
                                    <div class="sdfnv-msd-mds10">{data.amsam.k9}</div>
                                    <div class="sdfnv-msd-mds11">{data.amsam.k7}</div>
                                    <div class="sdfnv-msd-mds12">{data.amsam.k5}</div>
                                </div>
                                <div className="div6">அம்சம்</div>
                                <img className="ff-copy-2" src={ffCopyImage} />
                                <img className="rectangle-5" src={rectangleImage} />

                                <div className="div7">இனம்: {data.caste}</div>
                                <div className='new'>
                                    <table>
                                        <tr>
                                            <th>பெயர்: </th>
                                            <td style={{ color: "green", fontSize: 12 + 'px', fontWeight: 'bolder' }}>{data.name || "<name>"}</td>
                                        </tr>
                                        <tr>
                                            <th>படிப்ப: </th>
                                            <td>{data.education || "<degree>"}</td>
                                        </tr>
                                        <tr>
                                            <th>வேலை: </th>
                                            <td>{data.job || "<job>"}</td>
                                        </tr>
                                        <tr>
                                            <th>சம்பளம்: </th>
                                            <td>{data.salary || "<salary>"}</td>
                                        </tr><tr>
                                            <th>உயரம்: <span>{data.height || "<height>"}</span></th>
                                            <th>நிறம்:  <span>{data.skin_color || "<color>"}</span></th>
                                            <th>பிறப்பு :  <span>{data.birth || "<birth>"}</span></th>
                                        </tr><tr>
                                            <th>தந்தை பெயர்: </th>
                                            <td style={{ color: "red", fontSize: 11 + 'px', fontWeight: 'bolder' }}>{data.father_name || "<father_name>"}</td>
                                        </tr><tr>
                                            <th>தாயார் பெயர்: </th>
                                            <td style={{ color: "red", fontSize: 11 + 'px', fontWeight: 'bolder' }}>{data.mother_name || "<mother_name>"}</td>
                                        </tr>
                                        <tr>
                                            <th>உடன் பிறப்பு:  </th>
                                            <td>{data.siblings || "<sibligns>"}</td>
                                        </tr><tr>
                                            <th>சொத்து விபரம்: </th>
                                            <td>{data.property_details || "<property_details>"}</td>
                                        </tr>
                                        <tr>
                                            <th>முகவரி: </th>
                                            <td>{data.address || "<address>"}</td>
                                        </tr>
                                        <tr>
                                            <th>சொந்த ஊர்: </th>
                                            <td>{data.native || "<native>"}</td>
                                        </tr>
                                        <tr>
                                            <th>பிறந்த  தேதி: <span>{data.dob || "<dob>"}</span></th>
                                            <td>பிறந்த நேரம்: <span>{data.dot || "<dot>"}</span></td>
                                        </tr>
                                        <tr>
                                            <th>நட்சத்திரம்: <span>{data.nakshatra || "<nakshatra>"}</span></th>
                                            <th>ராசி: <span>{data.rasi || "<rasi>"}</span></th>
                                            <th>லக்னம் : <span>{data.lagnam || "<lagnam>"}</span></th>
                                        </tr>
                                        <tr>
                                            <th>திசை இருப்பு: </th>
                                            <td>{data.dt || "<dt>"}</td>
                                        </tr>
                                        <tr>
                                            <th>எதிர்பார்ப்பு: </th>
                                            <td style={{ color: "red", fontSize: 12 + 'px', fontWeight: 'bolder' }}>{data.expectation || "<expectation>"}</td>
                                        </tr>
                                        <tr>
                                            <th>செல்: </th>
                                            <td>{data.phone_number || "<phone_number>"}</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </Box>
                    <Box className="col-md">
                   
                        <button type="button" className='btn btn-primary fw-bold btn-lg' onClick={handleBack}>Back</button> &nbsp;
                        &nbsp;&nbsp;&nbsp;
                        <button
                            onClick={handlePrint}
                            style={{
                                marginTop: '20px',
                                padding: '10px 20px',
                                backgroundColor: '#4CAF50',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}
                            disabled={loading} // Disable the button while loading
                        >
                            {loading ? "Generating..." : "Download PDF"}
                        </button>
                        {/* Show loading spinner */}
                        {loading && (
                            <div style={{ marginTop: '10px', textAlign: 'center' }}>
                                <div
                                    className="spinner"
                                    style={{
                                        border: '4px solid #f3f3f3',
                                        borderTop: '4px solid #3498db',
                                        borderRadius: '50%',
                                        width: '30px',
                                        height: '30px',
                                        animation: 'spin 1s linear infinite',
                                    }}
                                ></div>
                                <p style={{ marginTop: '10px' }}>Please wait, generating your PDF...</p>
                            </div>

                        )}
                    </Box>
                </Box>
            </Box>
            <br />
        </>
    )
}

export default DownloadDataComponent






