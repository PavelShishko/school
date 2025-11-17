import { IsNotEmpty, IsString, IsUUID, Length } from "class-validator";

export class CreateStudentDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    secondName: string;

    @IsNotEmpty()
    @IsUUID()
    groupId: string;
}