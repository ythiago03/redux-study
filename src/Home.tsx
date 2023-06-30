import { useDispatch, useSelector } from 'react-redux'



const Home = () => {
  const username = useSelector((state: any) => state.user.value.username)

  return (
    <div>
        <h1>Hello</h1>
        {username != '' && <span>Welcome {username}!</span>}
    </div>
  )
}

export default Home