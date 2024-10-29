const data = {
    bill: 500,
    owed: 327
}

const fetchData = async() => {
    try {
        const response = await fetch('http://localhost:3000/calculate-change', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            const error = await response.json();
            throw new Error(`Error ${response.status}: ${error.message}`)
        }
        const result = await response.json();
        console.log(result)
    } catch (err) {
        console.error(err)
    }
}

fetchData();