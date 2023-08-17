import FooterApp from "../../components/footer/footer"
import Navbar from "../../components/navbar"

const PrivacyPolicy = () => {
    return <>
        <Navbar/>
        <div className="container mt2">
            <h1 >Privacy Policy</h1>
            <h2 style={{fontSize: '2rem'}}>1. Information Collection</h2>
            <p>When you use our application, we may collect certain personal data necessary for the KYC process, such as your name, address, date of birth, identification number, and a photograph of your official identification document. This information is essential to verify your identity and ensure that only you can access our services.</p>
            <h2 style={{fontSize: '2rem'}}>2. Use of Information</h2>
            <p>The information collected during the KYC process will be used solely for the purpose of verifying your identity and ensuring the integrity and security of our operations. We will not share or sell your personal data to third parties for marketing or advertising purposes.</p>
            <h2 style={{fontSize: '2rem'}}>3. Data Security</h2>
            <p>We take rigorous measures to protect your personal data against unauthorized access, disclosure, or destruction. We use technical and administrative security measures to ensure that your information is secure and confidential.</p>
            <h2 style={{fontSize: '2rem'}}>4. Third-Party Access</h2>
            <p>To carry out the KYC process, we may share your data with external entities that provide verification and compliance services. However, we ensure that these entities comply with strict data security and privacy standards.</p>
            <h2 style={{fontSize: '2rem'}}>5. Data Retention</h2>
            <p>We will retain your personal data for as long as necessary to comply with our legal and regulatory obligations. Once it is no longer needed, we will delete or anonymize the information to protect your privacy.</p>
            <h2 style={{fontSize: '2rem'}}>6. User Rights</h2>
            <p>You have the right to access, correct, or delete your personal data that we have stored. If you wish to exercise these rights or have any questions about our Privacy Policy, you can contact us through sopport@quorum.com</p>
            <h2 style={{fontSize: '2rem'}}>7. User Rights</h2>
            <p>We reserve the right to modify this Privacy Policy at any time to reflect changes in our privacy practices. We recommend that you review it periodically to stay informed about how we protect your information.

                By using our application, you agree to the terms and conditions of this Privacy Policy. If you do not agree with these terms, we ask that you do not use our services.
                </p>
            </div>
        <FooterApp/>
    
    </>
}

export default PrivacyPolicy 