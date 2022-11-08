import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const ServiceDetails = () => {
    useTitle('Details')
    const detailsData = useLoaderData()
    const {name,img} = detailsData
    return (
        <div>
            <h2>details{name}</h2>
        </div>
    );
};

export default ServiceDetails;