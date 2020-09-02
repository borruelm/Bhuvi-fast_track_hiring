import React from 'react';
import Header from './header';
import { makeStyles } from '@material-ui/core/styles';
import { Grid} from '@material-ui/core';

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

const Policy = ()=>{
    const classes = useStyles();

    return <div className={classes.main}>
        <Header />
        <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={10} className={classes.body}>
                                    
                <h1>Privacy Policy</h1>
                <p><i>Last updated: August 01, 2020</i></p>
                <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
                <p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>
                <h1>Interpretation and Definitions</h1>
                <h2>Interpretation</h2>
                <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                <h2>Definitions</h2>
                <p>For the purposes of this Privacy Policy:</p>
                <ul>
                <li>
                <p><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</p>
                </li>
                <li>
                <p><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</p>
                </li>
                <li>
                <p><strong>Application</strong> means the software program provided by the Company downloaded by You on any electronic device, named Fasttrack Hiring COVID-19</p>
                </li>
                <li>
                <p><strong>Business</strong>, for the purpose of the CCPA (California Consumer Privacy Act), refers to the Company as the legal entity that collects Consumers' personal information and determines the purposes and means of the processing of Consumers' personal information, or on behalf of which such information is collected and that alone, or jointly with others, determines the purposes and means of the processing of consumers' personal information, that does business in the State of California.</p>
                </li>
                <li>
                <p><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to Fast Track Hiring, Inc, 1111 Stevens Drive, Schaumburg, IL, 60173.</p>
                </li>
                <li>
                <p><strong>Consumer</strong>, for the purpose of the CCPA (California Consumer Privacy Act), means a natural person who is a California resident. A resident, as defined in the law, includes (1) every individual who is in the USA for other than a temporary or transitory purpose, and (2) every individual who is domiciled in the USA who is outside the USA for a temporary or transitory purpose.</p>
                </li>
                <li>
                <p><strong>Country</strong> refers to: Illinois, United States</p>
                </li>
                <li>
                <p><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>
                </li>
                <li>
                <p><strong>Do Not Track</strong> (DNT) is a concept that has been promoted by US regulatory authorities, in particular the U.S. Federal Trade Commission (FTC), for the Internet industry to develop and implement a mechanism for allowing internet users to control the tracking of their online activities across websites.</p>
                </li>
                <li>
                <p><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</p>
                <p>For the purposes of the CCPA, Personal Data means any information that identifies, relates to, describes or is capable of being associated with, or could reasonably be linked, directly or indirectly, with You.</p>
                </li>
                <li>
                <p><strong>Sale</strong>, for the purpose of the CCPA (California Consumer Privacy Act), means selling, renting, releasing, disclosing, disseminating, making available, transferring, or otherwise communicating orally, in writing, or by electronic or other means, a Consumer's Personal information to another business or a third party for monetary or other valuable consideration.</p>
                </li>
                <li>
                <p><strong>Service</strong> refers to the Application.</p>
                </li>
                <li>
                <p><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</p>
                </li>
                <li>
                <p><strong>Third-party Social Media Service</strong> refers to any website or any social network website through which a User can log in or create an account to use the Service.</p>
                </li>
                <li>
                <p><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</p>
                </li>
                <li>
                <p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
                </li>
                </ul>
                <h1>Collecting and Using Your Personal Data</h1>
                <h2>Types of Data Collected</h2>
                <h3>Personal Data</h3>
                <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
                <ul>
                <li>
                <p>Email address</p>
                </li>
                <li>
                <p>First name and last name</p>
                </li>
                <li>
                <p>Phone number</p>
                </li>
                <li>
                <p>Address, State, Province, ZIP/Postal code, City</p>
                </li>
                <li>
                <p>Usage Data</p>
                </li>
                </ul>
                <h3>Usage Data</h3>
                <p>Usage Data is collected automatically when using the Service.</p>
                <p>Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
                <p>When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>
                <p>We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p>
                <h3>Information Collected while Using the Application</h3>
                <p>While using Our Application, in order to provide features of Our Application, We may collect, with your prior permission:</p>
                <ul>
                <li>
                <p>Information regarding your location</p>
                </li>
                <li>
                <p>Pictures and other information from your Device's camera and photo library</p>
                </li>
                </ul>
                <p>We use this information to provide features of Our Service, to improve and customize Our Service. The information may be uploaded to the Company's servers and/or a Service Provider's server or it be simply stored on Your device.</p>
                <p>You can enable or disable access to this information at any time, through Your Device settings.</p>
                <h2>Use of Your Personal Data</h2>
                <p>The Company may use Personal Data for the following purposes:</p>
                <ul>
                <li><strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.</li>
                <li><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</li>
                <li><strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</li>
                <li><strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</li>
                <li><strong>To provide You</strong> with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</li>
                <li><strong>To manage Your requests:</strong> To attend and manage Your requests to Us.</li>
                </ul>
                <p>We may share your personal information in the following situations:</p>
                <ul>
                <li><strong>With Service Providers:</strong> We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.</li>
                <li><strong>For Business transfers:</strong> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                <li><strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</li>
                <li><strong>With Business partners:</strong> We may share Your information with Our business partners to offer You certain products, services or promotions.</li>
                <li><strong>With other users:</strong> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside. If You interact with other users or register through a Third-Party Social Media Service, Your contacts on the Third-Party Social Media Service may see Your name, profile, pictures and description of Your activity. Similarly, other users will be able to view descriptions of Your activity, communicate with You and view Your profile.</li>
                </ul>
                <h2>Retention of Your Personal Data</h2>
                <p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
                <p>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</p>
                <h2>Transfer of Your Personal Data</h2>
                <p>Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.</p>
                <p>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</p>
                <p>The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.</p>
                <h2>Disclosure of Your Personal Data</h2>
                <h3>Business Transactions</h3>
                <p>If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>
                <h3>Law enforcement</h3>
                <p>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>
                <h3>Other legal requirements</h3>
                <p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
                <ul>
                <li>Comply with a legal obligation</li>
                <li>Protect and defend the rights or property of the Company</li>
                <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                <li>Protect the personal safety of Users of the Service or the public</li>
                <li>Protect against legal liability</li>
                </ul>
                <h2>Security of Your Personal Data</h2>
                <p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
                <h1>Detailed Information on the Processing of Your Personal Data</h1>
                <p>Service Providers have access to Your Personal Data only to perform their tasks on Our behalf and are obligated not to disclose or use it for any other purpose.</p>
                <h2>Analytics</h2>
                <p>We may use third-party Service providers to monitor and analyze the use of our Service.</p>
                <ul>
                <li>
                <p><strong>Google Analytics</strong></p>
                <p>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.</p>
                <p>You may opt-out of certain Google Analytics features through your mobile device settings, such as your device advertising settings or by following the instructions provided by Google in their Privacy Policy: <a href="https://policies.google.com/privacy" rel="external nofollow noopener noreferrer" target="_blank">https://policies.google.com/privacy</a></p>
                <p>For more information on the privacy practices of Google, please visit the Google Privacy &amp; Terms web page: <a href="https://policies.google.com/privacy" rel="external nofollow noopener" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></p>
                </li>
                </ul>
                <h1>CCPA Privacy</h1>
                <h2>Your Rights under the CCPA</h2>
                <p>Under this Privacy Policy, and by law if You are a resident of California, You have the following rights:</p>
                <ul>
                <li><strong>The right to notice.</strong> You must be properly notified which categories of Personal Data are being collected and the purposes for which the Personal Data is being used.</li>
                <li><strong>The right to access / the right to request.</strong> The CCPA permits You to request and obtain from the Company information regarding the disclosure of Your Personal Data that has been collected in the past 12 months by the Company or its subsidiaries to a third-party for the third party's direct marketing purposes.</li>
                <li><strong>The right to say no to the sale of Personal Data.</strong> You also have the right to ask the Company not to sell Your Personal Data to third parties. You can submit such a request by visiting our &quot;Do Not Sell My Personal Information&quot; section or web page.</li>
                <li><strong>The right to know about Your Personal Data.</strong> You have the right to request and obtain from the Company information regarding the disclosure of the following:
                <ul>
                <li>The categories of Personal Data collected</li>
                <li>The sources from which the Personal Data was collected</li>
                <li>The business or commercial purpose for collecting or selling the Personal Data</li>
                <li>Categories of third parties with whom We share Personal Data</li>
                <li>The specific pieces of Personal Data we collected about You</li>
                </ul>
                </li>
                <li><strong>The right to delete Personal Data.</strong> You also have the right to request the deletion of Your Personal Data that have been collected in the past 12 months.</li>
                <li><strong>The right not to be discriminated against.</strong> You have the right not to be discriminated against for exercising any of Your Consumer's rights, including by:
                <ul>
                <li>Denying goods or services to You</li>
                <li>Charging different prices or rates for goods or services, including the use of discounts or other benefits or imposing penalties</li>
                <li>Providing a different level or quality of goods or services to You</li>
                <li>Suggesting that You will receive a different price or rate for goods or services or a different level or quality of goods or services.</li>
                </ul>
                </li>
                </ul>
                <h2>Exercising Your CCPA Data Protection Rights</h2>
                <p>In order to exercise any of Your rights under the CCPA, and if you are a California resident, You can email or call us or visit our &quot;Do Not Sell My Personal Information&quot; section or web page.</p>
                <p>The Company will disclose and deliver the required information free of charge within 45 days of receiving Your verifiable request. The time period to provide the required information may be extended once by an additional 45 days when reasonable necessary and with prior notice.</p>
                <h2>Do Not Sell My Personal Information</h2>
                <p>We do not sell personal information. However, the Service Providers we partner with (for example, our advertising partners) may use technology on the Service that &quot;sells&quot; personal information as defined by the CCPA law.</p>
                <p>If you wish to opt out of the use of your personal information for interest-based advertising purposes and these potential sales as defined under CCPA law, you may do so by following the instructions below.</p>
                <p>Please note that any opt out is specific to the browser You use. You may need to opt out on every browser that you use.</p>
                <h3>Website</h3>
                <p>You can opt out of receiving ads that are personalized as served by our Service Providers by following our instructions presented on the Service:</p>
                <ul>
                <li>From Our &quot;Cookie Consent&quot; notice banner</li>
                <li>Or from Our &quot;CCPA Opt-out&quot; notice banner</li>
                <li>Or from Our &quot;Do Not Sell My Personal Information&quot; notice banner</li>
                <li>Or from Our &quot;Do Not Sell My Personal Information&quot; link</li>
                </ul>
                <p>The opt out will place a cookie on Your computer that is unique to the browser You use to opt out. If you change browsers or delete the cookies saved by your browser, you will need to opt out again.</p>
                <h3>Mobile Devices</h3>
                <p>Your mobile device may give you the ability to opt out of the use of information about the apps you use in order to serve you ads that are targeted to your interests:</p>
                <ul>
                <li>&quot;Opt out of Interest-Based Ads&quot; or &quot;Opt out of Ads Personalization&quot; on Android devices</li>
                <li>&quot;Limit Ad Tracking&quot; on iOS devices</li>
                </ul>
                <p>You can also stop the collection of location information from Your mobile device by changing the preferences on your mobile device.</p>
                <h1>&quot;Do Not Track&quot; Policy as Required by California Online Privacy Protection Act (CalOPPA)</h1>
                <p>Our Service does not respond to Do Not Track signals.</p>
                <p>However, some third party websites do keep track of Your browsing activities. If You are visiting such websites, You can set Your preferences in Your web browser to inform websites that You do not want to be tracked. You can enable or disable DNT by visiting the preferences or settings page of Your web browser.</p>
                <h1>Your California Privacy Rights (California's Shine the Light law)</h1>
                <p>Under California Civil Code Section 1798 (California's Shine the Light law), California residents with an established business relationship with us can request information once a year about sharing their Personal Data with third parties for the third parties' direct marketing purposes.</p>
                <p>If you'd like to request more information under the California Shine the Light law, and if you are a California resident, You can contact Us using the contact information provided below.</p>
                <h1>California Privacy Rights for Minor Users (California Business and Professions Code Section 22581)</h1>
                <p>California Business and Professions Code section 22581 allow California residents under the age of 18 who are registered users of online sites, services or applications to request and obtain removal of content or information they have publicly posted.</p>
                <p>To request removal of such data, and if you are a California resident, You can contact Us using the contact information provided below, and include the email address associated with Your account.</p>
                <p>Be aware that Your request does not guarantee complete or comprehensive removal of content or information posted online and that the law may not permit or require removal in certain circumstances.</p>
                <h1>Links to Other Websites</h1>
                <p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</p>
                <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
                <h1>Changes to this Privacy Policy</h1>
                <p>We may update our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>
                <p>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the &quot;Last updated&quot; date at the top of this Privacy Policy.</p>
                <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
                <h1>Contact Us</h1>
                <p>If you have any questions about this Privacy Policy, You can contact us:</p>
                <ul>
                <li>By email: <a href="mailTo:hr@fasttrackhiring.com">clicking here</a> </li>
            </ul>
            </Grid>
            <Grid item xs={1}></Grid>
        </Grid>
    </div>
}

export default Policy;