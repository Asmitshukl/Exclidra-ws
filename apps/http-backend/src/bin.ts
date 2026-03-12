import cluster from "cluster";
import os from "os";
import {app} from "./index"


const totalCPUs=os.cpus().length;
const port = 3002;

if(cluster.isPrimary){
    for(let i=0;i<totalCPUs;i++){
        cluster.fork();
    }
    cluster.on("exit",(worker,code,signal)=>{
        console.log(`worker ${worker.process.pid} died`)
        cluster.fork();
    })

}else{
    app.listen(port);
}
