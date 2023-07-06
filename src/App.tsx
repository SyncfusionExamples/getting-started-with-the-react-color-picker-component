import { ColorPickerComponent,ColorPickerEventArgs } from '@syncfusion/ej2-react-inputs';
import './App.css';

function App() {
  let colorpickerPresets: { [key: string]: string[] } = {
    'custom': ['#ef9a9a', '#e57373', '#ef5350',
                    '#f44336', '#f48fb1', '#f06292',
                    '#ec407a', '#e91e63', '#ce93d8',
                    '#ba68c8', '#ab47bc', '#9c27b0',
                    '#b39ddb', '#9575cd', '#7e57c2', '#673AB7']
    
};

function onColorChange(args: ColorPickerEventArgs): void {
  (document.getElementById('preview') as HTMLElement).style.backgroundColor = args.currentValue.hex;
}
  return (
    <div id='wrapper'>
      <h4>Choose a color</h4>
      <div id='preview'style={{backgroundColor:'#b39ddb'}}></div>
      <ColorPickerComponent value="035a" mode='Palette' inline={true}
      modeSwitcher={false} showButtons={false} noColor={true} 
      presetColors={colorpickerPresets} columns={4} change ={onColorChange}
      // Add disabled={true} in below code to diable the Color Picker
      // Add cssClass='e-hide-value' to hide input area from picker mode
      >
      </ColorPickerComponent>

    </div>

  ); 
}

export default App;
