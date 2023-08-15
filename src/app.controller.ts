import {
  Controller,
  Delete,
  Get,
  Post,
  Param,
  Body,
  Put,
  HttpCode,
  ParseUUIDPipe,
  ParseEnumPipe

} from '@nestjs/common';
import { report } from 'process';
import { Info, data } from 'src/data';
import { v4 as uuid } from 'uuid';
import { CreateReportDto } from './DTOs/report.dto';

import { AppService } from './app.service';
@Controller('report/:type') //give this class the ability to be a controller
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllReports(@Param('type',  new ParseEnumPipe(Info)) type: string ) {
    console.log(type);
    const reportType = type === 'income' ? Info.INCOME : Info.EXPENSE;
    return this.appService.getAllReports(reportType);
  }

  @Get(':id') //to make id dynamic
  getIncomeReportById(@Param('type', new ParseEnumPipe(Info)) type: string, @Param('id', ParseUUIDPipe) id: string) {
    console.log(
      id,
      typeof id,
    );
    const reportType = type === 'income' ? Info.INCOME : Info.EXPENSE;

    return this.appService.getIncomeReportById(reportType, id);
  } 

  @Post()
  createReport(
    @Param('type',  new ParseEnumPipe(Info)) type: string,
    @Body()
    {
      
      source,
      amount,
      created_at,
      update_at,
    
    }: CreateReportDto
  ) {
 
    const sel = type === 'income' ? Info.INCOME : Info.EXPENSE;
    return this.appService.createReport(sel, {
      id: uuid(),
      source,
      amount,
      created_at,
      update_at,
      type,
    });
  }

  @Post(':id')
  saveIncomeById(
    @Param('type',  new ParseEnumPipe(Info)) type: string,
    @Param('id') id: string,
    @Body()
    {
      source,
      amount,
      created_at,
      update_at,
    }: { source: string; amount: number; created_at: Date; update_at: Date },
  ) {
    const newReport = {
      id,
      source,
      amount,
      created_at,
      update_at,
      type: type === 'income' ? Info.INCOME : Info.EXPENSE,
    };

    data.report.push(newReport);
    return newReport;
  }

  @Put(':id')
  updateReport(
    @Param('type',  new ParseEnumPipe(Info)) type: string,
    @Param('id', ParseUUIDPipe) id: string,
    @Body()
    body: {
    
      source: string;
      amount: number;
      created_at: Date;
      update_at: Date;
    },
  ) {
    const reportType = type === 'income' ? Info.INCOME : Info.EXPENSE;
     const updatedDate= Date()
    return this.appService.updateReport(
      reportType, id, body
     )
   
  }
  @HttpCode(204)
  @Delete(':id')
  deleteIncomeById(@Param('id') id: string) {
   return this.appService.deleteIncomeById(id) 
  }

  //http://localhost:3000/report/income/id
}
