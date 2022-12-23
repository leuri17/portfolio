/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

document.onload = () => {
  // TODO(developer): Set to client ID and API key from the Developer Console
  const CLIENT_ID = '765289817580-96bou9m0jvb2eiedpshfnc7f1q7pc56r.apps.googleusercontent.com'
  const API_KEY = 'AIzaSyBkwJ_3CnBQtC_0qAEEBphCUGxUtiviMT4'

  // Discovery doc URL for APIs used by the quickstart
  const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'

  // Authorization scopes required by the API; multiple scopes can be
  // included, separated by spaces.
  const SCOPES = 'https://www.googleapis.com/auth/gmail.send'

  /**
   * Callback after api.js is loaded.
   */
  function gapiLoaded () {
    gapi.load('client', initializeGapiClient)
  }

  /**
   * Callback after the API client is loaded. Loads the
   * discovery doc to initialize the API.
   */
  async function initializeGapiClient () {
    await gapi.client.init({
      apiKey: API_KEY,
      discoveryDocs: [DISCOVERY_DOC]
    })
  }

  /**
   * Callback after Google Identity Services are loaded.
   */
  function gisLoaded () {
    tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES,
      callback: '' // defined later
    })
  }

  /**
   *  Sign in the user upon button click.
   */
  function handleAuthClick () {
    tokenClient.callback = async (resp) => {
      if (resp.error !== undefined) {
        throw resp
      }
      console.log(resp.access_token)
    }

    if (gapi.client.getToken() === null) {
      // Prompt the user to select a Google Account and ask for consent to share their data
      // when establishing a new session.
      tokenClient.requestAccessToken({ prompt: 'consent' })
    } else {
      // Skip display of account chooser and consent dialog for an existing session.
      tokenClient.requestAccessToken({ prompt: '' })
    }
  }
}
