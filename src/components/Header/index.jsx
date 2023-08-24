import { Box } from "./style"

import igniteLogo from '../../assets/ignite-logo.svg'

export function Header() {

    return (
        <>
            <Box>
                <img src={ igniteLogo } alt="logotipo do ignite" />
            </Box>
        </>
    )
}