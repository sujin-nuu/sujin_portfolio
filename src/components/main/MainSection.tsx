import { sectionT } from "src/modules";
import styled from "styled-components";
import { MainCard } from "./MainCard";

interface MainSectionProps {
    data?: sectionT;
}

const testData = [
    {
        title: "test"
    },
    {
        title: "test2"
    }
]

export const MainSection = (props: MainSectionProps) => {
    const { data } = props;

    return (
        <StyledSectionContainer>
            <StyledSectionHeader>
                <h2>{data?.title}</h2>
            </StyledSectionHeader>
            <div>
            {
                testData.map((data: any) => {
                    return (
                        <MainCard
                            data={data}
                        />
                    )
                })
            }
            </div>
        </StyledSectionContainer>
    )
}

const StyledSectionContainer = styled.div`
    width: 100%;
`

const StyledSectionHeader = styled.div`
    margin-top: 2rem;
    margin-left: 5rem;
    height: 5rem;
`