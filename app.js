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

        const regionalData = json.data_water.filter(data => data.region === region);
        console.log(regionalData);

        //display
        displayResult(regionalData);

        if (regionalData.length > 0) {
            return regionalData;
        } else {
            throw new Error(`No data found for region: ${region}`);
        }
        
        
    } catch (error){
        console.error(error.message);
    }
}

function displayResult(data){
    const resultDiv = document.getElementById("resultDiv");
    // console.log(resultDiv);
    console.log(data);
    resultDiv.innerHTML = "";

    data.forEach(item => {
        
            for(const key in item){
                if(item.hasOwnProperty(key))
                console.log(`${key}: ${item[key]}`)
            }

    });
}
document.getElementById("search").addEventListener("click",() => {
    const region = document.getElementById("input_region").value.trim();

    if(region){
        getData(region)
    } else {
        console.log("Please enter a region");
    }
});


