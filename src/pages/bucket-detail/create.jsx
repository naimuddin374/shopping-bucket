import plusIcon from '../../assets/icons/plus-icon.png'
import leftArrowIcon from '../../assets/icons/left-arrow-icon.png'
import rightArrowIcon from '../../assets/icons/right-arrow-icon.png'


function Create() {
    return (
        <section id="add-item-container">
            <div id="add-item-relative-container">
                {/* Add Item Input Field */}
                <div id="add-item">
                    <div id="add-item-icon">
                        <img
                            src={plusIcon}
                            alt="Create New Bucket"
                        />
                    </div>
                    <div id="add-item-input">
                        <input
                            type="text"
                            placeholder="Create New Bucket"
                        />
                    </div>
                </div>
                {/* Suggestion Overlay when User Start Typing */}
                <div id="suggestion-overlay" class="hide">
                    <ul>
                        <li>
                            <div>
                                <img
                                    src={plusIcon}
                                    alt="Item"
                                />
									Egg
								</div>
                        </li>
                        <li>
                            <div>
                                <img
                                    src={plusIcon}
                                    alt="Item"
                                />
									Banana
								</div>
                        </li>
                        <li>
                            <div>
                                <img
                                    src={plusIcon}
                                    alt="Item"
                                />
									Battery
								</div>
                        </li>
                        <li>
                            <div>
                                <img
                                    src={plusIcon}
                                    alt="Item"
                                />
									Milk Powder
								</div>
                        </li>
                        <li>
                            <div>
                                <img
                                    src={plusIcon}
                                    alt="Item"
                                />
									Milk Powder
								</div>
                        </li>
                        <li>
                            <div>
                                <img
                                    src={plusIcon}
                                    alt="Item"
                                />
									Milk Powder
								</div>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Suggested Chips */}
            <div id="suggested-item-container">
                <div class="suggested-item-btn">
                    <img
                        src={leftArrowIcon}
                        alt="Previous"
                    />
                </div>
                <div id="suggested-item-chips">
                    <div class="chip">Egg</div>
                    <div class="chip">Carrot</div>
                    <div class="chip">Banana</div>
                    <div class="chip">Apple</div>
                    <div class="chip">Coke</div>
                    <div class="chip">Water</div>
                    <div class="chip">Medicine</div>
                    <div class="chip">Milk</div>
                    <div class="chip">Apple</div>
                    <div class="chip">Coke</div>
                    <div class="chip">Water</div>
                    <div class="chip">Medicine</div>
                    <div class="chip">Apple</div>
                    <div class="chip">Coke</div>
                    <div class="chip">Water</div>
                    <div class="chip">Medicine</div>
                    <div class="chip">Milk</div>
                </div>
                <div class="suggested-item-btn suggested-btn-next">
                    <img
                        src={rightArrowIcon}
                        alt="Next"
                    />
                </div>
            </div>
        </section>
    )
}

export default Create