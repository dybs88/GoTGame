import { FieldType } from "src/modules/common/infrastructure/consts/goTEnums";
import { Location } from "src/models/common/location.model";

export class FieldClickParams {
  constructor(public fieldId?: number,
    public fieldName?: string,
    public fieldType?: FieldType,
    public location?: Location ) { }
}
