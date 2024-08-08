import { sectionT } from "src/modules";
import styled from "styled-components";
import { MainCard } from "./MainCard";
import { useRef, useState } from "react";

interface MainSectionProps {
    data?: sectionT;
}

const testData = [
    {
        key: 0,
        title: "test11111111111111111111111111111111111111111111111"
    },
    {
        key: 1,
        title: "test22222"
    },
    {
        key: 2,
        title: "test3333"
    },
    {
        key: 3,
        title: "test1111"
    },
    {
        key: 4,
        title: "test22222"
    },
    {
        key: 5,
        title: "test3333"
    }
]


export const MainSection = (props: MainSectionProps) => {
    const { data } = props;

    const scrollRef = useRef<any>(null);
    const [isDrag, setIsDrag] = useState(false);
    const [startX, setStartX] = useState(0);

    const onDragStart = (e: { preventDefault: () => void; pageX: any; }) => {
        e.preventDefault();
        setIsDrag(true);
        setStartX(e.pageX + scrollRef.current.scrollLeft);
    };

    const onDragEnd = () => {
        setIsDrag(false);
    };

    const onDragMove = (e: { pageX: number; }) => {
        if (isDrag) {
            scrollRef.current.scrollLeft = startX - e.pageX;
        }
    };

    const throttle = (func: any, ms: any) => {
        let throttled = false;
        return (...args: any) => {
            if (!throttled) {
                throttled = true;
                setTimeout(() => {
                    func(...args);
                    throttled = false;
                }, ms);
            }
        };
    };

    const delay = 20;
    const onThrottleDragMove = throttle(onDragMove, delay);

    return (
        <StyledSectionContainer
            key={data?.key}>
            <StyledSectionHeader
                key={data?.key}>
                <h2>{data?.title}</h2>
            </StyledSectionHeader>
            {
                data?.key === 0 ?
                    (
                        <StyledSliderContainer
                            onMouseDown={onDragStart}
                            onMouseMove={onThrottleDragMove}
                            onMouseUp={onDragEnd}
                            onMouseLeave={onDragEnd}
                            ref={scrollRef}
                        >
                            {testData.map((data: any) => {
                                return (
                                    <MainCard
                                        data={data}
                                    />
                                )
                            })}
                        </StyledSliderContainer>
                    ) : (<></>)
            }
        </StyledSectionContainer>
    )
}

const StyledSectionContainer = styled.div`
    width: 100%;
`

const StyledSectionHeader = styled.div`
    margin: 2rem 5rem;
`

const StyledSliderContainer = styled.div`
    width: 100%;
    overflow-x: scroll;
    scrollbar-width: none;
    scroll-behavior: smooth;
    white-space: nowrap;
    padding: 0.5rem 4rem;
`