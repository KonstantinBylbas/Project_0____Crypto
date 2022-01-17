
export default async function sendData(name, phone, email = '', date) {

    const dataForSend = {
        token: 'ArbitrageCompany-9379992=)',
        lp: `${window.location.host} (Colorful Brok)`,
        fio: name,
        phone: phone,
        email: email
    }
    // if (date) dataForSend.time_call = moment().format(`yyyy-MM-DDT${date}:00.000Z`);

    return fetch("https://crm2.arbitrage.team:3030/push-client", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(dataForSend),
    })
        .then((data) => {
            if (data.ok && data.status === 200)
                return data.json();
            else if (data.status === 455) {
                //  todo dubl
                throw ('dubl');
            }
        })
}

