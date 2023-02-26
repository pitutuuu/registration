import { Outlet } from 'react-router-dom';
import "./css/Layout.css"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from "react";

const Layout = () => {

    const [variant, setVariant] = useState("outlined")
    const [variant1, setVariant1] = useState("outlined")

    return (
        <>
            <Outlet />
        <div>
            <Stack spacing={2} direction="column">
                <Button id="login" onMouseOver={() => setVariant("contained")} onMouseOut={() => setVariant("outlined")} variant={variant}>Log in</Button>
                <Button id="sign" onMouseOver={() => setVariant1("contained")} onMouseOut={() => setVariant1("outlined")} variant={variant1}>Sign in</Button>
            </Stack>
                
        </div>
        </>
    )
}

export default Layout;
