class Mobile{
    constructor(_name) {
        this.name = _name;
        this.msg = "";
        this.inbox = [];
        this.outbox = [];
    }

    writeMsg(msg){
        this.msg = msg;
    }
    sendMsg(msg){
            mobile.reiceiveMsg(this.name, this.msg);
            this.outbox.push(this.msg);
        }
    receiveMsg(name,msg) {
        alert(name+ "has send a message");
        this.inbox.push(msg);
    }
}
    let mobile1 = new Mobile("iphone");
    let mobile2 = new Mobile("Nokia");

    console.log(mobile1);
    console.log(mobile2);

    let mess = prompt("Soạn tin nhắn");

    mobile1.writeMsg(mess);
    mobile1.sendMsg(mobile2);

    function writeMess(mobile, content) {
        mobile.writeMesg(content)
    }
    function sendMess(mobile1, mobile2) {
        mobile1.sendMsg(mobile2);
    }

    function displayMobile(mobile) {
        document.getElementById(mobile.name+ "-inbox").innerHTML = mobile.name ;
        document.getElementById(mobile.name+ "-outbox").innerHTML = mobile.inbox ;
        document.getElementById(mobile.name+ "-msg").value = "" ;
    }
    displayMobile();