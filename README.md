# Schedule K1 UI Prototype  
Created by [Robert E Smith](resmith@resmith.me)  
for EPE

# Install
1. copy/clone the code to a directory  
* Cd into the directory
* Type 'npm install'
* Type 'npm start'


# Assumptions
* That the URLs should be /step2 and /step3
* That each url step is mapped to a 'page' of the scheduleK1. For example, /step2 should present page2 of the scheduleK1. If this is not true then the correct terminology should be put in place in the code to align the code with the domain
* That Material Design UI and Flexbox are acceptable libraries to use


## URL -> Components
```bash
URL             ->    Component
/               ->  App -> ScheduleK1s2
/step2          ->  App -> ScheduleK1s2
/step3          ->  App -> ScheduleK1s3
```

## Application Structure
```bash
App                 
├── ScheduleK1s2     
  ├── RenderField     
        ├──  RenderNumField     
        ├──  RenderTextField
        ├──  RenderRButtonField
        ...

├── ScheduleK1s3          
  ├── RenderField     
        ├──  RenderNumField     
        ├──  RenderTextField
        ├──  RenderRButtonField
      ...
```

# Design Notes
* All fields are defined in 'src/modules/constants.js'
* The pages filter and map the fields for the specific page part
* e.g. inputFields.filter(inputField => inputField.part === '1').map(inputField => (<RenderField key={inputField.name} inputField={inputField}/>))}
* RenderField calls the appropriate render for the field type based on inputField.fieldType
* e.g. RenderNumField, RenderTextField
* This makes it very easy to change formatting, switch styles, etc system wide
* I mixed CSS styling with react styling in a component to show I can do both
```bash
render() { const styles = {
    block: { maxWidth: 250 }
  } };

     <RadioButtonGroup
      name={this.props.inputField.name}
      style={styles.block}
    >
```

# Notes
* Material UI chosen over UI for consistency with mobile code
* Backend Data is a hardcoded API for prototyping
*

# Conflicts
* Did the partner contribute property with a built-in gain or loss? shows two checkboxes, but checkboxes are the wrong type for yes/no answer. Either use select or option.

# Packages Used
This project was created with:
[React create-react app](https://github.com/facebookincubator/create-react-app).

Packages used include:  
[Material-Ui](https://v0.material-ui.com/#/)  
[React flexbox grid](https://github.com/roylee0704/react-flexbox-grid)  
[React Router DOM](react-router-dom)  
[ReactTooltip]()  
[serializeForm]()  
[Google Roboto Font](https://fonts.googleapis.com/css?family=Roboto)  


# ToDo
* Get the breakpoints for the Responsive Layout. Rightnow it's just XS and MD
* Work on spacing and styling for multiple checkboxes on one line
* Set colors for the theme via MUITheme
* <br/> was used to add line spacing as a quick fix. Need to go back and use CSS
* Convert the strings into constants for the fieldTypes e.g. cbox
* For RenderRButtonField, need to set a better value in the constants
* Move state management to Redux
* Move the RenderField Components to a Shared Components Directory
# epeScheduleK1Test
