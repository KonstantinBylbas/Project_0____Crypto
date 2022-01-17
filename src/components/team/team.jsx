import './team.scss';
import "./team.scss";
import { useSpring, animated } from "react-spring";
import Button from '../button/button';
import Person_0 from './img/person_0.jpg';
import Person_1 from './img/person_1.jpg';
import Person_2 from './img/person_2.jpg';
import Person_3 from './img/person_3.jpg';
import Person_4 from './img/person_4.jpg';
// import Person_5 from './img/person_5.jpg';
import TFC from './img/TFC.png';
import IFSC from './img/IFSC.png';
import Rewards from './img/rewards.png';
import Form from '../form/form';
import { useContext } from 'react';
import { ModalContext } from '../../services/modalContext';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 3}px,${y / 4}px,0)`;
const trans6 = (x, y) => `translate3d(${x / 15}px,${y / 10}px,0)`;

export default function Team() {

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

    return (
        <div className="team">
            <div className="team" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                <div className="team_header">
                    <animated.div
                        class="team_header_card1"
                        style={{ transform: props.xy.interpolate(trans1) }}
                    />
                    <animated.div
                        class="team_header_card2"
                        style={{ transform: props.xy.interpolate(trans2) }}
                    />
                    <animated.div
                        class="team_header_card3"
                        style={{ transform: props.xy.interpolate(trans3) }}
                    />
                    <animated.div
                        class="team_header_card5"
                        style={{ transform: props.xy.interpolate(trans5) }}
                    />
                    <animated.div
                        class="team_header_card6"
                        style={{ transform: props.xy.interpolate(trans6) }}
                    />

                    <div className="container team_content">
                        <h1 className="team_title">
                            <pre>Компания.{"\n"}Наша команда</pre>
                        </h1>

                        <animated.div
                            class="team_header_desc"
                            style={{ transform: props.xy.interpolate(trans6) }}
                        >
                            {/* <h2 className="team_desc">
                                МЫ НЕ РАССУЖДАЕМ О
                                <br />
                                ВОЗМОЖНОСТЯХ
                                <br />
                                ИНВЕСТИРОВАНИЯ, МЫ
                                <br />
                                ВОЛОЩАЕМ ИХ
                            </h2> */}
                        </animated.div>
                    </div>
                </div>

                <main>
                    <section className="team_section_0">
                        <div className="container">
                            <h3>
                                История и достижения нашей команды
                            </h3>
                            <div className="row justify-between">
                                <ul>
                                    <li>
                                        Основание компании
                                    </li>
                                    <li>
                                        Введение в FSCL
                                    </li>
                                    <li>
                                        Запуск Партнерской программы
                                    </li>
                                    <li>
                                        Реализация проектов CopyFX и ContestFX
                                    </li>
                                    <li>
                                        Внедрение сервиса "Защита от отрицательного баланса"
                                    </li>
                                    <li>
                                        Запуск бонусных программ
                                    </li>
                                    <li>
                                        Подключение платформы R WebTrader
                                    </li>
                                    <li>
                                        Розыгрыш суперкара Tesla Model S
                                    </li>
                                    <li>
                                        Повышение максимального кредитного плеча до 1:1000
                                    </li>
                                    <li>
                                        Добавление CFD-инструментов
                                    </li>
                                    <li>
                                        Ввод торговых счетов в GOLD и CNY
                                    </li>
                                    <li>
                                        Проведение розыгрыша призов с общим призовым фондом $1 000 000 в честь 10-летия компании
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        Запуск акции с уникальными условиями торговли Индексами
                                    </li>
                                    <li>
                                        Подключение новых серверов – "ProCent-3" и "ProCent-4"
                                    </li>
                                    <li>
                                        Открытие доступа к торговле более 3 000 инструментов американского фондового рынка
                                    </li>
                                    <li>
                                        Расширение общего числа торговых инструментов до 12000
                                    </li>
                                    <li>
                                        Масштабное обновление R WebTrader  для Android и iOS
                                    </li>
                                    <li>
                                        Получение статуса брокера-обладателя более 20 наград финансовой отрасли
                                    </li>
                                    <li>
                                        Улучшение условий торговли Индексами
                                    </li>
                                    <li>
                                        Предоставление возможности торговли нефтью и металлами в R StocksTrader
                                    </li>
                                </ul>
                            </div>

                            <div className="row justify-center">
                                <Button txt='Присоединиться к лучшим' handlerClick={() => setContextModal(true)} />
                            </div>
                        </div>
                    </section>

                    {/* <section className="team_section_1">
                        <div className="container">
                            <div className="row justify-between">
                                <div className="block">
                                    <img src={Person_0} alt="person_0" />
                                    <h5>
                                    Кудряшов  Геннадий Андреевич
                                    </h5>
                                    <p>
                                        Исполнительный директор и партнер компании, окночил МГУ. В трейдинге более 7 лет
                                    </p>
                                </div>
                                <div className="block">
                                    <img src={Person_1} alt="person_0" />
                                    <h5>
                                    Соколов Константин Евсеевич 
                                    </h5>
                                    <p>
                                        Исполнительный директор и партнер компании, окночил МГУ. В трейдинге более 7 лет
                                    </p>
                                </div>
                                <div className="block">
                                    <img src={Person_2} alt="person_0" />
                                    <h5>
                                    Русаков  Петр  Сергеевич
                                    </h5>
                                    <p>
                                        Исполнительный директор и партнер компании, окночил МГУ. В трейдинге более 7 лет
                                    </p>
                                </div>
                                <div className="block">
                                    <img src={Person_3} alt="person_0" />
                                    <h5>
                                    Буров  Артем  Валерьевич
                                    </h5>
                                    <p>
                                        Исполнительный директор и партнер компании, окночил МГУ. В трейдинге более 7 лет
                                    </p>
                                </div>
                                <div className="block">
                                    <img src={Person_4} alt="person_0" />
                                    <h5>
                                    Дорофеев Илья Миронович
                                    </h5>
                                    <p>
                                        Исполнительный директор и партнер компании, окночил МГУ. В трейдинге более 7 лет
                                    </p>
                                </div>
                                <div className="block">
                                    <img src={Person_5} alt="person_0" />
                                    <h5>
                                        Зимин Остап Матвеевич
                                    </h5>
                                    <p>
                                        Исполнительный директор и партнер компании, окночил МГУ. В трейдинге более 7 лет
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section> */}

                    <section className="team_section_2">
                        <div className="container">
                            <h3>
                                Регулирование нашей компании
                            </h3>
                            <div className="row justify-between">
                                <div className="row">
                                    <img src={IFSC} alt="" />
                                    <div>
                                        <h3>
                                            IFSC Belize
                                        </h3>
                                    </div>
                                </div>
                                <div className="row">
                                    <img src={TFC} alt="" />
                                    <div>
                                        <h3>
                                            The Financial<br />
                                            Commission
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-between">
                                <div className="row">
                                    <img src={IFSC} alt="" />
                                    <div>
                                        <p>
                                            Компания имеет специальную брокерскую лицензию IFSC Belize (Комиссии по международным финансовым услугам Белиза) "Trading in financial and commodity-based derivative instruments and other securities" под номером 000138/210.
                                            Регулятор гарантирует, что только компании высокой степени надежности и уровня социальной ответственности получают возможность осуществлять свою деятельность на территории Белиза и за его пределами.
                                            Как регулятор рынка финансовых услуг, IFSC Belize осуществляет лицензирование и контроль деятельности участников рынка, а также выступает гарантом эффективности, честности и прозрачности работы своих лицензиатов.
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <img src={TFC} alt="" />
                                    <div>
                                        <p>
                                            Наша компания является официальным участником международной организации The Financial Commission, занимающейся урегулированием конфликтов между участниками и их клиентами.
                                            С 2018 года мы регулярно проходим аудит качества исполнения ордеров на сервисе Verify My Trade (VMT) – партнере The Financial Commission, позволяющем объективно оценить качество исполнения брокером торговых приказов. Успешное прохождение данной процедуры подтверждает соответствие брокера высоким стандартам, установленным для участников Financial Commission.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="team_section_3">
                        <div className="container">
                            <h3>
                                Более 10 знаменательных наград
                            </h3>
                            <img src={Rewards} alt="rewards" />
                        </div>
                    </section>

                    <section className="team_section_4">
                        <div className="container">
                            <h3>
                                Безопасность средств клиента
                            </h3>
                            <div className="row justify-between">
                                <div className="column">
                                    <div>
                                        Регулированная <br />
                                        деятельность
                                    </div>
                                    <p>
                                        Мы - международный брокер, регулируемый Комиссией по международным финансовым услугам Белиза (IFSC)
                                        под лицензией 000138/210.
                                    </p>
                                </div>
                                <div className="column">
                                    <div>
                                        Защита от отрицательного баланса
                                    </div>
                                    <p>
                                        Наша компания обнуляет баланс счета клиента, когда рыночная волатильность не позволяет сохранить положительный баланс на счете.
                                    </p>
                                </div>
                                <div className="column">
                                    <div>
                                        Компенсационный фонд
                                        <br />
                                        The Financial Commission
                                    </div>
                                    <p>
                                        Фонд обеспечивает выплату компенсаций до 20 000 EUR трейдерам, работающим с брокерами-участниками Комиссии.
                                    </p>
                                </div>
                                <div className="column">
                                    <div>
                                        Программа страхования гражданской ответственности
                                    </div>
                                    <p>
                                        Мы внедрили Программу страхования , которая включает ведущее на рынке страховое обеспечение в случае возникновения рисков, которые могут привести к финансовым потерям клиентов.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='team_section_5'>
                        <div className="container">
                            <Form num={2} />
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}