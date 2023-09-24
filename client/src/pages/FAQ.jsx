import { BiRightArrowAlt } from "react-icons/bi"
import down from '../assets/imgs/down.svg'
import { useState } from "react"
import Faq from "../components/Faq"
const FAQ = () => {
    const [showFaq, setShowFaq] = useState(1)
    const vendorFaq = [
        {
            id: 1,
            question: "What is a Vendor Management System (VMS)?",
            answer: "A Vendor Management System (VMS) is a software solution that helps vendors streamline their interactions with organizations, including procurement, invoicing, and communication."
        },
        {
            id: 2,
            question: "Why should my company use a VMS?",
            answer: "Using a VMS can simplify your relationship with multiple clients, centralize communication, and improve invoice processing, leading to faster payments and reduced administrative burden."
        },
        {
            id: 3,
            question: "How do I get started with a VMS?",
            answer: "Typically, your clients will onboard you onto their VMS platform. You'll receive login credentials and training to use the system.",
        },
        {
            id: 4,
            question: "What are the key benefits of using a VMS as a vendor?",
            answer: "Key benefits include increased efficiency, improved communication, faster payments, and enhanced visibility into your work with different organizations.",
        },
        {
            id: 5,
            question: "Is my data secure within a VMS?",
            answer: "VMS providers prioritize data security. They often use encryption, access controls, and compliance measures to protect your information.",
        },
        {
            id: 6,
            question: "How do I submit invoices through a VMS?",
            answer: "Most VMS platforms have a dedicated portal where you can upload and submit your invoices. You'll receive notifications when invoices are approved or require revisions.",
        },
        {
            id: 7,
            question: "How can I communicate with my clients through a VMS?",
            answer: "VMS platforms typically offer messaging and collaboration features, allowing you to communicate directly with your clients.",
        },
    ]
    const orgFaq = [
        {
            id: 8,
            question: "What is the primary purpose of a Vendor Management System (VMS) for organizations?",
            answer: "A VMS helps organizations efficiently manage their vendor relationships, streamline procurement processes, and ensure compliance.",
        },
        {
            id: 9,
            question: "How does a VMS improve vendor management?",
            answer: "VMS systems provide centralized vendor information, automate workflows, enhance communication, and offer data analytics for better decision-making.",
        },
        {
            id: 10,
            question: "Is it difficult to implement a VMS in our organization?",
            answer: "Implementation complexity varies, but with proper planning and support from the VMS provider, integration can be relatively smooth.",
        },
        {
            id: 11,
            question: "What benefits can organizations expect from using a VMS?",
            answer: "Organizations can expect cost savings, improved vendor performance, reduced risks, better compliance, and enhanced transparency in vendor relationships.",
        },
        {
            id: 12,
            question: "Can we customize a VMS to meet our organization's specific needs?",
            answer: "Yes, many VMS solutions offer customization options to align with your organization's unique requirements and workflows.",
        },
    ]
    return (
        <div className='mt-20 min-h-full flex flex-col'>
            <div className="h-[210px] my-5 flex justify-center items-center w-full bg-lightGray1">
                <p className="font-poppins text-5xl font-extrabold text-blue ">Frequently Asked Questions</p>
            </div>
            <div className="mx-32 px-32 font-inter">
                <p className="text-start">Last Updated: 23 Sep 2023</p>
                <div className="flex flex-col  justify-center items-center my-10">
                    {vendorFaq.map((faq) => {
                        return (
                            <Faq key={faq.id} faq={faq} />
                        );
                    })}
                </div>
                <div className="flex flex-col  justify-center items-center mt-24">
                    {orgFaq.map((faq) => {
                        return (
                            <Faq key={faq.id} faq={faq} />
                        );
                    })}
                </div>
            </div>
            <div className="h-[330px] my-10 bg-indigo2 flex flex-col items-start px-32 justify-center w-full">
                <p className="font-poppins my-5 text-3xl font-bold text-white">Connect your deskless workers with Delta's Vendor Management app!</p>
                <button className="flex group justify-center items-center border-2 py-3 px-5 font-poppins text-xl font-semibold rounded-[30px] my-5 border-white text-white hover:text-indigo2 hover:bg-white duration-300">Open a free account <BiRightArrowAlt className="group-hover:translate-x-2 duration-300 " /> </button>
            </div>
        </div>
    )
}

export default FAQ