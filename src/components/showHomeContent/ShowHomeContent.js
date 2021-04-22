import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const ShowHomeContent = (props) => {
    const { strTeam, strTeamBadge, idTeam, strSport } = props.team;
    // console.log(props.team)
    return (
        <div className='col-md-4 p-4'>
            <div className="card border-0 text-center shadow-sm">
                <div className="card-header border-0" style={{background: 'none'}}>
                    <img src={strTeamBadge} className="card-img-top w-50" alt="" />
                </div>
                <div className="card-body">
                    <h5 className="card-title text-uppercase text-secondary">{strTeam}</h5>
                    <p className="text-secondary">Sports Type : {strSport}</p>
                    <Link to={`/team/${idTeam}`} >
                        <button className="btn btn-brand" >
                            Explore <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ShowHomeContent;