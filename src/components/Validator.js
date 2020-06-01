export default function onValidation(...data) {
    const arrData = data;
    console.log(arrData);
    const form = (arrData) => {
        console.log(arrData);
        let isName = false, isPhone = false, isEmail = false;
        const regName = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
        const regPhone = /^\+\d\d\d\d\d\d\d\d\d\d\d\d$/;
        const regEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

        if (regName.test(arrData[1])) isName = true;
        if (regPhone.test(arrData[2])) isPhone = true;
        if (regEmail.test(arrData[3])) isEmail = true;

        return {
            name: isName,
            phone: isPhone,
            email: isEmail
        };
    };

    const rev = (arrData) => {
        let isName = false, isEmail = false;
        const regName = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
        const regEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

        if (regName.test(arrData[1])) isName = true;
        if (regEmail.test(arrData[2])) isEmail = true;

        return {
            name: isName,
            email: isEmail
        };
    };

    if(arrData[0] === 'form') {
         return form(arrData);
    }

    if(arrData[0] === 'rev') {
        return rev(arrData);
    }
}