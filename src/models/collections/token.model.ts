import { Transform } from "class-transformer"
import { Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity({ name: "tokens" })
export class Tokens {
  @ObjectIdColumn({ name: "_id", type: "varchar" })
  @Transform((id: ObjectID) => id.toHexString(), { toPlainOnly: true })
  _id!: ObjectID;
}