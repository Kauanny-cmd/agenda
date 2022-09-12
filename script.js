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



}

render();
