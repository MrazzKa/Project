const petro = document.getElementById('Petro');
const tucson = document.getElementById('Tucson');
const tokyo = document.getElementById('Tokyo');
const stpetersburg = document.getElementById('StPetersburg');
const honkong = document.getElementById('Honkong');

async function Api() {
    const respons_petro = await fetch('https://api.open-meteo.com/v1/forecast?latitude=54.8667&longitude=69.15&current_weather=true');
    const respons_tokyo = await fetch('https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current_weather=true');
    const respons_tucson = await fetch('https://api.open-meteo.com/v1/forecast?latitude=32.2217&longitude=-110.9265&current_weather=true');
    const respons_stpetersburg = await fetch('https://api.open-meteo.com/v1/forecast?latitude=59.9386&longitude=30.3141&current_weather=true');
    const respons_honkong = await fetch('https://api.open-meteo.com/v1/forecast?latitude=22.2783&longitude=114.1747&current_weather=true');

    const data_petro = await respons_petro.json();
    const data_tokyo = await respons_tokyo.json();
    const data_tucson = await respons_tucson.json();
    const data_stpetersburg = await respons_stpetersburg.json();
    const data_honkong = await respons_honkong.json();
    
    // Log the data to check the structure
    console.log("Petro Data:", data_petro);
    console.log("Tokyo Data:", data_tokyo);
    console.log("Tucson Data:", data_tucson);
    console.log("St. Petersburg Data:", data_stpetersburg);
    console.log("Hong Kong Data:", data_honkong);
    
    return [data_petro, data_tokyo, data_tucson, data_stpetersburg, data_honkong];
}

async function output() {
    try {
        let out = await Api();
        console.log(out); // Log the entire output array
        petro.textContent = `Air temperature: ${out[0].current_weather.temperature} \u00B0C`;
        tucson.textContent = `Air temperature: ${out[2].current_weather.temperature} \u00B0C`;
        tokyo.textContent = `Air temperature: ${out[1].current_weather.temperature} \u00B0C`;
        stpetersburg.textContent = `Air temperature: ${out[3].current_weather.temperature} \u00B0C`;
        honkong.textContent = `Air temperature: ${out[4].current_weather.temperature} \u00B0C`;
    }
    catch (error) {
        console.log(error);
    }
    finally {
        setTimeout(output, 10000);
    }
}

output();
