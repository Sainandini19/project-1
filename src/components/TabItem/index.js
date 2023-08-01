import './index.css'

const TabItem = props => {
  const {tabDetails, updatedTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTabId = () => {
    updatedTabItem(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={onClickTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
