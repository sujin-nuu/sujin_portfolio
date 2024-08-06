import { sectionT } from "src/modules";
import styled from "styled-components"

interface MainCardProps {
    data: any;
}
export const MainCard = (props: MainCardProps) => {
    const { data } = props;
    return (
        <StyledCardContainer>
            <StyledCardLabelContainer>
                <StyledLabel>
                    {data?.title}
                </StyledLabel>
            </StyledCardLabelContainer>
        </StyledCardContainer>
    )
}

const StyledCardContainer = styled.div`
    width: calc(33% - 12px);
    border-radius: 20px;
    height: 397px;
    border-radius: 16px;
    background-color: #89dcff;
    display: inline-block;
    margin: 0 10px 0 10px;    
    position: relative;
`

const StyledCardLabelContainer = styled.span` 
    padding: 0 0 12px 12px;
    border-radius: 0 0 0 20px;
    background-color: white;
    text-align: center;
    position: absolute;
    line-height: 1.5;
    right: -2px;
    top: -2px;
    width: 168px;
    ::before{
        content: "";
        display: block;
        position: absolute;
        width: 18px;
        height: 18px;
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cpath d='M0 2c8.8 0 16 7.2 16 16h2V0H0v2z' fill='%23fff' fill-rule='evenodd' clip-rule='evenodd'/%3E%3C/svg%3E");
        background-size: 100% auto;
        background-position: 50%;
        background-repeat: no-repeat;
        left: -16px;        
        top: 0;
    }
    ::after{
        content: "";
        display: block;
        position: absolute;
        width: 18px;
        height: 18px;
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cpath d='M0 2c8.8 0 16 7.2 16 16h2V0H0v2z' fill='%23fff' fill-rule='evenodd' clip-rule='evenodd'/%3E%3C/svg%3E");
        background-size: 100% auto;
        background-position: 50%;
        background-repeat: no-repeat;
        bottom: -16px;
        right: 0;
    } 
`

const StyledLabel = styled.span`
    width: 140px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    border-radius: 20px;
    background-color : #89dcff;
    margin: 2px 2px 0 0;
    color: #000;
    text-align: center;
    display: inline-block;
    margin-right: 5px;
`