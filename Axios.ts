//practical using web request

//.d.ts files are called declaration files , hints and errors come from this file

//correct way to use axios

import axios from "axios"; // actual runtime value
import  type{ AxiosResponse} from "axios" // it is type only , removed during compilation 
interface Todo {
  //making an interface for api response
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

//its a web req so it might take time therefore it will be async
const fetchData = async () => {
    try {
        //for axios response we will use its builtin datatype
        //generic is used to tell what is the data type of axios reponse
        const response: AxiosResponse<Todo> = await axios.get(
          "https://jsonplaceholder.typicode.com/todos/2"
        );
        console.log("Todo" , response.data)// here "." will give us suggestion for response , reponse.data will give all the values in the api , if we want any perticular we will have to do : response.data.completed or response.data.title
    } catch (error:any) {
        if (axios.isAxiosError(error)) {
            console.log("axios error", error.message)
            if (error.response) {
                console.log(error.response.status)
            }
        }
    }
}


// interface AxiosResponse<T> {
//   data: T;
//   status: number;
//   headers: any;
//   config: any;
// } 

//actually AxiosResponse is in this format so in order to get the data format mentioned in Todo interface we do AxiosResponse<Todo> , here we see response. will give us suggestion like data , status , headers , config

//generics is used here because Axios doesn't know what our API returns