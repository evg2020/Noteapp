import axios from 'axios';

const url = 'http://localhost:5000/api/posts/';

class TaskService {
 // get posts
 static async getTasks() {
   try {
       const res = await axios.get(url);
       const data = res.data;
       data.map((task) => ({
           ...task,
           createdAt: new Date(task.createdAt),
       }));
   } catch (err) {
       return err;
   }
}
 //Create post
 static insertTask(data) {
   return axios.task(url, {
     task: data.task,
     comment: data.comment,
   });
 }

 //delete post
 static deleteTask(id) {
   return axios.delete(`${url}${id}`);
 }
}

export default TaskService;
