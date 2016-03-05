
import {DataRepository} from "../../../tsmvc/interfaces/data/DataRepository";
import {List} from "../../../tsmvc/classes/helper/List";
import {AddressModel} from "../model/AddressModel";

interface AddressDataRepository extends DataRepository<AddressModel> {
   getModelType() : any;
   getAddresses(userId : string) : Promise<List<AddressModel>>;
}
export default AddressDataRepository;
