import { LightningElement } from 'lwc';
import LightningPrompt from 'lightning/prompt';
import LightningAlert from 'lightning/alert';

export default class LightningPromptDemo extends LightningElement {

    /*
    async promptHandler(){
        const result = await LightningPrompt.open({
            message:'Please Enter Your Age'
        })
        console.log(result)
    }
    */

    promptHandler(){
        LightningPrompt.open({
            message:'Please Enter Your Age',
            label:'Check your voting eligibility',
            theme:'success',
            defaultValue:30
        }).then(result=>{
            console.log(result)
            if(result && Number(result)>18){
                this.alertHandler('Hurray you are Eligible', 'Success!!', 'success')
            } else {
                this.alertHandler('Sorry you are not eligible', 'Error!!', 'error')
            }
        })
    }

    alertHandler(message, label, theme){
        LightningAlert.open({
            message,
            label,
            theme
        })
    }
}