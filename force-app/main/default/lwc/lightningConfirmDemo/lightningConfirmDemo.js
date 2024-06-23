import { LightningElement } from 'lwc';
import LightningConfirm from 'lightning/confirm';

export default class LightningConfirmDemo extends LightningElement {

    async confirmHandler(){
        const result = await LightningConfirm.open({
            message:'Would you like to refresh the page',
            label:'Are you sure?',
            //variant:'headerless', //Use this for hiding the header
            theme:'success'
        })
        console.log(result)
        // On click of Ok result will be true else false
        if(result){
            location.reload()
        }
    }

}