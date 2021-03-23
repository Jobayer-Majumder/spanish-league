import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faFutbol, faMapMarkerAlt, faMars } from '@fortawesome/free-solid-svg-icons';
import male from '../../images/male.png';
import female from '../../images/female.png';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';



const ShowDetails = (props) => {
    const { strTeam, strTeamBadge, strStadiumThumb, strCountry, strDescriptionES, strDescriptionEN, intFormedYear, strGender, strSport, strYoutube, strTwitter, strFacebook } = props.team;
    // console.log(props.team)
    const customDivStyle = {
        backgroundSize: '100% 100%',
        background: `url(${strStadiumThumb})`,
        opacity: '0.5',
        height: '30 0px'
    }

    return (
        <div>
            <div style={customDivStyle} className='d-flex justify-content-center align-items-center'>
                <img className='w-25' src={strTeamBadge} alt="" />
            </div>
            <div className='row d-flex bg-success p-4 rounded'>
                <div className="col-md-6 text-white p-3 text-center text-sm-left">
                    <h1 className='mb-3'>{strTeam}</h1>
                    <h6 className='mb-3'><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded : {intFormedYear}</h6>
                    <h6 className='mb-3'><FontAwesomeIcon icon={faFlag} /> Country : {strCountry}</h6>
                    <h6 className='mb-3'><FontAwesomeIcon icon={faFutbol} /> Sports Type : {strSport}</h6>
                    <h6><FontAwesomeIcon icon={faMars} /> Gender : {strGender}</h6>

                </div>
                <div className="col-md-6">
                    {/* conditional rendering to show image */}
                    <img className='img-fluid' src={strGender === 'Male' ? male : female} alt="" />
                </div>
            </div>
            <div className="container p-4">
                <h2 className='text-center text-md-left'>About</h2>
                <p className='text-justify'>{strDescriptionEN}</p>
                <p className='text-justify'>{strDescriptionES}</p>
                <div className='col-md-5 d-flex justify-content-between  m-auto p-4 display-4 bg-light'>
                    <a href={`https://${strTwitter}`} target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href={`https://${strFacebook}`} target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href={`https://${strYoutube}`} target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
                </div>
            </div>
        </div>
    );
};

export default ShowDetails;