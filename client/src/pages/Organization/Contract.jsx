import { Toaster } from 'react-hot-toast'
import SideBar from './SideBar'
import { Card, Typography } from '@material-tailwind/react'
import { useSelector } from 'react-redux'
import { getOrganization } from '../../slices/organizationSlice'
import ClientNavbar from './Navber'

const Contract = () => {
  const organization = useSelector(getOrganization)
  const TABLE_HEAD = ["S.No", "Title", "Description", "contract Value", "Start date", "End date", "Payment"];
  const TABLE_ROWS = ["S.No", "Title", "Description", "contract Value", "Start date", "End date", "Payment"];
  return (
    <div className='mt-20 flex flex-col min-h-screen bg-lightGray2'>
      <ClientNavbar/>
      <Toaster position='top-right' />
      <SideBar />
      <div className="flex items-start mt-20">
        <Card className="flex ml-80 my-6 justify-between px-10 mr-5 py-3 rounded-xl bg-white shadow-xl h-full overflow-scroll mt-10 w-[80%]">
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
              {organization?.contracts?.map(({ contractTitle, contractDescription, contractValue, startDate, endDate, paymentStatus }, index) => {
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

      </div>
    </div>
  )
}

export default Contract