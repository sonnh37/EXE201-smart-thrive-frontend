import {Const} from "@/lib/const";
import {Package} from "@/types/package";
import BaseService from "./base-service";

class PackageService extends BaseService<Package> {
    constructor() {
        super(Const.API_PACKAGE);
    }
}

export default new PackageService();