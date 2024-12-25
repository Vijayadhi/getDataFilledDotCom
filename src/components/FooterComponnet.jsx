import React from 'react'
// import logo from ""

function FooterComponnet() {
    return (
        <>
            {/* <!-- Footer --> */}
            <footer class="text-center text-lg-start bg-body-tertiary text-muted">
                {/* <!-- Section: Social media --> */}
                <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    {/* <!-- Left --> */}
                    <div class="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    {/* <!-- Left --> */}

                    {/* <!-- Right --> */}
                    <div>
                        <a href="#" class="me-4 text-reset">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="me-4 text-reset">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="me-4 text-reset">
                            <i class="fab fa-google"></i>
                        </a>
                        <a href="#" class="me-4 text-reset">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#" class="me-4 text-reset">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="#" class="me-4 text-reset">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                    {/* <!-- Right --> */}
                </section>
                {/* <!-- Section: Social media --> */}

                {/* <!-- Section: Links  --> */}
                <section class="">
                    <div class="container text-center text-md-start mt-5">
                        {/* <!-- Grid row --> */}
                        <div class="row mt-3">
                            {/* <!-- Grid column --> */}
                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                {/* <!-- Content --> */}
                                <h6 class="text-uppercase fw-bold mb-4">
                                    <img src="../logo.png" alt="" srcset="" height="70" />getDataFilledDotCom
                                </h6>
                                <p>
                                    We Serve our best to our customers to take the quality in hands with minimal efforts. With 0% desin time
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 class="text-uppercase fw-bold mb-4">
                                    Legal
                                </h6>
                                <p>
                                    <a href="/termsandconditions" class="text-reset" target='_blank'>Terms&amp;Condition</a>
                                </p>
                                <p>
                                    <a href="/privacyPolicy" class="text-reset" target='_blank'>Privacy&amp;Refund Policy</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset"></a>
                                </p>
                                {/* <p>
                                    <a href="#!" class="text-reset">Laravel</a>
                                </p> */}
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* <!-- Links --> */}
                                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i class="fas fa-home me-3"></i> Cuddalore,  TamilNadu, 607401, IN</p>
                                <p>
                                    <i class="fas fa-envelope me-2"></i>
                                    <a href="mailto:srihayagirivamatrimony@gmail.com" class="text-reset">srihayagirivamatrimony@gmail.com</a>
                                </p>
                                <p><i class="fas fa-phone me-3"></i><a href="tel:+919244222220" class="text-reset">(+91) 92442 22220</a>
                                </p>
                                <p><i class="fas fa-mobile me-3"></i> <a href="tel:+9163806 61438" class="text-reset">(+91) 63806 61438</a></p>
                            </div>
                            {/* <!-- Grid column --> */}
                        </div>
                        {/* <!-- Grid row --> */}
                    </div>
                </section>
                {/* <!-- Section: Links  --> */}

                {/* <!-- Copyright --> */}
                <div class="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}> 
                    © {new Date().getFullYear()} All Rights Reserverd<br/>
                    <a class="text-reset fw-bold" href="https://portfolio-vigneshwaran.netlify.app">Site Brought to Live By Omega Computers &amp; Software Solutions</a>
                </div>
                {/* <!-- Copyright --> */}
            </footer>
            {/* <!-- Footer --> */}
        </>
    )
}

export default FooterComponnet