// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appId, appName, imageUrl} = appDetails
  return (
    <li className="app-item-container">
      <img src={imageUrl} alt={appId} className="app-item" />
      <h1 className="app-name">{appName}</h1>
    </li>
  )
}

export default AppItem
