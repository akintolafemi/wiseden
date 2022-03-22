import Moment from 'moment';

export default function PrettyDate(str: string) {
 try {
 	Moment.locale('en');
 	var pretty = Moment(str).format('ddd MMM DD YYYY hh:mm:ss');
 	return pretty
  } catch (error) {
    console.log(error.message);
  }
  return
}
