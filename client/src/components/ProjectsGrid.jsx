const ProjectsGrid = ({ children }) => {
  return (
    <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
      {children}
    </div>
  )
}

export default ProjectsGrid;