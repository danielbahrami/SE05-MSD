class TaskModel {
  String task;
  bool isCompleted;

  TaskModel({required this.task, this.isCompleted = false});

  void toggleIsCompleted() {
    isCompleted = !isCompleted;
  }
}
