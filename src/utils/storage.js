const STORAGE_KEY = 'expense_tracker_pwa_data';

const INITIAL_DATA = [
    {
        id: '1',
        title: 'Meralco Electric Bill',
        type: 'bill',
        amount: '500',
        category: 'utilities',
        dueDate: '2026-07-26',
        isPaid: false
    },
    {
        id: '2',
        title: 'Freelance Payout',
        amount: '2000',
        type: 'income',
        category: 'Salary',
        dueDate: '2026-06-17',
        isPaid: true
    },
    {
        id: '3',
        title: 'Internet Fiber',
        amount: '1300',
        type: 'bill',
        category: 'utilities',
        dueDate: '2026-09-15',
        isPaid: true
    }
];

export const getStoredTransactions = () => {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : (INITIAL_DATA);
    } catch (error) {
        console.error('Failed to load storage:' , error);
        return INITIAL_DATA;
    }
};

export const saveStoredTransactions = (transactions) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
    } catch (error) {
        console.error('Failed to save storage:' , error);
    }
};