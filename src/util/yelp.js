import {apiKey} from './access.js';

const Yelp = {

    search(term, location, sortBy){
        const headers = {
            Authorization: `Bearer ${apiKey}`
        }

        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: headers
        }).then(res => res.json())
        .then(jsonRes => {
            if(jsonRes.businesses){
                return jsonRes.map( business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating:business.rating,
                        reviewCount: business.review_count,
                    
                    }
                })
            }
        })
    }
};

export default Yelp;