import { useRoutes } from "react-router-dom";


import PublicRoutes from"./PublicRouters"
import PrivateRoutes from "./PrivateRouters";


export default function Routes() {

    return useRoutes([PrivateRoutes,PublicRoutes]);
}