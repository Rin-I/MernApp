export type POSTDATA = {
  creator: string
  title: string
  message: string
  tags: string
  selectedFile?: any
  likeCount?: number
}

export type POSTFETCHDATA = {
  _id: string
  title: string
  message: string
  creator: string
  tags: string
  selectedFile: string
  likeCount: number
  createdAt: Date
}
