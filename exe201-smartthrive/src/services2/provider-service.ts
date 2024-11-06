import {Const} from "@/lib/const";
import {Provider} from "@/types/provider";
import BaseService from "./base-service";

class ProviderService extends BaseService<Provider> {
    constructor() {
        super(Const.API_PROVIDER);
    }
}

export default new ProviderService();