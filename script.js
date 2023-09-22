async function fetchData(){
    const url = 'https://concerts-artists-events-tracker.p.rapidapi.com/location?name=Saratoga%20Springs&minDate=2023-09-22&maxDate=2024-02-14&page=1';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8916f21899mshbdf1595a7feb5c1p17c30bjsnc4d0c7b10b20',
            'X-RapidAPI-Host': 'concerts-artists-events-tracker.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }

    document.getElementById("concerts").innerHTML = record.data.map(item => `<li>${item.name}</li>`).join('');
}

fetchData()


// unfortunately the api is not free anymore