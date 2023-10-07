import { FC, Suspense } from "react";
import ContentRoutes from "./ContentRoutes";
import { Spinner } from "../../components/spinner/spinner.style";

const Content: FC = () => (
        <Suspense fallback={<Spinner/>}>
            <ContentRoutes />
        </Suspense>
)

export default Content