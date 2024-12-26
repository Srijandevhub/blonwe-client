import { Helmet } from "react-helmet"

const CMSMetaDataController = ({ title }) => {
    return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    )
}
export default CMSMetaDataController