import axios from "axios";

async function getData(userId) {
  try {
    //Parallel requests and destructuring
    const [user, posts] = await Promise.all([
      axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`),
      axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`),
    ]);

    //Assigning data to variables
    const userData = user.data;
    const postsData = posts.data;

    //Combining data
    const result = {
      ...userData,
      posts: postsData,
    };

    //Returning data
    return result;
  } catch (error) {
    //Handling errors
    console.error(error);
  }
}

export default getData;
