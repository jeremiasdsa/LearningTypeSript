 function addAndHandle(n1: number, n2: number, cb:(num: number) => void) {
     const result = n1+n2;
     cb(result);
 }



 addAndHandle(10, 20, (result) => {
    console.log("MeuResult: " + result);
 });



 function sendRequest(data: string, cb: (response: any) => void) {
     return cb({data: '2Hi there!'});
 }

 sendRequest('Send this2!', (response) => {
    console.log(response);
    return true;
 });