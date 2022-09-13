export function TimeToSeconds(time: string){
  const [hour, minute, second] = time.split(':');
  return (
    Number(hour) * 3600 +
    Number(minute) * 60 +
    Number(second)
  )
}