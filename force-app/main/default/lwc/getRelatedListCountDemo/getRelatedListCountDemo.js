import { LightningElement, wire } from 'lwc';
import {getRelatedListCount} from 'lightning/uiRelatedListApi';

export default class GetRelatedListCountDemo extends LightningElement {
    relatedData

    @wire(getRelatedListCount, {
        parentRecordId: '0018b00002Vpk5hAAB', // The ID of the parent record that you want to get related list for
        relatedListId: 'Contacts' // The API name of a related list object such as Contacts, Opportunities
    })listCountHandler({error, data}){
        if(data){
            console.log(JSON.stringify(data))
            this.relatedData = data
        }
        if(error){
            console.error(error)
        }
    }
}