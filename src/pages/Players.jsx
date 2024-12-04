import React from 'react';

const Players = () => {
  const players = [
    { id: 1, name: 's1mple', role: 'AWPer', team: 'NAVI', image: '../images/simple.jpg' },
    { id: 2, name: 'sh1ro', role: 'AWPer', team: 'Cloud9', image: '../images/shiro.jpg' },
    { id: 3, name: 'electroNic', role: 'Rifler/IGL', team: 'NAVI', image: '../images/electronic.jpg' },
    { id: 4, name: 'Ax1Le', role: 'Rifler', team: 'Cloud9', image: '../images/axile.jpg' },
    { id: 5, name: 'Jame', role: 'AWPer/IGL', team: 'Virtus.pro', image: '../images/Jame.jpg' },
  ];

  return (
    <div>
      <h2 className="players-title">Top CIS Players</h2>
      <div className="players-container">
        {players.map(player => (
          <div key={player.id} className="player-card">
            <div className="player-image">
              <img src={player.image} alt={player.name} className="player-img" />
            </div>
            <h3>{player.name}</h3>
            <p>Role: {player.role}</p>
            <p>Team: {player.team}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Players;
