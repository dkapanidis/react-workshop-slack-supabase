interface Message {
  id: number,
  inserted_at: any,
  message: string,
  user_id: number,
  channel_id: number,
  author: {
    id: number,
    username: string,
  },
}

export default Message