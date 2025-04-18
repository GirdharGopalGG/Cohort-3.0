import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('user',(c)=>{
  return c.json({
    username:'gg'
  })
})

app.post('api/v1/signup',async (c)=>{
  const body = await c.req.json()
  // const header = c.req.header
  return c.json({
    body
  })
})

export default app
