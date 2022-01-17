import "./general.scss";
import { useSpring, animated } from "react-spring";
import Button from "../button/button";
import { useContext, useEffect, useRef, useState } from "react";
import img02 from "./img/content/02.jpg";
import img03 from "./img/content/03.jpg";
import { Link } from "react-router-dom";
import Visa from './img/visa.png';
import Mastercard from './img/mastercard.png';
import Yandex from './img/yandex.png';
import Qiwi from './img/qiwi.png';
import Chart from './img/chart.png';
import Logo from './img/logo.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from 'react-router';
import { ModalContext } from "../../services/modalContext";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 8}px,${y / 7}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 3}px,${y / 4}px,0)`;
const trans6 = (x, y) => `translate3d(${x / 15}px,${y / 10}px,0)`;

export default function General({ title, desc }) {

    window.scrollTo(0, 0);

    const [props, set] = useSpring(() => ({
        xy: [0, 0],
        config: { mass: 10, tension: 550, friction: 140 },
    }));

    const settings = {
        className: "center",
        infinite: true,
        slidesToShow: 1,
    };

    const { contextModal, setContextModal } = useContext(ModalContext);

    let { id } = useParams();

    const advantages = useRef(null);

    useEffect(() => {
        if (id)
            setTimeout(() => {
                advantages.current.scrollIntoView();
            }, 500);
    }, [id])

    return (
        <div className="general" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <div className="general_header">
                <animated.div
                    class="general_header_card1"
                    style={{ transform: props.xy.interpolate(trans1) }}
                />
                <animated.div
                    class="general_header_card2"
                    style={{ transform: props.xy.interpolate(trans2) }}
                />
                <animated.div
                    class="general_header_card3"
                    style={{ transform: props.xy.interpolate(trans3) }}
                />
                <animated.div
                    class="general_header_card4"
                    style={{ transform: props.xy.interpolate(trans4) }}
                />
                <animated.div
                    class="general_header_card5"
                    style={{ transform: props.xy.interpolate(trans5) }}
                />
                <animated.div
                    class="general_header_card6"
                    style={{ transform: props.xy.interpolate(trans6) }}
                />

                <div className="container general_content">
                    <h1 className="general_title">
                        <pre>
                            Ваша финансовая основа
                            {"\n"}это инвестиции
                        </pre>
                    </h1>

                    <Link to='/offers'>
                        <Button txt="Предложения" handlerClick={() => { }} />
                    </Link>
                    <animated.div
                        class="general_header_desc"
                        style={{ transform: props.xy.interpolate(trans6) }}
                    >
                        <h2 className="general_desc">
                            МЫ НЕ РАССУЖДАЕМ О
                            <br />
                            ВОЗМОЖНОСТЯХ
                            <br />
                            ИНВЕСТИРОВАНИЯ, МЫ
                            <br />
                            ВОПЛОЩАЕМ ИХ
                        </h2>
                    </animated.div>
                </div>
            </div>

            <div className="general_page1">
                <div className="container">
                    <div className="row justify-between">
                        <div className="general_page1_cell logo">
                            <div className="general_page1_cell_bc"></div>
                            <h6>
                                <img src={Logo} alt="logo" />
                            </h6>
                        </div>

                        <div className="general_page1_cell">
                            <h3>
                                Удобная торговая площадка
                            </h3>
                            <p>
                                Используйте программный комплекс для эффективной работы на бирже Получите качественный поток котировок и удобный личный трейдерский счет для полного контроля над своими счетами.
                            </p>
                            <h3>
                                Присоединяйтесь к нам и увеличивайте свой доход!
                            </h3>
                        </div>
                    </div>
                    <div className="row justify-between">
                        <Link to='/team' className="general_page1_cell">
                            <img src={img02} alt="Наша команда" />
                            <h3>Наша компания</h3>
                        </Link>

                        <Link to='/advice' className="general_page1_cell">
                            <img src={img03} alt="Советы новичкам" />
                            <h3>Советы новичкам</h3>
                        </Link>
                    </div>
                    <hr />
                    <h2 ref={advantages}>Торговые преимущества форекс-брокера</h2>
                    <ul className="general_advantages">
                        <li>
                            Торговые преимущества
                        </li>
                        <li>
                            Фиксированы спред
                        </li>
                        <li>
                            Высокая ликвидность
                        </li>
                        <li>
                            Микро счета
                        </li>
                        <li>
                            Мультивалютность
                        </li>
                        <li>
                            Партнерская программа
                        </li>
                    </ul>
                    <div className="general_slider">
                        <h2>
                            Торгуйте и инвестируйте с командой профессионалов
                        </h2>
                    </div>
                </div>
                <div className="slider">
                    <Slider {...settings}>
                        <div className="row justify-between planet">
                            <div className="general_page1_cell general_forex">
                                <h2>
                                    Валютный рынок
                                </h2>
                                <ul>
                                    <li>
                                        Институционные спреды от 0 пунктов
                                    </li>
                                    <li>
                                        Платформы MetaTrader4, MetaTrader5, cTrader, R StocksTrader
                                    </li>
                                    <li>
                                        Кредитное плече 1:500
                                    </li>
                                    <li>
                                        Максимально возможная скорость выполнения
                                    </li>
                                </ul>

                                <button onClick={() => setContextModal({isShow: true})}>Открыть торговый счет</button>
                            </div>

                            <div className="general_page1_cell general_table">
                                <table>
                                    <caption>Популярные инструменты Forex</caption>
                                    <thead>
                                        <tr>
                                            <td> Символ </td>
                                            <td> Bid </td>
                                            <td> Ask </td>
                                            <td> Спред </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> EURGBP </td>
                                            <td> 0.84436 </td>
                                            <td> 0.84436 </td>
                                            <td> 0.00004 </td>
                                            <td>
                                                <a onClick={() => setContextModal({isShow: true})} className="buy">
                                                    <span>Купить</span>
                                                </a>
                                            </td>
                                            <td>
                                                <a onClick={() => setContextModal({isShow: true})} className="cell">
                                                    Продать
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> EURGBP </td>
                                            <td> 0.84436 </td>
                                            <td> 0.84436 </td>
                                            <td> 0.00004 </td>
                                            <td>
                                                <a onClick={() => setContextModal({isShow: true})} className="buy">
                                                    <span>Купить</span>
                                                </a>
                                            </td>
                                            <td>

                                                <a onClick={() => setContextModal({isShow: true})} className="cell">
                                                    Продать
                                                </a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td> EURGBP </td>
                                            <td> 0.84436 </td>
                                            <td> 0.84436 </td>
                                            <td> 0.00004 </td>
                                            <td>
                                                <a onClick={() => setContextModal({isShow: true})} className="buy">
                                                    <span>Купить</span>
                                                </a>
                                            </td>
                                            <td>

                                                <a onClick={() => setContextModal({isShow: true})} className="cell">
                                                    Продать
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> EURGBP </td>
                                            <td> 0.84436 </td>
                                            <td> 0.84436 </td>
                                            <td> 0.00004 </td>
                                            <td>
                                                <a onClick={() => setContextModal({isShow: true})} className="buy">
                                                    <span>Купить</span>
                                                </a>
                                            </td>
                                            <td>

                                                <a onClick={() => setContextModal({isShow: true})} className="cell">
                                                    Продать
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="row justify-between nero">
                            <div className="general_page1_cell general_forex">
                                <h2>
                                    Фондовый рынок
                                </h2>
                                <ul>
                                    <li>
                                        Минимальный депозит от 100$
                                    </li>
                                    <li>
                                        Беслпатные данные с фондовой биржи в режиме онлайн
                                    </li>
                                    <li>
                                        Кредитное плечо - до 1:20
                                    </li>
                                    <li>
                                        Платформы MetaTrader4, MetaTrader5, cTrader, R StocksTrader
                                    </li>
                                </ul>

                                <button onClick={() => setContextModal({isShow: true})}>Открыть торговый счет</button>
                            </div>

                            <div className="general_page1_cell general_table">
                                <table>
                                    <caption>
                                        Топ-5 CFD на акции
                                    </caption>
                                    <thead>
                                        <tr>
                                            <td> Символ </td>
                                            <td> Bid </td>
                                            <td> Ask </td>
                                            <td> Спред </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> APPL </td>
                                            <td> 149.74 </td>
                                            <td> 149.92 </td>
                                            <td> 0.18 </td>
                                            <td>
                                                <a onClick={() => setContextModal({isShow: true})} className="buy">
                                                    <span>Купить</span>
                                                </a>
                                            </td>
                                            <td>
                                                <a onClick={() => setContextModal({isShow: true})} className="cell">
                                                    Продать
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> AMZN </td>
                                            <td> 3369.59 </td>
                                            <td> 3373.35 </td>
                                            <td> 3.76 </td>
                                            <td>
                                                <a onClick={() => setContextModal({isShow: true})} className="buy">
                                                    <span>Купить</span>
                                                </a>
                                            </td>
                                            <td>

                                                <a onClick={() => setContextModal({isShow: true})} className="cell">
                                                    Продать
                                                </a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td> GOOGL </td>
                                            <td> 323.46 </td>
                                            <td> 323.67 </td>
                                            <td> 0.21 </td>
                                            <td>
                                                <a onClick={() => setContextModal({isShow: true})} className="buy">
                                                    <span>Купить</span>
                                                </a>
                                            </td>
                                            <td>

                                                <a onClick={() => setContextModal({isShow: true})} className="cell">
                                                    Продать
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> NLFX </td>
                                            <td> 2959.88 </td>
                                            <td> 2960.64 </td>
                                            <td> 0.76 </td>
                                            <td>
                                                <a onClick={() => setContextModal({isShow: true})} className="buy">
                                                    <span>Купить</span>
                                                </a>
                                            </td>
                                            <td>

                                                <a onClick={() => setContextModal({isShow: true})} className="cell">
                                                    Продать
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> FB </td>
                                            <td> 690.31 </td>
                                            <td> 690.75 </td>
                                            <td> 0.44 </td>
                                            <td>
                                                <a onClick={() => setContextModal({isShow: true})} className="buy">
                                                    <span>Купить</span>
                                                </a>
                                            </td>
                                            <td>

                                                <a onClick={() => setContextModal({isShow: true})} className="cell">
                                                    Продать
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* <div className="row justify-between planet">
                            <div className="general_page1_cell general_forex">
                                <h2>
                                    Преимущества акций
                                </h2>
                                <ul>
                                    <li>
                                        Минимальный депозит от 100$
                                    </li>
                                    <li>
                                        Поддержка и автоматическая обработка корпоративных событий
                                    </li>
                                    <li>
                                        Кредитное плечо - до 1:20
                                    </li>
                                    <li>
                                        Платформа R StocksTrader
                                    </li>
                                </ul>

                                <button onClick={() => setContextModal({isShow: true})}>Открыть торговый счет</button>
                            </div>

                            <div className="general_page1_cell general_table">
                                <table>
                                    <caption>
                                        Топ-5 CFD на акции
                                    </caption>
                                    <thead>
                                        <tr>
                                            <td> Символ </td>
                                            <td> Bid </td>
                                            <td> Ask </td>
                                            <td> Спред </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> FTS </td>
                                            <td> 25.95 </td>
                                            <td> 26.19 </td>
                                            <td> 0.24 </td>
                                            <td>
                                                <a onClick={() => setContextModal({isShow: true})} className="buy">
                                                    <span>Купить</span>
                                                </a>
                                            </td>
                                            <td>
                                                <a onClick={() => setContextModal({isShow: true})} className="cell">
                                                    Продать
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> SPY </td>
                                            <td> 459.21 </td>
                                            <td> 459.23 </td>
                                            <td> 0.02 </td>
                                            <td>
                                                <a onClick={() => setContextModal({isShow: true})} className="buy">
                                                    <span>Купить</span>
                                                </a>
                                            </td>
                                            <td>

                                                <a onClick={() => setContextModal({isShow: true})} className="cell">
                                                    Продать
                                                </a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td> USMV </td>
                                            <td> 77.51 </td>
                                            <td> 77.55 </td>
                                            <td> 0.04 </td>
                                            <td>
                                                <a onClick={() => setContextModal({isShow: true})} className="buy">
                                                    <span>Купить</span>
                                                </a>
                                            </td>
                                            <td>

                                                <a onClick={() => setContextModal({isShow: true})} className="cell">
                                                    Продать
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> UUP </td>
                                            <td> 25.25 </td>
                                            <td> 25.26 </td>
                                            <td> 0.01 </td>
                                            <td>
                                                <a onClick={() => setContextModal({isShow: true})} className="buy">
                                                    <span>Купить</span>
                                                </a>
                                            </td>
                                            <td>

                                                <a onClick={() => setContextModal({isShow: true})} className="cell">
                                                    Продать
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div> */}

                        <div className="row justify-between waves">
                            <div className="general_page1_cell general_forex">
                                <h2>
                                    Преимущества сырьевых товаров
                                </h2>
                                <ul>
                                    <li>
                                        Минимальный депозит от 100$
                                    </li>
                                    <li>
                                        Более 100 инструментов для инвестирования
                                    </li>
                                    <li>
                                        Кредитное плечо - до 1:20
                                    </li>
                                    <li>
                                        Платформа R StocksTrader
                                    </li>
                                </ul>

                                <button onClick={() => setContextModal({isShow: true})}>Открыть торговый счет</button>
                            </div>

                            <div className="general_page1_cell general_table">
                                <table>
                                    <caption>
                                        Топ-5 CFD на акции
                                    </caption>
                                    <thead>
                                        <tr>
                                            <td> Символ </td>
                                            <td> Bid </td>
                                            <td> Ask </td>
                                            <td> Спред </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>  CORN </td>
                                            <td> 21.3 </td>
                                            <td> 21.37 </td>
                                            <td> 0.07 </td>
                                            <td>
                                                <a onClick={() => setContextModal({isShow: true})} className="buy">
                                                    <span>Купить</span>
                                                </a>
                                            </td>
                                            <td>
                                                <a onClick={() => setContextModal({isShow: true})} className="cell">
                                                    Продать
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> SGAR </td>
                                            <td> 19.24 </td>
                                            <td> 19.36 </td>
                                            <td> 0.12 </td>
                                            <td>
                                                <a onClick={() => setContextModal({isShow: true})} className="buy">
                                                    <span>Купить</span>
                                                </a>
                                            </td>
                                            <td>
                                                <a onClick={() => setContextModal({isShow: true})} className="cell">
                                                    Продать
                                                </a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td> SOYB </td>
                                            <td> 21.76 </td>
                                            <td> 21.82 </td>
                                            <td> 0.06 </td>
                                            <td>
                                                <a onClick={() => setContextModal({isShow: true})} className="buy">
                                                    <span>Купить</span>
                                                </a>
                                            </td>
                                            <td>
                                                <a onClick={() => setContextModal({isShow: true})} className="cell">
                                                    Продать
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> WEAT </td>
                                            <td> 7.52 </td>
                                            <td> 7.54 </td>
                                            <td> 0.02 </td>
                                            <td>
                                                <a onClick={() => setContextModal({isShow: true})} className="buy">
                                                    <span>Купить</span>
                                                </a>
                                            </td>
                                            <td>

                                                <a onClick={() => setContextModal({isShow: true})} className="cell">
                                                    Продать
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="row justify-between planet specific">
                            <div className="general_page1_cell general_forex">
                                <h2>
                                    Преимущества энерготоваров
                                </h2>
                                <ul>
                                    <li>
                                        Минимальный депозит от 100$
                                    </li>
                                    <li>
                                        Идеальные для внутренней торговли
                                    </li>
                                    <li>
                                        Кредитное плечо - до 1:500
                                    </li>
                                    <li>
                                        Платформа R StocksTrader, MetaTrader4
                                    </li>
                                </ul>

                                <button onClick={() => setContextModal({isShow: true})}>Открыть торговый счет</button>
                            </div>

                            <div className="general_page1_cell block">
                                <h5>
                                    Brent
                                </h5>
                                <p>
                                    Одна из самых известных нефтяных марок. Добывается в Северном море и служит основой ценообразования многих других сортов нефти.
                                </p>
                                <div className='left'>
                                    <p>
                                        Тип счета
                                    </p>
                                    <p>
                                        Величина 1 пункта
                                    </p>
                                    <p>
                                        Размер 1 лота
                                    </p>
                                    <p>
                                        Миним. объем
                                    </p>
                                    <p>
                                        Валюта котирования
                                    </p>
                                </div>
                                <div className='right'>
                                    <p>
                                        Pro, ECN, Prime, R Stock Trader
                                    </p>
                                    <p>
                                        0,01
                                    </p>
                                    <p>
                                        1 000 бареллей
                                    </p>
                                    <p>
                                        0,01
                                    </p>
                                    <p>
                                        USD
                                    </p>
                                </div>
                            </div>

                            <div className="general_page1_cell block">
                                <h5>
                                    WTI
                                </h5>
                                <p>
                                    Нефть, которая добывается в Техасе (США). Используется для изготовления бензина и пользуется большим спросом.
                                </p>
                                <div className='left'>
                                    <p>
                                        Тип счета
                                    </p>
                                    <p>
                                        Величина 1 пункта
                                    </p>
                                    <p>
                                        Размер 1 лота
                                    </p>
                                    <p>
                                        Миним. объем
                                    </p>
                                    <p>
                                        Валюта котирования
                                    </p>
                                </div>
                                <div className='right'>
                                    <p>
                                        Pro, ECN, Prime, R Stock Trader
                                    </p>
                                    <p>
                                        0,01
                                    </p>
                                    <p>
                                        1 000 бареллей
                                    </p>
                                    <p>
                                        0,01
                                    </p>
                                    <p>
                                        USD
                                    </p>
                                </div>
                            </div>


                        </div>

                        <div className="row justify-between nero">
                            <div className="general_page1_cell general_forex">
                                <h2>
                                    Товаро-сырьевой рынок
                                </h2>
                                <ul>
                                    <li>
                                        Мин депозит 1000$
                                    </li>
                                    <li>
                                        Хеджирование рисков
                                    </li>
                                    <li>
                                        Кредитное плече 1:500
                                    </li>
                                </ul>

                                <button onClick={() => setContextModal({isShow: true})}>Открыть торговый счет</button>
                            </div>

                            <div className="general_page1_cell block">
                                <div className='row chart'>
                                    <div>
                                        <img src={Chart} alt="chart" />
                                    </div>
                                    <div className="column">
                                        <p>
                                            114,006К<br />
                                            <span>
                                                XAUUSD
                                            </span>
                                        </p>
                                        <p>
                                            31,635K<br />
                                            <span>
                                                XAGUSD
                                            </span>
                                        </p>
                                        <p>
                                            29,738K<br />
                                            <span>
                                                PPLT(Platinum)
                                            </span>
                                        </p>
                                        <p>
                                            22,721k<br />
                                            <span>
                                                PALL(Palladium)
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <p>
                                    Предупреждение о рисках: результаты предыдущих торговых операций не гарантируют получение идентичных результатов в будущем
                                </p>
                            </div>
                        </div>
                    </Slider>
                </div>

                <div className='container'>
                    <section className='general_page1_section1 justify-between row'>
                        <div>
                            <h3>
                                0% КОМИССИИ
                            </h3>
                            <p>
                                Когда наши клиенты пополняют свои торговые счета, комиссия всегда равна 0%. Мы покрываем все расходы. Выбирайте платежную систему, исходя из вашего удобства, а не экономии средств.
                            </p>
                            <p>
                                Мы также компенсируем комиссию на вывод средств 2 раза в месяц.
                            </p>
                        </div>
                        <div>
                            <h3>
                                Быстрый вывод
                            </h3>
                            <p>
                                Система автоматического вывода: верифицируйте аккаунт и привяжите карту для быстрого пополнения и снятия средств.
                            </p>
                            <p>
                                Поддержка 24/7.
                            </p>
                        </div>
                    </section>
                </div>

                <section className='general_page1_section2'>
                    <div className="container">
                        <div className='justify-between row'>
                            <h5>
                                Больше<br />
                                20 видов пополнения
                            </h5>
                            <img src={Visa} alt="visa" />
                            <img src={Mastercard} alt="master" />
                            <img src={Yandex} alt="yandex" />
                            <img src={Qiwi} alt="qiwi" />
                        </div>
                    </div>
                </section>

                {/* <section className='general_page1_section3'>
                    <div className="container">
                        <h2>
                            Становитесь партнером уже сейчас!
                        </h2>
                        <h3>
                            Для простых краткосрочных инвестиций
                        </h3>
                        <ul>
                            <li>
                                Выбирайте среди 1 000 трейдеров.
                            </li>
                            <li>
                                Получайте детальную статистику результатов трейдера
                            </li>
                            <li>
                                Откажитесь от копирования в любой момент
                            </li>
                        </ul>
                        <h5>
                            Наша платфоорма идеально подходит для тех, кто ищет легкий и надежный способ инвестирования.
                        </h5>
                        <Button txt='Заказать звонок' handlerClick={() => setContextModal({isShow: true})} />
                    </div>
                </section> */}

                {/* <div className='container'>
                    <section className='general_page1_section1 justify-between row'>
                        <div>
                            <h3>
                                Инвестиции в портфели
                            </h3>
                            <p>
                                Уникальный способ заработать на финансовом рынке Предлагается работать в тесном контакте с финансовым консультантом компании и обеспечивать отличный результат с точки зрения прибыльности.
                            </p>
                        </div>
                        <div>
                            <h3>
                                Личный советник
                            </h3>
                            <p>
                                Cистема автоматического вывода: перечисление средств в течение минуты для выбранных платежных систем.
                            </p>
                            <p>
                                Система работает в режиме 24/7.
                            </p>
                            <p>
                                С RoboForex это просто, быстро и надежно.
                            </p>
                        </div>
                    </section>
                </div> */}
            </div >
        </div >
    );
}
