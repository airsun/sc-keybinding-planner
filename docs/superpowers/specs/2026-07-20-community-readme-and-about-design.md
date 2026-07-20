# Community README and GitHub About Design

## Goal

Turn the repository landing page into a credible invitation for Star Citizen players and community contributors. A visitor should understand the tool, see it in action, and reach the live planner without first reading implementation details. The player outcome is not merely cleaner keybinding data: it is discovering, creating, and refining a control scheme that fits their devices and play style so operating a ship feels more natural, immersive, and enjoyable.

## Audience and language

- Primary audience: Star Citizen players planning dual-VKB or other HOSAS layouts.
- Secondary audience: community maintainers who may contribute device knowledge, binding strategies, or code.
- The README opens in English so international players can understand the project at a glance.
- The detailed explanation is Chinese-first, while product terms such as Profile, MODE, CTX, HOSAS, and Workspace remain in English.

## Narrative approach

Use a player-tool narrative rather than presenting the repository as a personal preset or a developer library.

The central promise is that players can reason about an entire control scheme before reproducing it in Star Citizen. The scenario catalog helps players discover what they need, the visual planner helps them create a coherent setup, and Profiles plus Workspace data let them refine it over time. The README should connect familiar pain points—spreadsheets, screenshots, duplicate bindings, and hard-to-explain layers—to concrete planner capabilities, then connect those capabilities to a more immersive and enjoyable experience in the cockpit.

“Discover” does not imply a built-in preset marketplace. In the current product it means finding relevant operations through scenario and game-order views, comparing relationships, and progressively shaping a personal configuration.

## README structure

1. **Hero**
   - Product name: `SC Dual VKB Binding Planner`.
   - One concise English value proposition built around discovering, creating, and refining a setup that fits the way the player flies.
   - One Chinese sentence connecting the local-first visual planning workflow to more natural operation and greater immersion.
   - A prominent link to the live GitHub Pages planner and a secondary link to repository Issues.
   - A real screenshot of the current application stored under `docs/assets/`; do not use Star Citizen promotional artwork.

2. **Why this exists**
   - Describe the difficulty of maintaining a complete HOSAS scheme across flight, combat, scanning, mining, salvage, and other contexts.
   - Position the planner as a clearer alternative to disconnected notes, screenshots, and spreadsheets.
   - Make the emotional outcome explicit: less attention spent remembering controls, more attention available for flight, combat, exploration, and the pleasure of operating the ship.

3. **Player-facing capabilities**
   - Visual left/right stick assignment.
   - Scenario order and in-game keybinding order.
   - Multiple Profiles.
   - MODE and CTX configuration.
   - Explainable classification of shared bindings, contextual reuse, and true conflicts.
   - Local browser persistence, JSON import/export, and optional GitHub Workspace Sync.

4. **Quick start**
   - Open the planner.
   - Select an action.
   - Click a physical stick slot.
   - Refine MODE or CTX when needed.
   - Export the Workspace JSON as a backup or configure GitHub sync.

5. **Concept model**
   - Explain Profile, MODE, CTX, and Workspace in short player-oriented terms.
   - Link to `docs/sc-dual-vkb-scenario-config.md` for the full configuration model.

6. **Project boundaries and privacy**
   - State that this is a planning tool, not a direct Star Citizen XML writer or an automatic in-game binding installer.
   - State that the planner is local-first.
   - Explain that GitHub sync is optional and requires a fine-grained token supplied by the player.
   - Include an unofficial fan-tool disclaimer and make no claim of affiliation with Cloud Imperium Games.

7. **Community**
   - Invite players to open Issues for device adaptations, binding strategies, usability problems, and feature proposals.
   - Avoid claiming an established contributor community, device catalog, or support policy that does not yet exist.

## Copy and visual style

- Confident, compact, and practical rather than promotional or lore-heavy.
- Use player vocabulary before implementation vocabulary.
- Prefer short sections, one compact capability table, and an ordered quick-start flow.
- Avoid badge walls; use only a live-demo link and small factual badges if they add useful state.
- The screenshot must show the latest planner UI at a readable desktop viewport with no secrets or personal workspace data.
- Do not use external game artwork, logos, or screenshots whose reuse rights are unclear.

## GitHub About

### Description

`Discover, create, and refine a Star Citizen HOSAS setup that fits the way you fly — a local-first visual planner for dual VKB bindings.`

### Homepage

`https://airsun.github.io/sc-keybinding-planner/`

### Topics

- `star-citizen`
- `vkb`
- `hosas`
- `keybindings`
- `joystick`
- `dual-stick`
- `flight-sim`
- `web-app`
- `gaming-tools`

## Scope boundaries

This change creates the root `README.md`, adds one current product screenshot, and updates GitHub About metadata. It does not change planner behavior, workspace schemas, Pages deployment, device presets, repository licensing, or Star Citizen data extraction.

The absence of a repository license must remain visible: the README will not label the project as open source until the owner chooses and adds a license.

## Verification

- Render the README locally or inspect its Markdown structure for broken relative links and malformed headings.
- Confirm every feature statement against the current application and documentation.
- Confirm the screenshot is readable and contains no token or personal workspace data.
- Confirm the live-demo URL returns the planner.
- Re-read the repository through the GitHub API after updating About and verify description, homepage, and topics exactly match this design.
- Check `git diff --check` and keep unrelated untracked files untouched.
