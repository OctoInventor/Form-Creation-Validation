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

async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');
    
    try {
        // Clear existing content
        dataContainer.innerHTML = '';
        
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

async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');
    
    try {
        // Clear existing content
        dataContainer.innerHTML = '';
        
        // Use await with fetch to get data from apiUrl
        const response = await fetch(apiUrl);
        
        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        
        // Convert the response to JSON
        const users = await response.json();
        
        // Create a <ul> element
        const userList = document.createElement('ul');
        
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

async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');
    
    try {
        // Clear existing content
        dataContainer.innerHTML = '';
        
        // Use await with fetch to get data from apiUrl
        const response = await fetch(apiUrl);
        
        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        
        // Convert the response to JSON
        const users = await response.json();
        
        // Create a <ul> element
        const userList = document.createElement('ul');
        
        // Loop through the users array
        users.forEach(user => {
            // Create a <li> element
            const listItem = document.createElement('li');
            
            // Set the text content of the <li> to the user's name
            listItem.textContent = user.name;
            
            // Append the <li> to userList
            userList.appendChild(listItem);
        });
        
        // Append the userList to the dataContainer
        dataContainer.appendChild(userList);
        
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
        // Clear existing content
        dataContainer.innerHTML = '';
        
        // Use await with fetch to get data from apiUrl
        const response = await fetch(apiUrl);
        
        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        
        // Convert the response to JSON
        const users = await response.json();
        
        // Create a <ul> element
        const userList = document.createElement('ul');
        
        // Loop through the users array
        users.forEach(user => {
            // Create a <li> element
            const listItem = document.createElement('li');
            
            // Set the text content of the <li> to the user's name
            listItem.textContent = user.name;
            
            // Append the <li> to userList
            userList.appendChild(listItem);
        });
        
        // Append the userList to the dataContainer
        dataContainer.appendChild(userList);
        
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
        // Clear existing content
        dataContainer.innerHTML = '';
        
        // Use await with fetch to get data from apiUrl
        const response = await fetch(apiUrl);
        
        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        
        // Convert the response to JSON
        const users = await response.json();
        
        // Create a <ul> element
        const userList = document.createElement('ul');
        
        // Loop through the users array
        users.forEach(user => {
            // Create a <li> element
            const listItem = document.createElement('li');
            
            // Set the text content of the <li> to the user's name
            listItem.textContent = user.name;
            
            // Append the <li> to userList
            userList.appendChild(listItem);
        });
        
        // Append the userList to the dataContainer
        dataContainer.appendChild(userList);
        
    } catch (error) {
        // Clear existing content and display error message
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        
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
        // Clear existing content
        dataContainer.innerHTML = '';
        
        // Use await with fetch to get data from apiUrl
        const response = await fetch(apiUrl);
        
        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        
        // Convert the response to JSON
        const users = await response.json();
        
        // Create a <ul> element
        const userList = document.createElement('ul');
        
        // Loop through the users array
        users.forEach(user => {
            // Create a <li> element
            const listItem = document.createElement('li');
            
            // Set the text content of the <li> to the user's name
            listItem.textContent = user.name;
            
            // Append the <li> to userList
            userList.appendChild(listItem);
        });
        
        // Append the userList to the dataContainer
        dataContainer.appendChild(userList);
        
    } catch (error) {
        // Clear existing content and display error message
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        
        // Handle any errors that occurred during the fetch
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Add event listener to run fetchUserData once the HTML document has fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
