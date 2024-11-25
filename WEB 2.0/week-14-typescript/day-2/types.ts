type Employee = {
  name: string,
  startDate: Date
}

type Manager = {
  name: string,
  department: string
}

type TeamLead = Manager | Employee

const teamLead : TeamLead = {
  name:'gg',
  startDate:new Date('12-01-2002')}

console.log(teamLead)