import axios from 'axios';

const get = async():Promise<string[]> => {
  try{
    const response = await axios.get('/api/boilerplate/1');
    return response.data;
  }catch(e){
    alert(e);
  }
} 

export default {
  get
}