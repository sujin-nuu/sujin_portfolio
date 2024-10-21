import styled from "styled-components"

export const MainProjectSection = () => {
    return (
        <StyledSectionContainer
            key={0}
        >
            <StyledSectionHeader
                key={0}>
                <h2>Project</h2>
            </StyledSectionHeader>
        </StyledSectionContainer>

    )
}

const StyledSectionContainer = styled.div`
    width: 100%;
`

const StyledSectionHeader = styled.div`
    margin: 2rem 5rem;
`