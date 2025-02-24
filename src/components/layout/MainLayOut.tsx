import { Outlet } from "react-router-dom"
import Naver from "./Naver"

const MainLayOut = () => {
    return (
        <div>
            <Naver />
            <Outlet />
        </div>
    )
}

export default MainLayOut