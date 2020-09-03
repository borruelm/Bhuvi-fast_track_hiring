import React from 'react';
import Header from './header';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    main:{
        width:'100%',
        backgroundColor: '#F3F3F3',
        color:'#000',
        textAlign:'left'
    },
    body:{
        minWidth:350
    }
}));

const TermsAndConditions = () =>{
    const classes = useStyles();

    return <div className={classes.main}>
        <Header />
        <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={10} className={classes.body}>
                <br />
                <Typography variant={"h4"}>Terms and Conditions</Typography><br />
                <Typography><i>Last updated: August 02, 2020</i></Typography><br />
                <Typography>Please read these terms and conditions carefully before using Our Service.</Typography>
                <br /><br />
                <Typography variant={"h4"}>Interpretation and Definitions</Typography><br />
                <Typography><b>Interpretation</b><br />
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                <br /><br />
                <b>Definitions</b><br />
                For the purposes of these Terms and Conditions:
                </Typography>
                <br />
                <ul>
                    <li><Typography>Application means the software program provided by the Company downloaded by You on any electronic device, named Fast Track Hiring COVID-19</Typography></li><br />
                    <li><Typography>Application Store means the digital distribution service operated and developed by Apple Inc. (Apple App Store) or Google Inc. (Google Play Store) in which the Application has been downloaded.</Typography></li><br />
                    <li><Typography>Affiliate means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</Typography></li><br />
                    <li><Typography>Account means a unique account created for You to access our Service or parts of our Service.</Typography></li><br />
                    <li><Typography>Country refers to: Illinois, United States</Typography></li><br /><br />
                    <li><Typography>Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Fast Track Hiring, Inc., 111 Stevens Drive, Schaumburg, IL, 60173.</Typography></li><br />
                    <li><Typography>Content refers to content such as text, images, or other information that can be posted, uploaded, linked to or otherwise made available by You, regardless of the form of that content.</Typography></li><br />
                    <li><Typography>Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.</Typography></li><br />
                    <li><Typography>Feedback means feedback, innovations or suggestions sent by You regarding the attributes, performance or features of our Service.</Typography></li><br />
                    <li><Typography>Service refers to the Application.</Typography></li><br />
                    <li><Typography>Terms and Conditions (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.</Typography></li><br />
                    <li><Typography>Third-party Social Media Service means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</Typography></li><br />
                    <li><Typography>You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</Typography></li><br />
                </ul>
                <Typography variant={"h4"}>Collecting and Using Your Personal Data</Typography><br />
                <Typography variant={"h5"}>Types of Data Collected</Typography>
                <br />
                <Typography variant={"h6"}>Personal Data</Typography>
                <br />
                <Typography>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</Typography>
                <ul>
                    <li><Typography>Email address</Typography></li><br />
                    <li><Typography>First name and last name</Typography></li><br />
                    <li><Typography>Phone number</Typography></li><br />
                    <li><Typography>Address, State, Province, ZIP/Postal code, City</Typography></li><br />
                    <li><Typography>Usage Data</Typography></li><br />
                </ul>
                <b>Usage Data</b><br />
                <Typography>Usage Data is collected automatically when using the Service.</Typography><br />
                <Typography>Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</Typography><br />
                <Typography>When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</Typography><br />
                <Typography>We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</Typography><br />
                <Typography variant={"h6"}><b>Information Collected while Using the Application</b></Typography>
                <br />
                <Typography>While using Our Application, in order to provide features of Our Application, We may collect, with your prior permission:</Typography><br />
                <ul>
                    <li><Typography>Information regarding your location</Typography></li><br />
                    <li><Typography>Pictures and other information from your Device's camera and photo library</Typography></li><br />
                </ul>
                <Typography>We use this information to provide features of Our Service, to improve and customize Our Service. The information may be uploaded to the Company's servers and/or a Service Provider's server or it be simply stored on Your device.</Typography><br />
                <Typography>You can enable or disable access to this information at any time, through Your Device settings.</Typography>
                <b>Use of Your Personal Data</b><br />
                <Typography>The Company may use Personal Data for the following purposes:</Typography><br />
                <ul>
                    <li><Typography><b>To provide and maintain our Service,</b>  including to monitor the usage of our Service.</Typography></li><br />
                    <li><Typography><b>To manage Your Account:</b> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</Typography></li><br />
                    <li><Typography><b>For the performance of a contract:</b> he development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</Typography></li><br />
                    <li><Typography><b>To contact You :</b>  To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</Typography></li><br />
                    <li><Typography><b>To provide You </b>with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</Typography></li><br />
                    <li><Typography><b>To manage Your requests: </b>To attend and manage Your requests to Us.</Typography></li><br />
                </ul>
                <Typography>We may share your personal information in the following situations:</Typography><br />
                <ul>
                    <li><Typography>With Service Providers: We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.</Typography></li><br />
                    <li><Typography>For Business transfers: We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of our business to another company.</Typography></li><br />
                    <li><Typography>With Affiliates: We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</Typography></li><br />
                    <li><Typography>With Business partners: We may share Your information with Our business partners to offer You certain products, services or promotions.</Typography></li><br />
                    <li><Typography>With other users: when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside. If You interact with other users or register through a Third-Party Social Media Service, Your contacts on the Third-Party Social Media Service may see Your name, profile, pictures and description of Your activity. Similarly, other users will be able to view descriptions of Your activity, communicate with You and view Your profile.</Typography></li><br />
                </ul>
                <Typography variant={"h5"}>Retention of Your Personal Data</Typography>
                <Typography>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</Typography><br />
                <Typography>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</Typography><br />
                <Typography variant={"h5"}>Transfer of Your Personal Data</Typography>
                <Typography>Your information, including Personal Data, is processed at the Company&#39;s operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.</Typography><br />
                <Typography>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</Typography><br />
                <Typography>The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.</Typography><br />
                <Typography variant={"h5"}>Disclosure of Your Personal Data</Typography>
                <Typography variant={"h6"}>Business Transactions</Typography>
                <Typography>If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</Typography><br />
                <Typography variant={"h6"}>Law enforcement</Typography>
                <Typography>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</Typography><br />
                <Typography variant={"h6"}>Other legal requirements</Typography>
                <Typography>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</Typography><br />
                <ul>
                    <li><Typography>Comply with a legal obligation</Typography></li><br />
                    <li><Typography>Protect and defend the rights or property of the Company</Typography></li><br />
                    <li><Typography>Prevent or investigate possible wrongdoing in connection with the Service</Typography></li><br />
                    <li><Typography>Protect the personal safety of Users of the Service or the public</Typography></li><br />
                    <li><Typography>Protect against legal liability</Typography></li><br />
                </ul>
                <Typography variant={"h5"}>Security of Your Personal Data</Typography>
                <Typography>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</Typography><br />
                <Typography variant={"h4"}>Detailed Information on the Processing of Your Personal Data</Typography>
                <Typography>Service Providers have access to Your Personal Data only to perform their tasks on Our behalf and are obligated not to disclose or use it for any other purpose.</Typography><br />
                <Typography variant={"h5"}>Analytics</Typography>
                <Typography>We may use third-party Service providers to monitor and analyze the use of our Service.</Typography><br /> 
                <ul>
                    <li><Typography><strong>Google Analytics</strong></Typography></li><br />
                    <li><Typography>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.</Typography></li><br />
                    <li><Typography>You may opt-out of certain Google Analytics features through your mobile device settings, such as your device advertising settings or by following the instructions provided by Google in their Privacy Policy: <a href="https://policies.google.com/privacy" rel="external nofollow noopener" target="_blank">https://policies.google.com/<wbr />privacy</a></Typography></li><br />
                    <li><Typography>For more information on the privacy practices of Google, please visit the Google Privacy &amp; Terms web page: <a href="https://policies.google.com/privacy" rel="external nofollow noopener" target="_blank">https://policies.google.com/<wbr />privacy</a></Typography></li>
                </ul>
                <Typography variant={"h4"}>CCPA Privacy</Typography>
                <Typography variant={"h5"}>Your Rights under the CCPA</Typography>
                <Typography>Under this Privacy Policy, and by law if You are a resident of California, You have the following rights:</Typography><br />
                <ul>
                    <li><Typography><strong>The right to notice.</strong> You must be properly notified which categories of Personal Data are being collected and the purposes for which the Personal Data is being used.</Typography></li><br />
                    <li><Typography><strong>The right to access / the right to request.</strong> The CCPA permits You to request and obtain from the Company information regarding the disclosure of Your Personal Data that has been collected in the past 12 months by the Company or its subsidiaries to a third-party for the third party&#39;s direct marketing purposes.</Typography></li><br />
                    <li><Typography><strong>The right to say no to the sale of Personal Data.</strong> You also have the right to ask the Company not to sell Your Personal Data to third parties. You can submit such a request by visiting our &quot;Do Not Sell My Personal Information&quot; section or web page.</Typography></li><br />
                    <li><Typography><strong>The right to know about Your Personal Data.</strong> You have the right to request and obtain from the Company information regarding the disclosure of the following:</Typography><br />
                        <ul>
                            <li><Typography>The categories of Personal Data collected</Typography></li><br />
                            <li><Typography>The sources from which the Personal Data was collected</Typography></li><br />
                            <li><Typography>The business or commercial purpose for collecting or selling the Personal Data</Typography></li><br />
                            <li><Typography>Categories of third parties with whom We share Personal Data</Typography></li><br />
                            <li><Typography>The specific pieces of Personal Data we collected about You</Typography></li><br />
                        </ul>
                    </li>
                    <li><Typography><strong>The right to delete Personal Data.</strong> You also have the right to request the deletion of Your Personal Data that have been collected in the past 12 months.</Typography></li><br />
                    <li><Typography><strong>The right not to be discriminated against.</strong> You have the right not to be discriminated against for exercising any of Your Consumer&#39;s rights, including by: </Typography><br />
                        <ul>
                            <li><Typography>Denying goods or services to You</Typography></li><br />
                            <li><Typography>Charging different prices or rates for goods or services, including the use of discounts or other benefits or imposing penalties</Typography></li><br />
                            <li><Typography>Providing a different level or quality of goods or services to You</Typography></li><br />
                            <li><Typography>Suggesting that You will receive a different price or rate for goods or services or a different level or quality of goods or services.</Typography></li><br />
                        </ul>
                    </li>
                </ul>
                <Typography variant={"h5"}>Exercising Your CCPA Data Protection Rights</Typography>
                <Typography>In order to exercise any of Your rights under the CCPA, and if you are a California resident, You can email or call us or visit our &quot;Do Not Sell My Personal Information&quot; section or web page.</Typography><br />
                <Typography>The Company will disclose and deliver the required information free of charge within 45 days of receiving Your verifiable request. The time period to provide the required information may be extended once by an additional 45 days when reasonable necessary and with prior notice.</Typography><br />
                <Typography variant={"h5"}>Do Not Sell My Personal Information</Typography>
                <Typography>We do not sell personal information. However, the Service Providers we partner with (for example, our advertising partners) may use technology on the Service that &quot;sells&quot; personal information as defined by the CCPA law.</Typography><br />
                <Typography>If you wish to opt out of the use of your personal information for interest-based advertising purposes and these potential sales as defined under CCPA law, you may do so by following the instructions below.</Typography><br />
                <Typography>Please note that any opt out is specific to the browser You use. You may need to opt out on every browser that you use.</Typography><br />
                <Typography variant={"h6"}>Website</Typography>
                <Typography>You can opt out of receiving ads that are personalized as served by our Service Providers by following our instructions presented on the Service:</Typography><br />
                <ul>
                    <li><Typography>From Our &quot;Cookie Consent&quot; notice banner,</Typography></li><br />
                    <li><Typography>Or from Our &quot;CCPA Opt-out&quot; notice banner</Typography></li><br />
                    <li><Typography>Or from Our &quot;Do Not Sell My Personal Information&quot; notice banner</Typography></li><br />
                    <li><Typography>Or from Our &quot;Do Not Sell My Personal Information&quot; link</Typography></li><br />
                </ul>
                <Typography>The opt out will place a cookie on Your computer that is unique to the browser You use to opt out. If you change browsers or delete the cookies saved by your browser, you will need to opt out again.</Typography><br />
                <Typography variant={"h6"}>Mobile Devices</Typography>
                <Typography>Your mobile device may give you the ability to opt out of the use of information about the apps you use in order to serve you ads that are targeted to your interests:</Typography><br />
                <ul>
                    <li><Typography>&quot;Opt out of Interest-Based Ads&quot; or &quot;Opt out of Ads Personalization&quot; on Android devices</Typography></li><br />
                    <li><Typography>&quot;Limit Ad Tracking&quot; on iOS devices</Typography></li><br />
                </ul>
                <Typography>You can also stop the collection of location information from Your mobile device by changing the preferences on your mobile device.</Typography><br />
                <Typography variant={"h6"}>&quot;Do Not Track&quot; Policy as Required by California Online Privacy Protection Act (CalOPPA)</Typography>
                <Typography>Our Service does not respond to Do Not Track signals.</Typography><br />
                <Typography>However, some third party websites do keep track of Your browsing activities. If You are visiting such websites, You can set Your preferences in Your web browser to inform websites that You do not want to be tracked. You can enable or disable DNT by visiting the preferences or settings page of Your web browser.</Typography><br />
                <Typography variant={"h6"}>Your California Privacy Rights (California&#39;s Shine the Light law)</Typography>
                <Typography>Under California Civil Code Section 1798 (California&#39;s Shine the Light law), California residents with an established business relationship with us can request information once a year about sharing their Personal Data with third parties for the third parties&#39; direct marketing purposes.</Typography><br />
                <Typography>If you&#39;d like to request more information under the California Shine the Light law, and if you are a California resident, You can contact Us using the contact information provided below.</Typography><br />
                <Typography variant={"h6"}>California Privacy Rights for Minor Users (California Business and Professions Code Section 22581)</Typography>
                <Typography>California Business and Professions Code section 22581 allow California residents under the age of 18 who are registered users of online sites, services or applications to request and obtain removal of content or information they have publicly posted.</Typography><br />
                <Typography>To request removal of such data, and if you are a California resident, You can contact Us using the contact information provided below, and include the email address associated with Your account.</Typography><br />
                <Typography>Be aware that Your request does not guarantee complete or comprehensive removal of content or information posted online and that the law may not permit or require removal in certain circumstances.</Typography><br />
                <Typography variant={"h6"}>Links to Other Websites</Typography>
                <Typography>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party&#39;s site. We strongly advise You to review the Privacy Policy of every site You visit.</Typography><br />
                <Typography>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</Typography><br />
                <Typography variant={"h6"}>Changes to this Privacy Policy</Typography>
                <Typography>We may update our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</Typography><br />
                <Typography>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the &quot;Last updated&quot; date at the top of this Privacy Policy.</Typography><br />
                <Typography>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</Typography><br />
                <Typography variant={"h6"}>Contact Us</Typography>
                <Typography>If you have any questions about this Privacy Policy, You can contact us:</Typography><br />
                <ul>
                    <li><Typography>By email: <a href="mailTo:hr@fasttrackhiring.com">clicking here</a> </Typography></li>
                </ul>        
            </Grid>
            <Grid item xs={1}></Grid>
        </Grid>
    </div>
}

export default TermsAndConditions;
