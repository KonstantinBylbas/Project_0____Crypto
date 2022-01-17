import './button.scss';

export default function Button({txt, handlerClick, type}) {
    return(
        <button className={`button button_${type}`}
            onClick={handlerClick}
        >
            <span>
                {txt}
            </span>
        </button>
    )
}