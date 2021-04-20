import brandLogo from '../../assets/brand-logo/brand-logo.svg'
import moreMenuIcon from '../../assets/icons/more-menu.png'


function Navigation() {
    return (
        <nav id="top-nav">
            <div id="nav-area">
                <div id="brand-logo">
                    <img
                        src={brandLogo}
                        alt="Shopping List"
                    />
                </div>
                <div id="brand-name">
                    <h1>Stack Shopping List</h1>
                </div>
                <div id="nav-menu">
                    <img src={moreMenuIcon} alt="" />
                </div>
            </div>
        </nav>
    )
}
export default Navigation