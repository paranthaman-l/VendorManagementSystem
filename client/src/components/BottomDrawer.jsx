import { Button, Drawer, IconButton, Typography } from '@material-tailwind/react'
import React from 'react'

const BottomDrawer = () => {
    const [openBottom, setOpenBottom] = React.useState(false);
    const openDrawerBottom = () => setOpenBottom(true);
    const closeDrawerBottom = () => setOpenBottom(false);

    return (
        <>
            <Button onClick={openDrawerBottom}>Open Drawer Bottom</Button>

            <Drawer
                placement="bottom"
                open={openBottom}
                onClose={closeDrawerBottom}
                className="p-4"
            >
                <div className="mb-6 flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray">
                        Drawer on Bottom
                    </Typography>
                    <IconButton
                        variant="text"
                        color="blue-gray"
                        onClick={closeDrawerBottom}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </div>
            </Drawer>
        </>
    )
}

export default BottomDrawer