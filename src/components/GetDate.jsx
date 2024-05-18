const getDate = () => {
  const emojis = ["📝", "✍️", "✏️", "🖋️", "🖊️", "✒️", "🖍️", "🖌️","👡","👗","💄","🐶","🐇","😽","👪"]; // Array of emojis
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)]; // Choose a random emoji
  
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const showTime = today.getHours() + ':' + today.getMinutes() ;
  return `${month}.${date} ${showTime}${randomEmoji}`;
}

export default getDate