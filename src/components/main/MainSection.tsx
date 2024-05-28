import { useNavigate } from "react-router-dom";
import { mainSectionData } from "src/modules"

interface MainSectionT {
    key: number;
    title?: string;
    route?: string;
}
export const MainSection = (props: MainSectionT) => {
    const { key, title, route } = props;

    const navigate = useNavigate();

    const handleGoRout = (urlText?: string) => {
        if (urlText) {
            navigate(urlText);
        }
    }

    return (
        <div
            key={key}
            onClick={() => handleGoRout(route)}>
            {title}
        </div>
    )
}