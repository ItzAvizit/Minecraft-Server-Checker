<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minecraft Server Checker</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>🎮 Minecraft Server Status</h1>
        
        <div class="server-input">
            <input type="text" id="serverIp" placeholder="mc.hypixel.net">
            <button onclick="fetchServerInfo()">Check Server</button>
        </div>
        
        <div class="server-info" id="serverInfo">
            <!-- Server data will appear here -->
        </div>
        
        <div class="favorites">
            <h3>⭐ Favorite Servers</h3>
            <ul id="favoritesList"></ul>
            <button onclick="addToFavorites()">Add to Favorites</button>
        </div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>
