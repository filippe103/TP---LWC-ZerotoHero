import { LightningElement } from 'lwc';
import CERT_FILE from '@salesforce/contentAssetUrl/SharingandVisibilityArchitectpdf';

export default class ContentAssetFiles extends LightningElement {
    file = CERT_FILE;
}