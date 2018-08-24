import Api from './Api'

export default {
    getAllServers() {
        try{
            return Api().get('/servers');
        } catch (error) {
            console.error (error)
        }
    },
    getServerByIp(serverIp){
        try {
            return Api().get('/servers-ip', {params: {value: serverIp}})
        } catch (error) {
            console.error (error)
        }
    },
    getServerByHostName(hostName){
        try {
            return Api().get('/servers-hostname', {params: {value: hostName}})
        } catch (error) {
            console.error (error)  
        }
    }
}