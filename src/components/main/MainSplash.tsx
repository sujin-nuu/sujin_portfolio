import styled from "styled-components"
import arrowPath from 'src/assets/img/arrow.png';

export const MainSplash = () => {

    return (
        <StyledSplashContainer>
            <StyledSplashContent>
                <p>
                    PORTFOLIO TEST
                </p>
                
            </StyledSplashContent>
            <div className="flex-center">
                <StyledArrowDiv >
                    <img src={arrowPath} />
                </StyledArrowDiv>
            </div>
        </StyledSplashContainer>
    )
}

const StyledSplashContainer = styled.div`
    padding: 3rem 2rem;
    background-color: #e9e9e9;
    color: white;
    text-shadow: 1px 2px 2px #69696958;
    font-weight: 600;
    font-size: 2rem;
    text-align: center;
    height: 45rem;
    width: 100%;
`

const StyledSplashContent = styled.div`
    width: 100%;
    height: 35rem;
`

const StyledArrowDiv = styled.div`
    width: 5rem;
    height: 5rem;
    animation: 0.5s ease 0.5s infinite alternate none running arrow;
    @keyframes arrow {
        0% {
            padding-top: 0px;
        }
        100% {
            padding-top: 20px;
        }
    }
    img{
        width: 3rem;
        height: 3rem;
    }
`