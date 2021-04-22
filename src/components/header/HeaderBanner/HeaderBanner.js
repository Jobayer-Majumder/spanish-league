import React from 'react';
import banner from '../../../images/undraw_junior_soccer_6sop.svg';

const HeaderBanner = () => {
    return (
        <section className='d-flex justify-content-center align-items-center' style={{height: '500px'}}>
            <div className="container">
                <div className="row row-cols-md-2">
                    <div className="col-md-6">
                        <h1 className="text-brand text-uppercase mb-3">
                            Football <br/> makes people happy !
                        </h1>
                        <p className="text-secondary mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, blanditiis sunt. Quasi facere dicta quae eius possimus doloremque molestiae delectus.</p>
                        <button className="btn btn-brand">Explore</button>
                    </div>
                    <div className="col-md-6">
                        <img src={banner} alt="" className='img-fluid' />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default HeaderBanner;