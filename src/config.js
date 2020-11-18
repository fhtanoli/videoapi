

export default {
    API_KEY: '46977004',
    SESSION_ID: '2_MX40Njk3NzAwNH5-MTYwNDY0OTgyNjAyNX4vaUtUS1RvRlVaR1IyRDRjVVZxdmVEdzJ-fg',
    TOKEN: 'T1==cGFydG5lcl9pZD00Njk3NzAwNCZzaWc9YjNlZGM2M2QyNmRkM2JjMDAzMmEwZTc2N2QxZjBlNmRmZmIzMzlkYTpzZXNzaW9uX2lkPTJfTVg0ME5qazNOekF3Tkg1LU1UWXdORFkwT1RneU5qQXlOWDR2YVV0VVMxUnZSbFZhUjFJeVJEUmpWVlp4ZG1WRWR6Si1mZyZjcmVhdGVfdGltZT0xNjA0NjQ5ODQ1Jm5vbmNlPTAuODE3MTA5MDUwMTkxMDM2MSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNjA3MjQxODQ0JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9'
  };

var SERVER_BASE_URL = 'http://localhost:8080';
  fetch(SERVER_BASE_URL + '/session').then(function(res) {
    return res.json()
  }).then(function(res) {
    var API_KEY = res.apiKey;
    var SESSION_ID = res.sessionId;
    var TOKEN = res.token;

      console.log(API_KEY);
      console.log(SESSION_ID);
      console.log(TOKEN);   
    //initializeSession();
  });
