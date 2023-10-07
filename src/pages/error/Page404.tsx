import { FC } from "react";
import Page from "../../layout/page/Page";
import Typography from "../../components/typography/Typography";

const Page404: FC = () => (
    <Page title="Page not found">
        <Typography text="page not found" variant="h2"/>
    </Page>
)

export default Page404