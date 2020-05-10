export default function onValidation(...data) {
    const arrData = data;
    let isName, isPhone, isEmail = false;
    const regName = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
    const regPhone = /^\+\d\d\d\d\d\d\d\d\d\d\d\d$/;
    const regEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

    if (regName.test(arrData[0])) isName = true;
    if (regPhone.test(arrData[1])) isPhone = true;
    if (regEmail.test(arrData[2])) isEmail = true;

    if (isName === true && isPhone === true && isEmail === true) {
        return true;
    }else if (isName === false) {
        return 'name';
    }else if (isPhone === false) {
        return 'phone';
    }else if (isEmail === false) {
        return 'email';
    }
}