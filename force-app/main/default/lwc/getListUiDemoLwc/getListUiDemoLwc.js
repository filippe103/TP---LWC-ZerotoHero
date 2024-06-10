import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';

export default class GetListUiDemoLwc extends LightningElement {
    contacts = [];    
    pageToken = null;
    nextPageToken = null;
    previousPageToken = null;

    @wire(getListUi, {
        objectApiName: CONTACT_OBJECT, 
        listViewApiName: 'AllContacts', 
        pageSize: 10,
        sortBy: TITLE_FIELD,
        pageToken: '$pageToken'
    })
    listViewHandler({data, error}){
        if(data){
            console.log(data);
            this.contacts = data.records.records;
            this.nextPageToken = data.records.nextPageToken;
            this.previousPageToken = data.records.previousPageToken;
        }
        if(error){
            console.error(error);
        }
    }

    get previousPageDisabled(){
        return this.previousPageToken === null;
    }

    get nextPageDisabled(){
        return this.nextPageToken === null;
    }

    handlePreviousPage(){
        this.pageToken = this.previousPageToken;
    }
    
    handleNextPage(){
        this.pageToken = this.nextPageToken;
    }
}