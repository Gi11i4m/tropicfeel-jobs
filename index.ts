import axios from 'axios';
import { JSDOM } from 'jsdom';

const extractJobsHtml = (html: string) => {
  const dom = new JSDOM(html);
  return dom.window.document.getElementById('section-jobs')?.innerHTML;
};

axios
  .get('https://careers.tropicfeel.com/')
  .then(({ data }) => extractJobsHtml(data))
  .then(console.log)
  .catch(console.error);
