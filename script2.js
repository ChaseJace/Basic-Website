document.getElementById("buttonOut").addEventListener("click", function (event) {
    window.location.href = "website.html";
});

function populateUserDetails() {
    const userDetailsTable = document.getElementById('userDetails');
    userDetailsTable.innerHTML = ''; 

     // Add table header row with labels
    const headerRow = `
    <tr>
    <th>Username</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Laundry Status</th>
    </tr>`;
userDetailsTable.innerHTML += headerRow;

    const signedUpAccounts = JSON.parse(localStorage.getItem('signedUpAccounts')) || [];

    signedUpAccounts.forEach(user => {
        const row = `<tr>
                        <td>${user.username}</td>
                        <td>${user.email}</td>
                        <td>${user.phone}</td>
                        <td>Pending</td>                 
                    </tr>`;
        userDetailsTable.innerHTML += row;
    });
}

window.addEventListener('load', populateUserDetails);


