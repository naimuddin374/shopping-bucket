import editIcon from '../../assets/icons/edit-icon.png'
import deleteIcon from '../../assets/icons/delete-icon.png'
import printIcon from '../../assets/icons/printer-icon.png'

function Table() {
    return (
        <table id="bucket-list-table">
            <thead>
                <tr>
                    <th>Bucket</th>
                    <th>Created</th>
                    <th>Costs</th>
                    <th className="bucket-list-actions">Actions</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <th>Holiday Shopping</th>
                    <th className="bucket-list-created">1 April 2020</th>
                    <th>1080 BDT</th>
                    <th className="bucket-list-actions">
                        <button>
                            <img
                                src={editIcon}
                                alt="Edit"
                            />
                        </button>
                        <button>
                            <img
                                src={deleteIcon}
                                alt="Delete"
                            />
                        </button>
                        <button>
                            <img
                                src={printIcon}
                                alt="Print"
                            />
                        </button>
                    </th>
                </tr>
                <tr>
                    <th>Holiday Shopping</th>
                    <th className="bucket-list-created">1 April 2020</th>
                    <th>1080 BDT</th>
                    <th className="bucket-list-actions">
                        <button>
                            <img
                                src={editIcon}
                                alt="Edit"
                            />
                        </button>
                        <button>
                            <img
                                src={deleteIcon}
                                alt="Delete"
                            />
                        </button>
                        <button>
                            <img
                                src={printIcon}
                                alt="Print"
                            />
                        </button>
                    </th>
                </tr>
                <tr>
                    <th>Holiday Shopping</th>
                    <th className="bucket-list-created">1 April 2020</th>
                    <th>1080 BDT</th>
                    <th className="bucket-list-actions">
                        <button>
                            <img
                                src={editIcon}
                                alt="Edit"
                            />
                        </button>
                        <button>
                            <img
                                src={deleteIcon}
                                alt="Delete"
                            />
                        </button>
                        <button>
                            <img
                                src={printIcon}
                                alt="Print"
                            />
                        </button>
                    </th>
                </tr>
                <tr>
                    <th>Holiday Shopping</th>
                    <th className="bucket-list-created">1 April 2020</th>
                    <th>1080 BDT</th>
                    <th className="bucket-list-actions">
                        <button>
                            <img
                                src={editIcon}
                                alt="Edit"
                            />
                        </button>
                        <button>
                            <img
                                src={deleteIcon}
                                alt="Delete"
                            />
                        </button>
                        <button>
                            <img
                                src={printIcon}
                                alt="Print"
                            />
                        </button>
                    </th>
                </tr>
                <tr>
                    <th>Holiday Shopping</th>
                    <th className="bucket-list-created">1 April 2020</th>
                    <th>1080 BDT</th>
                    <th className="bucket-list-actions">
                        <button>
                            <img
                                src={editIcon}
                                alt="Edit"
                            />
                        </button>
                        <button>
                            <img
                                src={deleteIcon}
                                alt="Delete"
                            />
                        </button>
                        <button>
                            <img
                                src={printIcon}
                                alt="Print"
                            />
                        </button>
                    </th>
                </tr>
                <tr>
                    <th>Holiday Shopping</th>
                    <th className="bucket-list-created">1 April 2020</th>
                    <th>1080 BDT</th>
                    <th className="bucket-list-actions">
                        <button>
                            <img
                                src={editIcon}
                                alt="Edit"
                            />
                        </button>
                        <button>
                            <img
                                src={deleteIcon}
                                alt="Delete"
                            />
                        </button>
                        <button>
                            <img
                                src={printIcon}
                                alt="Print"
                            />
                        </button>
                    </th>
                </tr>
            </tbody>
        </table>
    )
}

export default Table