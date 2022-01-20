import {
  ProjectCardContainer,
  ProjectImage,
  ProjectName,
} from './styledComponents'

const Card = props => {
  const {projectDetails} = props
  const {imageUrl, name} = projectDetails

  return (
    <ProjectCardContainer>
      <ProjectImage src={imageUrl} alt={name} />
      <ProjectName>{name}</ProjectName>
    </ProjectCardContainer>
  )
}
export default Card
