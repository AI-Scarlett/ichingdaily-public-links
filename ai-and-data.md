# Local Data Disclosure

**JadeName: Chinese Names** currently creates name candidates locally on the device.

## Default Behavior

The core naming experience is designed to work offline. Birth details, surname choices, naming styles, generated candidates, and saved names are not sent to our server.

## Optional User-Configured AI

JadeName does not provide an AI service or proxy. Users may configure their own endpoint, model, and API key. The API key is stored locally in the device Keychain.

Users choose whether birth details may be sent to their configured provider. If this option is off, AI-ready content should be limited to selected names, character meanings, scores, and cultural notes.

Five-element associations are used only as a creative cultural naming reference. They are not predictions or professional advice.
