import { useState } from "react";
import { Link } from "react-router-dom";
import "./menu.scss";

export default function Menu() {
    const [isShow, setisShow] = useState(false);

    function handlerIsShow() {
        setisShow(!isShow);
    }
    return (
        <nav className="menu">
            <div className="container">
                <ul>
                    <li className="menu_logo">
                        <button className="menu_burger" onClick={handlerIsShow}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="bars"
                                class="svg-inline--fa fa-bars fa-w-14"
                                role="img"
                                viewBox="0 0 448 512"
                            >
                                <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
                            </svg>
                        </button>

                        <Link to="/"></Link>
                    </li>
                    <li className={`menu_mobile ${isShow ? "menu_mobile_show" : ""}`}>
                        <ul>
                            <li onClick={handlerIsShow}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="times"
                                    class="svg-inline--fa fa-times fa-w-11"
                                    role="img"
                                    viewBox="0 0 352 512"
                                >
                                    <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
                                </svg>
                            </li>
                            {/* <li>
                                <Link to="/team" onClick={handlerIsShow}>О компании</Link>
                            </li> */}
                            <li>
                                <Link to="/advantages" onClick={handlerIsShow}>Преимущества</Link>
                            </li>
                            <li>
                                <Link to="/offers/instruments" onClick={handlerIsShow}>Инструменты</Link>
                            </li>
                            <li>
                                <Link to="/team" onClick={handlerIsShow}>Команда</Link>
                            </li>
                            <li>
                                <a href="#footer" onClick={handlerIsShow}>Контакты</a>
                            </li>
                        </ul>
                    </li>
                    <li className="menu_tel">
                        <a href="tel:+8901201201">
                            8 901 201 201
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
