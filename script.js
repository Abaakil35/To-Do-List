document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', function(event) {
        const target = event.target;
        if (target.classList.contains('delete-btn')) {
            deleteTask(target.parentElement);
        } else if (target.classList.contains('edit-btn')) {
            toggleEditMode(target.parentElement);
        }
    });

    taskList.addEventListener('change', function(event) {
        const target = event.target;
        if (target.type === 'checkbox') {
            toggleTaskButtons(target);
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox">
            <span>${taskText}</span>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `;
        taskList.appendChild(li);
    }

    function deleteTask(taskElement) {
        taskElement.remove();
    }

    function toggleEditMode(taskElement) {
        const span = taskElement.querySelector('span');
        const editButton = taskElement.querySelector('.edit-btn');

        if (span.contentEditable === 'true') {
            span.contentEditable = 'false';
            editButton.textContent = 'Edit';
        } else {
            span.contentEditable = 'true';
            span.focus();
            editButton.textContent = 'Save';
        }
    }

    function toggleTaskButtons(checkbox) {
        const taskElement = checkbox.parentElement;
        const editButton = taskElement.querySelector('.edit-btn');
        const deleteButton = taskElement.querySelector('.delete-btn');

        if (checkbox.checked) {
            editButton.style.display = 'none';
            deleteButton.style.display = 'none';
        } else {
            editButton.style.display = 'inline-block';
            deleteButton.style.display = 'inline-block';
        }
    }
});
