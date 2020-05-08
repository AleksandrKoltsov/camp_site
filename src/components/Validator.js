export default function onValidation(data) {
    // console.log(data);
    const regName = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
    const regPhone = /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
    const regEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

    if (regName.test(data.name)) {
        return true;
    } else if (regPhone.test(data.phone)) {
        return true;
    }else if(regEmail.test(data.email)) {
        return true;
    }else
    //     if (!data.selectedDate === undefined) {
    //     console.log(Date.parse(data.selectedDate));
    //     // return true;
    // }else
        return false;
}