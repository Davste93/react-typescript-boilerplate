import {Model, indexKey} from 'tsmvc';

export class Building extends Model  {
  @indexKey
  public id: string;

  public get size(): number
  {
    return 20;
  }

  public create(): Model {
    return new Building();
  }

}

console.log(new Building().size);
