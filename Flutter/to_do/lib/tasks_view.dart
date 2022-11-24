import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'task_provider.dart';
import 'task_view.dart';

class TasksView extends StatefulWidget {
  const TasksView({super.key});

  @override
  TasksViewState createState() => TasksViewState();
}

class TasksViewState extends State<TasksView> {
  final textFieldController = TextEditingController();
  String newTask = "";
  TaskProvider taskProvider = TaskProvider();

  @override
  void initState() {
    super.initState();
    textFieldController.addListener(
      () {
        newTask = textFieldController.text;
      },
    );
  }

  @override
  void dispose() {
    textFieldController.dispose();
    super.dispose();
  }

  void submit() {
    Provider.of<TaskProvider>(context, listen: false).addTask(newTask);
    Navigator.pop(context);
    textFieldController.clear();
  }

  @override
  Widget build(BuildContext context) {
    Future<void> showAddTextDialog() async {
      return showDialog(
        context: context,
        builder: (context) {
          return AlertDialog(
            title: const Text("New Task"),
            content: TextField(
              autofocus: true,
              controller: textFieldController,
              decoration: const InputDecoration(hintText: "Task"),
              onSubmitted: (_) => submit(),
            ),
            actions: [
              ElevatedButton(
                onPressed: submit,
                style: ElevatedButton.styleFrom(
                  minimumSize: const Size(100, 50),
                ),
                child: const Text("Add"),
              ),
            ],
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(10),
            ),
            actionsAlignment: MainAxisAlignment.center,
          );
        },
      );
    }

    return Scaffold(
      appBar: AppBar(
        title: const Text("To-Do App"),
      ),
      body: const TaskView(),
      floatingActionButton: FloatingActionButton(
        onPressed: (() {
          showAddTextDialog();
        }),
        child: const Icon(Icons.add),
      ),
    );
  }
}
