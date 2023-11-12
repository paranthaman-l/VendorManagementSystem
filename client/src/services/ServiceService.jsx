import { serviceApi } from "../apis/axios";

class ServiceService {
    getAllServices = () => serviceApi.get('/getAll');

    addService = (service,vid) => serviceApi.post('/postService?vid='+localStorage.getItem('id'), service);

    putService = (service) => serviceApi.put('/putService?vid='+localStorage.getItem("id"), service);

    deleteService = (sid) => serviceApi.delete('/deleteService?sid='+sid);

    getAllVendorServices = () => serviceApi.get("/getVendorServices", {params:{vid:localStorage.getItem("id")}});
}
export default new ServiceService();