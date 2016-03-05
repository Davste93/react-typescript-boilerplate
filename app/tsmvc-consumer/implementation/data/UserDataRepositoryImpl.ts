import {Config} from "../config/config";
import {ApiRepository} from "../../../tsmvc/classes/helper/ApiRepository";

import {UserModel} from "../model/UserModel";
import UserDataRepository from "./UserDataRepository";
import {AddressModel} from "../model/AddressModel";

export default class UserDataRepositoryImpl extends ApiRepository<UserModel> implements UserDataRepository
{
  getModelType() : any {
    return UserModel;
  }

  getUrl() : string{
    return Config.BASEURL + '/users';
  }





}
