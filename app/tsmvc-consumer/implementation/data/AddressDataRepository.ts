
import {DataRepository} from "tsmvc";
import {List} from "tsmvc";
import {AddressModel} from "../model/AddressModel";

interface AddressDataRepository extends DataRepository<AddressModel> {
   getModelType() : any;
   getAddresses(userId : string) : Promise<List<AddressModel>>;
}
export default AddressDataRepository;
