# MusicCrunch
Toolset for playing with Spotify user data.

## Setup to Run
1.  In your top-level directory, run `npm install` to install the required Node
    dependencies.
2.  Rename the `DEFAULT_client_config.js` file in the `src/config` directory to
    `client_config.js` and change its contents to your unique Spotify client ID,
    your client secret, and your registered callback URIs. NOTE: The .gitignore
    for this project is set to ignore the `src/config/client_config.js` file, so
    your secrets should not be tracked. However, you should verify this is the
    case if you plan to fork the project and post it to a public-facing repo.
3.  Run `node src/authorization/authorize.js` in your terminal.
4.  Go to <https://localhost:8888> in your preferred browser and test that
    everything is working.
