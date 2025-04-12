package com.expense.service;

import com.expense.model.Expense;
import com.expense.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ExpenseService {

    @Autowired
    private ExpenseRepository expenseRepository;

    public Expense addExpense(Expense expense) {
        // Calculate split amounts if not already set
        if (expense.getSplitBetween() != null && !expense.getSplitBetween().isEmpty()) {
            double splitAmount = expense.getAmount() / expense.getSplitBetween().size();
            expense.getSplitBetween().forEach(split -> split.setAmount(splitAmount));
        }
        return expenseRepository.save(expense);
    }

    public List<Expense> getExpensesByGroup(String groupId) {
        return expenseRepository.findByGroup(groupId);
    }
}