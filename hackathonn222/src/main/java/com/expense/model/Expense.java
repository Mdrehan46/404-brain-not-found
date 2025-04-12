package com.expense.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;
import java.util.Date;

@Data
@Document(collection = "expenses")
public class Expense {
    @Id
    private String id;
    private String description;
    private double amount;
    private String group;
    private List<Split> splitBetween;
    private Date createdAt = new Date();
}