export enum Info {
  INCOME = 'income',
  EXPENSE = 'expense',
}

export const data: Data = {
  report: [
    {
      id: 'uuid1',
  source: 'Salary',
  amount: 77900,
  created_at: new Date(),
  update_at: new Date(),
  type: Info.INCOME,
    }, 
    { 
      id: 'uuid2',
  source: 'Twitter X',
  amount: 5500,
  created_at: new Date(),
  update_at: new Date(),
  type: Info.INCOME,
    },

    {
      id: 'uuid3',
  source: 'Netflix',
  amount: 550000,
  created_at: new Date(),
  update_at: new Date(),
  type: Info.EXPENSE,
    },
    {
      id: 'uuid4',
  source: 'Youtube ',
  amount: 770000,
  created_at: new Date(),
  update_at: new Date(),
  type: Info.INCOME,
    },
    {
      id: 'uuid5',
  source: 'Spotify',
  amount: 50000,
  created_at: new Date(),
  update_at: new Date(),
  type: Info.EXPENSE,
    },
  ],
};

interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    update_at: Date;
    type: Info;
  }[];
}


 
