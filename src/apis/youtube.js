import axios from 'axios';
const KEY ='AIzaSyBIUb11DIpUM14qrkqfU2tCoFl2wdO1F-o';
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
      part: 'snippet',
      maxResults:5,
      key:KEY
   }
});