import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils';
import FirstName from '@salesforce/schema/Contact.FirstName';
import LeadSource from '@salesforce/schema/Contact.LeadSource';

export default class NavigateToObjectPage extends NavigationMixin(LightningElement) {

    navigateToNewRecord(){
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes : {
                objectApiName : 'Contact',
                actionName : 'new'
            }
        })
    }

    navigateToNewRecordWithDefault(){
        const defaultValues = encodeDefaultFieldValues({
            FirstName: 'Zero',
            LastName: 'Hero',
            LeadSource: 'Other'
        });

        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes : {
                objectApiName : 'Contact',
                actionName : 'new'
            },
            state : {
                defaultFieldValues : defaultValues
            }
        })
    }

    navigateToListView(){
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes : {
                objectApiName : 'Contact',
                actionName : 'list'
            },
            state : {
                filterName : 'Recent'
            }
        })
    }

    navigateToFiles(){
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes : {
                objectApiName : 'ContentDocument',
                actionName : 'home'
            }
        })
    }
}