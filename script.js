// script.js

import { config } from './config.js';

document.addEventListener('DOMContentLoaded', () => {
  const gamesContainer = document.getElementById('games-items');

  config.games.forEach(game => {
    const gameItem = document.createElement('div');
    gameItem.className = 'game-item';

    const gameName = document.createElement('h3');
    gameName.textContent = game.name;

    const currentPlayerCount = document.createElement('p');
    currentPlayerCount.textContent = `Concurrent Players: ${game.currentPlayers}`;

    const discordButton = document.createElement('a');
    discordButton.href = game.discordLink;
    discordButton.textContent = 'Discord';
    discordButton.className = 'btn discord';

    const twitterButton = document.createElement('a');
    twitterButton.href = game.twitterLink;
    twitterButton.textContent = 'Twitter';
    twitterButton.className = 'btn twitter';

    const gameIcon = document.createElement('img');
    gameIcon.src = game.icon;
    gameIcon.alt = `${game.name} Icon`;

    gameItem.appendChild(gameIcon);
    gameItem.appendChild(gameName);
    gameItem.appendChild(currentPlayerCount);
    gameItem.appendChild(discordButton);
    gameItem.appendChild(twitterButton);

    gamesContainer.appendChild(gameItem);
  });
});
