import styled from "styled-components"
import { Footer } from "../common"
//import arrowPath from 'src/assets/img/arrow.png';

export const MainSplash = () => {

    return (
        <>
            <StyledSplashContainer>
                <StyledSplashContent>
                    <h2>발전하는 개발자</h2>
                    <p>김수진</p>
                </StyledSplashContent>
                <StyledContentsContainer>
                    <StyledContents>

                    </StyledContents>
                </StyledContentsContainer>
            </StyledSplashContainer>
        </>
    )
}

const StyledSplashContainer = styled.div`
    padding: 3rem 2rem;
    background-color: #ffffff;
    font-weight: 600;
    font-size: 2rem;
    text-align: center;
    width: 100%;
`

const StyledSplashContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 7rem;
    font-family: 'Binggrae-Two';
    color: black;
    margin-bottom: 3rem;
`

const StyledContentsContainer = styled.div`
    display: flex;
    justify-content: center;
`

const StyledContents = styled.div`
    width: 90%;
    background-color: black;
    height: 50rem;
`

// const StyledArrowDiv = styled.div`
//     width: 5rem;
//     height: 5rem;
//     animation: 0.5s ease 0.5s infinite alternate none running arrow;
//     @keyframes arrow {
//         0% {
//             padding-top: 0px;
//         }
//         100% {
//             padding-top: 20px;
//         }
//     }
//     img{
//         width: 3rem;
//         height: 3rem;
//     }
// `