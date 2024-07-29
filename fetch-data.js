async function fetchUserData() {
    try {
        // Fetch data from the API
        let response = await fetch('https://api.example.com/userdata');
        
        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        
        // Parse the JSON data from the response
        let data = await response.json();
        
        // Display the data (you can customize this part as needed)
        console.log(data);
        
        // Example: Display data in an HTML element
        document.getElementById('userData').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Call the function to fetch and display the data
fetchUserData();

async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    try {
        // Fetch data from the API
        let response = await fetch(apiUrl);
        
        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        
        // Parse the JSON data from the response
        let data = await response.json();
        
        // Display the data (you can customize this part as needed)
        console.log(data);
        
        // Example: Display data in an HTML element
        document.getElementById('userData').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Call the function to fetch and display the data
fetchUserData();

async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');
    
    try {
        // Fetch data from the API
        let response = await fetch(apiUrl);
        
        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        
        // Parse the JSON data from the response
        let data = await response.json();
        
        // Display the data (you can customize this part as needed)
        console.log(data);
        
        // Example: Display data in the HTML element
        dataContainer.innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Call the function to fetch and display the data
fetchUserData();

async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');
    
    try {
        // Fetch data from the API
        let response = await fetch(apiUrl);
        
        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        
        // Parse the JSON data from the response
        let data = await response.json();
        
        // Display the data (you can customize this part as needed)
        console.log(data);
        
        // Example: Display data in the HTML element
        dataContainer.innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Call the function to fetch and display the data
fetchUserData();

async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');
    
    try {
        // Use await with fetch to get data from apiUrl
        const response = await fetch(apiUrl);
        
        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        
        // Parse the JSON data from the response
        const data = await response.json();
        
        // Display the data (you can customize this part as needed)
        console.log(data);
        
        // Example: Display data in the HTML element
        dataContainer.innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Call the function to fetch and display the data
fetchUserData();

async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');
    
    try {
        // Use await with fetch to get data from apiUrl
        const response = await fetch(apiUrl);
        
        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        
        // Convert the response to JSON
        const users = await response.json();
        
        // Display the data (you can customize this part as needed)
        console.log(users);
        
        // Example: Display data in the HTML element
        dataContainer.innerText = JSON.stringify(users, null, 2);
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Call the function to fetch and display the data
fetchUserData();
