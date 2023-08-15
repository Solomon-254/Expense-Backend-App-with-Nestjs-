import { Injectable } from '@nestjs/common';
import { Info, data } from 'src/data';

interface ReportData {
  id: string;
  source: string;
  amount: number;
  created_at: Date;
  update_at: Date;
  type: string;
}

@Injectable()
export class AppService {
  getAllReports(type: Info) {
    return data.report.filter((report) => report.type);
  }

  getIncomeReportById(type: Info, id: string) {
    return data.report
      .filter((report) => (report.type = type))
      .find((report) => report.id);
  }

  createReport(
    repoType: Info,
    { id, source, amount, created_at, update_at, type }: ReportData,
  ) {
    const newReport = {
      id: id,
      source,
      amount,
      created_at,
      update_at,
      type: type === 'income' ? Info.INCOME : Info.EXPENSE,
    };

    data.report.push(newReport);
    return newReport;
  }

  updateReport(
    type: Info,
    id: string,
    { source, amount, created_at, update_at },
  ) {
    const reportToUpdate = data.report
      .filter((report) => (report.type = type))
      .find((report) => report.id);
    if (!reportToUpdate) return;
    const repoIndex = data.report.findIndex(
      (report) => report.id === reportToUpdate.id,
    );
    data.report[repoIndex] = {
      ...data.report[repoIndex],
      ...{source, amount, created_at, update_at},
      
    };

    return data.report[repoIndex];
  }

  deleteIncomeById(id:string){
    const repoIndex = data.report.findIndex((report) => report.id === id);

    if (repoIndex === -1) return;

    data.report.splice(repoIndex, 1);

    return `${id} deleted successfully`;

  }
}
