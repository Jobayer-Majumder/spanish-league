import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ShowDetails from '../showDetails/ShowDetails';

const Details = () => {
    const { teamId } = useParams()
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [teamId])
    // console.log(teams)

    return (
        <div>
            <div className='container row m-auto'>
                {
                    teams.map(team => <ShowDetails key={team.idTeam} team={team} />)
                }
            </div>
        </div>
    );
};

export default Details;