import 'package:uuid/uuid.dart';

createId() {
  const uuid = Uuid();
  return uuid.v4();
}

class TaskModel {
  String id = createId();
  String task;
  bool isCompleted;

  TaskModel({required this.task, this.isCompleted = false});

  void toggleIsCompleted() {
    isCompleted = !isCompleted;
  }
}
