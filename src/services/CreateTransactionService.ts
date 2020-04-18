import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface TransactionType {
  value: number;
  title: string;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: TransactionType): Transaction {
    // TODO

    const balance = this.transactionsRepository.getBalance();

    if (type === 'outcome' && balance.total < value) {
      throw Error('This transaction cannot be performed');
    }

    const trasaction = this.transactionsRepository.create({
      title,
      value,
      type,
    });
    return trasaction;
  }
}

export default CreateTransactionService;
