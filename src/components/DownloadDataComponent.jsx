import React, { useState } from 'react';
import { Box } from '@mui/material';
import "../assets/css/vars.css"
import "../assets/css/fillData.css"
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import HeaderComponent from './HeaderComponent';

function DownloadDataComponent({ data }) {
    localStorage.setItem('formData', JSON.stringify(data));
    const [loading, setLoading] = useState(false); // State to track loading status

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
                                <img className="rectangle-1" src="\src\assets\fillData\rectangle-10.svg" />
                                <img className="untitled-1-jkj-1" src="\src\assets\fillData\2cc87b5fad166944e192b2b04dee9a34.png" />
                                <img className="vector-1" src="\src\assets\fillData\vector-10.svg" />
                                <img className="vector-2" src="\src\assets\fillData\vector-20.svg" />
                                <img className="vector-3" src="\src\assets\fillData\vector-30.svg" />
                                <img className="vector-4" src="\src\assets\fillData\vector-40.svg" />
                                <img className="vector-5" src="\src\assets\fillData\vector-50.svg" />
                                <img className="vector-6" src="\src\assets\fillData\vector-60.svg" />
                                <img className="vector-7" src="\src\assets\fillData\vector-70.svg" />
                                <img className="vector-8" src="\src\assets\fillData\vector-80.svg" />
                                <img className="vector-9" src="\src\assets\fillData\vector-90.svg" />
                                <img className="vector-10" src="\src\assets\fillData\vector-100.svg" />
                                <img className="vector-11" src="\src\assets\fillData\vector-110.svg" />
                                <img className="vector-12" src="\src\assets\fillData\vector-120.svg" />
                                <img className="vector-13" src="\src\assets\fillData\vector-130.svg" />
                                <img className="vector-14" src="\src\assets\fillData\vector-140.svg" />
                                <img className="vector-15" src="\src\assets\fillData\vector-150.svg" />
                                <img className="vector-16" src="\src\assets\fillData\vector-160.svg" />
                                <img className="vector-17" src="\src\assets\fillData\vector-170.svg" />
                                <img className="vector-18" src="\src\assets\fillData\vector-180.svg" />
                                <img className="vector-19" src="\src\assets\fillData\vector-190.svg" />
                                <img className="vector-20" src="\src\assets\fillData\vector-200.svg" />
                                <img className="vector-21" src="\src\assets\fillData\vector-210.svg" />
                                <img className="vector-22" src="\src\assets\fillData\vector-220.svg" />
                                <img className="vector-23" src="\src\assets\fillData\vector-230.svg" />
                                <img className="vector-24" src="\src\assets\fillData\vector-240.svg" />
                                <img className="vector-25" src="\src\assets\fillData\vector-250.svg" />
                                <img className="vector-26" src="\src\assets\fillData\vector-260.svg" />
                                <img className="vector-27" src="\src\assets\fillData\vector-270.svg" />
                                <img className="vector-28" src="\src\assets\fillData\vector-280.svg" />
                                <img className="vector-29" src="\src\assets\fillData\vector-290.svg" />
                                <img className="vector-30" src="\src\assets\fillData\vector-300.svg" />
                                <img className="vector-31" src="\src\assets\fillData\vector-310.svg" />
                                <img className="vector-32" src="\src\assets\fillData\vector-320.svg" />
                                <img className="vector-33" src="\src\assets\fillData\vector-330.svg" />
                                <img className="vector-34" src="\src\assets\fillData\vector-340.svg" />
                                <img className="vector-35" src="\src\assets\fillData\vector-350.svg" />
                                <img className="vector-36" src="\src\assets\fillData\vector-360.svg" />
                                <img className="vector-37" src="\src\assets\fillData\vector-370.svg" />
                                <img className="vector-38" src="\src\assets\fillData\vector-380.svg" />
                                <img className="vector-39" src="\src\assets\fillData\vector-390.svg" />
                                <img className="vector-40" src="\src\assets\fillData\vector-400.svg" />
                                <img className="vector-41" src="\src\assets\fillData\vector-410.svg" />
                                <img className="vector-42" src="\src\assets\fillData\vector-420.svg" />
                                <img className="vector-43" src="\src\assets\fillData\vector-430.svg" />
                                <img className="vector-44" src="\src\assets\fillData\vector-440.svg" />
                                <img className="vector-45" src="\src\assets\fillData\vector-450.svg" />
                                <img className="vector-46" src="\src\assets\fillData\vector-460.svg" />
                                <img className="vector-47" src="\src\assets\fillData\vector-470.svg" />
                                <img className="vector-48" src="\src\assets\fillData\vector-480.svg" />
                                <img className="vector-49" src="\src\assets\fillData\vector-490.svg" />
                                <img className="untitled-1-jkj-12" src="\src\assets\fillData\2cc87b5fad166944e192b2b04dee9a34.png" />
                                <img className="vector-110" src="\src\assets\fillData\vector-11.svg" />
                                <img className="vector-210" src="\src\assets\fillData\vector-21.svg" />
                                <img className="vector-310" src="\src\assets\fillData\vector-31.svg" />
                                <img className="vector-410" src="\src\assets\fillData\vector-41.svg" />
                                <img className="vector-52" src="\src\assets\fillData\vector-51.svg" />
                                <img className="vector-62" src="\src\assets\fillData\vector-61.svg" />
                                <img className="vector-72" src="\src\assets\fillData\vector-71.svg" />
                                <img className="vector-82" src="\src\assets\fillData\vector-81.svg" />
                                <img className="vector-92" src="\src\assets\fillData\vector-91.svg" />
                                <img className="vector-102" src="\src\assets\fillData\vector-101.svg" />
                                <img className="vector-112" src="\src\assets\fillData\vector-111.svg" />
                                <img className="vector-122" src="\src\assets\fillData\vector-121.svg" />
                                <img className="vector-132" src="\src\assets\fillData\vector-131.svg" />
                                <img className="vector-142" src="\src\assets\fillData\vector-141.svg" />
                                <img className="vector-152" src="\src\assets\fillData\vector-151.svg" />
                                <img className="vector-162" src="\src\assets\fillData\vector-161.svg" />
                                <img className="vector-172" src="\src\assets\fillData\vector-171.svg" />
                                <img className="vector-182" src="\src\assets\fillData\vector-181.svg" />
                                <img className="vector-192" src="\src\assets\fillData\vector-191.svg" />
                                <img className="vector-202" src="\src\assets\fillData\vector-201.svg" />
                                <img className="vector-212" src="\src\assets\fillData\vector-211.svg" />
                                <img className="vector-222" src="\src\assets\fillData\vector-221.svg" />
                                <img className="vector-232" src="\src\assets\fillData\vector-231.svg" />
                                <img className="vector-242" src="\src\assets\fillData\vector-241.svg" />
                                <img className="vector-252" src="\src\assets\fillData\vector-251.svg" />
                                <img className="vector-262" src="\src\assets\fillData\vector-261.svg" />
                                <img className="vector-272" src="\src\assets\fillData\vector-271.svg" />
                                <img className="vector-282" src="\src\assets\fillData\vector-281.svg" />
                                <img className="vector-292" src="\src\assets\fillData\vector-291.svg" />
                                <img className="vector-302" src="\src\assets\fillData\vector-301.svg" />
                                <img className="vector-312" src="\src\assets\fillData\vector-311.svg" />
                                <img className="vector-322" src="\src\assets\fillData\vector-321.svg" />
                                <img className="vector-332" src="\src\assets\fillData\vector-331.svg" />
                                <img className="vector-342" src="\src\assets\fillData\vector-341.svg" />
                                <img className="vector-352" src="\src\assets\fillData\vector-351.svg" />
                                <img className="vector-362" src="\src\assets\fillData\vector-361.svg" />
                                <img className="vector-372" src="\src\assets\fillData\vector-371.svg" />
                                <img className="vector-382" src="\src\assets\fillData\vector-381.svg" />
                                <img className="vector-392" src="\src\assets\fillData\vector-391.svg" />
                                <img className="vector-402" src="\src\assets\fillData\vector-401.svg" />
                                <img className="vector-412" src="\src\assets\fillData\vector-411.svg" />
                                <img className="vector-422" src="\src\assets\fillData\vector-421.svg" />
                                <img className="vector-432" src="\src\assets\fillData\vector-431.svg" />
                                <img className="vector-442" src="\src\assets\fillData\vector-441.svg" />
                                <img className="vector-452" src="\src\assets\fillData\vector-451.svg" />
                                <img className="vector-462" src="\src\assets\fillData\vector-461.svg" />
                                <img className="vector-472" src="\src\assets\fillData\vector-471.svg" />
                                <img className="vector-482" src="\src\assets\fillData\vector-481.svg" />
                                <img className="vector-492" src="\src\assets\fillData\vector-491.svg" />
                                <img className="layer-1-1" src="\src\assets\fillData\ganesha.png" />
                                <img className="_5-e-08-fb-3676-f-1-c-66803-b-4-d-235-pillaiyar-suli-2873035222-1"
                                    src="\src\assets\fillData\5e08fb3676f1c66803b4d235_pillaiyar_suli-2873035222.png" />
                                <img className="_1950026-2" src="\src\assets\fillData\1950026.png" />
                                <img className="_1950026-1" src="\src\assets\fillData\1950026.png" />
                                <img className="_1950026-4" src="\src\assets\fillData\1950026.png" />
                                <img className="_7-f-231-f-5-f-63977976-f-1-dfa-0-d-94-a-92-c-1-cd-1" src="\src\assets\fillData\7f231f5f63977976f1dfa0d94a92c1cd.png" />
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
                                <img className="untitled-1-jothidam-1" src="\src\assets\fillData\jothidam.jpg" />
                                <img className="_1950026-5" src="\src\assets\fillData\1950026.png" />
                                <img className="_1541664-1" src="\src\assets\fillData\1541664.png" />
                                <img className="vector-50" src="\src\assets\fillData\vector-500.svg" />
                                <img className="vector-51" src="\src\assets\fillData\vector-510.svg" />
                                <img className="vector-522" src="\src\assets\fillData\vector-520.svg" />
                                <img className="vector-53" src="\src\assets\fillData\vector-530.svg" />
                                <img className="vector-54" src="\src\assets\fillData\vector-540.svg" />
                                <img className="vector-55" src="\src\assets\fillData\vector-550.svg" />
                                <img className="vector-56" src="\src\assets\fillData\vector-560.svg" />
                                <img className="vector-57" src="\src\assets\fillData\vector-570.svg" />
                                <img className="vector-58" src="\src\assets\fillData\vector-580.svg" />
                                <img className="vector-59" src="\src\assets\fillData\vector-590.svg" />
                                <img className="vector-60" src="\src\assets\fillData\vector-600.svg" />
                                <img className="vector-61" src="\src\assets\fillData\vector-610.svg" />
                                <img className="vector-622" src="\src\assets\fillData\vector-620.svg" />
                                <img className="vector-63" src="\src\assets\fillData\vector-630.svg" />
                                <img className="vector-64" src="\src\assets\fillData\vector-640.svg" />
                                <img className="vector-65" src="\src\assets\fillData\vector-650.svg" />
                                <img className="_84-f-7-be-2-f-8-db-3-f-93-c-483-d-1-a-65-a-755025-a-1" src="\src\assets\fillData\84f7be2f8db3f93c483d1a65a755025a.png" />
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
                                    <img className="ff-copy-1" src="\src\assets\fillData\ff-copy.png" />
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
                                <img className="ff-copy-2" src="\src\assets\fillData\ff-copy.png" />
                                <img className="rectangle-5" src="\src\assets\fillData\rectangle-50.svg" />
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






