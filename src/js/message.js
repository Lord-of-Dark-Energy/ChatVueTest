class ChatMessage {
    constructor(obj){
        console.log("CreateObj_CM", obj)
        this.username = obj.username
        this.text = obj.text
        this.time = obj.time
    }
    prepare(){
        return JSON.stringify({
            username: this.username,
            text: this.text,
            time: this.time
        })
    }
}

export default ChatMessage