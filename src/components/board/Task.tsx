import React from 'react'
import { Task } from '../../state'
import './Task.scss'

interface TaskProps {
  task: Task
  className?: string
  rootRef: React.Ref<HTMLDivElement>
}

class TaskComponent extends React.Component<TaskProps> {
  public render() {
    const { task, className, rootRef } = this.props
    return (
      <div className={'task' + (className ? ' ' + className : '')} ref={rootRef}>
        <div className="task-content">
          <div className="description">{task.description}</div>
          <div className={'avatar ' + task.userLabel} />
          <div className="labels">
            {task.labels.map(l => (
              <div key={l.name} className={'label ' + l.color}>
                {l.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default TaskComponent
