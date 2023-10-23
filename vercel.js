{
  "version": 2,
  "builds": [
    {
      "src": "src/App.php",
      "use": "@vercel/php",
      "config": { "maxLambdaSize": "2048mb" }
    }
  ],
  "routes": [{ "src": "/(.*)", "dest": "/src/App.php" }]
}
