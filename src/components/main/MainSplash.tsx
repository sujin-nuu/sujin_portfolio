import styled from "styled-components"
import logo from 'src/assets/img/logo.png';

export const MainSplash = () => {

    return (
        <>
            <div style={{display: "flex", justifyContent:"center", marginTop: "2rem"}}>
                <img src={logo} style={{ width: "50%" }} />
            </div>
        </>
    )
}