import { LightningElement } from 'lwc';
import CAROUSEL_IMAGES from '@salesforce/resourceUrl/carousel';
import COKE_IMAGES from '@salesforce/resourceUrl/coke';

export default class CustomCarouselWrapper extends LightningElement {

    slides = [
        {
            //image: `${CAROUSEL_IMAGES}/carousel/photo1.jpg`,
            image: `${COKE_IMAGES}/Coke/coke1.png`,
            heading: 'Caption One',
            description: 'You can add description of first slide here'
        },
        {
            //image: `${CAROUSEL_IMAGES}/carousel/photo2.jpg`,
            image: `${COKE_IMAGES}/Coke/coke2.jpg`,
            heading: 'Caption Two',
            description: 'You can add description of second slide here'
        },
        {
            //image: `${CAROUSEL_IMAGES}/carousel/photo3.jpg`,
            image: `${COKE_IMAGES}/Coke/coke3.jpg`,
            heading: 'Caption Three',
            description: 'You can add description of third slide here'
        }
    ]
}