function Mobile(_name){

        this.battery = 100;
        this.name = _name;
        this.msg = "";
        this.inbox = [];
        this.outbox = [];
        this.status = false;

        this.writeMsg = function (msg) {
        if(this.battery > 0){
            this.msg = msg;
        }else
            alert("Da het pin");
    }

        this.sendMsg = function (mobile){
            if(this.battery > 0){
                mobile.receiveMsg(this.name,this.msg);
                this.outbox.push(this.msg);
                this.battery -= 10;
            }else alert("Hết pin - Sập nguồn!");
        }

        this.receiveMsg = function (name,msg){
            this.inbox.push(msg);
        }

        this.checkStatus = function () {
            if(this.battery > 0){
                return this.battery > 0}
            else {alert("Đã hết pinnnn")}         ;
            this.status = !this.status ;
            }

        this.chargeBattery = function () {
            this.battery ++ ;
        }


}

let mobile1 = new Mobile("iphone");
let mobile2 = new Mobile("nokia");
    mobile1.chargeBattery();
    mobile2.checkStatus();

function writeMess(mobile,mess) {
    mobile.writeMsg(mess);
}

function sendMess(mobile1,mobile2) {
    mobile1.sendMsg(mobile2);
    display();
}

function display() {
    displayMobile(mobile1);
    displayMobile(mobile2);
}

function displayMobile(mobile) {
    document.getElementById(mobile.name+"-name").innerHTML = mobile.name;
    document.getElementById(mobile.name+"-inbox").innerHTML = mobile.inbox;
    document.getElementById(mobile.name+"-outbox").innerHTML = mobile.outbox;

    document.getElementById(mobile.name+"-msg").value = "";
}

display();