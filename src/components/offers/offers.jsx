import "./offers.scss";
import Particles from "react-particles-js";
import { Link } from "react-router-dom";
import img02 from "./img/02.png";
import img03 from "./img/03.png";
import img04 from "./img/04.png";
import img05 from "./img/05.png";
import Form from "../form/form";
import { useContext, useEffect, useRef } from "react";
import { useParams } from 'react-router';
import { ModalContext } from "../../services/modalContext";
import Button from "../button/button";

export default function Offers() {

    const { contextModal, setContextModal } = useContext(ModalContext);

    let { id } = useParams();

    const instruments = useRef(null);

    useEffect(() => {
        if (id)
            setTimeout(() => {
                instruments.current.scrollIntoView();
            }, 500);
    }, [id])

    return (
        <div className="offers">
            <header>
                <Particles
                    style={{ position: "absolute" }}
                    height="60%"
                    width="95%"
                    params={{
                        particles: {
                            color: {
                                value: "#E40ECF",
                            },
                            line_linked: {
                                color: {
                                    value: "#21D4FD",
                                },
                            },
                            number: {
                                value: 50,
                            },
                            size: {
                                value: 3,
                            },
                        },
                    }}
                />

                <div className="container">
                    <h1 className="general_title">
                        <pre>Предложения. {"\n"}Бонусы</pre>
                    </h1>

                    <h2>
                        МЫ НЕ РАССУЖДАЕМ О ВОЗМОЖНОСТЯХ
                        <br />
                        ИНВЕСТИРОВАНИЯ, МЫ ВОЛОЩАЕМ ИХ
                    </h2>
                </div>
            </header>

            <main>
                <div className="container">
                    <h2>Бонусные программы от нас</h2>
                    <p>
                        Мы предоставляем своим клиентам лучшие промо-программы на финансовых
                        рынках. Начните торговать с нами прямо сейчас и откройте для себя
                        все разнообразие бонусов.
                    </p>

                    <div className="offers_boxs">
                        <div className="offers_boxs_item">
                            <h3>
                                ПЛАТИНОВЫЙ
                            </h3>
                            <ul>
                                <li>
                                    Для счетов от 1000$
                                </li>
                                <li>
                                    3 дополнительных индикатора
                                </li>
                                <li>
                                    Мультивалютный счет
                                </li>
                                <li>
                                    Конвертация валют без комисси
                                </li>
                            </ul>

                            <a href='#' onClick={() => setContextModal(true)}>Открыть счёт</a>
                        </div>

                        <div className="offers_boxs_item">
                            <h3>
                                VIP
                            </h3>
                            <ul>
                                <li>
                                    Для счетов от 10 000$
                                </li>
                                <li>
                                    6 дополнительных торговых инструментов
                                </li>
                                <li>
                                    Система TIS
                                </li>
                                <li>
                                    Роботизированный скальпинг
                                </li>
                            </ul>

                            <a href='#' onClick={() => setContextModal(true)}>Открыть счёт</a>
                        </div>

                        <div className="offers_boxs_item">
                            <h3>
                                ECN
                            </h3>
                            <ul>
                                <li>
                                    Для счетов от 100 000$
                                </li>
                                <li>
                                    15 доп торговых инструментов
                                </li>
                                <li>
                                    Индикатор с торговыми сигналами
                                </li>
                                <li>
                                    Персональный аналитик
                                </li>
                            </ul>

                            <a href='#' onClick={() => setContextModal(true)}>Открыть счёт</a>
                        </div>
                    </div>

                    <h2 ref={instruments}>Торговые терминалы</h2>

                    <div className="offers_terms">
                        <section>
                            <h3>metatrader 4</h3>
                            <p>
                                Самая популярная на рынке Форекс торговая платформа, которая
                                включает в себя справочную информацию, торговых роботов и
                                индикаторы.
                            </p>
                            <ul>
                                <li>3 типа исполнения ордеров</li>
                                <li>9 таймфреймов для торговли</li>
                                <li>50 встроенных индикаторов для технического анализа</li>
                                <li>Различные типы ордеров</li>
                            </ul>
                        </section>

                        <section>
                            <h3>metatrader 5</h3>
                            <p>
                                Последняя версия платформы MetaTrader с возможностью выбора
                                между неттинговой и хеджинговой системами.
                            </p>
                            <ul>
                                <li>4 типа исполнения ордеров</li>
                                <li>Мультивалютный тестер </li>
                                <li>Индикатор "глубины" рынка</li>
                                <li>6 типов отложенных ордеров</li>
                            </ul>
                        </section>
                    </div>

                    <h2>Безопасность средств клиента</h2>
                    <div className="offers_security">
                        <section>
                            <img
                                src={img02}
                                alt="Регулированная деятельность: лицензия 000138/210"
                            />
                            <p>Регулированная деятельность: лицензия 000138/210</p>
                        </section>

                        <section>
                            <img
                                src={img03}
                                alt="Участник Коспенсационного Фонда The Financial Comission"
                            />
                            <p>Участник Коспенсационного Фонда The Financial Comission</p>
                        </section>

                        <section>
                            <img src={img04} alt="Cертификат качества от Verify My Trade" />
                            <p>Cертификат качества от Verify My Trade</p>
                        </section>

                        <section>
                            <img
                                src={img05}
                                alt="Защита от отрицательного баланса"
                            />
                            <p>Защита от отрицательного баланса</p>
                        </section>
                    </div>

                    <h2>Остались вопросы? </h2>

                    <Form status={1} />
                </div>
            </main>
        </div>
    );
}
