//forcefull type assertion : used while loading env in files 

let response: any = "11"

// here if we will do directly response. then we will got get suggestions of string methods so we will have to do forcefull type assertion

// here we need to tell (response as string) then we will get all methods of string in suggestion

let numericLength: number = (response as string).length


//example 2 

type Book = {
    name:string
}

let bookString = '{"name" :"48 laws of power"}'
//suppose this data was inside local storage , and in local storage everything is saved in string format and when we have to pick data from localStorage we will have to do JSON.parse
//now there is no gurantee that this parsed data matches the Book type, so we do that forcefully
let bookObject = JSON.parse(bookString) as Book

//earlier we hadn't have done "as Book" then using "." after bookObject will not suggest anything but now it will suggest Book types
console.log(bookObject.name)

//example 3 : try catch 

try {
    
} catch (error) {
    //without this check we are not sure what is data type of error and error.message will give error in that case we would have to do error:any in argument which is not a good practise
    if (error instanceof Error) {
        console.log(error.message)
    }
    console.log("ERROR" , error)
}

//example 4 : never

type Role = "admin" | "normal"

function redirectBasedOnRole(role: Role): void{
    //void means either we will not return anything or we dont care about what we return 

    if (role === "admin") {
        console.log("redirecting to admin dashboard")
        return
    }
    if (role === "normal") {
        console.log("redirecting to user dashboard");
        return
    }
    //now if we will use role its data type will show as never: which means all cases have been handeled 
    role;
    //but it is useful if in case some developer adds a superadmin role , then we can hover over it and get to know if all cases have been handeled or not
}
