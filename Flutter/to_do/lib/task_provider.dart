import 'package:flutter/material.dart';
import 'dart:collection';
import 'task_model.dart';

class TaskProvider with ChangeNotifier {
  List<TaskModel> tasks = [];

  UnmodifiableListView<TaskModel> get allTasks => UnmodifiableListView(tasks);

  void addTask(String task) {
    tasks.add(TaskModel(task: task, isCompleted: false));
    notifyListeners();
  }

  void completeTask(TaskModel task) {
    final taskIndex = tasks.indexOf(task);
    tasks[taskIndex].toggleIsCompleted();
    notifyListeners();
  }

  void deleteTask(TaskModel task) {
    tasks.remove(task);
    notifyListeners();
  }
}
