import logo from "../assets/imgs/Netflix-Logo.wine (1).svg"
import { motion } from "framer-motion"
import { Menu, MenuButton, MenuDivider, MenuItem, SubMenu } from "@szhsin/react-menu"
import { useContext } from "react"
import { exportContext } from "../utils/context/Context"
import { Link } from "react-scroll"
export const Header = () => {
    const { signOutUser, AcountDelete, userEdidInfo, userInfo, setModal } = useContext(exportContext)
    return (
        <>
            <header>
                <div className="container">
                    <div className="header-inner">
                        <Link offset={-125}
                            to="populars"
                            duration={800}
                            smooth={true}>
                            <motion.img animate={{ y: [0, 15, -15, 0] }} transition={{ duration: 3, repeat: 1 }} src={logo} alt="site-logo" className="logo" />
                        </Link>
                        <ul className="header-ul">
                            <li className="header-list">
                                <Link to="populars"
                                    offset={-125}
                                    duration={800}
                                    smooth={true}
                                    className={"header-link"}>Populars</Link>
                            </li>
                            <li className="header-list">
                                <Link to="rating"
                                    offset={-130}
                                    duration={800}
                                    smooth={true}
                                    className={"header-link"}>Rating</Link>
                            </li>
                            <li className="header-list">
                                <Link to="search"
                                    offset={-200}
                                    duration={800}
                                    smooth={true}
                                    className={"header-link"}>Movie-search</Link>
                            </li>
                        </ul>
                        <div className="avatar-box">
                            <img src={userInfo.user_img} alt="avatar-img" />
                            <Menu menuStyle={{ background: "red", width: "15rem", height: "13rem", borderRadius: "10px", color: "white", fontSize: "20px", fontWeight: "bold" }}
                                menuButton={
                                    <MenuButton className={"menu-bottom"}>
                                        <h4>{userInfo.username}</h4>
                                    </MenuButton>
                                }
                            >
                                <MenuItem className={"menu-item"} >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="menu-icons">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>
                                    <span onClick={() => { setModal(true) }}>Acount Edit</span>
                                </MenuItem>
                                <MenuItem className={"menu-item"} >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="menu-icons">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                    <span onClick={AcountDelete} >Acount Delete</span>
                                </MenuItem>
                                <MenuItem className={"menu-item"} >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="menu-icons">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                                    </svg>
                                    <span onClick={signOutUser}>Log out</span>
                                </MenuItem>
                            </Menu>
                        </div>
                        {/*  */}
                        <Menu menuStyle={{ background: "red", width: "15rem", height: "13rem", borderRadius: "10px", color: "white", fontSize: "20px", fontWeight: "bold" }}
                            menuButton={
                                <MenuButton className={"menu-bottom"}>
                                    {/* <img src={userInfo.user_img} alt="avatar-img" className="avatar-img" /> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="medi-menu-icon">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                                    </svg>
                                </MenuButton>
                            }
                        >
                            <SubMenu label={(
                                <div className="media-avatar-box">
                                    <img src={userInfo.user_img} alt="avatar-img" className="avatar-img" />
                                    <h4>{userInfo.username}</h4>
                                </div>
                            )} menuStyle={{ background: "black", borderRadius: "10px", }}>
                                <MenuItem className={"menu-item"} >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="menu-icons">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>
                                    <span onClick={() => { setModal(true) }}>Acount Edit</span>
                                </MenuItem>
                                <MenuItem className={"menu-item"} >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="menu-icons">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                    <span onClick={AcountDelete} >Acount Delete</span>
                                </MenuItem>
                                <MenuItem className={"menu-item"} >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="menu-icons">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                                    </svg>
                                    <span onClick={signOutUser}>Log out</span>
                                </MenuItem>
                            </SubMenu>
                            <MenuDivider />
                            <MenuItem className={"menu-item"} >
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed" className="menu-icons">
                                    <path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
                                </svg>
                                <Link className="menu-link"
                                    to="populars"
                                    offset={-125}
                                    duration={800}
                                    smooth={true}
                                >Popular</Link>
                            </MenuItem>
                            <MenuItem className={"menu-item"} >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="menu-icons">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                                <Link className="menu-link"
                                    to="rating"
                                    offset={-130}
                                    duration={800}
                                    smooth={true}
                                >Rating</Link>
                            </MenuItem>
                            <MenuItem className={"menu-item"} >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="menu-icons">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                                <Link className="menu-link"
                                    to="search"
                                    offset={-200}
                                    duration={800}
                                    smooth={true}
                                >Search</Link>
                            </MenuItem>
                        </Menu>
                    </div>
                </div>
            </header>
        </>
    )
}