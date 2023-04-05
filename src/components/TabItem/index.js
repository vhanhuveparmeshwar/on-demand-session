import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActiveTab} = props
  const {tabId, displayText} = tabDetails

  const activeTabClassName = isActiveTab ? 'active-tab-btn' : ''

  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
