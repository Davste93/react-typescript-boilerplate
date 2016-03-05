  import {Model, indexKey} from "../../../tsmvc/interfaces/model/Model";

  export class AddressModel extends Model  {
    @indexKey
    id: string;

    AddressLine1: string;
    AddressLine2: string;
    Country: string;

    create() : Model {
      return new AddressModel();
    }

  }
