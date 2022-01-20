import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Card from './components/Card/card'

import Head from './components/Head/head'

import {
  BgContainer,
  ProjectsContainer,
  SelectContainer,
  CustomSelect,
  CustomOption,
  LoaderContainer,
  FailureContainer,
  FailureCard,
  FailureImage,
  FailureHeading,
  FailureText,
  FailureButton,
} from './styledComponents'

import './App.css'

// This is the list (static data) used in the application. You can move it to any component if needed.

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

// Replace your code here
class App extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    projectsList: [],
    activeCategory: categoriesList[0].id,
  }

  componentDidMount() {
    this.getApiUrl()
  }

  getApiUrl = async () => {
    const {activeCategory} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const apiUrl = `https://apis.ccbp.in/ps/projects?category=${activeCategory}`

    const response = await fetch(apiUrl)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.projects.map(each => ({
        id: each.id,
        imageUrl: each.image_url,
        name: each.name,
      }))
      this.setState({
        projectsList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeActiveCategory = event => {
    this.setState({activeCategory: event.target.value}, () => this.getApiUrl())
  }

  renderSuccessView = () => {
    const {projectsList, activeCategory} = this.state
    return (
      <>
        <Head />
        <BgContainer>
          <SelectContainer>
            <CustomSelect
              value={activeCategory}
              onChange={this.onChangeActiveCategory}
            >
              {categoriesList.map(each => (
                <CustomOption key={each.id} value={each.id}>
                  {each.displayText}
                </CustomOption>
              ))}
            </CustomSelect>
          </SelectContainer>
          <ProjectsContainer>
            {projectsList.map(each => (
              <Card key={each.id} projectDetails={each} />
            ))}
          </ProjectsContainer>
        </BgContainer>
      </>
    )
  }

  renderLoaderView = () => (
    <LoaderContainer>
      <Loader type="ThreeDots" color="#328af2" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => {
    const {activeCategory} = this.state
    return (
      <FailureContainer>
        <SelectContainer>
          <CustomSelect
            value={activeCategory}
            onChange={this.onChangeActiveCategory}
          >
            {categoriesList.map(each => (
              <CustomOption key={each.id} value={each.id}>
                {each.displayText}
              </CustomOption>
            ))}
          </CustomSelect>
        </SelectContainer>
        <FailureCard>
          <FailureImage
            src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
            alt="failure view"
          />
          <FailureHeading>ops</FailureHeading>
          <FailureText>something</FailureText>
          <FailureButton onClick={this.getApiUrl()}>Retry</FailureButton>
        </FailureCard>
      </FailureContainer>
    )
  }

  render() {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()

      default:
        return null
    }
  }
}

export default App
