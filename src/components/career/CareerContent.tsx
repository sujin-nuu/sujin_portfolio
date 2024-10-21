import dayjs from "dayjs"
import { careerSubDataTG, careerSubT, skillStackT } from "src/modules"
import styled from "styled-components"

export const CareerContent = () => {
    return (
        <>
            {
                careerSubDataTG.map((data: careerSubT) => {
                    return (
                        <StyledContactContent>
                            <h4>{data.projTitle}</h4>
                            <p>{dayjs(data.startTerm).format("YYYY.MM")} ~ {dayjs(data.endTerm).format("YYYY.MM")}</p>
                            <p style={{ display: "flex", justifyContent: "right", marginTop: 10 }}>{
                                data.skills?.map((data: skillStackT) => {
                                    return (
                                        <StyledStackBubble>
                                            {data.name}
                                        </StyledStackBubble>
                                    )
                                })
                            }</p>
                        </StyledContactContent>
                    )
                })
            }
        </>
    )
}

const StyledContactContent = styled.div`
    padding: 1rem;
    border-bottom: solid 1px #e9e9e9;
    width: 50rem;
    text-align: right;
`

const StyledStackBubble = styled.div`
    border-radius: 10px;
    border: 1px #e9e9e9 solid;
    padding: 5px;
    font-size: 13px;
    margin: 0 2px;
`