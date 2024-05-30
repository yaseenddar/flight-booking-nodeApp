export default function compareTime(timeString1,timestring2){
    let date1 = new Date(timeString1);
    let date2 = new Date(timestring2);
    return date1.getTime() > date2.getTime();

}