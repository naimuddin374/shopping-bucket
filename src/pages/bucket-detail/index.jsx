import BucketTable from '../../components/table/BucketTable'
import Create from './create'



function BucketDetailPage() {
    return (
        <main class="container">

            {/* Add New Item | Input Element with ICON */}
            <Create />


            {/* Bucket Item Not Completed List Table | List of Selected Items */}
            <section id="bucket-item-list">
                <BucketTable />
            </section>


            {/* Completed Items Section */}
            <section id="bucket-completed-item-list">
                <BucketTable checked />
                <section id="bucket-completed-item-list-table-footer">
                    <div>Total: 4599 BDT</div>
                </section>
            </section>
        </main>
    )
}
export default BucketDetailPage