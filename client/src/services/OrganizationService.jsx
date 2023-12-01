import { organizationApi } from "../apis/axios";

class OrganizationService {
    getOrganizationData = (oid) => organizationApi.get('/byOid', { params: { oid } });

    ChangePassword(email, password) {
        return organizationApi.get('/updatePwd', {params:{email,password}});
    }

    CreateRequest=(request)=>organizationApi.post("/addServiceRequest",request);

    getAllRequested=()=>organizationApi.get("/getServiceRequests/"+localStorage.getItem("id"));

    deleteRequest=(sid)=>organizationApi.delete("/deleteServiceRequest/"+sid);

    getApplyRequest=(sid)=>organizationApi.get("/getApplyRequest/"+sid);

    MakeContract = (vid,data) => organizationApi.post("/postContract?oid="+localStorage.getItem("id")+"&vid="+vid,data);
}

export default new OrganizationService();