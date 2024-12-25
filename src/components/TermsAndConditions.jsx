import React from 'react';
import { Container, Typography, Paper, Grid, Box, Divider, Link } from '@mui/material';
import HeaderComponent from './HeaderComponent';
import PrivacyPolicy from './PrivacyPolicy';

const TermsAndConditions = () => {
    return (
        <>
            <HeaderComponent />
            <Container maxWidth="md" sx={{ paddingY: 4 }}>
                <Paper elevation={3} sx={{ padding: 3 }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Terms and Conditions
                    </Typography>
                    <Typography variant="body1" color="textSecondary" paragraph>
                        <strong>Effective Date: 19-12-2024</strong>
                    </Typography>

                    <Typography variant="body1" paragraph>
                        Welcome to <strong>getDataFilledDotcom</strong>! By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before using our services.
                    </Typography>

                    <Box sx={{ marginBottom: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            1. Definitions
                        </Typography>
                        <ul>
                            <li>"We," "Us," "Our" refer to getDataFilledDotcom and its owners, operators, and authorized representatives, including Omega Computers and Software Solutions as the hosting provider.</li>
                            <li>"You," "Your" refer to the user accessing or using the platform, whether as an individual or on behalf of an organization.</li>
                            <li>"Service" refers to the features, tools, and functionalities provided by getDataFilledDotcom.</li>
                            <li>"Content" includes all templates, designs, and materials provided by getDataFilledDotcom.</li>
                        </ul>
                    </Box>

                    <Box sx={{ marginBottom: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            2. Acceptance of Terms
                        </Typography>
                        <Typography variant="body1" paragraph>
                            By using getDataFilledDotcom, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions. If you do not agree, you must not use our services.
                        </Typography>
                    </Box>

                    <Box sx={{ marginBottom: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            3. Services Provided
                        </Typography>
                        <Typography variant="body1" paragraph>
                            getDataFilledDotcom, a platform hosted by Omega Computers and Software Solutions, offers a service to create and download high-quality bride’s bio-data in PDF format. This service is primarily designed for commercial use by matrimony service providers and internet service providers.
                        </Typography>

                        <Typography variant="h6" gutterBottom>
                            3.1 Commercial Use and Subscription Fees
                        </Typography>
                        <ul>
                            <li>Matrimony service providers and internet service providers must purchase the software and pay a subscription fee every three years. The subscription term is flexible and may vary depending on market maintenance and associated charges.</li>
                            <li>Users will be notified of subscription terms, costs, and any changes at the time of purchase by our marketing executives or via email.</li>
                            <li>We assure that any changes in subscription costs or validity will only apply to future purchases and not to ongoing subscriptions.</li>
                        </ul>
                    </Box>

                    <Box sx={{ marginBottom: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            3.2 Data Collection and Usage
                        </Typography>
                        <ul>
                            <li>By using our services, you acknowledge and permit us to collect and use the data you enter for each bio-data for advertising purposes and resale.</li>
                            <li>Omega Computers and Software Solutions retains ownership of all data rights.</li>
                            <li>Any objections to this policy will result in denial of service. If you do not agree, please do not register with us.</li>
                        </ul>
                    </Box>

                    <Box sx={{ marginBottom: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            4. User Responsibility
                        </Typography>
                        <ul>
                            <li>You are responsible for the accuracy of the information you provide when creating bio-data.</li>
                            <li>Misuse of the platform, including but not limited to uploading offensive or false information, is strictly prohibited.</li>
                            <li>Users must ensure that their use of the platform complies with all applicable laws and regulations.</li>
                        </ul>
                    </Box>

                    <Box sx={{ marginBottom: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            5. Intellectual Property
                        </Typography>
                        <ul>
                            <li>All content, templates, designs, and features of getDataFilledDotcom are the exclusive property of getDataFilledDotcom and are protected by intellectual property laws.</li>
                            <li>Unauthorized use, reproduction, or distribution of any content from the platform is strictly prohibited.</li>
                        </ul>
                    </Box>

                    <Box sx={{ marginBottom: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            6. Privacy Policy
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Your privacy is important to us. By using our platform, you consent to our collection, use, and storage of your information as described in our <Link href="#" color="primary">Privacy Policy</Link>.
                        </Typography>
                    </Box>

                    <Box sx={{ marginBottom: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            7. Limitation of Liability
                        </Typography>
                        <ul>
                            <li>getDataFilledDotcom is not responsible for any errors or inaccuracies in the bio-data created by users.</li>
                            <li>We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.</li>
                            <li>Any complaints regarding the service should be directed to Omega Computers and Software Solutions, the hosting provider of getDataFilledDotcom. They will be responsible for addressing such complaints.</li>
                        </ul>
                    </Box>

                    <Box sx={{ marginBottom: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            8. Termination
                        </Typography>
                        <Typography variant="body1" paragraph>
                            getDataFilledDotcom reserves the right to suspend or terminate user access at any time for violations of these terms and conditions or misuse of the platform.
                        </Typography>
                    </Box>

                    <Box sx={{ marginBottom: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            9. Changes to Terms
                        </Typography>
                        <Typography variant="body1" paragraph>
                            getDataFilledDotcom reserves the right to update or modify these terms and conditions at any time. Users will be notified of significant changes. Continued use of the platform constitutes acceptance of the updated terms.
                        </Typography>
                    </Box>

                    <Box sx={{ marginBottom: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            10. Governing Law
                        </Typography>
                        <Typography variant="body1" paragraph>
                            These terms and conditions are governed by and construed in accordance with the laws of [your jurisdiction]. Any disputes arising out of these terms will be subject to the exclusive jurisdiction of the courts of [your jurisdiction].
                        </Typography>
                    </Box>

                    <Box sx={{ marginBottom: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            11. Contact Us
                        </Typography>
                        <Typography variant="body1" paragraph>
                            For any questions or concerns regarding these terms and conditions, please contact us at:
                        </Typography>
                        <ul>
                            <li>Email: <Link href="mailto:venerablevignesh@gmail.com">venerablevignesh@gmail.com</Link></li>
                            <li>Phone: 6380661438, 9244222220</li>
                        </ul>
                    </Box>
                    <PrivacyPolicy/>

                    <Divider sx={{ marginTop: 4, marginBottom: 2 }} />
                    <Typography variant="body2" align="center">
                        Thank you for choosing getDataFilledDotcom, hosted and managed by Omega Computers and Software Solutions. We are committed to providing you with high-quality services.
                    </Typography>
                </Paper>
            </Container>
        </>

    );
};

export default TermsAndConditions;
