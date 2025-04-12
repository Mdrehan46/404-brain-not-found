// Add Expense button
document.querySelector('#addExpense').addEventListener('click', async () => {
    const description = prompt('Enter expense description:');
    const amount = prompt('Enter amount:');
    
    if (!description || !amount) return;

    const expenseData = {
        description,
        amount: parseFloat(amount),
        paidBy: 'userId123',
        group: 'groupId123',
        splitBetween: [
            { user: 'user1', amount: parseFloat(amount)/2 },
            { user: 'user2', amount: parseFloat(amount)/2 }
        ]
    };

    try {
        const button = document.querySelector('#addExpense');
        button.textContent = 'Adding...';
        button.disabled = true;

        const response = await fetch('/api/expenses/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(expenseData)
        });
        const data = await response.json();
        alert('Expense added successfully!');
    } catch (error) {
        alert('Error adding expense: ' + error.message);
    } finally {
        button.innerHTML = '<span class="icon">+</span> Add Expense';
        button.disabled = false;
    }
});

// Create Group button
document.querySelector('#createGroup').addEventListener('click', async () => {
    const name = prompt('Enter group name:');
    if (!name) return;

    const groupData = {
        name,
        members: ['userId1', 'userId2']
    };

    try {
        const button = document.querySelector('#createGroup');
        button.textContent = 'Creating...';
        button.disabled = true;

        const response = await fetch('/api/groups/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(groupData)
        });
        const data = await response.json();
        
        // Add new group to the list
        const groupsList = document.querySelector('.groups-list');
        const newGroup = document.createElement('div');
        newGroup.className = 'group-item';
        newGroup.innerHTML = `<span class="icon">👥</span> ${name}`;
        groupsList.appendChild(newGroup);
        
        alert('Group created successfully!');
    } catch (error) {
        alert('Error creating group: ' + error.message);
    } finally {
        button.innerHTML = '<span class="icon">👥</span> Create Group';
        button.disabled = false;
    }
});

// Settle Up button
document.querySelector('#settleUp').addEventListener('click', async () => {
    const amount = prompt('Enter settlement amount:');
    if (!amount) return;

    const settlementData = {
        groupId: 'groupId123',
        payerId: 'user1',
        receiverId: 'user2',
        amount: parseFloat(amount)
    };

    try {
        const button = document.querySelector('#settleUp');
        button.textContent = 'Processing...';
        button.disabled = true;

        const response = await fetch('/api/expenses/settle', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(settlementData)
        });
        const data = await response.json();
        alert('Settlement completed successfully!');
    } catch (error) {
        alert('Error settling up: ' + error.message);
    } finally {
        button.innerHTML = '<span class="icon">💰</span> Settle Up';
        button.disabled = false;
    }
});