import {Model, indexKey} from 'tsmvc';

export class Zobbi extends Model  {
  @indexKey
  public id: string;

  public get size(): number
  {
    throw new Error('Stack overflow exception');
  }

  public create(): Model {
    return new Zobbi();
  }

}

console.log(new Zobbi().size);
