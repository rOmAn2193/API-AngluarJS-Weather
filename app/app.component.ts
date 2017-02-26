import { Component } from '@angular/core';

<<<<<<< HEAD
@Component({
    selector: 'my-app',
    template: '<h1>Skeleton Project</h1>'
})
export class AppComponent { }
=======
import { Task } from './model/task';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: [ 'app.component.css' ]
})
export class AppComponent {
    private tasks: Task[] = [];
    private currentTask = new Task(null, false);

    addTask() {
        let task = new Task(this.currentTask.content, this.currentTask.completed);
        this.tasks.push(task);
        this.currentTask.content = null;
    }
 }
>>>>>>> 4f208ec33dec0f199bee661f2888ae0ffc7eabf3
