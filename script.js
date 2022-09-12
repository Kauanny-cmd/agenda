const date = new Date();

const render = () => {
    date.setDate(1);

    const monthDays = document.querySelector('.days');

    const lastDays = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    const prevLastDays = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();

    const firstDay = date.getDay();

    const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDay();

    const nextDay = 7 - lastDay - 1;

    const months = [
        'Janeiro', 'Fevereiro', 'Março', 'Junho', 'Julho',
        'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ]

    document.querySelector('.date h1').innerHTML = months[date.getMonth()];

    document.querySelector('.date p').innerHTML = new Date().toLocaleDateString();

}

render();
