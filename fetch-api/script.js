const userContainer = document.getElementById('userContainer');
const reloadBtn = document.getElementById('reloadBtn');

// Mock Indian user data
const indianUsers = [
    { name: "Aarav Sharma", email: "aarav.sharma@example.com", address: { street: "MG Road", city: "Mumbai" } },
    { name: "Saanvi Patel", email: "saanvi.patel@example.com", address: { street: "Brigade Road", city: "Bengaluru" } },
    { name: "Vivaan Singh", email: "vivaan.singh@example.com", address: { street: "Connaught Place", city: "New Delhi" } },
    { name: "Ananya Reddy", email: "ananya.reddy@example.com", address: { street: "Banjara Hills", city: "Hyderabad" } },
    { name: "Aditya Kapoor", email: "aditya.kapoor@example.com", address: { street: "Marine Drive", city: "Mumbai" } },
    { name: "Ishita Nair", email: "ishita.nair@example.com", address: { street: "Lavelle Road", city: "Bengaluru" } },
    { name: "Rohan Mehta", email: "rohan.mehta@example.com", address: { street: "CP", city: "New Delhi" } },
    { name: "Kavya Joshi", email: "kavya.joshi@example.com", address: { street: " Jubilee Hills", city: "Hyderabad" } },
    { name: "Arjun Iyer", email: "arjun.iyer@example.com", address: { street: "Andheri West", city: "Mumbai" } },
    { name: "Diya Sharma", email: "diya.sharma@example.com", address: { street: "Indiranagar", city: "Bengaluru" } },
];

function displayUsers(users) {
    userContainer.innerHTML = '';
    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('userCard');
        userCard.innerHTML = `
            <h3>${user.name}</h3>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        `;
        userContainer.appendChild(userCard);
    });
}

// Simulate fetching from API
function fetchUsers() {
    userContainer.innerHTML = '<p>Loading users...</p>';
    
    setTimeout(() => {
        displayUsers(indianUsers);
    }, 1000); // simulate network delay
}

// Fetch users on page load
fetchUsers();

// Reload users on button click
reloadBtn.addEventListener('click', fetchUsers);
