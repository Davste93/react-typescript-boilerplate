import {DataRepository} from "tsmvc";
import {UserModel} from "../model/UserModel";
import {AddressModel} from "../model/AddressModel";


interface UserDataRepository extends DataRepository<UserModel> {
  getModelType() : any;
}

export default UserDataRepository;
