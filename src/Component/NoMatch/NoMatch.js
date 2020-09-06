import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import nomatchImage from './404-error-with-character-error-design-template-vector-20568716.jpg';

const useStyles = makeStyles(theme => ({
  marginAutoContainer: { 
    marginLeft: 850,    
  },
  imageMargin: { 
    marginLeft: 350,    
  }
  
}))
const Centering4Ways = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <div >
        <div className={classes.marginAutoContainer}>
            <Button 
                variant="contained" color="primary" href={`/home`}>
                back to Home
            </Button>                    
        </div>
        <div className={classes.imageMargin}>
        <img src={nomatchImage} alt=""/>
        </div>
        
      </div>
    </React.Fragment>
  )
}
export default Centering4Ways