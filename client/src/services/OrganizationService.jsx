import { organizationApi } from "../apis/axios";

class OrganizationService {
    getOrganizationData = (oid) => organizationApi.get('/byOid', { params: { oid } });

    ChangePassword(email, password) {
        console.log(email,password);
        return organizationApi.get('/updatePwd', {params:{email,password}});
    }
}

export default new OrganizationService();