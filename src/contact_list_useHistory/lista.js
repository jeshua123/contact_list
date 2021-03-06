import React from 'react'

function Lista() {
    return (
        <div className='div-size mx-auto mt-5'>
            <h1 className='text-center mb-5'>Contact list</h1>

            <div className='d-flex justify-content-end'>
                <button type="button" className="btn btn-success">Add a new contact</button>
            </div>

            <div className='d-flex justify-content-around mt-2 mb-2 div-contact px-2 py-2'>
                <div>
                    <i className="fas fa-user icon-profile-size mt-2" />
                </div>

                <div>
                    <div>
                        <h6 className='mb-3'>Luis Delgado</h6>
                    </div>
                    <div className='d-flex'>
                        <i class="fas fa-map-marker-alt mr-3"/>
                        <p className='contact-font-size'>Limache 127c</p>
                    </div>
                    <div className='d-flex'>
                        <i class="fas fa-phone mr-3"/>
                        <p className='contact-font-size'>569 3302-6087</p>
                    </div>
                    <div className='d-flex'>
                        <i class="fas fa-envelope mr-3"/>
                        <p className='contact-font-size'>luisendroid@gmail.com</p>
                    </div>
                </div>

                <div className='d-flex'>
                    <a href='#'><i className="fas fa-edit mr-4" /></a>
                    <a href='#'><i className="fas fa-trash" /></a>
                </div>
            </div>

            <div className='d-flex justify-content-around mt-2 mb-2 div-contact px-2 py-2'>
                <div>
                    <i className="fas fa-user icon-profile-size mt-2" />
                </div>

                <div>
                    <div>
                        <h6 className='mb-3'>Luis Delgado</h6>
                    </div>
                    <div className='d-flex'>
                        <i class="fas fa-map-marker-alt mr-3"/>
                        <p className='contact-font-size'>Limache 127c</p>
                    </div>
                    <div className='d-flex'>
                        <i class="fas fa-phone mr-3"/>
                        <p className='contact-font-size'>569 3302-6087</p>
                    </div>
                    <div className='d-flex'>
                        <i class="fas fa-envelope mr-3"/>
                        <p className='contact-font-size'>luisendroid@gmail.com</p>
                    </div>
                </div>

                <div className='d-flex'>
                    <a href='#'><i className="fas fa-edit mr-4" /></a>
                    <a href='#'><i className="fas fa-trash" /></a>
                </div>
            </div>

            <div className='d-flex justify-content-around mt-2 mb-2 div-contact px-2 py-2'>
                <div>
                    <i className="fas fa-user icon-profile-size mt-2" />
                </div>

                <div>
                    <div>
                        <h6 className='mb-3'>Luis Delgado</h6>
                    </div>
                    <div className='d-flex'>
                        <i class="fas fa-map-marker-alt mr-3"/>
                        <p className='contact-font-size'>Limache 127c</p>
                    </div>
                    <div className='d-flex'>
                        <i class="fas fa-phone mr-3"/>
                        <p className='contact-font-size'>569 3302-6087</p>
                    </div>
                    <div className='d-flex'>
                        <i class="fas fa-envelope mr-3"/>
                        <p className='contact-font-size'>luisendroid@gmail.com</p>
                    </div>
                </div>

                <div className='d-flex'>
                    <a href='#'><i className="fas fa-edit mr-4" /></a>
                    <a href='#'><i className="fas fa-trash" /></a>
                </div>
            </div>
        </div>
    )
}

export default Lista