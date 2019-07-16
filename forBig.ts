
const delay = async (callback: () => void) => {
    this.state = 1;
    while (this.state) {
        this.state +=1;
        console.log(this.state)
        if (this.state > 500) {
            return callback();
        }
    }
}

const promise = () => {

    function xx (){
        console.log("异步完成")
    }
    delay(xx)
    console.log("完了")
}

promise();