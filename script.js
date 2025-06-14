async function fetchServerInfo() {
    const serverIp = document.getElementById("serverIp").value;
    const serverInfoDiv = document.getElementById("serverInfo");
    
    serverInfoDiv.innerHTML = "<p>Loading...</p>";
    
    try {
        const response = await fetch(`https://api.mcsrvstat.us/2/${serverIp}`);
        const data = await response.json();
        
        let html = `
            <h2>${serverIp}</h2>
            <p><strong>Status:</strong> ${data.online ? "🟢 Online" : "🔴 Offline"}</p>
            <p><strong>Players:</strong> ${data.players?.online || 0}/${data.players?.max || 0}</p>
            <p><strong>Version:</strong> ${data.version || "Unknown"}</p>
            <p><strong>MOTD:</strong> ${data.motd?.clean || "No MOTD"}</p>
        `;
        
        if (data.icon) {
            html += `<img src="${data.icon}" alt="Server Icon" width="64">`;
        }
        
        serverInfoDiv.innerHTML = html;
    } catch (error) {
        serverInfoDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
}

function addToFavorites() {
    const serverIp = document.getElementById("serverIp").value;
    if (!serverIp) return;
    
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.includes(serverIp)) {
        favorites.push(serverIp);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        updateFavoritesList();
    }
}

function updateFavoritesList() {
    const favoritesList = document.getElementById("favoritesList");
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    
    favoritesList.innerHTML = favorites.map(ip => `
        <li onclick="document.getElementById('serverIp').value = '${ip}'; fetchServerInfo()">${ip}</li>
    `).join("");
}

// Load favorites on startup
updateFavoritesList();
