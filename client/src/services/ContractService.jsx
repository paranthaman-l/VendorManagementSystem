import { contractApi } from "../apis/axios";

class ContractService {
    getAllContracts = () => contractApi.get('/getAll');

    addContract = (contract) => contractApi.post('/postContract', contract);

    putContract = (sid, contract) => contractApi.post('/putContract', { params: { sid } }, contract);

    deleteContract = (sid) => contractApi.post('/deleteContract', { params: { sid } });
}
export default new ContractService();