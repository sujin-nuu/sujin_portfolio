import { Footer } from "src/components";
import { MainCareerSection, MainContactSection, MainProjectSection, MainSplash } from "src/components/main";
import styled from "styled-components";

const Main = () => {
    return (
        <StyledMainContainer>
            <MainSplash />
            <MainProjectSection />
            <MainCareerSection />
            <MainContactSection />
            <div  style={{marginBottom: "2rem"}}/>
            <Footer />
        </StyledMainContainer>
    )
}
export default Main;

const StyledMainContainer = styled.div`
    width: 100%;
    height: 100%;
`