
import {AddressModel} from "../model/AddressModel";
import {Config} from "../config/config";
import {ApiRepository} from "../../../tsmvc/classes/helper/ApiRepository";
import {List} from "../../../tsmvc/classes/helper/List";
import AddressDataRepository from "./AddressDataRepository";

export default class AddressDataRepositoryImpl extends ApiRepository<AddressModel> implements AddressDataRepository
{
  getModelType() : any {
    return AddressModel;
  }

  getUrl() : string{
    return Config.BASEURL + '/addresses';
  }

  getAddresses(userId : string) : Promise<List<AddressModel>> {
      return this.buildRequestAndParseAsModelList(
        Config.BASEURL + '/user/' + userId + '/addresses',
        'GET',
        null
      );
  }
}
