import { MainCard, MainSplash } from "src/components/main";
import { mainSectionData, sectionT } from "src/modules";
import styled from "styled-components";

const Main = () => {
    return (
        <StyledMainContainer>
            <MainSplash />
            {
                mainSectionData.map((data: sectionT) => {
                    return (
                        <MainCard
                            data={data}
                        />
                    )
                })
            }
        </StyledMainContainer>
    )
}
export default Main;

const StyledMainContainer = styled.div`
    width: 100%;
    height: 100%;
`