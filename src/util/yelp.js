import {apiKey} from './access.js';

const Yelp = {

    search(term, location, sortBy){

        return fetch(`https://yelp-server.herokuapp.com/search?term=${term}&location=${location}&sort_by=${sortBy}&key=${apiKey}`, {
            method: 'GET',    
        })
        .then(res => res.json())
        .then(jsonRes => {
            if(jsonRes.businesses){
                return jsonRes.businesses.map( business => {
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
                        url: business.url
                    
                    }
                })
            }else{
                return
            }
        })
    }
};

export default Yelp;