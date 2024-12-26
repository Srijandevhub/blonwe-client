import Layout from '../layouts/Layout'
import CMSMetaDataController from '../components/CMSMetaDataController/CMSMetaDataController'
const HomePage = () => {
    return (
        <>
            <CMSMetaDataController title={"Blonwe - Buy groceries online"}/>
            <Layout>
                Homepage
            </Layout>
        </>
    )
}

export default HomePage