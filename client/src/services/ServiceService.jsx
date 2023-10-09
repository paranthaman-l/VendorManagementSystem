import { serviceApi } from "../apis/axios";

class ServiceService {
    getAllServices = () => serviceApi.get('/getAll');

    addService = (service) => serviceApi.post('/postService', service);

    putService = (sid, service) => serviceApi.post('/putService', { params: { sid } }, service);

    deleteService = (sid) => serviceApi.post('/deleteService', { params: { sid } });
}
export default new ServiceService();