import { sectionT } from "src/modules";
import styled from "styled-components"

interface MainCardProps{
    data: sectionT;
}
export const MainCard = (props: MainCardProps ) => {
    const {} = props;
    return (
        <StyledCardContainer>
            <StyledCardLabelContainer>
                <p>

                </p>
            </StyledCardLabelContainer>
        </StyledCardContainer>
    )
}

const StyledCardContainer = styled.div`
    width: 15rem;
    border-radius: 20px;
`

const StyledCardLabelContainer = styled.div` 
    position: relative;
    z-index: 2;
    padding: 1rem;
    width: 20rem;
    font-weight: 600;
    font-size: 1.1rem;
`