import { LightningElement, wire } from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';

export default class GetRelatedListRecordsDemo extends LightningElement {
    recordList

    @wire(getRelatedListRecords, {
        parentRecordId:'0018b00002Vpk5hAAB',
        relatedListId:'Contacts',
        fields:['Contact.Name', 'Contact.Id'] //optional fields
    })listRecordsHandler({data, error}){
        if(data){
            console.log(JSON.stringify(data))
            this.recordList = data.records
        }
        if(error){
            console.error(error)
        }
    }
}