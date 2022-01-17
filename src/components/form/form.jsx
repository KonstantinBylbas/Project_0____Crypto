import { useContext } from "react";
import { ThanksContext } from "../../services/contextThanks";
import validator from "validator";
import Button from "../button/button";
import "./form.scss";
import sendData from "../../services/sendData";

export default function Form({ title = "Свяжитесь с нами", handlerSubmit = function () { }, num = 1, status = 0 }) {

    const { contextThanks, setContextThanks } = useContext(ThanksContext);

    function error(a, isInvalid) {
        a.style.border = `solid 0.1rem ${isInvalid ? 'red' : '#eee'}`;
    }

    function handleSubmit(event) {
        event.preventDefault();

        let name = event.target[0].value.trim();
        let phone = event.target[1].value.trim();

        if (status == 0) {
            if (event.target[0].value.trim().length < 3 || !validator.isMobilePhone(event.target[1].value, 'any') || event.target[2].value.trim().length < 2) {
 
            }
        }
        else {
            if (event.target[0].value.trim().length < 3 || !validator.isMobilePhone(event.target[1].value, 'any') || event.target[2].value.trim().length < 2) {
                if (event.target[0].value.trim().length < 3)
                    error(event.target[0], true);
                else
                    error(event.target[0], false);
                if (!validator.isMobilePhone(event.target[1].value, 'any'))
                    error(event.target[1], true);
                else
                    error(event.target[1], false);
                if (event.target[2].value.trim().length < 2)
                    error(event.target[2], true);
                else
                    error(event.target[2], false);
                return;
            }
        }

        sendData(name, phone)
            .then(() => {
                setContextThanks(true);
                setTimeout(() => {
                    handlerSubmit();
                }, 2000);
            })
            .catch((error) => {
                if (error === 'dubl') {

                }
            })
    }

    return (
        status == 0 ?
            <form className='form' onSubmit={handleSubmit}>
                <div>
                    <p>Введите ваш Email</p>
                    <input type="email" name="email" required />
                    <div className="row">
                        <p>Введите пароль</p>
                        <p>Повторите пароль</p>
                    </div>
                    <div className="row">
                        <input type="password" name="password" required />
                        <input type="password" name="confirmPassword" required />
                    </div>
                    <p>Есть промокод? Введитие его ниже</p>
                    <input type="text" name='promocode' />
                    <Button txt='Зарегистрироваться' />
                </div>
            </form>
            :
            <form className='form_1' onSubmit={handleSubmit} >
                <div className={`form_1_done ${contextThanks ? "form_1_done_show" : ""}`}>
                    <h3>
                        Спасибо!
                        <br />
                        Заявка оправленна
                    </h3>
                </div>
                <h4>{title}</h4>
                <div className="form_1_row">
                    <div className="form_1_cell">
                        <label htmlFor="name">Имя Фамилия</label>
                        <input type="text" name="name" id="name" required minLength={3} />

                        <label htmlFor="tel">Телефон</label>
                        <input type="text" name="tel" id="tel" required minLength={5} />
                    </div>

                    <div className="form_1_cell">
                        <label htmlFor="comment">
                            Ваш вопрос
                        </label>
                        <textarea name="comment" id="comment" required minLength={2}></textarea>
                    </div>
                </div>
                <input type="checkbox" name="form_1_agree" required id={`form_1_agree${num}`} />
                <label htmlFor={`form_1_agree${num}`}>
                    Я согласен(на) на обработку моих персональных данных
                </label>
                <div className="form_1_footer">
                    <Button txt="Отправить" handlerClick={() => { }} />
                </div>
            </form>
    );
}
