import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface TransactionType {
  value: number;
  title: string;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO
    return this.transactions;
  }

  public getBalance(): Balance {
    // TODO
    const outcome = this.transactions.filter(obj => obj.type === 'outcome');

    const totalOutcome = outcome.reduce(
      (val, currentval) => val + currentval.value,
      0,
    );

    const income = this.transactions.filter(obj => obj.type === 'income');

    const totalIncome = income.reduce(
      (val, currentval) => val + currentval.value,
      0,
    );
    const balance = {
      income: totalIncome,
      outcome: totalOutcome,
      total: totalIncome - totalOutcome,
    };
    return balance;
  }

  public create({ title, value, type }: TransactionType): Transaction {
    // TODO
    const transaction = new Transaction({ title, value, type });
    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
