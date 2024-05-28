import { MainSection } from "src/components/main";
import { mainSectionData } from "src/modules";

const Main = () => {
    const section = mainSectionData.map((i: any) => {
        return (
            <MainSection
                key={i.key}
                title={i?.title}
                route={i?.route}
            />
        )
    })
    return (
        <>
            {section}
        </>
    )
}
export default Main;