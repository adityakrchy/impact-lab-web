interface NotificationCardProps {
    date: string
    title: string
    isNew?: boolean
  }
  
  export function NotificationCard({ date, title, isNew }: NotificationCardProps) {
    return (
      <div className="mb-4 border-b border-gray-100 pb-4 last:border-0">
        <p className="text-sm text-gray-500">{date}</p>
        <p className="mt-1 text-gray-800">
          {title}
          {isNew && (
            <span className="ml-2 rounded bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-800">
              NEW
            </span>
          )}
        </p>
      </div>
    )
  }
  
  