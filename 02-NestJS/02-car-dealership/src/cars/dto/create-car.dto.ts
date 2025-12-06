import { IsString } from "class-validator";

export class CreateCardDto {
    @IsString()
    readonly brand: string;
    @IsString()
    ///@MinLength(3)
    readonly model: string;
}