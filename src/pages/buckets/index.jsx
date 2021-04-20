import plusIcon from '../../assets/icons/plus-icon.png'
import Table from '../../components/table'



function BucketPage() {
    return (
        <main className="container">
            {/* Create New Bucket | Input Element with ICON */}
            <section id="create-bucket">
                <div id="create-bucket-icon">
                    <img
                        src={plusIcon}
                        alt="Create New Bucket"
                    />
                </div>
                <div id="create-bucket-input">
                    <input type="text" placeholder="Create New Bucket" />
                </div>
            </section>
            {/* Bucket List Table | List of Created Buckets  */}
            <section id="bucket-list">
                <Table />
            </section>
        </main>
    )
}
export default BucketPage