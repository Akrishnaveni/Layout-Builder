import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeContent = () => {
        onToggleShowContent()
      }
      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }
      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="controller-container">
          <div className="responsive-container">
            <h1 className="layout-heading">Layout</h1>
            <div className="checkbox-group-container">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="content"
                  checked={showContent}
                  onChange={onChangeContent}
                />
                <label className="label-text" htmlFor="content">
                  Content
                </label>
              </div>
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="leftNavbar"
                  checked={showLeftNavbar}
                  onChange={onChangeLeftNavbar}
                />
                <label className="label-text" htmlFor="leftNavbar">
                  Left Navbar
                </label>
              </div>
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="RightNavbar"
                  checked={showRightNavbar}
                  onChange={onChangeRightNavbar}
                />
                <label className="label-text" htmlFor="RightNavbar">
                  Right Navbar
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
