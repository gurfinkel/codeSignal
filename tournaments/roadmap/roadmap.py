def roadmap(tasks, queries):
    tasksSorted = sorted(tasks, key=lambda task: (task[2], task[0]))
    tasksForQueries = []

    for query in queries:
        tasksToComplete = []
        for task in tasksSorted:
            if task[1] <= query[1] <= task[2] and query[0] in task[3:]:
                tasksToComplete.append(task[0])
        tasksForQueries.append(tasksToComplete)

    return tasksForQueries
