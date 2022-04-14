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

export function PrettyDateShort(str: string) {
  try {
    Moment.locale('en');
    var pretty = Moment(str).format('MMM DD, YYYY');
    return pretty
   } catch (error) {
     console.log(error.message);
   }
   return
 }

 
export function DateShort(str: string | Date, format?: string) {
  try {
    Moment.locale('en');
    var pretty = Moment(str).format(format ? format : 'YYYY-DD-DD');
    return pretty
   } catch (error) {
     console.log(error.message);
   }
   return
 }
