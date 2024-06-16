public with sharing class CsvController {
    
    @AuraEnabled(cacheable=true)
    public static List<account> getAccounts(){
        return [SELECT Id, Name, Phone, AnnualRevenue, Industry
                       FROM Account];
    }
}