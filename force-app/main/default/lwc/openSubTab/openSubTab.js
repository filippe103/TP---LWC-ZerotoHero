import { LightningElement, wire } from 'lwc';
import {IsConsoleNavigation, openSubTab, EnclosingTabId} from 'lightning/platformWorkspaceApi'

export default class OpenSubTab extends LightningElement {

    @wire(IsConsoleNavigation)
    isConsoleNavigation

    @wire(EnclosingTabId)
    parentTabId

    openTabRecordId(){
        if(this.isConsoleNavigation){
            openSubTab(this.parentTabId, {
                recordId:'0018b00002Vpk5hAAB',
                label:'Troop',
                focus:true
            }).catch(error=>{
                console.error('Error in opening tab', error)
            })
        }
    }

    openTabUrl(){
        if(this.isConsoleNavigation){
            openSubTab(this.parentTabId, {
                url:'/lightning/r/Account/0018b00002Vpk5hAAB/view',
                label:'Troop Url',
                focus:true
            }).catch(error=>{
                console.error('Error in opening tab', error)
            })
        }
    }

    //pageReference, recordId, and url are prioritized in that order.
    openTabPageRef(){
        if(this.isConsoleNavigation){
            openSubTab(this.parentTabId, {
                pageReference:{
                    type:'standard__objectPage',
                    attributes:{
                        objectApiName:'Account',
                        actionName:'list'
                    }
                },
                label:'Accounts list',
                focus:true
            }).catch(error=>{
                console.error('Error in opening tab', error)
            })
        }
    }
}