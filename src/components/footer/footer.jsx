import { Link } from 'react-router-dom';
import './footer.scss';
import Logo from './img/logo.png';
import { ModalContext } from "../../services/modalContext";
import { useContext } from 'react';

export default function Footer() {

    const { contextModal, setContextModal } = useContext(ModalContext);

    return (
        <footer id='footer'>
            <div className="container">
                <div className="row justify-between">
                    <div className="column">
                        <Link to='/'>
                            <img src={Logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="column">
                        <h4>
                            Разделы
                        </h4>
                        <Link to='/advantages'>
                            Преимущества
                        </Link>
                        <Link to='/offers/instruments'>
                            Инструменты
                        </Link>
                        <Link to='/team'>
                            Команда
                        </Link>
                        <Link to='/politics'>
                            Политика конфиденциальности
                        </Link>
                    </div>
                    <div className="column">
                        <h4>
                            Помощь
                        </h4>
                        <Link to=''>
                            В телеграм
                        </Link>
                        <Link to=''>
                            В whats up
                        </Link>
                        <Link to='' onClick={() => setContextModal({isShow: true, status: 1})}>
                            Заказать звонок
                        </Link>
                    </div>
                    <div className="column">
                        <h4>
                            Реквизиты
                        </h4>
                        <p>
                            CAPITAL HOME FINANCE LTD
                        </p>
                        <p>
                            Company number 07023169
                        </p>
                        <p>
                            Registered office address
                            8 Gretton Close, Peterborough, Cambridgeshire, United Kingdom, PE2 7WD
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}