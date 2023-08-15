import {
  IsNumber,
  IsPositive,
  IsString,
  IsNotEmpty,
  IsDate,
  IsOptional,
} from 'class-validator';
import{Exclude, Expose} from 'class-transformer';
import { Info } from 'src/data';
export class CreateReportDto {
  @IsString()
  @IsNotEmpty()
  source: string;

  @IsNumber()
  @IsPositive()
  amount: number;

  @IsDate()
  created_at: Date;

  @IsDate()
  update_at: Date;
}

export class UpdateRepotDto {
  @IsString()
  @IsNotEmpty()
  source: string;

  @IsNumber()
  @IsPositive()
  amount: number;

  @IsString()
  @IsOptional()
  created_at: Date;
  @IsString()
  @IsOptional()
  update_at: Date;
}


export class ReportResposneDto{
    id: string;
    source:string;
    amount:number;
    created_at: Date;
    
    @Exclude()
    updated_at: Date;
    type: Info
}
