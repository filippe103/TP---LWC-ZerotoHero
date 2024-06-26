import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'

export default class Notifications extends LightningElement {

    toastHandler(){
        this.showToast('Success!!','{0} Account Created!! {1}','success');
    }
    toastHandlerTwo(){
        this.showToast('Error!!','Account Creation failed!!','error');
    }
    toastHandlerThree(){
        this.showToast('Warning!!','Password should have 15 characters!!','warning');
    }
    toastHandlerFour(){
        this.showToast('Info!!','Summer 24 release is available!!','Info');
    }

    showToast(title, message, variant){
        const event = new ShowToastEvent({
            title,
            message,
            variant,
            messageData : [
                'Salesforce', {
                    url : 'http://www.salesforce.com/',
                    label : 'Click Here'
                }
            ],
            mode : 'sticky'
        })
        this.dispatchEvent(event)
    }
}