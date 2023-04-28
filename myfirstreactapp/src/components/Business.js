import React from 'react';

function Business() {

    const businessObj = {
        imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        businessName: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'Flavortown',
        state: 'NY',
        zipCode: '10101',
        category: 'Italian',
        rating: 4.5,
        reviewCount: 90
    }

    return (
        <div id='business'>
            <img src={businessObj.imageSrc} />
            <h3>{businessObj.businessName}</h3>
            <div id='businessDetails'>
            <div id='left'>
                <p>{businessObj.address}</p>
                <p>{businessObj.city}</p>
                <p>{businessObj.state}</p>
                <p>{businessObj.zipCode}</p>
            </div>
            <div id='right'>
                <p>{businessObj.category}</p>
                <p>{businessObj.rating}</p>
                <p>{businessObj.reviewCount}</p>
            </div>
            </div>
        </div>
    );
}

export default Business;