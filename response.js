function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            let sum = 0;
            for(i = 1; i <= 100; i++) {
                sum += i;
            }

            const error = false;

            if(!error) {
                resolve(sum);
            } else {
                reject("Error: Something went wrong!");
            }
        }, 2000);
    });
};

async function fetchData() {
    let res = await getData();
    return res;
}

async function consoleRes() {
    let data = await fetchData();
    console.log(data);
}

consoleRes();