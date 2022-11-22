import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:to_do/task_controller.dart';
import 'package:to_do/task_provider.dart';

class TaskView extends StatefulWidget {
  const TaskView({super.key});

  @override
  TaskViewState createState() => TaskViewState();
}

class TaskViewState extends State<TaskView> {
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
      body: const TaskController(),
      floatingActionButton: FloatingActionButton(
        onPressed: (() {
          showAddTextDialog();
        }),
        child: const Icon(Icons.add),
      ),
    );
  }
}
