import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'task_provider.dart';

class TaskView extends StatelessWidget {
  const TaskView({super.key});

  @override
  Widget build(BuildContext context) {
    final task = Provider.of<TaskProvider>(context);

    return Column(
      children: [
        const Padding(
          padding: EdgeInsets.all(10),
        ),
        Expanded(
          child: ListView.builder(
            itemCount: task.allTasks.length,
            itemBuilder: ((context, index) => ListTile(
                  leading: Checkbox(
                    value: task.allTasks[index].isCompleted,
                    onChanged: ((_) => task.completeTask(
                          task.allTasks[index],
                        )),
                  ),
                  title: Text(task.allTasks[index].task),
                  trailing: IconButton(
                    onPressed: () {
                      task.deleteTask(
                        task.allTasks[index],
                      );
                    },
                    icon: const Icon(Icons.cancel, color: Colors.red),
                  ),
                )),
          ),
        ),
      ],
    );
  }
}
