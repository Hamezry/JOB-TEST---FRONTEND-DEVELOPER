
import {
  Table,
  Text,
  Paper,
  Container,
  Title,
 
} from "@mantine/core";

const transactions = [
  {
    id: 1,
    date: "2025-02-10",
    description: "Payment to Vendor A",
    amount: -5000.0,
    balance: 15000.0,
  },
  {
    id: 2,
    date: "2025-02-09",
    description: "Payment from Client B",
    amount: 20000.0,
    balance: 20000.0,
  },
  {
    id: 3,
    date: "2025-02-08",
    description: "Transfer to Savings Account",
    amount: -10000.0,
    balance: 0.0,
  },
  {
    id: 4,
    date: "2025-02-07",
    description: "Salary Payment",
    amount: 50000.0,
    balance: 50000.0,
  },
  {
    id: 5,
    date: "2025-02-06",
    description: "Payment to Supplier C",
    amount: -7000.0,
    balance: 43000.0,
  },
  {
    id: 6,
    date: "2025-02-05",
    description: "Refund from Service D",
    amount: 1500.0,
    balance: 44500.0,
  },
  {
    id: 7,
    date: "2025-02-04",
    description: "Transfer from Account E",
    amount: 8000.0,
    balance: 52500.0,
  },
  {
    id: 8,
    date: "2025-02-03",
    description: "Purchase of Office Supplies",
    amount: -2000.0,
    balance: 50500.0,
  },
  {
    id: 9,
    date: "2025-02-02",
    description: "Payment from Client F",
    amount: 12000.0,
    balance: 62500.0,
  },
  {
    id: 10,
    date: "2025-02-01",
    description: "Bank Fee Deduction",
    amount: -500.0,
    balance: 62000.0,
  },
  {
    id: 11,
    date: "2025-01-31",
    description: "Payment to Vendor G",
    amount: -8000.0,
    balance: 54000.0,
  },
  {
    id: 12,
    date: "2025-01-30",
    description: "Payment from Client H",
    amount: 18000.0,
    balance: 72000.0,
  },
  {
    id: 13,
    date: "2025-01-29",
    description: "Transfer to Investment Account",
    amount: -15000.0,
    balance: 57000.0,
  },


  
];


export function TransactionHistory() {
  return (
    <Container size="lg" my={40}>
      <Title order={2} style={{ textAlign: "left", marginBottom: "20px" }}>
        Transaction History
      </Title>

      <Paper
    
        p={0}
        radius="md"
        style={{ backgroundColor: "#f9fafb" }}
      >
        <Table
          aria-live="polite"
          striped
          highlightOnHover
          style={{
            borderCollapse: "separate",
            borderSpacing: "0 10px",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f1f5f9" }}>
              <th style={{ padding: "12px", textAlign: "left" }}>Date</th>
              <th style={{ padding: "12px", textAlign: "left" }}>
                Description
              </th>
              <th style={{ padding: "12px", textAlign: "center" }}>Amount</th>
              <th style={{ padding: "12px", textAlign: "center" }}>Balance</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} style={{ backgroundColor: "#fff" }}>
                <td style={{ padding: "10px" }}>
                  <Text size="sm">
                    {new Date(transaction.date).toLocaleDateString()}
                  </Text>
                </td>
                <td style={{ padding: "10px" }}>
                  <Text size="sm">{transaction.description}</Text>
                </td>
                <td
                  style={{
                    padding: "10px",
                    textAlign: "center",
                    color: transaction.amount < 0 ? "red" : "green",
                  }}
                >
                  <Text size="sm">
                    {transaction.amount < 0 ? "-" : "+"} ₦
                    {Math.abs(transaction.amount).toLocaleString()}
                  </Text>
                </td>
                <td style={{ padding: "10px", textAlign: "center" }}>
                  <Text size="sm"> ₦{transaction.balance.toFixed(2)}</Text>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Paper>
    </Container>
  );
}

export default TransactionHistory;




