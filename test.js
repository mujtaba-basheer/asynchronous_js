const prom  = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("here!");
            res(1);
        }, 2000);
    })
}

const exec = async () => {
    let check = 0;
    console.log(`check before function: ${check}`)
    prom().then(resp => {
        console.log(resp);
        check = resp;
        console.log(`check in function: ${check}`)
    })
    console.log(`check after function: ${check}`)
}

exec();