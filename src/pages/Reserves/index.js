import React from 'react'
import './reserves.css';

import NavBar from '../../Components/NavBar';
import Details from '../../Components/PageDetails';
import ReserveForm from '../../Components/Forms/ReserveForm';


const pageDetails = {
        title: "Reservaciones",
        details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magni velit sint tempora alias modi odio facere deserunt doloremque. Laborum autem et necessitatibus, magni sit inventore optio, laboriosam saepe exercitationem obcaecati illo, cum sapiente magnam porro reiciendis eius placeat dolorum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magni velit sint tempora alias modi odio facere deserunt doloremque. Laborum autem et necessitatibus, magni sit inventore optio, laboriosam saepe exercitationem obcaecati illo, cum sapiente magnam porro reiciendis eius placeat dolorum?`,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magni velit sint tempora alias modi odio facere deserunt doloremque. Laborum autem et necessitatibus, magni sit inventore optio, laboriosam saepe exercitationem obcaecati illo, cum sapiente magnam porro reiciendis eius placeat dolorum? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Enim magni velit sint tempora alias modi odio facere deserunt doloremque. Laborum autem et necessitatibus, magni sit inventore optio, laboriosam saepe exercitationem obcaecati illo, cum sapiente magnam porro reiciendis eius placeat dolorum?`

};


export default function Reserves() {
    return (
        <>
            <NavBar />

            <section className="reservations-section wrapper-xxl wrapper">
                {/* Detalles de la pagina */}
                <Details
                    title={pageDetails.title}
                    details={pageDetails.details}
                    description={pageDetails.description}
                />

                <ReserveForm />
            </section>
        </>
    )
}