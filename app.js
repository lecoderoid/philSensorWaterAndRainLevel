async function getData(){
    const url = "https://philsensors.asti.dost.gov.ph/station/monitoring"
    try{
        const response = await fetch(url);

        if(!response.ok){
            throw new Error("response status: ${response.status}");
        }

        return json = await response.json();
        
    } catch (error){
        console.error(error.message);
    }
}

function searchRegion(region){
    data = getData();
    console.log(data);
}
getData();


const input = document.getElementById("input_region");
const search_btn = document.getElementById("search");

search_btn.addEventListener("click", searchRegion);

