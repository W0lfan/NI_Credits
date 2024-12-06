import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export default function TeamCard({ team, users }) {

    console.log(team,"isteam")

    return (
        <>
            <div className="team-name">
                {team.nomDefis}
            </div>
            <div className="team-players">
                {users.map((player) => {
                    if (player.idDefis === team.id) {
                        return (
                            <div className="team-player" key={player.id}>
                                <a href={`https://github.com/${player.githubMembre}`}>
                                <img src={`https://github.com/${player.githubMembre}.png`} alt="player" /></a>
                                <div className="team-player-name">
                                    {player.nomMembre} {player.prenomMembre} 
                                    <br/> {player.anneeMembre} {player.licenceMembre}
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </>
    )
};

TeamCard.propTypes = {
    team: PropTypes.object.isRequired,
    users: PropTypes.array.isRequired
};