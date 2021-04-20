import { Router, Redirect } from '@reach/router'
import Page404 from '../pages/404'
import BucketDetailPage from '../pages/bucket-detail'
import BucketPage from '../pages/buckets'



function AppRouter() {
    return (
        <Router>
            <BucketDetailPage path='/bucket/:bucketId' />
            <BucketPage path='/' />
            <Redirect from='/bucket' to='/' noThrow />
            <Page404 default />
        </Router>
    )
}
export default AppRouter