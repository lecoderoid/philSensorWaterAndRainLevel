async function getData(){
    const url = "https://philsensors.asti.dost.gov.ph/station/monitoring"
    try{
        const response = await fetch(url);

        if(!response.ok){
            throw new Error("response status: ${response.status}");
        }

        json = await response.json();

        const region = document.getElementById("input_region").value;
        console.log(region);

        const regionalData = json.data_rain.filter(data => data.region === region);
        console.log(regionalData)

        if (regionalData.length > 0) {
            return regionalData;
        } else {
            throw new Error(`No data found for region: ${region}`);
        }
        
        
    } catch (error){
        console.error(error.message);
    }
}

const search_btn = document.getElementById("search");

search_btn.addEventListener("click", getData);

