async function saveData(details) {
    const response = await fetch('https://voyage-vision-57d39-default-rtdb.firebaseio.com/user-details.json',
        {
            method: 'POST',
            body: JSON.stringify(details),
            headers: {
                'Content-Type': 'application/json'
            }
        });

    const data = await response.json();
    return data;
}

async function getData(enteredEmail) {
    try {
        const response = await fetch('https://voyage-vision-57d39-default-rtdb.firebaseio.com/user-details.json');
        if (!response.ok) {
            throw new Error(Error.message);
        }

        const data = await response.json();

        if (Array.isArray(data)) {
            // Data is already an array of objects
            for (let i = 0; i < data.length; i++) {
                if (data[i].email === enteredEmail) {
                    return true;
                }
            }
        } else {
            // Data is an object, convert to array of objects
            const dataArray = Object.entries(data).map(([key, value]) => {
                return {
                    id: key,
                    ...value
                };
            });
            for (let i = 0; i < dataArray.length; i++) {
                if (dataArray[i].email === enteredEmail) {
                    return true;
                }
            }
        }
        return false;

    } catch(error) {
        console.log(error.message)
    }
}

export { saveData, getData};