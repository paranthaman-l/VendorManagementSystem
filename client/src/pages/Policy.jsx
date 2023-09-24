/* eslint-disable react/jsx-no-target-blank */
import { BiRightArrowAlt } from "react-icons/bi"

const Policy = () => {
  const contents = [
    {
      id: 1,
      title: "Introduction",
      content: [
        {
          id: 1.1,
          title: "Purpose of the Privacy Policy",
          value: `This Privacy Policy outlines how [Your Organization Name] ("we" , "us ",  or "our") collects, uses, shares, and safeguards your information in connection with our Vendor Management System (VMS). We are committed to protecting your privacy and ensuring the security of your information.`
        },
        {
          id: 1.2,
          title: "Scope",
          value: "This Privacy Policy applies to all users of our VMS, including vendors, employees, and other individuals who interact with our system."
        }
      ]
    },
    {
      id: 2,
      title: "Information We Collect",
      content: [
        {
          id: 1.1,
          title: "Personal Information",
          value: `This Privacy Policy outlines how [Your Organization Name] ("we" , "us ",  or "our") collects, uses, shares, and safeguards your information in connection with our Vendor Management System (VMS). We are committed to protecting your privacy and ensuring the security of your information.`
        },
        {
          id: 1.2,
          title: "Scope",
          value: "This Privacy Policy applies to all users of our VMS, including vendors, employees, and other individuals who interact with our system."
        }
      ]
    },
  ]
  return (
    <div className='mt-20 min-h-full flex flex-col'>
      <div className="h-[210px] my-5 flex justify-center items-center w-full bg-lightGray1">
        <p className="font-poppins text-5xl font-extrabold text-blue ">Privacy Policy</p>
      </div>
      <div className="mx-32 px-32 font-inter">
        <p className="text-start">Last Updated: 23 Sep 2023</p>
        {/* 1 */}
        <p className="font-bold font-poppins text-3xl my-3 mt-9">1. Introduction</p>
        <p className="font-semibold font-inter my-2">1.1 Purpose of the Privacy Policy</p>
        <p className="indent-20 my-5 text-justify">This Privacy Policy outlines how Delta ("we", "us", or "our") collects, uses, shares, and safeguards your information in connection with our Vendor Management System (VMS). We are committed to protecting your privacy and ensuring the security of your information.</p>
        <p className="font-semibold font-inter my-2">1.2 Scope</p>
        <p className="indent-20 my-5 text-justify">This Privacy Policy applies to all users of our VMS, including vendors, employees, and other individuals who interact with our system.</p>
        {/* 2 */}
        <p className="font-bold font-poppins text-3xl my-3 mt-9">2. Information We Collect</p>
        <p className="font-semibold font-inter my-2">2.1 Personal Information</p>
        <p className="indent-20 my-5 text-justify">In the course of using our VMS, we may collect the following types of personal information:</p>
        <ul className="list-disc mx-10">
          <li>Contact Information (e.g., name, email address, phone number)</li>
          <li>Vendor Details (e.g., company name, address)</li>
          <li>Financial Information (e.g., bank account details for payment processing)</li>
        </ul>
        <p className="font-semibold font-inter my-2">2.2 Non-Personal Information</p>
        <p className="indent-20 my-5 text-justify">We may also collect non-personal information, such as aggregated and anonymized data, for statistical analysis and system improvement.</p>
        {/* 3 */}
        <p className="font-bold font-poppins text-3xl my-3 mt-10">3. How We Use Your Information</p>
        <p className="font-semibold font-inter my-2">3.1 Vendor Management</p>
        <p className="indent-20 my-5 text-justify">We use your information to manage and facilitate vendor relationships, including but not limited to vendor onboarding, performance tracking, and payment processing.</p>
        <p className="font-semibold font-inter my-2">3.2 Communication</p>
        <p className="indent-20 my-5 text-justify">We may use your contact information to communicate with you regarding VMS-related matters, updates, and support.</p>
        <p className="font-semibold font-inter my-2">3.3 Compliance and Legal Obligations</p>
        <p className="indent-20 my-5 text-justify">We may process your information to comply with legal obligations, such as tax reporting and regulatory requirements.</p>

        {/* 4 */}
        <p className="font-bold font-poppins text-3xl my-3 mt-10">4. Data Security</p>
        <p className="font-semibold font-inter my-2">4.1 Data Encryption</p>
        <p className="indent-20 my-5 text-justify">We employ industry-standard encryption protocols to protect your information during transmission and storage.</p>
        <p className="font-semibold font-inter my-2">4.2 Access Control</p>
        <p className="indent-20 my-5 text-justify">Access to your information within our organization is restricted to authorized personnel only, and we implement strict access controls and authentication mechanisms.</p>
        <p className="font-semibold font-inter my-2">4.3 Regular Security Audits</p>
        <p className="indent-20 my-5 text-justify">We conduct regular security audits and assessments to identify and address potential vulnerabilities.</p>
        {/* 5 */}
        <p className="font-bold font-poppins text-3xl my-3 mt-10">5. Your Rights</p>
        <p className="font-semibold font-inter my-2">5.1 Access and Rectification</p>
        <p className="indent-20 my-5 text-justify">You have the right to access and correct your personal information stored in our VMS.</p>
        <p className="font-semibold font-inter my-2">5.2 Data Portability</p>
        <p className="indent-20 my-5 text-justify">You can request a copy of your data in a structured, machine-readable format.</p>
        <p className="font-semibold font-inter my-2">5.3 Consent Withdrawal</p>
        <p className="indent-20 my-5 text-justify">You may withdraw your consent for the processing of your information at any time.</p>
        <p className="font-semibold font-inter my-2">5.4 Complaints</p>
        <p className="indent-20 my-5 text-justify">If you have concerns about how your data is being handled, you have the right to lodge a complaint with our Data Protection Officer or relevant supervisory authorities.</p>

        {/* 6 */}
        <p className="font-bold font-poppins text-3xl my-3 mt-10">6. Sharing Your Information</p>
        <p className="font-semibold font-inter my-2">6.1 Third-Party Vendors</p>
        <p className="indent-20 my-5 text-justify">We may share your information with third-party vendors, contractors, or service providers who assist us in providing VMS-related services.</p>
        <p className="font-semibold font-inter my-2">6.2 Legal Requirements</p>
        <p className="indent-20 my-5 text-justify">We may disclose your information when required by law or to protect our legal rights.</p>

        {/* 7 */}
        <p className="font-bold font-poppins text-3xl my-3 mt-10">7. Data Retention</p>
        <p className="font-semibold font-inter my-2">7.1 Retention Period</p>
        <p className="indent-20 my-5 text-justify">We retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by applicable laws.</p>
        <p className="font-semibold font-inter my-2">7.2 Data Deletion</p>
        <p className="indent-20 my-5 text-justify">Upon your request or when data is no longer needed, we will securely delete or anonymize your information.</p>
        {/* 8 */}
        <p className="font-bold font-poppins text-3xl my-3 mt-10">8. Changes to this Privacy Policy</p>
        <p className="indent-20 my-5 text-justify">We may update this Privacy Policy to reflect changes in our practices or legal requirements. We will notify you of any significant changes.</p>
        {/* 9 */}
        <p className="font-bold font-poppins text-3xl my-3 mt-10">9. Contact Information</p>
        <p className="indent-20 my-5 text-justify">If you have any questions or concerns regarding this Privacy Policy or our VMS, please contact us at <a target="_blank" href="mailto:deltavms1612@gmail.com">deltavms1612@gmail.com</a> or Contact : +91 962647XXX.</p>

        {/* 10 */}
        <p className="font-bold font-poppins text-3xl my-3 mt-10">10. Data Breach Notification</p>
        <p className="indent-20 my-5 text-justify">In the event of a data breach that could result in a risk to your rights and freedoms, we will notify you and relevant authorities as required by applicable data protection laws.</p>
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

export default Policy