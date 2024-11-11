async function fetchdata() {
    try {
        let response = await fetch("https://api.github.com/users?per_page=10");


        let data = await response.json();

        const userList = document.getElementById("userList");
        if (!userList) {
            console.error("Error: userList element not found.");
            return;
        }

        userList.innerHTML = ''; 

        data.forEach((user) => {
            userList.innerHTML += `
                <li>
                    <a href="${user.html_url}" target="_blank">${user.login}</a>
                </li>
            `;
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
} 