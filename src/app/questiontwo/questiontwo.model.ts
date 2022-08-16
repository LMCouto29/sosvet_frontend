export interface Question {
    Id?: string    //alterar inicial
    Description: string
    IsPreScreening: boolean
    IsLast : boolean
    Order:number
    Group:string
    NextQuestion:number
    Message:string
    Answers:boolean
}

