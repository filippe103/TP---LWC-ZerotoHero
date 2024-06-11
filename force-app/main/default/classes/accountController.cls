public with sharing class accountController {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList() {
        return [SELECT Id, Name, Type, Industry FROM ACCOUNT LIMIT 5];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> filterAccountType(String type) {
        return [SELECT Id, Name, Type, Industry FROM ACCOUNT WHERE Type =: type LIMIT 5];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> findAccounts(String searchKey) {
        String key = '%' + searchKey + '%';
        return [SELECT Id, Name, Type, Industry FROM ACCOUNT
                                                WHERE Name LIKE :key LIMIT 5];
    }
}