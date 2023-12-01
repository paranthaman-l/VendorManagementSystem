import Sidebar from "./Sidebar"
import contract from '../../assets/imgs/contract1.png'
import search from '../../assets/imgs/search.svg'
import { Card, Typography } from "@material-tailwind/react"
import { useSelector } from "react-redux"
import { getVendor } from "../../slices/vendorSlice"
const Contracts = () => {
    const vendor = useSelector(getVendor);
    const TABLE_HEAD = ["S.No", "Title", "Description", "contract Value", "Start date", "End date", "Payment"];
    const TABLE_ROWS = ["S.No", "Title", "Description", "contract Value", "Start date", "End date", "Payment"];
    return (
        <div className='mt-20 flex flex-col min-h-screen bg-lightGray2'>
            <Sidebar />
            <div className="ml-60 mt-5 flex flex-col">
                <div className="flex justify-between px-10 mr-5 py-3 rounded-xl bg-white shadow-xl">
                    <div className="flex justify-center items-center">
                        <img className='h-16 w-16 mr-5' src={contract} alt="" />
                        <p className='font-openSans text-2xl my-1 '>Contracts</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="flex mx-5 justify-between min-w-[300px] border-[2px] rounded-3xl border-darkGray border-opacity-20 ">
                            <input className="px-2 w-full ml-3 py-2 outline-none bg-transparent" type="text" placeholder="Search" />
                            <img className="mr-2" src={search} alt="" />
                        </div>
                    </div>
                </div>
                {/* <div className="flex my-6 justify-between px-10 mr-5 py-3 rounded-xl bg-white shadow-xl"> */}
                    <Card className="flex my-6 justify-between px-10 mr-5 py-3 rounded-xl bg-white shadow-xl h-full overflow-scroll mt-10 w-[98%]">
                        <table className="w-full min-w-max table text-left">
                            <thead>
                                <tr>
                                    {TABLE_HEAD.map((head) => (
                                        <th
                                            key={head}
                                            className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                        >
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal leading-none opacity-70"
                                            >
                                                {head}
                                            </Typography>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {vendor?.contracts?.map(({ contractTitle, contractDescription, contractValue, startDate, endDate, paymentStatus }, index) => {
                                    const isLast = index === TABLE_ROWS.length - 1;
                                    const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
                                    return (
                                        <tr key={name}>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {index + 1}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {contractTitle}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {contractDescription}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {contractValue}
                                                </Typography>
                                            </td>

                                            {/* <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {service}
                      </Typography>
                    </td> */}
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {startDate}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {endDate}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {paymentStatus ? "Paid" : "Not paid"}
                                                </Typography>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </Card>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Contracts