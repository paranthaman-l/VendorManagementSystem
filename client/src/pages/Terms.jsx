import { BiRightArrowAlt } from "react-icons/bi"

const Terms = () => {
  //   const contents = [
  //     {
  //       id: 1,
  //       title: "Introduction",
  //       content: [
  //         {
  //           id: 1.1,
  //           title: "Purpose of the Privacy Policy",
  //           value: `This Privacy Policy outlines how [Your Organization Name] ("we" , "us ",  or "our") collects, uses, shares, and safeguards your information in connection with our Vendor Management System (VMS). We are committed to protecting your privacy and ensuring the security of your information.`
  //         },
  //         {
  //           id: 1.2,
  //           title: "Scope",
  //           value: "This Privacy Policy applies to all users of our VMS, including vendors, employees, and other individuals who interact with our system."
  //         }
  //       ]
  //     },
  //     {
  //       id: 2,
  //       title: "Information We Collect",
  //       content: [
  //         {
  //           id: 1.1,
  //           title: "Personal Information",
  //           value: `This Privacy Policy outlines how [Your Organization Name] ("we" , "us ",  or "our") collects, uses, shares, and safeguards your information in connection with our Vendor Management System (VMS). We are committed to protecting your privacy and ensuring the security of your information.`
  //         },
  //         {
  //           id: 1.2,
  //           title: "Scope",
  //           value: "This Privacy Policy applies to all users of our VMS, including vendors, employees, and other individuals who interact with our system."
  //         }
  //       ]
  //     },
  //   ]
  return (
    <div className='mt-20 min-h-full flex flex-col'>
      <div className="h-[210px] my-5 flex justify-center items-center w-full bg-lightGray1">
        <p className="font-poppins text-5xl font-extrabold text-blue ">Terms and Condition</p>
      </div>
      <div className="mx-32 px-32 font-inter">
        <p className="text-start">Effective Updated: 23 Sep 2023</p>
        {/* 1 */}
        <p className="font-bold font-poppins text-3xl my-3 mt-9">1. Acceptance of Terms</p>
        <p className="indent-20 my-5 text-justify">By accessing or using the Vendor Management System (VMS), you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please refrain from using the VMS.</p>

        {/* 2 */}
        <p className="font-bold font-poppins text-3xl my-3 mt-9">2. Definitions</p>
        <ul className="list-disc mx-10">
          <li>"VMS" refers to the Vendor Management System provided by Delta's</li>
          <li>"Organization" refers to the entity utilizing the VMS for vendor management</li>
          <li>"Vendor" refers to a company or individual registered with the VMS to provide goods or services to the Organization.</li>
        </ul>

        {/* 3 */}
        <p className="font-bold font-poppins text-3xl my-3 mt-10">3. Registration and Account</p>
        <p className="font-semibold font-inter my-2">3.1 Registration</p>
        <p className="indent-20 my-5 text-justify">Vendors and Organizations must complete the registration process and provide accurate and up-to-date information. You are responsible for maintaining the confidentiality of your account credentials.</p>
        <p className="font-semibold font-inter my-2">3.2 Account Termination</p>
        <p className="indent-20 my-5 text-justify">We reserve the right to terminate or suspend your account, with or without notice, for any violation of these terms or for any other reason deemed necessary.</p>
        {/* 4 */}
        <p className="font-bold font-poppins text-3xl my-3 mt-10">4. Vendor Responsibilities</p>
        <p className="font-semibold font-inter my-2">4.1 Compliance</p>
        <p className="indent-20 my-5 text-justify">Vendors are responsible for complying with all applicable laws and regulations in the provision of goods or services to the Organization.</p>
        <p className="font-semibold font-inter my-2">4.2 Information Accuracy</p>
        <p className="indent-20 my-5 text-justify">Vendors must provide accurate and complete information regarding their products or services, pricing, and other relevant details.</p>
        <p className="font-semibold font-inter my-2">4.3 Communication</p>
        <p className="indent-20 my-5 text-justify">Vendors must maintain open and timely communication with the Organization regarding orders, deliveries, and any issues that may arise.</p>
        {/* 5 */}
        <p className="font-bold font-poppins text-3xl my-3 mt-10">5. Organization Responsibilities</p>
        <p className="font-semibold font-inter my-2">5.1 Vendor Selection</p>
        <p className="indent-20 my-5 text-justify">The Organization is responsible for selecting vendors and making procurement decisions based on its own criteria.</p>
        <p className="font-semibold font-inter my-2">5.2 Payment</p>
        <p className="indent-20 my-5 text-justify">The Organization agrees to pay vendors for goods or services provided in accordance with the agreed-upon terms and conditions.</p>
        {/* 6 */}
        <p className="font-bold font-poppins text-3xl my-3 mt-10">6. Use of VMS</p>
        <p className="font-semibold font-inter my-2">6.1 Access and Usage</p>
        <p className="indent-20 my-5 text-justify">Both Vendors and Organizations agree to use the VMS for its intended purpose and refrain from any misuse, unauthorized access, or disruptive activities.</p>
        <p className="font-semibold font-inter my-2">6.2 Data Protection</p>
        <p className="indent-20 my-5 text-justify">Vendors and Organizations must adhere to the VMS's privacy policy and protect any personal or confidential information shared through the system.</p>

        {/* 7 */}
        <p className="font-bold font-poppins text-3xl my-3 mt-10">7. Intellectual Property</p>
        <p className="indent-20 my-5 text-justify">Any content, materials, or intellectual property provided through the VMS are protected by copyright and other intellectual property laws. Users may not use, reproduce, or distribute such content without proper authorization.</p>
        {/* 8 */}
        <p className="font-bold font-poppins text-3xl my-3 mt-10">8. Limitation of Liability</p>
        <p className="indent-20 my-5 text-justify">To the extent permitted by law, Delta's shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use of the VMS.</p>
        {/* 9 */}
        <p className="font-bold font-poppins text-3xl my-3 mt-10">9. Termination</p>
        <p className="indent-20 my-5 text-justify">Either party may terminate its use of the VMS at any time. Termination does not relieve either party of any obligations or liabilities accrued prior to termination.</p>

        {/* 10 */}
        <p className="font-bold font-poppins text-3xl my-3 mt-10">10. Changes to Terms and Conditions</p>
        <p className="indent-20 my-5 text-justify">Delta's reserves the right to update or modify these Terms and Conditions at any time. Users will be notified of any significant changes.</p>

        {/* 11k */}
        <p className="font-bold font-poppins text-3xl my-3 mt-10">11. Governing Law</p>
        <p className="indent-20 my-5 text-justify">These Terms and Conditions are governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.</p>
      </div>
      {/* <div className="mx-32 px-32 font-inter">
        
        <p className="leading-7 my-4">
          We at Paranthaman Ltd. d/b/a Delta (“<b>Delta</b>“, “<b>us</b>“, “<b>we</b>“, or “<b>our</b>“) recognize and respect the importance of maintaining the privacy of our Customers and their Personnel. This Privacy Notice describes the types of Personal Data (as defined below) we collect from you when you visit our website (“<b>Site</b>“) and/or use our Platform or App (collectively, the “<b>Services</b>“), and also how we collect, process, transfer, store and disclose such Personal Data. It also describes how you are able to control certain uses of the Personal Data. If not otherwise defined herein, capitalized terms have the meaning given to them in the Terms of Service, available at (“<b>Terms</b>“). “<b>You</b>” means any adult user of the Site, App, Platform and/or Services.
        </p>
        <p className="leading-7 my-4">
          “<b>Personal Data</b>” means any information that refers to, is related to, or is associated with an identified or identifiable individual or household.
        </p>
        <p className="leading-7 my-4">
          Our Role:
        </p>
        <p className="leading-7 my-4 ">
          – Data Processor. When we collect, process and manage Personal Data in the context of providing Services to our business customer (“Customer”), our Customer is the data controller with respect to such Personal Data and we are the data processor. This includes Personal Data uploaded to our Platform by our Customers’ employees, service providers and independent contractors (“Customer Data”).
        </p>
        <p className="leading-7 my-4 ">
          Our processing of such Customer Data on behalf and under the instruction of the respective Customer is governed by our Data Processing Addendum with them. For more information, please refer to Section 11 below.
        </p>
        <p className="leading-7 my-4 ">
          This Privacy Notice– which describes Delta’s independent privacy and data processing practices as a “data controller” – does not apply to the processing of Customer Data and is detailed here for completeness and informational purposes only. If you have any questions or requests regarding Customer Data please contact your Account Administrator directly.
        </p>
        <p className="leading-7 my-4 ">
          – Controller. When we process Personal Data of Account Owners and Administrators (excluding Customer Data, as detailed above), and visitors to our websites, participants at our events, and any other prospective customer, certain user data or partner, we are the data controller.
        </p>
        <p className="leading-7 my-4 ">
          Representative:
        </p>
        <p className="leading-7 my-4 ">
          – Maetzler Rechtsanwalts GmbH & Co KG (Prighter) has been designated as Delta’s representative in the European Union for data protection matters pursuant to Article 27 of the GDPR. Maetzler Rechtsanwalts GmbH & Co KG may be contacted only on matters related to the processing of Personal Data in the EU. To make such an inquiry, please contact Maetzler Rechtsanwalts GmbH & Co KG through this contact form: https://prighter.com/q/14267474.
        </p>
        <p className="leading-7 my-4 ">
          – Prighter Ltd has been designated as Delta’s representative in the United Kingdom for data protection matters pursuant to Article 27 of the UK-GDPR. Prighter Ltd may be contacted only on matters related to the processing of Personal Data in the UK. To make such an inquiry, please contact Prighter Ltd. through this contact form: https://prighter.com/q/14267474.
        </p>
        <p className="leading-7 my-4 ">
          <b className="font-poppins">Security :</b> We have implemented and maintain appropriate technical and organization security measures, policies and procedures designed to reduce the risk of accidental destruction or loss, or the unauthorized disclosure or access to Personal Data appropriate to the nature of such data. The measures we take include:
        </p>
        <p className="leading-7 my-4 ">
          <b className="font-poppins">Safeguards</b> – The physical, electronic, and procedural safeguards we employ to protect your Personal Data include secure servers, firewalls, antivirus, and SSL encryption of data.
        </p>
        <p className="leading-7 my-4 ">
          <b className="font-poppins">Access Control</b> – We dedicate efforts for a proper management of system entries and limit access only to authorized personnel on a need to know basis of least privilege rules, review permissions quarterly, and revoke access immediately after termination of our employees.
        </p>
        <p className="leading-7 my-4 ">
          <b className="font-poppins">Internal Policies</b> – We maintain and regularly review and update our privacy related and information security policies.
        </p>
        <p className="leading-7 my-4 ">
          <b className="font-poppins">Personnel</b> – We require new employees of ours to sign non-disclosure agreements according to applicable law and industry customary practice.
        </p>
        <p className="leading-7 my-4 ">
          <b className="font-poppins">Encryption</b> – We encrypt the data in transit using secure TLS/ SSL protocols.
        </p>
        <p className="leading-7 my-4 ">
          <b className="font-poppins">Database Backup</b> – Our databases are backed up on a periodic basis for certain data and are verified regularly. Backups are encrypted and stored within the production environment to preserve their confidentiality and integrity, are tested regularly to ensure availability, and are accessible only by authorized personnel.
        </p>
        <p className="leading-7 my-4 ">
          While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee that our Sites, Apps, Platform, and Service will be immune from any malfunctions, unlawful interceptions or access, or other kinds of abuse and misuse.
        </p>
        <p className="leading-7 my-4 ">

        </p>
      </div> */}
      <div className="h-[330px] my-10 bg-indigo2 flex flex-col items-start px-32 justify-center w-full">
        <p className="font-poppins my-5 text-3xl font-bold text-white">Connect your deskless workers with Delta's Vendor Management app!</p>
        <button className="flex group justify-center items-center border-2 py-3 px-5 font-poppins text-xl font-semibold rounded-[30px] my-5 border-white text-white hover:text-indigo2 hover:bg-white duration-300">Open a free account <BiRightArrowAlt className="group-hover:translate-x-2 duration-300 " /> </button>
      </div>
    </div>
  )
}

export default Terms