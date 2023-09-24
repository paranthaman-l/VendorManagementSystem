import { Button, Menu, MenuHandler, MenuItem, MenuList, Option, Select, Step, Stepper, Textarea } from "@material-tailwind/react";
import { useCountries } from "use-react-countries";
import upload from '../assets/imgs/upload.svg'
import file from '../assets/imgs/file.svg'
import deleteFile from '../assets/imgs/deleteFile.svg'
import plus from '../assets/imgs/plus.svg'
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVendor } from "../slices/vendorSlice";
import { addNewVendor } from "../slices/adminSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const GetDetails = () => {
  const vendor = useSelector(getVendor)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { countries } = useCountries();
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  const [country, setCountry] = React.useState(0);
  const { name, flags, countryCallingCode } = countries[country];
  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);
  const [inputFields, setInputFields] = useState(['']);
  const handleDelete = (id) => {
    const filter = inputFields.filter((val, i) => i !== id);
    setInputFields(filter);
  }
  const services = [
    "Information Technology (IT) Services",
    "Marketing and Advertising Services",
    "Financial and Accounting Services",
    "Human Resources (HR) Services",
    "Legal Services",
    "Logistics and Supply Chain Services",
    "Real Estate and Property Services",
    "Healthcare Services",
    "Event Planning and Hospitality Services",
    "Maintenance and Repair Services",
    "Consulting Services",
    "Environmental and Sustainability Services",
    "Graphic Design and Creative Services",
    "Security Services",
    "Education and Training Services",
    "Telecommunications Services",
    "Manufacturing and Production Services",
    "Research and Development Services",
    "Transportation and Travel Services",
    "Agricultural and Farming Services"
  ]
  const employees = [
    "1-10", "10-20", "20-50", "50-100", "100+"
  ]
  const returns = [
    "1k-10k", "10k-200k", "200k-500k", "500k-1000k", "1000+"
  ]
  const [data,setData] = useState({})
  const activeStepStyle0 = {
    backgroundColor: (activeStep === 0 || activeStep >= 0) ? "#2998FF" : "#f8f8f8",
  };
  const activeStepStyle1 = {
    backgroundColor: (activeStep === 1 || activeStep >= 1) ? "#2998FF" : "#e0e0e0",
  };
  const activeStepStyle2 = {
    backgroundColor: (activeStep === 2 || activeStep >= 2) ? "#2998FF" : "#e0e0e0",
  };
  const activeStepStyle3 = {
    backgroundColor: (activeStep === 3 || activeStep >= 3) ? "#2998FF" : "#e0e0e0",
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({...data,[name]:value});
  }
  const handleSubmit = () =>{
    const newVendor = {...vendor, ...data}
    toast.success("SignUp Success");
    dispatch(addNewVendor(newVendor));
    setTimeout(() => {
      navigate('/login')
    }, 1000);
  }
  return (
    <div className="min-h-screen bg-lightGray1 flex flex-col items-center justify-center">
      <div className="w-[60%] mx-auto z-10 py-4 px-8 mt-20">
        <Stepper
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
          activeLineClassName="bg-blue"
          lineClassName="bg-[#e0e0e0]"
        >
          <Step style={activeStepStyle0}>1</Step>
          <Step style={activeStepStyle1}>2</Step>
          <Step style={activeStepStyle2}>3</Step>
          <Step style={activeStepStyle3}>4</Step>
        </Stepper>
        <div className="flex flex-col items-center ">
          {
            activeStep === 0 ?
              <div className="flex flex-col pt-10  h-[400px] overflow-scroll">
                <p className="pb-5 font-openSans text-xl font-semibold ">Company Info</p>
                <input
                  type="text"
                  className={`border-gray  focus:border-blue focus:placeholder:text-[#9ca3af] ${"" && "border-inputErrorRed text-inputErrorRed placeholder:text-inputErrorRed"} text-darkGray  h-[50px] px-[20px] py-[10px] text-lg w-96 rounded-lg outline-none border-[2.0px] `}
                  placeholder="Company Name"
                  name="companyName"
                  id="companyName"
                  onChange={handleChange}
                />
                <div className="flex my-6 items-center">
                  <Menu placement="bottom-start">
                    <MenuHandler>
                      <Button
                        ripple={false}
                        variant="text"
                        color="blue-gray"
                        className="flex h-12 w-20 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
                      >
                        <img
                          src={flags.svg}
                          alt={name}
                          className="h-4 w-4 rounded-full object-cover"
                        />
                        {countryCallingCode}
                      </Button>
                    </MenuHandler>
                    <MenuList className="max-h-[20rem] max-w-[18rem]">
                      {countries.map(({ name, flags, countryCallingCode }, index) => {
                        return (
                          <MenuItem
                            key={name}
                            value={name}
                            className="flex items-center gap-2"
                            onClick={() => setCountry(index)}
                          >
                            <img
                              src={flags.svg}
                              alt={name}
                              className="h-5 w-5 rounded-full object-cover"
                            />
                            {name} <span className="ml-auto">{countryCallingCode}</span>
                          </MenuItem>
                        );
                      })}
                    </MenuList>
                  </Menu>
                  <input
                    type="text"
                    className={`border-gray focus:border-blue focus:placeholder:text-[#9ca3af] ${"" && "border-inputErrorRed text-inputErrorRed placeholder:text-inputErrorRed"} text-darkGray h-[50px] px-[20px] py-[10px] text-lg min-w-[305px] rounded-r-lg outline-none border-[2.0px] `}
                    placeholder="Mobile Number"
                    name="contact"
                    id="contact"
                    onChange={handleChange}
                  />
                </div>
                <div className="w-96">
                  <Textarea name="address" onChange={handleChange} label="Address" />
                </div>
              </div>
              : activeStep === 1 ?
                <div className="flex flex-col pt-10 h-[400px] overflow-scroll">
                  <p className="pb-5 font-openSans text-xl font-semibold ">Certifications</p>
                  <div className="container">
                    <div className="header">
                      <img src={upload} alt="" />
                      <p>Browse File to upload!</p>
                    </div>
                    <label htmlFor="file" className="footer">
                      <img src={file} alt="" />
                      <p>Not selected file</p>
                      <img src={deleteFile} alt="" />
                    </label>
                    <input  id="file" type="file" />
                  </div>
                </div>
                : activeStep === 2 ?
                  <div className="flex flex-col pt-10 h-[400px] w-[49%]">
                    <p className="pb-5 font-openSans text-xl font-semibold ">Service Info</p>
                    <Select onChange={handleChange} name="serviceCategory" size="xl" label="Select Service Category" className="h-12">
                      {services.map((service, i) => {
                        return (
                          <Option key={i}>{service}</Option>
                        )
                      })}
                    </Select>
                    <div className="relative mt-5 h-96 overflow-y-scroll  overflow-x-hidden">
                      {inputFields.map((id, i) => {
                        return (
                          <input
                            key={i}
                            type="text"
                            className={`border-gray my-3  focus:border-blue focus:placeholder:text-[#9ca3af] ${"" && "border-inputErrorRed text-inputErrorRed placeholder:text-inputErrorRed"} text-darkGray  h-[50px] px-[20px] py-[10px] text-lg w-96 rounded-lg outline-none border-[2.0px] `}
                            placeholder="Service"
                            name="service"
                            id="service"
                            onDoubleClick={() => handleDelete(i)}
                            onChange={handleChange}
                          />
                        )
                      })}
                    </div>
                    <button onClick={() => setInputFields([...inputFields, ''])} className='flex mt-5  justify-center items-center bg-blue hover:bg-hoverBlue py-[9px] px-3  text-white font-openSans hover:border-blue mx-2 rounded-2xl'><img src={plus} className='mx-2' alt="" />Add Service</button>
                  </div>
                  :
                  <div className="flex flex-col justify-start pt-10 h-[400px] overflow-hidden  w-[49%]">
                    <p className="pb-5 font-openSans my-10 text-xl font-semibold ">Additional Info</p>
                    <Select  size="xl" label="Select Employees" className=" flex justify-center">
                      {employees.map((employee, i) => {
                        return (
                          <Option key={i}>{employee}</Option>
                        )
                      })}
                    </Select>
                    <br /> <br />
                    <Select size="xl" label="Select Monthly TurnOver" className=" flex justify-center">
                      {returns.map((service, i) => {
                        return (
                          <Option key={i}>{service}</Option>
                        )
                      })}
                    </Select>
                  </div>
          }
        </div>
        <div className="mt-16 flex  justify-evenly">
          <Button className="bg-blue" onClick={handlePrev} disabled={isFirstStep}>
            Prev
          </Button>
          <Button className="bg-blue"  onClick={isLastStep ? handleSubmit :handleNext}>
            {isLastStep ? "Done" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
}
export default GetDetails;