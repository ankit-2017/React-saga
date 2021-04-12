import {useSelector} from 'react-redux'
function Dashboard() {
    const props = useSelector(state=>state)
    console.log("props in dashboard", props)
    return (
        <div>Dashboard</div>
    )
}

export default Dashboard