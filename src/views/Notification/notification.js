import {useSelector} from 'react-redux'
import {connect} from 'react-redux'


function Notification(props) {
    // const error = useSelector(state=> state.error)
    console.log("error in notification", props)
    return null
}

function mapStateToProps(state){
    return state.error
}
export default connect(mapStateToProps)(Notification)