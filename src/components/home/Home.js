import React, { useEffect, useState } from 'react';
import ShowHomeContent from '../showHomeContent/ShowHomeContent';

const Home = () => {
    const [teams, setTeams] = useState([])
    // console.log(teams)

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=spanish%20la%20liga`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [])

    return (
        <div className='bg-light'>
            <div className="container row m-auto">
                {
                    teams.map(team => <ShowHomeContent key={team.idTeam} team={team} />)
                }
            </div>
        </div>
    );
};

export default Home;