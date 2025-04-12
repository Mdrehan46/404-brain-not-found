package com.expense.controller;

import com.expense.model.Expense;
import com.expense.service.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/expenses")
@CrossOrigin(origins = "*")
public class ExpenseController {

    @Autowired
    private ExpenseService expenseService;

    @PostMapping("/add")
    public ResponseEntity<Expense> addExpense(@RequestBody Expense expense) {
        return ResponseEntity.ok(expenseService.addExpense(expense));
    }

    @GetMapping("/{groupId}")
    public ResponseEntity<List<Expense>> getExpensesByGroup(@PathVariable String groupId) {
        return ResponseEntity.ok(expenseService.getExpensesByGroup(groupId));
    }
}