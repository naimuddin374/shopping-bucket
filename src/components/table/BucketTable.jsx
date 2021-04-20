import deleteIcon from '../../assets/icons/delete-icon.png'
import printWriteIcon from '../../assets/icons/printer-white-icon2.png'
import downArrowIcon from '../../assets/icons/down-arrow-white-icon.png'


function BucketTable({ checked }) {
    return (
        <table id={checked ? 'bucket-completed-item-list-table' : 'bucket-item-list-table'}>
            {checked ? <thead>
                <tr>
                    <th>Checked Items</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th class="bucket-completed-item-list-actions">
                        <button>
                            <img
                                src={printWriteIcon}
                                alt="Delete"
                            />
                        </button>
                        <button>
                            <img
                                src={downArrowIcon}
                                alt="Delete"
                            />
                        </button>
                    </th>
                </tr>
            </thead> :
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th class="bucket-item-list-actions">Actions</th>
                    </tr>
                </thead>}


            <tbody>
                <tr>
                    <th>
                        <div class="item-name-group">
                            <input type="checkbox" />
                            <label>Carrots</label>
                        </div>
                    </th>
                    <th>
                        <div class="item-input-quantity">
                            <span
                                class="auto-grow-input"
                                role="textbox"
                                aria-placeholder="500G"
                                contenteditable
                            >2KG
									</span>
                        </div>
                    </th>
                    <th>
                        <div class="item-input-price">
                            <span
                                class="auto-grow-input"
                                role="textbox"
                                contenteditable
                            >
                                250
									</span>
                            <span>BDT</span>
                        </div>
                    </th>
                    <th class="bucket-item-list-actions">
                        <button>
                            <img
                                src={deleteIcon}
                                alt="Delete"
                            />
                        </button>
                    </th>
                </tr>
                <tr>
                    <th>
                        <div class="item-name-group">
                            <input type="checkbox" />
                            <label>Carrots</label>
                        </div>
                    </th>
                    <th>
                        <div class="item-input-quantity">
                            <span
                                class="auto-grow-input"
                                role="textbox"
                                aria-placeholder="500G"
                                contenteditable
                            >2KG
									</span>
                        </div>
                    </th>
                    <th>
                        <div class="item-input-price">
                            <span
                                class="auto-grow-input"
                                role="textbox"
                                contenteditable
                            >
                                250
									</span>
                            <span>BDT</span>
                        </div>
                    </th>
                    <th class="bucket-item-list-actions">
                        <button>
                            <img
                                src={deleteIcon}
                                alt="Delete"
                            />
                        </button>
                    </th>
                </tr>
                <tr>
                    <th>
                        <div class="item-name-group">
                            <input type="checkbox" />
                            <label>Carrots</label>
                        </div>
                    </th>
                    <th>
                        <div class="item-input-quantity">
                            <span
                                class="auto-grow-input"
                                role="textbox"
                                aria-placeholder="500G"
                                contenteditable
                            >2KG
									</span>
                        </div>
                    </th>
                    <th>
                        <div class="item-input-price">
                            <span
                                class="auto-grow-input"
                                role="textbox"
                                contenteditable
                            >
                                250
									</span>
                            <span>BDT</span>
                        </div>
                    </th>
                    <th class="bucket-item-list-actions">
                        <button>
                            <img
                                src={deleteIcon}
                                alt="Delete"
                            />
                        </button>
                    </th>
                </tr>
            </tbody>
        </table>
    )
}

export default BucketTable